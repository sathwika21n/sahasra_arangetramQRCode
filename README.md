# Sahasra Arangetram — Dance Program

A mobile web app that works on **any phone, tablet, or browser** — iPhone, Android, iPad, etc. No app store download needed.

Guests open the website URL in their browser and the dance program appears immediately. You can generate a printed QR code separately using the website URL.

## Quick start (development)

```bash
npm install
npm run dev
```

Open http://localhost:5173 to preview the program.

## How it works at the event

1. You **deploy** this site online (must use HTTPS)
2. You **print a QR code** that links to your website URL
3. Guests **scan with their phone camera** (built into iOS & Android)
4. The **program opens in Safari/Chrome** with all 7 dances
5. They **tap a dance** to see description, duration, artist, and orchestra

## Get your QR code to print

Use any QR code generator and point it to your deployed website URL:

```
https://your-site.com
```

For GitHub Pages, use:

```
https://sathwika21n.github.io/sahasra_arangetramQRCode/
```

## Deploy (required for the event)

The site must be online with HTTPS so guests can open it from any device.

### Option A: Vercel (easiest)

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Deploy — you'll get a URL like `https://sahasra-arangetram.vercel.app`
4. Generate a QR code separately using your deployed website URL

### Option B: Netlify

1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Set your live URL (optional)

Copy `.env.example` to `.env` and set:

```
VITE_SITE_URL=https://your-site.vercel.app
```

Rebuild after changing this value.

## Upload your 7 dance images

Placeholder SVGs are already in place. When ready, add photos to `public/images/dances/` and update paths in `src/data/dances.ts`.

| File | Dance |
|------|-------|
| `pushpanjali.jpg` | Pushpanjali |
| `alarippu.jpg` | Alarippu |
| `jatiswaram.jpg` | Jatiswaram |
| `shabdam.jpg` | Shabdam |
| `varnam.jpg` | Varnam |
| `padam.jpg` | Padam |
| `tillana.jpg` | Tillana |

## Customize dance details

Edit `src/data/dances.ts` for names, descriptions, duration, artist, raga/tala, and orchestra.

## Tech stack

- React + TypeScript + Vite
- Works in any mobile browser (Safari, Chrome, Firefox, Samsung Internet)
- PWA-ready for a more app-like experience when saved to home screen
