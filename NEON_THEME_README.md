# Neon Theme Documentation

## How the Neon Theme Works

The neon theme transforms your portfolio into a cyberpunk-inspired experience with:

### 🎨 **Visual Features:**
- **Dark-first design** with deep space backgrounds (#0a0a0f)
- **Cyan (#00FFFF) and Magenta (#FF00D9)** accent colors
- **Glowing effects** with CSS box-shadows and text-shadows
- **Orbitron font** for headings (futuristic monospace)
- **Glassmorphism** with backdrop-filter blur effects
- **Animated gradients** and floating glow blobs

### 🔧 **Technical Implementation:**

#### CSS Variables System:
```css
.neon-mode {
  --bg: #0a0a0f;
  --panel: rgba(255,255,255,0.03);
  --text: #e6fefe;
  --muted: #a7c7d1;
  --accent-primary: #00FFFF;
  --accent-secondary: #FF00D9;
  --accent-glow: 0 0 18px rgba(0,255,255,0.18), 0 0 40px rgba(255,0,217,0.06);
}
```

#### Theme Context Integration:
- **Three-way toggle**: Light → Dark → Neon → Light
- **Auto-detection** of system preference on first visit
- **Persistent storage** of user choice
- **Smooth transitions** between themes

#### Component Enhancements:
- **Hero Section**: Gradient text, floating glow blob, neon typewriter effect
- **Project Cards**: 3D tilt on hover, neon borders, glowing badges
- **Contact Form**: Neon focus states, glowing success/error messages
- **Navigation**: Theme switcher with emoji indicators (☀️🌙⚡)

### 🎯 **Accessibility Features:**
- **Reduced motion support** - disables animations for users with `prefers-reduced-motion`
- **High contrast** text and borders
- **Keyboard navigation** support
- **Screen reader** friendly with proper ARIA labels
- **Focus indicators** with neon glow effects

### 🚀 **Performance Optimizations:**
- **CSS-only animations** for better performance
- **Lazy loading** for images
- **Efficient CSS variables** for theme switching
- **Minimal JavaScript** for animations

## How to Revert

### Option 1: Remove Neon Theme Completely
```bash
# Remove neon-specific files
rm src/components/NeonButton.js
rm src/components/NeonButton.css
rm src/components/__tests__/NeonButton.test.js
rm NEON_THEME_README.md

# Revert ThemeContext.js to original
git checkout HEAD~1 -- src/context/ThemeContext.js

# Revert component files
git checkout HEAD~1 -- src/components/Navbar.js
git checkout HEAD~1 -- src/components/HeroSection.js
git checkout HEAD~1 -- src/components/Projects.js
git checkout HEAD~1 -- src/components/Contact.js
```

### Option 2: Keep Theme System, Remove Neon
1. Remove neon theme from ThemeContext.js:
```javascript
const themes = ['light', 'dark']; // Remove 'neon'
```

2. Remove neon-specific CSS from App.css:
```css
/* Remove .neon-mode styles */
/* Remove neon utility classes */
```

3. Remove neon styling from components:
- Remove `theme === 'neon'` conditions
- Remove neon-specific className applications

### Option 3: Disable Neon Theme Only
Set default theme to 'light' or 'dark' in ThemeContext.js:
```javascript
const [theme, setTheme] = useState('light'); // or 'dark'
```

## Assets Added

### Fonts:
- **Orbitron** (Google Fonts): `https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap`

### Dependencies:
- No new dependencies added (uses existing React, Bootstrap, EmailJS)

## Example Commit Messages

```bash
feat: add neon theme with cyberpunk styling
- Add three-way theme switcher (light/dark/neon)
- Implement neon CSS variables and utility classes
- Add neon effects to hero, projects, and contact sections
- Include accessibility features and reduced motion support

style: enhance neon theme with 3D effects and animations
- Add parallax tilt effects to project cards
- Implement floating glow blob in hero section
- Add neon focus states to contact form inputs
- Include glassmorphism effects with backdrop-filter

test: add unit tests for NeonButton component
- Test button rendering and click handlers
- Test disabled state and accessibility
- Test custom className and prop passing
- Include comprehensive test coverage

docs: add neon theme documentation
- Document CSS variable system
- Explain accessibility features
- Provide revert instructions
- Include performance optimizations
```

## Browser Support

- **Modern browsers** with CSS Grid and Flexbox support
- **CSS Custom Properties** (CSS Variables) support required
- **backdrop-filter** gracefully degrades on unsupported browsers
- **Reduced motion** queries for accessibility compliance