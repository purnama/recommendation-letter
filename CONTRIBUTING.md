# Contributing to Employment Reference Letter Generator

First off, thank you for considering contributing to this project! 🎉

This document provides guidelines and instructions for contributing. Following these guidelines helps maintain project quality and makes the contribution process smooth for everyone involved.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Translation Contributions](#translation-contributions)

## 📜 Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## 🤔 How Can I Contribute?

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug Reports** - Help us identify and fix issues
- ✨ **Feature Requests** - Suggest new features or improvements
- 📝 **Documentation** - Improve or add documentation
- 🌍 **Translations** - Add or improve language translations
- 💻 **Code Contributions** - Fix bugs or implement features
- 🎨 **Design Improvements** - Enhance UI/UX
- 🧪 **Testing** - Add tests or report compatibility issues

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git installed on your machine
- A GitHub account
- A text editor or IDE (VS Code, Sublime Text, etc.)

### Setting Up Development Environment

1. **Fork the repository**
   - Click the "Fork" button at the top right of the repository page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/recommendation-letter.git
   cd recommendation-letter
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/purnama/recommendation-letter.git
   ```

4. **Open in browser**
   - Simply open `index.html` in your browser
   - No build process or dependencies to install!

5. **Verify everything works**
   - Test form inputs
   - Try different languages
   - Test print/PDF functionality
   - Check localStorage persistence

## 🔄 Development Workflow

### Before Starting Work

1. **Check existing issues** - See if someone is already working on it
2. **Create/comment on issue** - Let others know you're working on it
3. **Update your fork**
   ```bash
   git checkout main
   git fetch upstream
   git merge upstream/main
   ```

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**
   - Edit the necessary files
   - Test thoroughly in multiple browsers
   - Ensure responsive design works

3. **Test your changes**
   - Test all functionality
   - Verify on different screen sizes
   - Check all three languages
   - Test print functionality
   - Verify localStorage works

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing new feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Fill in the PR template
   - Link related issues

## 🎨 Coding Standards

### HTML

- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Use descriptive `id` and `class` names
- Include appropriate ARIA labels for accessibility
- Keep structure clean and organized

```html
<!-- Good -->
<section class="intro-section mb-5">
  <div class="card shadow-sm">
    <h2 id="intro-title">About This Tool</h2>
  </div>
</section>

<!-- Avoid -->
<div class="s1 mb5">
  <div class="c ss">
    <h2 id="t">About This Tool</h2>
  </div>
</div>
```

### CSS

- Use Bootstrap classes where possible
- Add custom styles in `css/styles.css`
- Keep specificity low
- Use meaningful class names
- Include comments for complex styles
- Maintain print media queries

```css
/* Good */
.letter-preview {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
}

/* Avoid inline styles or !important unless necessary */
```

### JavaScript

- Use ES6+ features
- Follow consistent naming conventions:
  - camelCase for variables and functions
  - PascalCase for classes
  - UPPERCASE for constants
- Add comments for complex logic
- Keep functions small and focused
- Handle errors gracefully

```javascript
// Good
function generateLetter() {
  try {
    const formData = getFormData();
    const letter = createLetterContent(formData);
    displayLetter(letter);
  } catch (error) {
    console.error('Error generating letter:', error);
    showErrorMessage();
  }
}

// Avoid
function doStuff() {
  // 200 lines of code...
}
```

### General Guidelines

- **DRY** (Don't Repeat Yourself) - Reuse code where possible
- **KISS** (Keep It Simple, Stupid) - Prefer simple solutions
- **Accessibility** - Ensure features work for all users
- **Performance** - Keep the app fast and lightweight
- **Mobile-First** - Ensure responsive design works well
- **Comments** - Explain "why", not "what"

## 📝 Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `i18n` - Translation updates
- `perf` - Performance improvements

### Examples

```bash
feat: add dark mode toggle

fix: correct PDF export formatting on Safari

docs: update installation instructions

i18n: add French translation

refactor: simplify letter generation logic

style: format code according to style guide
```

### Commit Best Practices

- Use imperative mood ("add" not "added")
- Keep subject line under 50 characters
- Capitalize the subject line
- Don't end subject line with a period
- Add body if needed (wrap at 72 characters)
- Reference issues in footer: `Fixes #123` or `Closes #456`

## 🔀 Pull Request Process

### Before Submitting

- [ ] Test your changes thoroughly
- [ ] Update documentation if needed
- [ ] Add/update translations if applicable
- [ ] Ensure code follows style guidelines
- [ ] Verify responsive design works
- [ ] Check browser compatibility
- [ ] Update CHANGELOG.md if applicable

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Translation
- [ ] Refactoring

## Testing
- Tested on: Chrome 120, Firefox 121, Safari 17
- Screen sizes: Mobile, Tablet, Desktop
- Languages tested: EN, ID, DE

## Screenshots (if applicable)
[Add screenshots]

## Related Issues
Fixes #123
Related to #456

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
- [ ] Tested across browsers
```

### Review Process

1. **Automated Checks** - GitHub Actions will run (if configured)
2. **Code Review** - Maintainers will review your code
3. **Feedback** - Address any requested changes
4. **Approval** - Once approved, PR will be merged
5. **Thank You!** - You're now a contributor! 🎉

### Addressing Feedback

- Respond to all comments
- Make requested changes in new commits
- Push updates to the same branch
- Mark conversations as resolved when fixed

## 🐛 Reporting Bugs

### Before Reporting

1. **Check existing issues** - The bug may already be reported
2. **Try latest version** - Clear cache and try again
3. **Reproduce** - Ensure the bug is consistent
4. **Gather information** - Browser, OS, steps to reproduce

### Bug Report Template

Use the bug report template when creating an issue:

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g., Chrome 120]
- OS: [e.g., macOS 14.0]
- Device: [e.g., Desktop, iPhone 13]

**Additional context**
Any other relevant information.
```

## 💡 Suggesting Features

### Before Suggesting

1. **Check existing requests** - Your idea may already exist
2. **Consider scope** - Is it aligned with project goals?
3. **Think through implications** - How would it work?

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Alternative solutions or features you've considered.

**Additional context**
Mockups, examples, or any other context.

**Would you like to implement this?**
Let us know if you're interested in contributing the code.
```

## 🌍 Translation Contributions

We welcome translations to new languages!

### Adding a New Language

1. **Create translation file**
   ```bash
   cp i18n/en.json i18n/fr.json
   # Replace 'fr' with your language code (ISO 639-1)
   ```

2. **Translate all strings**
   - Translate all values in the JSON file
   - Keep keys unchanged
   - Maintain placeholders like `{{variable}}`
   - Preserve HTML tags where present

3. **Add language option**
   Edit `index.html`:
   ```html
   <option value="fr">Français</option>
   ```

4. **Test thoroughly**
   - Switch to new language
   - Check all sections
   - Verify letter generation
   - Test print output

5. **Update README**
   - Add language to features list
   - Update language count

### Translation Guidelines

- **Accuracy** - Translate meaning, not just words
- **Consistency** - Use consistent terminology
- **Formality** - Match the formal tone of reference letters
- **Length** - Try to keep similar length to avoid layout issues
- **Context** - Understand the Arbeitszeugnis context
- **Native speaker** - Ideally, be a native speaker

### Professional Terms

For the German Arbeitszeugnis system, maintain professional terminology:
- Work quality terms should be precise
- Performance ratings must follow standard phrases
- Legal language should be accurate

## 📞 Getting Help

### Where to Ask Questions

- **GitHub Discussions** - General questions and discussions
- **GitHub Issues** - Bug reports and feature requests
- **Pull Request Comments** - Questions about specific changes

### Response Times

This is a community project. Please be patient:
- Issues: Usually reviewed within 1 week
- Pull Requests: Usually reviewed within 2 weeks
- Questions: Community members may respond faster

## 🏆 Recognition

Contributors will be:
- Listed in project documentation
- Thanked in release notes
- Given credit for their contributions

## 📚 Additional Resources

- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [Open Source Guides](https://opensource.guide/)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Employment Reference Letter Generator! 🚀
