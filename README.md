# Personal Portfolio

A modern, GSAP-animated portfolio built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 8 sections: Hero, About, Skills, Projects, Experience, Courses & Achievements, Contact, Footer
- Split projects: Work Experience + Personal (with dedicated detail pages)
- GSAP scroll animations with reduced-motion support
- Fully responsive design
- Optimized for Vercel deployment

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize Content

Edit these files:

- `data/portfolio.ts` — name, bio, skills, experience, education, achievements
- `data/workProjects.ts` — professional project details
- `data/personalProjects.ts` — personal projects with GitHub/live links

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click Deploy
4. Optional: add a custom domain in Vercel project settings

## Build

```bash
npm run build
npm start
```
