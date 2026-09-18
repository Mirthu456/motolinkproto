# MotoLink — AI-Powered Bike Service & Spare Parts Platform

A complete, functional frontend for **MotoLink**, built with **React + Vite + Tailwind CSS** and themed after the supplied app mockups (dark navy `#071827` headers, orange `#FF6B00` CTAs, rounded cards, mobile-first layouts that expand to desktop).

It's a working prototype, not just static screens: search and filters, a full booking flow, a cart and checkout with a coupon and payment-method picker, live-feeling order tracking, an AI assistant with rule-based responses, a vehicle garage, roadside assistance, and a service-provider dashboard all run on mock data and local React state.

> Built with Vite + React + Tailwind instead of Next.js for a lighter, dependency-free static build that deploys straight to GitHub Pages with no server. The component structure (pages, reusable cards, context-based state) maps directly onto a Next.js App Router if you'd rather migrate later.

## What's included

| Area | Pages |
|---|---|
| Onboarding | Landing, Onboarding carousel, Login (mobile OTP + Google/Apple mock) |
| Discovery | Home dashboard, Services grid, Nearby Mechanics (filters/sort), Shop Details |
| Booking | Book Service flow (service, vehicle, date, time, notes) |
| Marketplace | Spare Parts search + categories, Product Details, Cart & Checkout |
| Post-purchase | Order Tracking (status timeline), Bookings, Orders |
| Account | Profile, Vehicle Garage (with add-vehicle form), Wallet |
| Support | Roadside Assistance (SOS + options), AI Assistant (chat widget on every in-app page) |
| Operations | Service Provider / Admin Dashboard |

Reusable components: `Header`, `BottomNav`, `ServiceCard`, `MechanicCard`, `ProductCard`, `BookingCard`, `OrderCard`, `Rating`, `SearchBar`, `Modal`, `StatusTimeline`, `PriceSummary`, `VehicleCard`, `AIChatWidget`, `Toast`.

State (cart, bookings, orders, vehicles, auth, toasts) lives in `src/context/AppContext.jsx`; mock Indian data (mechanics, products, services, bookings, orders, vehicles) lives under `src/data/`.

## Run it locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
cd motolink-app
npm install
npm run dev
```

Visit the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build      # outputs static files to dist/
npm run preview    # preview the production build locally
```

## Publish on GitHub

### Option A — GitHub Pages (free static hosting)

1. Create a new GitHub repository (e.g. `motolink-app`), and don't initialize it with a README.
2. Push this folder:
   ```bash
   cd motolink-app
   git init
   git add .
   git commit -m "Initial MotoLink app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/motolink-app.git
   git push -u origin main
   ```
3. Add a deploy workflow so Pages builds the Vite app automatically — create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with: { node-version: 20 }
         - run: npm install
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with: { path: dist }
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```
4. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
5. Push again (or re-run the workflow) — the app publishes to `https://<your-username>.github.io/motolink-app/`.

### Option B — Vercel or Netlify (simplest, zero config)

Both auto-detect a Vite project: import the GitHub repo on either platform, leave the default build command (`npm run build`) and output directory (`dist`), and deploy. This also avoids GitHub Pages' sub-path routing quirks with client-side routes.

## Notes on the mock data

- Currency is ₹ throughout; sample locations include Coimbatore, Chennai, and Bengaluru.
- OTP login accepts `1234` as the demo code.
- The `MOTOLINK20` coupon in the cart applies a 20% discount for demo purposes.
- All mechanics, products, bookings and orders are hand-written mock data in `src/data/` — swap in a real API by replacing those files/imports.

## Customizing the theme

Brand colors and fonts are defined once in `tailwind.config.js` (`orange`, `navy`, `surface`) and `src/index.css` (`.btn-primary`, `.card`, etc.) — change them there to retheme the whole app consistently.
