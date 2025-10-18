# Copilot Instructions for XNOM Technology Website

This document provides guidance for GitHub Copilot when working with the XNOM Technology website project.

## Project Overview

This is a static website for XNOM Technology, built with:
- HTML5/CSS3 base template (Aerial by HTML5 UP)
- SASS for styling
- Vanilla JavaScript for interactivity
- Multilingual support (English/Swedish)

## Key Files and Directories

```
├── index.html              # Main entry point
├── assets/
│   ├── css/               # Compiled CSS files
│   │   ├── main.css       # Main stylesheet
│   │   ├── noscript.css   # Fallback styles
│   │   └── images/        # Image assets
│   ├── fonts/             # Font files
│   └── sass/              # SASS source files
│       ├── main.scss      # Main SASS entry
│       └── libs/          # SASS utilities
├── autodiscover/          # Server autodiscovery
└── webalizer/             # Usage statistics
```

## Development Guidelines

### 1. Style Changes
- Use SASS files in `assets/sass/` directory
- Compile with:
  ```bash
  sass --no-source-map sass/main.scss assets/css/main.css --style=compressed
  ```
- Follow existing SASS structure and variables

### 2. JavaScript Guidelines
- Keep scripts minimal and vanilla (no framework dependency)
- Place inline for small features or in `assets/js/` for larger ones
- Support both English and Swedish using the language toggle system

### 3. HTML Structure
- Maintain semantic HTML5 structure
- Keep accessibility in mind (ARIA labels, semantic tags)
- Use proper indentation (2 spaces)
- Include both English and Swedish content versions

### 4. Multilingual Support
When adding new text content:
- Add text in both English and Swedish
- Use the language toggle system
- Follow the pattern:
  ```javascript
  element.textContent = isSwedish ? 'Swedish Text' : 'English Text';
  ```

### 5. Images and Assets
- Place new images in `assets/css/images/`
- Optimize images before adding
- Use descriptive filenames
- Include alt text for accessibility

### 6. Testing
- Test in multiple browsers
- Verify responsive behavior
- Check both language versions
- Validate HTML/CSS

## Branch Strategy

- `master`: Production branch, deployed to GitHub Pages
- `new-angular-app`: Development branch for new features
- Create feature branches from `new-angular-app`

## Build and Deploy

1. Compile SASS:
   ```bash
   sass --no-source-map sass/main.scss assets/css/main.css --style=compressed
   ```

2. Test locally:
   ```bash
   # Using Python
   python -m http.server 8000
   ```

3. Deploy:
   - Push to `master` branch
   - GitHub Pages will auto-deploy

## Common Tasks

### Adding New Menu Items
1. Add to HTML structure in `index.html`
2. Include both language versions
3. Update language toggle script

### Updating Styles
1. Modify appropriate SASS file
2. Compile SASS
3. Test across browsers

### Adding New Pages
1. Copy `index.html` structure
2. Update navigation
3. Add language support
4. Link in menu system

## Best Practices

1. Code Style:
   - Use 2 space indentation
   - Keep code modular
   - Comment complex logic

2. Performance:
   - Minimize image sizes
   - Combine CSS/JS when possible
   - Use CSS compression

3. Accessibility:
   - Include ARIA labels
   - Use semantic HTML
   - Maintain color contrast

4. SEO:
   - Include meta descriptions
   - Use semantic headings
   - Add alt text to images

## Troubleshooting

Common issues and solutions:

1. SASS compilation fails:
   - Check SASS syntax
   - Verify file paths
   - Ensure SASS is installed

2. Language toggle not working:
   - Check JavaScript console
   - Verify element IDs
   - Check event listeners

3. Layout breaks:
   - Inspect responsive breakpoints
   - Check CSS specificity
   - Verify HTML structure

---

Last updated: October 19, 2025