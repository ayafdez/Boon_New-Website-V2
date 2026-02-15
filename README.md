# Boon Website - Complete Edition

The leadership development system you won't outgrow.

## 🎨 What's Included

This is a complete, production-ready website with **5 pages** based on Figma designs:

- ✅ **Homepage** - Hero, client logos, three reasons, cohesive system, products, coaches, data, CTA
- ✅ **Solutions** - System configuration, ecosystem, evolution, expectations
- ✅ **For Coaches** - Coach proposition, tools, platform, rigor, alignment, support
- ✅ **For Individuals** - Leadership growth, dedicated partner, competencies, structure, confidentiality
- ✅ **Resources** - Blog, case studies, podcast, events, guides

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## 📦 Deploy to Vercel

### Method 1: GitHub + Vercel (Recommended)

1. **Create a new GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Boon Website Complete"
   git branch -M main
   git remote add origin https://github.com/boon-coaching/YOUR-NEW-REPO-NAME.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your new GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 🎨 Brand System

### Colors
- **Boon Blue**: `#466FF6`
- **Deep Blue**: `#365ABD`
- **Coral**: `#FF6D6A`
- **Light Coral**: `#FF8D80`
- **Navy**: `#1A253B`
- **Charcoal**: `#2E353D`
- **Off-White**: `#F0F3F7`

### Typography
- **Display**: DM Sans (Headlines, UI)
- **Serif**: DM Serif Text (Emphasis, italic phrases)
- **Body**: Inter (Paragraph text, descriptions)

### Font Size Scale
- `--text-xs`: 11px (Labels, overlines)
- `--text-sm`: 13px (Small text)
- `--text-base`: 15px (Body text)
- `--text-md`: 16px (Large body)
- `--text-lg`: 18px (Lead paragraphs)
- `--text-xl`: 20px (Small headings)
- `--text-2xl`: 24px (Medium headings)
- `--text-3xl`: 32px (Large headings)
- `--text-4xl`: 40px (XL headings)
- `--text-5xl`: 48px (Hero subheadings)
- `--text-6xl`: 56px (Hero titles)

## 📁 Project Structure

```
boon-website-complete/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Navigation.css
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Homepage.tsx
│   │   ├── Homepage.css
│   │   ├── Solutions.tsx
│   │   ├── Solutions.css
│   │   ├── ForCoaches.tsx
│   │   ├── ForIndividuals.tsx
│   │   ├── Resources.tsx
│   │   └── Shared.css
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript
- **Routing**: React Router DOM v6
- **Styling**: CSS (CSS Variables, CSS Grid, Flexbox)
- **Fonts**: Google Fonts (DM Sans, DM Serif Text, Inter)

## ✨ Key Features

- Fully responsive design (mobile, tablet, desktop)
- Consistent Boon brand colors and typography
- Smooth animations and transitions
- Accessible navigation with active states
- Production-ready code structure
- Type-safe with TypeScript
- Fast build times with Vite

## 🎯 Next Steps

1. **Replace placeholder images** with actual coach photos and hero images
2. **Add client logos** in the client logos section
3. **Connect to backend/CMS** if needed
4. **Set up analytics** (Google Analytics, Plausible, etc.)
5. **Configure custom domain** in Vercel
6. **Add remaining pages** (About, Careers, Contact, etc.)

## 🔧 Customization

### Changing Colors
Edit `/src/styles/global.css` and modify CSS variables:

```css
:root {
  --boon-blue: #466FF6;
  /* ... other colors */
}
```

### Adding New Pages
1. Create new file in `/src/pages/YourPage.tsx`
2. Add route in `/src/App.tsx`
3. Add navigation link in `/src/components/Navigation.tsx`

## 📝 Notes

- All pages use consistent components (Navigation, Footer)
- Shared styles are in `Shared.css` for efficiency
- Font hierarchy follows Boon brand guidelines precisely
- Color palette matches Figma designs exactly
- Responsive breakpoints at 768px and 1024px

## 🤝 Support

For questions or issues, contact the Boon development team.

---

Built with ❤️ by Boon | © 2026 Boon. All rights reserved.
