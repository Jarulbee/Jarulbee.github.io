# Jarulbee.github.io - Quick Reference Guide

## 🚀 Quick Start

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit: http://localhost:3000
```

### Build & Deploy
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages (automatic via GitHub Actions)
```

---

## 📍 Site Navigation Map

```
🏠 HOME (/)
├── 📄 ABOUT (/about/)
├── 🎓 CERTIFICATIONS (/certifications/)
│   ├── BIS (/certifications/bis)
│   ├── BEE (/certifications/bee)
│   ├── EPR (/certifications/epr)
│   ├── MTCTE (/certifications/mtcte)
│   ├── TEC (/certifications/tec)
│   └── WPC (/certifications/wpc)
├── 🧪 TESTING (/testing/)
├── 📋 STANDARDS (/standards/)
└── 📚 BLOGS (/blogs/)
    └── BIS: CRS vs ISI (/blogs/bis/bis-crs-vs-isi)
```

---

## 📁 Key Files & What They Do

| File | Purpose | Edit For |
|------|---------|----------|
| `src/pages/index.astro` | Home page | Hero content, featured items |
| `src/pages/about.astro` | About page | Company info |
| `src/pages/testing.astro` | Testing page | Testing info |
| `src/pages/standards.astro` | Standards page | Standards content |
| `src/pages/blogs/index.astro` | Blog listing | Blog page layout |
| `src/pages/blogs/[...slug].astro` | Individual blogs | Blog post rendering |
| `src/pages/certifications/index.astro` | Certifications listing | Cert page layout |
| `src/pages/certifications/[...slug].astro` | Individual certs | Cert rendering |
| `src/layouts/BaseLayout.astro` | Main template | Navigation, header, footer |
| `src/styles/global.css` | All styles | Colors, typography, spacing |
| `content/blogs/` | Blog content | Add `.md` files here |
| `content/certifications/` | Cert content | Add `.md` files here |

---

## ✏️ Adding New Content

### Add a Blog Post
1. Create file: `content/blogs/[category]/[name].md`
2. Add frontmatter:
```markdown
---
title: "Your Blog Title"
category: "BIS"  # or BEE, WPC, EPR, MTCTE, TEC
author: "Jarulbee India"
date: 2026-09-01
excerpt: "Brief description"
read_time: "5 min"
---

# Your content here
```
3. Automatically accessible at: `/blogs/[category]/[name]`

### Add a Certification
1. Create file: `content/certifications/[name].md`
2. Add frontmatter:
```markdown
---
title: "Certification Title"
short_name: "SHORT"
authority: "Authority Name"
description: "Brief description"
timeline: "Duration info"
checklist:
  - "Item 1"
  - "Item 2"
whatsapp_message: "Message text"
---

# Your content here
```
3. Automatically accessible at: `/certifications/[name]`

---

## 🔧 Configuration

### Contact Information (Edit in `src/layouts/BaseLayout.astro`)
```javascript
// Line ~95-100: Update these values
href="tel:+919999999999"           // Change phone number
href="https://wa.me/919999999999"  // Change WhatsApp number
src="https://calendly.com/YOUR-USERNAME/..."  // Add Calendly URL
```

### Site URL (Edit in `astro.config.mjs`)
```javascript
export default defineConfig({
  site: "https://Jarulbee.github.io"  // Update if using custom domain
});
```

---

## 🎨 Styling

### Global CSS Variables
Located in `src/styles/global.css`:
- **Colors:** Dark blue (#071b33), Teal (#19bd8a), Light backgrounds
- **Typography:** Inter font family
- **Spacing:** Uses CSS units (px, vw, rem)

### Common CSS Classes
- `.hero` - Hero sections
- `.section` - Content sections
- `.card` - Card components
- `.button` - Buttons
- `.modal` - Modal windows
- `.grid` - Grid layouts

---

## 📊 Content Collection Schema

### Blogs Metadata
```
✓ title (required)
✓ category (required): BIS | BEE | WPC | EPR | MTCTE | TEC
✓ author (optional, defaults to "Jarulbee India")
✓ date (required)
- featured (optional: true/false)
- image (optional: URL)
- excerpt (optional: summary)
- read_time (optional: "X min")
- seo_title (optional)
- seo_description (optional)
```

### Certifications Metadata
```
✓ title (required)
✓ short_name (required)
✓ authority (required)
✓ description (required)
- timeline (optional)
- checklist (optional: array)
- whatsapp_message (optional)
```

---

## 🔗 URL Patterns

| Page | URL Pattern | Example |
|------|-------------|---------|
| Home | `/` | `https://jarulbee.github.io/` |
| About | `/about/` | `https://jarulbee.github.io/about/` |
| Testing | `/testing/` | `https://jarulbee.github.io/testing/` |
| Standards | `/standards/` | `https://jarulbee.github.io/standards/` |
| Certifications (List) | `/certifications/` | `https://jarulbee.github.io/certifications/` |
| Certification (Single) | `/certifications/[slug]` | `https://jarulbee.github.io/certifications/bis` |
| Blogs (List) | `/blogs/` | `https://jarulbee.github.io/blogs/` |
| Blog (Single) | `/blogs/[category]/[slug]` | `https://jarulbee.github.io/blogs/bis/bis-crs-vs-isi` |

---

## 🐛 Troubleshooting

### Page not rendering?
- Check file is in correct location
- Verify frontmatter syntax (YAML)
- Run `npm run build` to see build errors

### Styles not applying?
- Check class names in HTML
- Verify CSS file imported in layout
- Clear browser cache

### Navigation links broken?
- Verify URL matches page slug
- Check trailing slashes
- All links should end with `/`

### Build errors?
```bash
# Clear cache and rebuild
rm -rf dist/ node_modules/
npm install
npm run build
```

---

## 📱 Mobile Responsiveness

All pages are mobile-responsive with:
- Hamburger menu on mobile (`.mobile-menu` button)
- Touch-friendly buttons
- Responsive grid layouts
- Mobile-optimized typography

Test with:
```bash
npm run dev
# Open DevTools (F12) → Toggle device toolbar
```

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Update phone number in `BaseLayout.astro`
- [ ] Update WhatsApp link in `BaseLayout.astro`
- [ ] Add Calendly URL in `BaseLayout.astro`
- [ ] Test all pages locally: `npm run dev`
- [ ] Test all links work
- [ ] Build without errors: `npm run build`
- [ ] Preview production: `npm run preview`
- [ ] Push to GitHub main branch
- [ ] GitHub Actions will auto-deploy to GitHub Pages

---

## 📞 File Locations Summary

### Pages (What users see)
- `src/pages/` → Routes on website

### Layouts (Page templates)
- `src/layouts/` → Shared HTML structure

### Styles (Colors, fonts)
- `src/styles/global.css` → All styling

### Content (Blog posts & certifications)
- `content/blogs/` → Blog markdown files
- `content/certifications/` → Certification markdown files

### Config (Setup)
- `astro.config.mjs` → Astro configuration
- `package.json` → Dependencies
- `src/content.config.ts` → Content schema

---

## ✨ Key Enhancements Made

✅ Dynamic blog routing (`[...slug].astro`)
✅ Dynamic certification routing (`[...slug].astro`)
✅ Updated navigation with all 6 main pages
✅ Improved BaseLayout formatting
✅ Proper CSS integration
✅ Mobile responsive design
✅ Free Consultation modal
✅ WhatsApp integration
✅ SEO meta tags

---

## 🎯 Most Common Tasks

### Task: Add a new blog post
→ Create `content/blogs/[category]/[name].md` with frontmatter

### Task: Add a new certification
→ Create `content/certifications/[name].md` with frontmatter

### Task: Update navigation links
→ Edit `src/layouts/BaseLayout.astro` lines 14-20

### Task: Change colors
→ Edit CSS in `src/styles/global.css`

### Task: Update phone/contact
→ Edit `src/layouts/BaseLayout.astro` lines 95-100

### Task: Deploy changes
→ Push to GitHub main branch (auto-deploys)

---

**All files are now properly interlinked and ready for development!** 🎉
