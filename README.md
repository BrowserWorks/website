# Waterfox

## ⚗️ Stack

- [Astro](https://docs.astro.build)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [Svelte](https://svelte.dev/docs/introduction)
- [Algolia (+autocomplete.js)](https://www.algolia.com/doc/ui-libraries/autocomplete/introduction/what-is-autocomplete/)

## 🗂️ Project Structure

```shell
├── public/            # Static assets
├── scripts/           # Scripts executed at build-time
│   ├── algolia.ts     # Algolia sync script
├── src/
│   ├── assets/        # SVG files + Global styles
│   ├── components/    # Svelte components
│   ├── content/       # Markdown content for pages
│   ├── generated/     # Generated files (by build scripts)
│   ├── i18n/          # Language config and translations
│   ├── layouts/       # Pages templates
│   ├── lib/           # Custom util functions
│   └── pages/         # Exposed routes
│   └── config.ts      # Project config (navbar, footer, ..)
├── .env               # Environment variables
```

## 💻 Local Setup

### 1. Install dependencies

```shell
pnpm install
```

### 2. Setup environment variables

Create a `.env` file inside the root directory with the below (fill in the blanks):

```shell
PUBLIC_ALGOLIA_APP_ID=
PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY=
PUBLIC_ALGOLIA_INDEX_NAME=
ALGOLIA_ADMIN_API_KEY=
```

### 3. Start the local dev server

```shell
pnpm run dev
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`          | Installs dependencies                            |
| `pnpm run dev`          | Starts local dev server                          |
| `pnpm run build`        | Build your production site to `./dist/`          |
| `pnpm run preview`      | Preview your build locally, before deploying     |
| `pnpm run algolia`      | Sync pages content with Algolia                  |
| `pnpm run github`       | Pull latest Github releases (for Downloads)      |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro --help` | Get help using the Astro CLI                     |

## 🤔 How to?

### How to add or remove locales?

1. Edit `src/i18n/locales.ts`.
2. From there, you can add or remove locales.
3. If a single locale is detected, the language switch in the navbar will automatically disappear.

### How to edit the website copy?

1. For the homepage and UI elements, directly inside `src/i18n/locales/[lang].ts`.
2. For Blog Posts and Content pages, directly inside `src/content/[collection]/[lang]/**/*.{md,mdx}`

### How to add new Blog Posts?

1. Create a new markdown file (.md or .mdx) inside the `src/content/blog/[lang]` directory.
2. Make sure to start your file using the below schema:

```md
---
title: Blog post title
pubDate: July 3 2023
author: Alex Kontos
authorTitle: Founder
authorUrl: https://github.com/MrAlex94
authorImageUrl: https://avatars.githubusercontent.com/u/4728920?v=4
---

// Write here
```

### How to add new Content Pages?

1. Create a new markdown file (.md or .mdx) inside the `src/content/[docs|support]/[lang]` directory.
2. Make sure to start your file using the below schema:

```md
---
title: Page title
label: Navigation label
---

// Write here
```

### How to add new Releases?

1. Create a new markdown file (.md or .mdx) inside the `src/content/docs/[lang]/releases/` directory.
2. Make sure to start your file using the below schema:

```md
---
title: "G5.1.9"
label: "G5.1.9"
pubDate: July 4 2023
---

// Write here
```

### How to edit the navigation items?

1. Edit `src/config.ts`.
2. From there, you can edit `navigation` (main nav), `footerNavigation` (footer nav), and `policiesNavigation` (policies nav, also in footer).
3. Make sure to follow the below schema:

```ts
{
    type: 'link',     // item type (`link` or `language-picker`)
    key: 'nav.docs',  // i18n key (matching what's in `src/i18n/locales/[lang].ts`)
    href: '/docs/',   // absolute page url (excluding lang)
    content: 'docs',  // for links pointing inside `src/content/`
}
```

### How to update the Waterfox mobile header image?

1. Add your optimized image ([TinyPNG](https://tinypng.com) recommended) inside the `public/images/` directory.
2. Edit `src/components/home/BrowserUI.svelte`.
3. Inside the top `<script>` section, find and edit the `const mobileImageSrc = '...'` variable with your new image path (e.g. `/images/waterfox-mobile-ui.png`).
4. If any styling update is required, find `<div id="rwd-mobile-ui" ... >` inside the same file.

### How to sync content with Algolia?

1. Make sure environment variables are pointing to your Algolia account and search index.
2. Run `pnpm run algolia`.
3. If not already done, configure your index by adding an **Attribute for faceting** on the `lang` attribute (not searchable).

## 🚀 Deploy on Cloudflare Pages

The current project is already set up to deploy on Cloudflare Pages using [@astrojs/cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/). See `astro.config.mjs` file for Astro integrations already in place.

### 1. Specify build settings

- **Framework preset:** `Astro`
- **Build command:** `npm run build`
- **Build output directory:** `/dist`

> To pull the latest Github releases and sync content with Algolia at build time, you can use the following **Build command** instead: `npm run github && npm run build && npm run algolia` (order is important).

### 2. Define environment variables

Inside your Cloudflare deploy setup, add the below environment variables:

```shell
# required for the build
NODE_VERSION=v18.17.0

# required for Algolia search
PUBLIC_ALGOLIA_APP_ID=
PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY=
PUBLIC_ALGOLIA_INDEX_NAME=

# only required to run the Algolia sync during build
ALGOLIA_ADMIN_API_KEY=
```

### 3. Deploy on Cloudflare Pages

Enjoy 🎉
