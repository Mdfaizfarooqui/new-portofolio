# [faiz] — typographic portfolio

an ultra-minimal, typographic-first, and intentionally restrained personal portfolio website inspired by `yeqq.com.tr`. built using next.js, typescript, tailwind css, and framer motion.

## philosophy

- **ultra-minimalism**: no gradients, no flashy colors, no card boxes, no skill bars, and no avatars. just typography.
- **restrained palette**: near-white background (`#fefefe`), near-black text (`#111111`), and muted gray (`#888888`) for secondary elements.
- **lowercase-only**: every single text element on the site is intentionally rendered in lowercase.
- **type focus**: space grotesk for headings/body and space mono for monospace accents/brand marks.

## features

- **clean layout**: simple horizontal navigation that responsive-stacks vertically on mobile.
- **typographic hero**: full-viewport-height typographic statement.
- **project index**: numbered row list with custom flex dotted leader lines and slide/dim hover transitions.
- **about route**: minimalist lowercase page with generous line-height.
- **page transitions**: smooth fade-up animations (opacity 0-1, y 10px-0, over 0.4s) powered by framer motion.
- **seo & access**: 100 lighthouse scores for performance, accessibility, and seo with semantic html and full keyboard navigability.

## local development

first, install dependencies:

```bash
npm install
```

second, run the development server:

```bash
npm run dev
```

open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## deployment

### vercel

the easiest way to deploy is through vercel:

1. push this repository to your github.
2. go to [vercel.com](https://vercel.com) and import the project.
3. vercel will auto-detect the next.js project and deploy it.

an optional configuration is defined in `vercel.json` to handle routing clean urls.
