# Velocity Auto

A premium automotive website template built with React, TypeScript, Vite, and Tailwind CSS. It includes a cinematic, scroll-controlled homepage hero and complete inventory, gallery, about, and contact pages.

## Features

- Responsive luxury automotive design
- Single-car cinematic video hero
- Smooth scroll-controlled video playback on desktop
- Muted autoplay loop fallback on mobile
- Responsive logo and expandable navigation menu
- Vehicle and service inventory with search and filtering
- Filterable gallery with image lightbox
- About, testimonials, calls to action, and contact form sections
- Reusable components and reveal animations
- TypeScript, ESLint, and production build scripts

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React icons

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
git clone <your-repository-url>
cd AU-1
npm install
```

### Local development

```bash
npm run dev
```

Open the local URL shown by Vite, normally [http://localhost:5173](http://localhost:5173).

## Available scripts

```bash
npm run dev        # Start the development server
npm run build      # Create a production build
npm run preview    # Preview the production build
npm run typecheck  # Run TypeScript checks
npm run lint       # Run ESLint
```

## Project structure

```text
AU-1/
├── public/
│   └── videos/             # Homepage hero video and poster
├── src/
│   ├── components/         # Shared UI and homepage sections
│   ├── hooks/              # Reusable React hooks
│   ├── pages/              # Route-level pages
│   ├── App.tsx             # Routes and application shell
│   ├── index.css           # Tailwind layers and global styles
│   └── main.tsx            # Application entry point
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Hero video

The hero uses:

```text
public/videos/cinematic-car.mp4
public/videos/cinematic-car-poster.png
```

Desktop playback is tied to scroll position. Mobile and coarse-pointer devices use muted autoplay with looping for smoother playback.

To replace the footage, keep the same filenames or update the source and poster paths in `src/components/Hero.tsx`. Use a compressed landscape MP4 with one clear focal subject for the best result.

The included showcase footage is sourced from [Mixkit](https://mixkit.co/free-stock-video/red-sports-car-74/). Review the provider's license before redistributing the asset.

## Customization

- Brand and navigation: `src/components/Navbar.tsx`
- Hero content and playback: `src/components/Hero.tsx`
- Colors and typography: `tailwind.config.js`
- Global effects and layout: `src/index.css`
- Inventory data: `src/pages/InventoryPage.tsx`
- Gallery content: `src/pages/GalleryPage.tsx`
- Business and contact information: `src/pages/AboutPage.tsx` and `src/pages/ContactPage.tsx`

## Production

Create an optimized build:

```bash
npm run build
```

The deployable files are generated in `dist/`. This static application can be hosted on services such as Netlify, Vercel, Cloudflare Pages, or GitHub Pages. Configure the host to return `index.html` for client-side routes.

## License

Add your preferred software license before distributing this template. Third-party images, video, icons, and fonts remain subject to their respective licenses.
