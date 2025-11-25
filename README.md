# Employment Reference Letter Generator

A pure HTML/CSS/JavaScript web application for generating professional employment reference letters based on the German Arbeitszeugnis system.

## Features

- 🌍 Bilingual support (English & Indonesian)
- 📝 German Arbeitszeugnis coded language system
- 💾 Auto-save with localStorage
- 🖨️ Print and PDF export capabilities
- 📱 Responsive design with Bootstrap 5
- 🚀 No backend required - pure client-side
- 🌐 GitHub Pages ready

## Project Structure

```
recommendation-letter/
├── index.html          # Main application file
├── css/
│   └── styles.css     # Custom styles
├── js/
│   └── app.js         # Application logic
├── i18n/
│   ├── en.json        # English translations
│   └── id.json        # Indonesian translations
└── README.md          # This file
```

## How to Use

1. Open `index.html` in a web browser
2. Select your preferred language (English/Indonesian)
3. Fill in the employee and company information
4. Select performance ratings for each category
5. Preview the generated letter
6. Print or download as PDF

## Understanding the Rating System

The German Arbeitszeugnis uses coded language where seemingly positive statements have hidden meanings:

- **Very Good (1)** - Outstanding performance, exceeds expectations
- **Good (2)** - Strong performance, meets all expectations  
- **Satisfactory (3)** - Acceptable performance, meets basic requirements
- **Adequate (4)** - Below average performance, minimal requirements met
- **Poor (5)** - Unsatisfactory performance, significant issues

## Deployment

### GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings
3. Navigate to Pages section
4. Select branch (main/master) and root directory
5. Save and wait for deployment
6. Access at: `https://yourusername.github.io/repository-name`

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3.0
- localStorage API for data persistence

## License

MIT License - feel free to use and modify as needed.
