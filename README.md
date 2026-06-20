# Sahasra Arangetram — Dance Program

A mobile web app that works on **any phone, tablet, or browser** — iPhone, Android, iPad, etc. No app store download needed.

Guests scan a printed QR code with their phone camera and the dance program opens instantly in their browser.

## Quick start (development)

```bash
npm install
npm run dev
```

Open http://localhost:5173/program to preview the program.

## How it works at the event

1. You **deploy** this site online (must use HTTPS)
2. You **print a QR code** that links to your program page
3. Guests **scan with their phone camera** (built into iOS & Android)
4. The **program opens in Safari/Chrome** with all 7 dances
5. They **tap a dance** to see description, duration, artist, and orchestra

## Get your QR code to print

After running locally or deploying, open:

```
https://your-site.com/qr
```

Or locally: http://localhost:5173/qr

This page generates a QR code you can **download and print** on programs, posters, or table cards.

The QR code links to: `https://your-site.com/program`

## Deploy (required for the event)

The site must be online with HTTPS so guests can open it from any device.

### Option A: Vercel (easiest)

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Deploy — you'll get a URL like `https://sahasra-arangetram.vercel.app`
4. Open `/qr` on that URL and download the QR code

### Option B: Netlify

1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Set your live URL (optional)

Copy `.env.example` to `.env` and set:

```
VITE_SITE_URL=https://your-site.vercel.app
```

Rebuild so the QR page uses the correct URL when generating the code.

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
