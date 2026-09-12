# Thirty Clicks

Personal blog documenting a Mounjaro (tirzepatide) weight-loss journey — appetite, side effects, dosing, and the ongoing argument with food. Built with [Astro](https://astro.build) using the [Monograph](https://github.com/xocothemes/monograph) theme and Tailwind CSS v4.

Live at [thirty-clicks.whalesanctuary.co.uk](https://thirty-clicks.whalesanctuary.co.uk).

## Project structure

```text
├── public/               static assets (favicon, fonts, og-image)
├── src/
│   ├── components/       Astro components (header, footer, post card, search, mdx)
│   ├── config/           site config, categories, code-block themes
│   ├── content/
│   │   └── posts/        blog posts, one folder per post (index.md)
│   ├── layouts/
│   ├── lib/               post-related helper functions
│   └── pages/
├── astro.config.mjs
├── wrangler.jsonc         Cloudflare Pages config
└── package.json
```

Posts live in `src/content/posts/<slug>/index.md`, each with frontmatter for `title`, `excerpt`, `category`, `date`, and `author`. See `src/content.config.ts` for the full schema and `src/config/categories.ts` for the category list.

## Commands

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`     |
| `npm run preview` | Preview the build locally before deploying |
| `npm run check`   | Type-check the project                     |

## Deployment

Deploys to Cloudflare Pages, either automatically on push to `main` (once Git integration is connected in the Cloudflare dashboard) or manually with:

```sh
npx wrangler pages deploy dist --project-name=mounjaro-journey
```
