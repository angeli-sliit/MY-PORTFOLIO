# Open Source Portfolio Template

🚀 **Live Demo:** [portfolio-angeli.vercel.app](https://portfolio-angeli.vercel.app)

## Overview
A modern, fully customizable portfolio template for developers, designers, and professionals. Built with React and Bootstrap, it features responsive design, animations, and easy customization.

## Features
- **Responsive & Modern UI**
- **Dark Mode Support**
- **Portfolio Sections:** About, Projects, Skills, Contact
- **Easy Configuration:** Modify details via JSON
- **Dynamic Project Gallery**

**Frontend Framework**: React 
- **Styling**:  Bootstrap 
- **Deployment**: GitHub Pages / Vercel / Netlify

## Getting Started
```sh
npm install  # Install dependencies
npm start    # Run locally (http://localhost:3000)
```

## Deployment
### Vercel
1. [Sign up](https://vercel.com/signup) and connect your GitHub repo.
2. Click "New Project" and import your portfolio repo.
3. Set the build command to `npm run build` and output directory to `build`.
4. Deploy!

### Netlify
1. [Sign up](https://app.netlify.com/signup) and link your GitHub repo.
2. Set build command: `npm run build` and publish directory: `build`.
3. Click "Deploy Site".

### GitHub Actions (CI/CD)
Add a `.github/workflows/deploy.yml` for automated builds:
```yaml
name: Deploy React App
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      # Add deployment steps for your platform (Vercel/Netlify/GitHub Pages)
```

## Running Tests
```sh
npm test
```
Runs all component tests using React Testing Library and Jest.

## Lighthouse Audit
To check accessibility and performance:
1. Install [Lighthouse](https://developers.google.com/web/tools/lighthouse) as a Chrome extension or use Chrome DevTools.
2. Run an audit on your deployed site.
3. Follow suggestions for further improvements.

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to your branch and create a Pull Request.

## License
This project is open-source and available under the MIT License.

## Contact
For any questions or suggestions, feel free to reach out!

---

Enjoy building your portfolio! 🚀✨

