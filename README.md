<div align="center">

# 🗑️ ChatGPT Bulk Chat Delete

### ⚡ Delete all your ChatGPT conversations with one click!

<img src="https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Chrome Extension">
<img src="https://img.shields.io/badge/Manifest-V3-FF6B35?style=for-the-badge" alt="Manifest V3">
<img src="https://img.shields.io/badge/Version-1.0.0-00D9FF?style=for-the-badge" alt="Version">
<img src="https://img.shields.io/badge/WXT-Framework-10B981?style=for-the-badge" alt="WXT Framework">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">

---

**🎯 Clean up your ChatGPT history instantly. Bulk delete all conversations with a single click.**

[📥 Installation](#-installation) • [🎮 Usage](#-usage) • [✨ Features](#-features) • [🔧 Technical](#-technical-details)

</div>

---

## 📥 Installation

> **⚡ Easy Installation from Chrome Web Store**

### 🎯 Method 1: Chrome Web Store (Recommended)

[![Install from Chrome Web Store](https://img.shields.io/badge/Install%20from-Chrome%20Web%20Store-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/YOUR_EXTENSION_ID_HERE)

1. **🌐 Visit Chrome Web Store** → Click the button above or visit the [extension page](https://chromewebstore.google.com/detail/YOUR_EXTENSION_ID_HERE)
2. **📥 Add to Chrome** → Click "Add to Chrome" button
3. **✅ Confirm Installation** → Click "Add extension" in the popup
4. **🎉 Ready to Use!** → Extension appears in your Chrome toolbar

### 🔧 Method 2: Manual Installation (For Developers)

1. **📥 Download Source** → Download or clone this repository

   ```bash
   git clone https://github.com/rohityadav-sas/chatgpt-bulk-chat-delete.git
   cd chatgpt-bulk-chat-delete
   ```

2. **📦 Build Extension** → Install dependencies and build

   ```bash
   pnpm install
   pnpm build
   ```

3. **🌐 Open Chrome** → Navigate to `chrome://extensions/`
4. **🔧 Enable Developer Mode** → Toggle switch in top-right corner
5. **📁 Load Extension** → Click "Load unpacked" → Select the `.output/chrome-mv3` folder
6. **✅ Done!** → Extension is now active on ChatGPT

### 🛡️ Browser Compatibility

| Browser                                                                                             | Support         | Version |
| --------------------------------------------------------------------------------------------------- | --------------- | ------- |
| ![Chrome](https://img.shields.io/badge/-Chrome-4285F4?style=flat&logo=googlechrome&logoColor=white) | ✅ Full Support | 88+     |
| ![Edge](https://img.shields.io/badge/-Edge-0078D4?style=flat&logo=microsoftedge&logoColor=white)    | ✅ Full Support | 88+     |

---

## 🎮 Usage

### 🚀 Quick Start Guide

```
🌐 Visit chatgpt.com

🗑️ The new delete button will be on right side of chats section
```

---

## 🔧 Technical Details

### 📁 Project Architecture

```
bulk-chat-delete/
├── package.json               # Project dependencies & scripts
├── tsconfig.json              # TypeScript configuration
├── wxt.config.ts              # WXT framework configuration
├── pnpm-lock.yaml             # Dependency lock file
├── README.md                  # Documentation
├── public/
│   └── icon/                  # Extension icons
│       ├── 16.png             # 16x16
│       ├── 32.png             # 32x32
│       ├── 48.png             # 48x48
│       └── 128.png            # 128x128
├── src/
│   └── entrypoints/
│       └── content.ts         # Main content script
├── .wxt/                      # WXT framework files
└── dist/                      # Built extension output
```

---

### 🛠️ Technology Stack

| Component           | Technology                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**       | ![WXT](https://img.shields.io/badge/WXT-0.20.11-10B981?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMSA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDMgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K&logoColor=white) |
| **Language**        | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)                                                                                                                                                                                                                                                                                       |
| **Build Tool**      | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) + ![esbuild](https://img.shields.io/badge/esbuild-FFCF00?style=flat&logo=esbuild&logoColor=black)                                                                                                                                                                                                       |
| **Package Manager** | ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat&logo=pnpm&logoColor=white)                                                                                                                                                                                                                                                                                                         |

**Key Features:**

- ✅ Modern TypeScript development
- ✅ Hot reload in development
- ✅ Optimized production builds
- ✅ Zero external dependencies

---

### 🛡️ Security & Permissions

| Permission Type          | Details                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| **Required Permissions** | `scripting` - Inject content script dynamically<br>`activeTab` - Access current ChatGPT page |
| **Host Permissions**     | `https://chatgpt.com/*` - ChatGPT domain access only                                         |
| **Data Collection**      | None - Complete privacy protection                                                           |
| **External Requests**    | None - Everything processed locally                                                          |

**Security Features:**

- ✅ Manifest V3 compliance
- ✅ Minimal permission scope
- ✅ No external network requests
- ✅ No data storage or collection

---

## 📄 License & Contributing

**📜 Licensed under [MIT License](./LICENSE) - Free for personal and commercial use**

---

<table>
<tr>
<td align="center">

### 🤝 **Contributing**

```
🍴 Fork the repository
🌿 Create feature branch
💻 Make your changes
✅ Test thoroughly
🚀 Submit pull request
```

[**📚 Contributing Guide**](https://github.com/rohityadav-sas/chatgpt-bulk-chat-delete/blob/main/README.md#-contributing)

</td>
<td align="center">

### ⭐ **Show Your Support**

```
🌟 Star this repository
🐛 Report bugs & issues
💡 Suggest new features
📢 Share with friends
💝 Sponsor development
```

[**⭐ Star on GitHub**](https://github.com/rohityadav-sas/chatgpt-bulk-chat-delete)

</td>
</tr>
</table>

---

**Made with ❤️ for productivity and privacy**

![Footer](https://img.shields.io/badge/Built%20with-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Footer](https://img.shields.io/badge/Powered%20by-WXT%20Framework-10B981?style=for-the-badge)
![Footer](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)

</div>
