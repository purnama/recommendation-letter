# Employment Reference Letter Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/demo-live-brightgreen)](https://purnama.github.io/recommendation-letter)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A pure HTML/CSS/JavaScript web application for generating professional employment reference letters based on the German Arbeitszeugnis system.

> **🚀 [Try it now - Live Demo](https://purnama.github.io/recommendation-letter)** | No installation required, works in your browser!

> **🔒 Privacy First:** All data is processed locally in your browser. No information is sent to any server.

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Understanding the Rating System](#understanding-the-rating-system)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)
- [Security & Privacy](#security--privacy)
- [Roadmap](#roadmap)
- [License](#license)

## ✨ Features

- 🌍 **Multilingual Support** - English, Indonesian & German
- 📝 **German Arbeitszeugnis System** - Professional coded language for performance ratings
- 💾 **Auto-save** - Your work is automatically saved using localStorage
- 🖨️ **Export Options** - Print or download as PDF
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices
- 🚀 **No Backend Required** - Pure client-side application
- 🔒 **Privacy Focused** - All data stays in your browser
- 🌐 **GitHub Pages Ready** - Easy deployment
- ⚡ **Fast & Lightweight** - No build process, no dependencies to install

## 🎯 Demo

Try it live: [https://purnama.github.io/recommendation-letter](https://purnama.github.io/recommendation-letter)

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- That's it! No installation required.

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/purnama/recommendation-letter.git
   cd recommendation-letter
   ```

2. **Open in browser**
   ```bash
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   
   # Windows
   start index.html
   ```

   Or simply drag `index.html` into your browser.

3. **Start using** - Fill in the form and generate your reference letter!

## 📖 Usage

### Basic Workflow

1. **Select Language** - Choose your preferred language from the dropdown (English/Indonesian/German)
2. **Fill Employee Information**
   - Employee name
   - Position/title
   - Employment period
3. **Fill Company Information**
   - Company name
   - Supervisor name and title
4. **Rate Performance** - Select ratings for each category:
   - Work Quality
   - Work Efficiency
   - Conduct & Behavior
   - Overall Performance
5. **Review** - Check the generated letter in the preview section
6. **Export** - Print or save as PDF using your browser's print function

### Data Persistence

Your form data is automatically saved to your browser's localStorage. You can safely close and reopen the page without losing your work.

To clear saved data:
- Use the "Clear Form" button in the application, or
- Clear your browser's localStorage for this site

## 🎓 Understanding the Rating System

The German Arbeitszeugnis uses a unique coded language system where seemingly positive statements have specific hidden meanings about an employee's performance. This ensures legal compliance while allowing honest assessments.

### Rating Scale

| Grade | Description | Meaning |
|-------|-------------|---------|
| **1 - Very Good** | Outstanding performance | Consistently exceeds expectations, exceptional quality |
| **2 - Good** | Strong performance | Reliably meets and often exceeds expectations |
| **3 - Satisfactory** | Acceptable performance | Meets basic requirements, average performance |
| **4 - Adequate** | Below average | Minimal requirements met, room for improvement |
| **5 - Poor** | Unsatisfactory | Significant issues, expectations not met |

### Categories Evaluated

- **Work Quality** - Accuracy, thoroughness, attention to detail
- **Work Efficiency** - Speed, productivity, time management
- **Conduct & Behavior** - Teamwork, professionalism, attitude
- **Overall Performance** - Holistic evaluation

## 📁 Project Structure

```
recommendation-letter/
├── index.html              # Main application file
├── css/
│   └── styles.css         # Custom styles and print styles
├── js/
│   ├── app.js             # Core application logic
│   └── docx-handler.js    # Document generation utilities
├── i18n/
│   ├── en.json            # English translations
│   ├── id.json            # Indonesian translations
│   └── de.json            # German translations
├── .github/
│   ├── ISSUE_TEMPLATE/    # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── CONTRIBUTING.md         # Contribution guidelines
├── CODE_OF_CONDUCT.md     # Community guidelines
├── CHANGELOG.md           # Version history
├── LICENSE                # MIT License
└── README.md              # This file
```

## 🛠️ Development

### Local Development

No build process required! Simply edit the files and refresh your browser.

1. **Edit HTML/CSS/JS** - Make your changes
2. **Refresh browser** - See changes immediately
3. **Test** - Verify functionality across different browsers

### Adding Translations

To add a new language:

1. Create a new JSON file in `i18n/` (e.g., `i18n/fr.json`)
2. Copy the structure from `i18n/en.json`
3. Translate all values
4. Add language option in `index.html`:
   ```html
   <option value="fr">Français</option>
   ```
5. Update language loading in `js/app.js`

### File Organization

- **index.html** - Main structure and layout
- **css/styles.css** - Styling and print media queries
- **js/app.js** - Form handling, translations, letter generation
- **js/docx-handler.js** - Document export functionality
- **i18n/*.json** - Translation strings and letter templates

### Testing

Test across:
- Multiple browsers (Chrome, Firefox, Safari, Edge)
- Different screen sizes (mobile, tablet, desktop)
- Print preview functionality
- localStorage persistence
- All three languages

## 🚀 Deployment

### GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from branch `main` / root directory
   - Save

3. **Access your site**
   - URL: `https://yourusername.github.io/repository-name`
   - Wait 2-3 minutes for initial deployment

### Other Hosting Options

This is a static site and can be hosted anywhere:
- **Netlify** - Drag & drop the folder
- **Vercel** - Connect your GitHub repo
- **AWS S3** - Upload as static website
- **Any web server** - Upload files to public directory

## 🌐 Browser Compatibility

| Browser | Minimum Version | Status |
|---------|----------------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Opera | 76+ | ✅ Fully Supported |

**Requirements:**
- localStorage API support
- ES6+ JavaScript support
- CSS Grid & Flexbox support
- Print to PDF functionality

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit using conventional commits (`git commit -m 'feat: add amazing feature'`)
5. Push to your branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## 🔒 Security & Privacy

### Data Privacy

- **No server communication** - All data processing happens in your browser
- **localStorage only** - Data is stored locally on your device
- **No tracking** - No analytics or tracking scripts
- **No external APIs** - Except CDN for Bootstrap (can be made offline)

### Known Limitations

- localStorage has ~5-10MB limit (sufficient for this use case)
- Data is not encrypted in localStorage
- Clearing browser data will delete saved forms
- No cloud sync between devices

### Reporting Security Issues

Please report security vulnerabilities to the repository maintainer. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 🗺️ Roadmap

### Current Version: 1.0.0

- ✅ Core functionality
- ✅ Three languages (EN, ID, DE)
- ✅ Auto-save feature
- ✅ Print/PDF export
- ✅ Responsive design

### Planned Features

- [ ] Additional language support (French, Spanish, etc.)
- [ ] Dark mode toggle
- [ ] Export to DOCX format
- [ ] Template customization
- [ ] Multiple letter templates
- [ ] Import/Export saved data (JSON)
- [ ] Offline PWA support
- [ ] Email integration (optional)

### Future Considerations

- Unit tests with Jest
- E2E tests with Playwright
- Accessibility audit (WCAG compliance)
- Performance optimization
- SEO improvements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Bootstrap team for the excellent CSS framework
- German Arbeitszeugnis system documentation
- All contributors to this project

## 📞 Support

- **Issues** - Report bugs or request features via [GitHub Issues](https://github.com/purnama/recommendation-letter/issues)
- **Discussions** - Ask questions in [GitHub Discussions](https://github.com/purnama/recommendation-letter/discussions)
- **Documentation** - Check this README and [CONTRIBUTING.md](CONTRIBUTING.md)

---

Made with ❤️ by the community. Star ⭐ this repository if you find it helpful!
