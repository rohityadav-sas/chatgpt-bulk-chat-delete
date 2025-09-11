export default defineContentScript({
	matches: ["https://chatgpt.com/*"],
	async main() {
		// -----------------------------
		// Utility function: wait for an element to appear
		// -----------------------------
		async function waitForElement(
			selector: string,
			predicate?: (el: HTMLElement) => boolean
		): Promise<HTMLElement> {
			// Immediate check
			const el = Array.from(
				document.querySelectorAll<HTMLElement>(selector)
			).find(predicate ?? (() => true))
			if (el) return el

			// Observe DOM changes
			return new Promise((resolve) => {
				const observer = new MutationObserver(() => {
					const el = Array.from(
						document.querySelectorAll<HTMLElement>(selector)
					).find(predicate ?? (() => true))
					if (el) {
						observer.disconnect()
						resolve(el)
					}
				})
				observer.observe(document.body, { childList: true, subtree: true })
			})
		}

		// -----------------------------
		// Show loading toast
		// -----------------------------
		function showToast(
			message: string,
			type: "success" | "error" | "loading" = "loading"
		) {
			const existingToast = document.querySelector("#bulk-delete-toast")
			if (existingToast) {
				existingToast.remove()
			}

			const toast = document.createElement("div")
			toast.id = "bulk-delete-toast"

			const icons = {
				loading: "⏳",
				success: "✅",
				error: "❌",
			}

			const colors = {
				loading: "#3b82f6",
				success: "#10b981",
				error: "#ef4444",
			}

			toast.style.cssText = `
				position: fixed;
				top: 16px;
				right: 16px;
				background: white;
				border: 1px solid #e5e7eb;
				border-left: 3px solid ${colors[type]};
				border-radius: 8px;
				padding: 10px 14px;
				box-shadow: 0 4px 8px -2px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
				z-index: 10001;
				display: flex;
				align-items: center;
				gap: 8px;
				max-width: 300px;
				animation: slideInRight 0.3s ease-out;
				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
			`

			toast.innerHTML = `
				<span style="font-size: 14px;">${icons[type]}</span>
				<span style="color: #374151; font-weight: 500; font-size: 14px; white-space: nowrap;">${message}</span>
			`

			// Add slide animation
			const toastStyle = document.createElement("style")
			toastStyle.textContent = `
				@keyframes slideInRight {
					from { transform: translateX(100%); opacity: 0; }
					to { transform: translateX(0); opacity: 1; }
				}
			`
			document.head.appendChild(toastStyle)

			document.body.appendChild(toast)

			// Auto remove after 3 seconds for non-loading toasts
			if (type !== "loading") {
				setTimeout(() => {
					if (toast.parentNode) {
						toast.style.animation = "slideInRight 0.3s ease-out reverse"
						setTimeout(() => {
							toast.remove()
							toastStyle.remove()
						}, 300)
					}
				}, 3000)
			}

			return toast
		}

		// -----------------------------
		// Handle Delete All click with improved UX
		// -----------------------------
		async function handleDeleteClick() {
			try {
				// Show loading toast
				const loadingToast = showToast(
					"Deleting all conversations...",
					"loading"
				)

				// Navigate to Data Controls
				window.location.hash = "settings/DataControls"

				// Wait for the Delete all button
				const deleteAllButton = await waitForElement(
					"button",
					(btn) => btn.innerText.trim() === "Delete all"
				)
				deleteAllButton.click()

				// Wait for Confirm deletion button
				const confirmButton = await waitForElement(
					'button[data-testid="confirm-delete-all-chats-button"]'
				)
				confirmButton.click()

				// Select the button by its data-testid
				const closeButton = document.querySelector(
					'button[data-testid="close-button"]'
				) as HTMLButtonElement

				closeButton?.click()

				const ctrlShiftO = new KeyboardEvent("keydown", {
					key: "o",
					code: "KeyO",
					ctrlKey: true,
					shiftKey: true,
					bubbles: true,
				})

				document.dispatchEvent(ctrlShiftO)

				// Remove loading toast and show success
				loadingToast.remove()
				showToast("All conversations deleted successfully!", "success")

				// Navigate back to chat
				setTimeout(() => {
					window.location.hash = ""
				}, 1500)
			} catch (err) {
				console.error("Error deleting all chats:", err)

				// Remove loading toast and show error
				const loadingToast = document.querySelector("#bulk-delete-toast")
				if (loadingToast) loadingToast.remove()

				showToast("Failed to delete conversations. Please try again.", "error")
			}
		}

		// -----------------------------
		// Create Enhanced Delete Button
		// -----------------------------
		function createDeleteButton(): HTMLElement {
			const container = document.createElement("div")
			container.id = "bulk-delete-container"
			container.style.cssText = `
				position: relative;
				display: inline-flex;
				align-items: center;
			`

			const button = document.createElement("button")
			button.id = "persistent-delete-button"
			button.innerHTML = `
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10 11V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M14 11V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			`

			button.style.cssText = `
				display: inline-flex;
				align-items: center;
				justify-content: center;
				padding: 6px;
				background: #f3f4f6;
				color: #6b7280;
				border: 1px solid #e5e7eb;
				border-radius: 6px;
				font-size: 14px;
				font-weight: 500;
				cursor: pointer;
				transition: all 0.2s ease;
				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
				box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
				margin-left: 12px;
			`

			// Add hover effects
			button.addEventListener("mouseenter", () => {
				button.style.background = "#fef2f2"
				button.style.color = "#ef4444"
				button.style.borderColor = "#fecaca"
				button.style.transform = "translateY(-1px)"
				button.style.boxShadow = "0 2px 8px rgba(239, 68, 68, 0.15)"
			})

			button.addEventListener("mouseleave", () => {
				button.style.background = "#f3f4f6"
				button.style.color = "#6b7280"
				button.style.borderColor = "#e5e7eb"
				button.style.transform = "translateY(0)"
				button.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.05)"
			})

			button.addEventListener("click", handleDeleteClick)
			container.appendChild(button)

			return container
		}

		// -----------------------------
		// Attach Enhanced Delete Button to the UI
		// -----------------------------
		async function attachDeleteButton() {
			const historyElement = await waitForElement("#history")
			const header = historyElement.querySelector("h2") as HTMLElement
			if (!header) return

			// Make header flex to accommodate button
			header.style.cssText = `
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
			`

			// Only attach once
			if (!document.querySelector("#bulk-delete-container")) {
				const deleteButtonContainer = createDeleteButton()
				header.appendChild(deleteButtonContainer)
			}
		}

		// -----------------------------
		// Observe #history for changes to re-attach button if removed
		// -----------------------------
		const historyElement = await waitForElement("#history")
		const observer = new MutationObserver(attachDeleteButton)
		observer.observe(historyElement, { childList: true, subtree: true })

		// Initial attach
		attachDeleteButton()
	},
})
