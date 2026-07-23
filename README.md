# Spirit Garden Digital Menu

A mobile-first bilingual web menu for Spirit Garden coffee shop.

## Included in this MVP

- Arabic and English guest menu
- Search and section filters
- Menu data seeded from the supplied 14-page PDF
- Product badges, prices, calories and preparation time
- Admin access for creating, editing, deleting and reordering sections and products
- Availability / sold-out controls
- JSON backup and restore
- GitHub Pages deployment workflow

## Admin access

Open `admin.html` from the deployed site.

Default MVP credentials:

- Username: `admin`
- Password: `SpiritGarden2026!`

Change the password immediately from the Admin Settings panel. This MVP stores menu changes and credentials in the current browser using local storage. A later production phase should connect Supabase for secure authentication, shared database storage, image uploads and multi-user access.

## Local preview

Open `index.html` directly, or run any static web server in the repository folder.

## Deployment

The included GitHub Actions workflow publishes the repository to GitHub Pages after every push to `main`.
