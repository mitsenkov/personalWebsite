# Maxim Tsenkov — Personal Website

A Bauhaus-styled personal portfolio site built with React, Vite, and Tailwind CSS.

## Pages

- **/** — Landing page (CV highlights, experience, skills, publications, education, contact)
- **/about** — About me (story, timeline, interests, avatar)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"** → select your repo
4. Vercel auto-detects Vite — no config needed
5. Click **Deploy**

### Custom Domain

1. In your Vercel project → **Settings** → **Domains**
2. Add your domain (e.g. `maximtsenkov.com`)
3. Update your domain's DNS records as Vercel instructs
4. HTTPS is automatic

### SPA Routing

To ensure React Router works on page refresh, add this file:

**`vercel.json`** (already included):
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## Tech Stack

- **React 18** + **React Router 6**
- **Vite 5** (build tool)
- **Tailwind CSS 3** (utility-first styling)
- **Outfit** (Google Font — geometric sans-serif)
