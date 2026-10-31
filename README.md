# EV Insights — Electric Vehicle Market Performance & Insights

An interactive, production-quality analytics platform designed to visualize and investigate global electric vehicle (EV) market trends, manufacturer competition, battery pack architectures, vehicle pricing elasticity, certified driving ranges, and geographical adoption patterns.

Built for academic project evaluation, technical portfolio demonstration, and interactive data exploration using modern React, Vite, Tailwind CSS, and official Tableau Public Embedding API v3.

---

## 1. Project Overview

- **Project Name:** EV Insights
- **Full Title:** Electric Vehicle Market Performance & Insights
- **Author:** Rajdeep Singh Rajput
- **Target Deployment:** GitHub Pages (Zero-cost, static web hosting via GitHub Actions)
- **Primary Data Intelligence:** Official Tableau Public Executive Dashboard & Market Story

### Purpose & Research Objectives
1. **Macroeconomic Market Shifts:** Understand the historical and projected S-curve transition from internal combustion engine (ICE) vehicles to Battery Electric Vehicles (BEVs) and Plug-in Hybrids (PHEVs).
2. **OEM Competitiveness:** Benchmark pure-play EV pioneers against legacy automotive original equipment manufacturers (OEMs).
3. **Engineering Trade-offs:** Analyze the non-linear relationship between battery capacity (kWh), vehicle curb weight, aerodynamic efficiency ($C_d$), and real-world certified driving range (EPA / WLTP).
4. **Economic Parity:** Explore vehicle MSRP distributions and evaluate when cost parity will be attained across consumer vehicle segments.

---

## 2. Core Features & Capabilities

- **Tableau Public Executive Dashboard Embed:** Real-time interactive embed powered by the official Tableau Embedding API v3 (`<tableau-viz>`). Includes live cross-filtering, tooltip diagnostics, and responsive dimension scaling.
- **Device Viewport Switcher:** Built-in controls for Desktop, Tablet, and Mobile preview simulation to inspect responsive layouts.
- **Fullscreen & Direct External Link:** Instant one-click fullscreen canvas mode and a direct button to launch the workbook on Tableau Public.
- **Dedicated Tableau Story Section:**
  - Dynamic embed support when a published Story sheet URL is provided.
  - In-browser interactive URL tester and configurator (stored in `localStorage` for immediate testing during live evaluations).
  - 5 comprehensive narrative analysis chapters detailing market inflection points, OEM dynamics, battery cell chemistries (LFP vs. NMC), pricing vs. range trade-offs, and charging infrastructure parity.
- **7 Detailed Analytical Feature Modules:**
  1. *Manufacturer Sales Analysis* (Delivery volume and market share capture)
  2. *EV Pricing Comparison* (MSRP distribution & battery capacity correlation)
  3. *Country-wise EV Distribution* (Regional adoption rates and policy incentives)
  4. *Battery Capacity Analysis* (Gross vs. usable kWh pack sizing & gravimetric density)
  5. *Driving Range Comparison* (Certified highway vs. urban stop-and-go range)
  6. *Manufacturer Distribution* (Dedicated skateboard platform vs. legacy conversion)
  7. *EV Efficiency Analysis* (Watt-hours per kilometer consumption metrics)
- **8-Stage Data Science & Engineering Methodology:** Transparent documentation of the full analytics lifecycle from raw data collection to CI/CD web integration.
- **Dark Theme Analytics UI:** Premium charcoal/slate background (`#090d16`) with high-contrast typography, electric orange accents (`#ff6b00`), subtle glowing gradients, and smooth navigation.
- **Strict Client-Side Static Architecture:** 100% serverless, zero Python/Flask or third-party host dependency (no Render, Vercel, Netlify, or Railway required).

---

## 3. Technology Stack

| Technology | Category | Role in Project |
|---|---|---|
| **React 19** | Frontend Framework | Modular component architecture and state management |
| **Vite 8** | Build Tool & Bundler | High-speed ESM bundling and static asset compilation |
| **JavaScript (ESNext)** | Language | Pure JavaScript with standard ECMAScript modules |
| **Tailwind CSS 4** | Styling & UI | Utility-first styling with custom electric orange design tokens |
| **HTML5 & CSS3** | Markup & Effects | Semantic page layout, accessibility landmarks, and glassmorphism |
| **Tableau Public** | Visual Analytics | Business intelligence dashboard with Tableau Embedding API v3 |
| **GitHub Actions** | CI/CD Automation | Automated workflow building and deploying `./dist` on push |
| **GitHub Pages** | Static Hosting | High-availability worldwide CDN hosting directly from repository |

---

## 4. Project Directory Structure

```text
ev-insights/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD pipeline
├── public/
│   └── favicon.svg              # Electric vehicle battery & lightning favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive navigation bar with mobile drawer
│   │   ├── Hero.jsx             # Project introduction, CTAs, and highlight badges
│   │   ├── About.jsx            # Research scope, motivation, and core questions
│   │   ├── Dashboard.jsx        # Embedded Tableau Public Executive Dashboard
│   │   ├── TableauEmbed.jsx     # Reusable Tableau Embedding API v3 component
│   │   ├── Story.jsx            # Tableau Story embed, configurator & narrative chapters
│   │   ├── AnalyticsFeatures.jsx# 7 detailed analytical feature cards
│   │   ├── Methodology.jsx      # 8-stage data science and engineering workflow
│   │   ├── TechStack.jsx        # Technology badges and architecture overview
│   │   └── Footer.jsx           # Repository links, attribution, and back-to-top
│   ├── config/
│   │   └── tableau.js           # Central configuration for Tableau & GitHub URLs
│   ├── App.jsx                  # Main application layout coordinator
│   ├── index.css                # Tailwind directives, theme variables, and glow effects
│   └── main.jsx                 # React root DOM mount
├── .gitignore                   # Standard Git ignore rules
├── index.html                   # HTML5 entry with SEO tags and Tableau Embedding API
├── package.json                 # Project dependencies and npm scripts
├── vite.config.js               # Vite configuration with relative base path for GitHub Pages
└── README.md                    # Project documentation
```

---

## 5. Local Setup & Development Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.x or 20.x+ recommended)
- `npm` (bundled with Node.js)

### Step 1: Clone the Repository
```bash
git clone https://github.com/rajdeepsinghrajput/ev-insights.git
cd ev-insights
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to preview the site with live hot module replacement.

### Step 4: Build for Production
To verify that the production bundle builds without errors:
```bash
npm run build
```
This generates the optimized static assets inside the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 6. How to Configure Tableau URLs

All dashboard and story links are centralized in `src/config/tableau.js`:

```javascript
export const TABLEAU_CONFIG = {
  // Published Tableau Public Dashboard Embed URL
  dashboardUrl: 'https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17934502685490/EVExecutiveDashboard',
  
  // Public web page URL for direct viewing
  dashboardPublicPageUrl: 'https://public.tableau.com/app/profile/rajdeep.singh.rajput/viz/EV_Market_Performance_Market_Story_2026-10-25_17934502685490/EVExecutiveDashboard?publish=yes',
  
  // Published Tableau Story Embed URL (Set your story view URL here):
  storyUrl: '', 

  // Public web page URL for the Story
  storyPublicPageUrl: '',

  // Author & Repository details
  author: 'Rajdeep Singh Rajput',
  githubRepoUrl: 'https://github.com/rajdeepsinghrajput/ev-insights',
  projectTitle: 'Electric Vehicle Market Performance & Insights',
  projectShortTitle: 'EV Insights',
};
```

### Setting the Story URL
1. **Permanent Configuration:** Open `src/config/tableau.js`, paste your published Story view URL into `storyUrl`, and commit the changes to GitHub.
2. **Live Browser Testing:** While demonstrating the site, click the **"Set Story URL"** button in the Story section to paste and test your Story URL instantly without redeploying.

---

## 7. Step-by-Step GitHub Pages Deployment Guide

The repository includes a ready-to-run GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your site whenever you push changes to the `main` branch.

### Step 1: Push Your Code to GitHub
```bash
# Add all files to git tracking
git add .

# Create an initial commit
git commit -m "feat: complete EV Insights analytics platform with Tableau integration"

# Ensure your default branch is main
git branch -M main

# Set your remote origin (replace with your repository URL)
git remote add origin https://github.com/rajdeepsinghrajput/ev-insights.git

# Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages in Repository Settings
1. Go to your repository on GitHub (`https://github.com/your-username/your-repo-name`).
2. Click on **Settings** (top navigation tab).
3. On the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** &rarr; **Source**:
   - Change the dropdown from *Deploy from a branch* to **GitHub Actions**.
5. Save the setting.

### Step 3: Verify the Deployment
1. Go to the **Actions** tab in your GitHub repository.
2. You will see the **"Deploy EV Insights to GitHub Pages"** workflow running automatically.
3. Once completed (green checkmark), your live site will be accessible at:
   ```text
   https://<your-github-username>.github.io/<your-repository-name>/
   ```
   *(For example: `https://rajdeepsinghrajput.github.io/ev-insights/`)*

> **Note on Base Path:**
> In `vite.config.js`, the base path is set to `./` (`base: process.env.VITE_BASE_PATH || './'`). This ensures that scripts, styles, and SVG assets load properly on GitHub Pages subpaths without any 404 errors.

---

## 8. Data & Methodological Notes

- **Primary Source:** Data visual calculations, parameter controls, filters, and tooltips are rendered directly from the author's verified published Tableau Public workbook.
- **Narrative Chapters:** The text in the Story and Analytics sections provides structured analytical commentary and conceptual frameworks regarding EV technology and economics. The site avoids generating fabricated numerical datasets or hardcoded mock tables.
- **Embedding Security:** Uses the official Tableau Embedding API v3 loaded from `public.tableau.com`. No proprietary API keys or user credentials are required from site visitors.

---

## 9. Academic Evaluation & Presentation Highlights

- **Full Responsive Coverage:** Tested across mobile screens (<450px), tablets (768px), and full desktop monitors (>1280px).
- **Accessibility:** Semantic HTML5 structure with ARIA labels, keyboard focus rings, and proper color contrast ratios exceeding WCAG AA standards.
- **Zero Third-Party Hosting Dependencies:** Does not require Render, Vercel, Netlify, Railway, or Heroku. Entirely self-contained and hosted via GitHub Pages.

---

## 10. License

Developed for academic evaluation and demonstration.
&copy; 2026 Rajdeep Singh Rajput.
