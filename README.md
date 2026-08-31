# Jarulbee India — Compliance Advocacy

A fast, dependency-light static B2B marketing website designed for GitHub Pages.

## Included
- Home, About, Certifications, Testing, Standards and Blogs
- Dynamic certification and blog templates driven by `assets/data.js`
- Client-side search/filtering without page reloads
- Global Free Consultation modal
- Call Now, WhatsApp and Calendly actions
- Responsive mobile navigation and finger-friendly CTAs
- No database, login or payment gateway required

## Before publishing
Open `assets/app.js` and replace:
- `CONFIG.phone`
- `CONFIG.whatsapp`
- `CONFIG.calendlyUrl`

The WhatsApp links automatically create a context-aware opening message. Certification-specific WhatsApp CTAs use the message stored for each certification in `assets/data.js`.

## Adding a certification
Add another object to `CERTIFICATIONS` in `assets/data.js`. The certification automatically appears in the cards, search/filter and master detail template.

## Adding a blog
Add another object to `BLOGS` in `assets/data.js`. The blog automatically appears in the category filter and detail template.

## GitHub Pages
Upload all files while preserving the folder structure. Set GitHub Pages to deploy from the branch/folder containing `index.html`.

## Important
The sample trust metrics and standards directory are placeholders. Replace them with verified business figures and current regulatory references before publishing.
