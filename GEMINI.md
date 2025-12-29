# ModuGal - Project Context

## Project Overview
**ModuGal** is a static website serving as the landing page, documentation, and potentially a storefront for a "Vintage Steampunk" Modular Synthesizer.

*   **Goal:** Promote the synthesizer, showcase its modules, and facilitate demos/downloads.
*   **Aesthetic:** Minimalist structure with Vintage/Steampunk elements (Sepia/Bronze palette, custom typography).
*   **Key Feature:** Persistent background audio loop that continues playing while navigating between pages (achieved via Astro View Transitions).

## Tech Stack
*   **Framework:** [Astro](https://astro.build/) (v5+)
*   **Language:** TypeScript / JavaScript
*   **Styling:** Scoped CSS within Astro components, using CSS Variables for theming.
*   **Hosting:** Cloudflare Pages (configured in `astro.config.mjs`).
*   **Fonts:** Custom "Castelao" font and Google Fonts (Playfair Display, Source Sans Pro).

## Project Structure

```text
/
├── public/             # Static assets (fonts, audio, images)
├── src/
│   ├── components/     # Reusable UI components (e.g., LanguageSwitcher)
│   ├── content/        # Content collections (Module data)
│   ├── layouts/        # Shared layouts (Layout.astro contains persistent audio logic)
│   ├── pages/
│   │   ├── index.astro # Redirects to default language (/gl)
│   │   ├── [lang]/     # Localized routes (gl, es, en)
│   │   │   ├── index.astro
│   │   │   ├── modulos.astro
│   │   │   ├── demos.astro
│   │   │   └── ...
│   └── i18n/           # Internationalization logic (utils, UI strings)
├── astro.config.mjs    # Astro configuration (Cloudflare adapter)
└── QWEN.md             # Original project roadmap and strategic vision (in Spanish)
```

## Key Development Conventions

### 1. Internationalization (i18n)
*   The site uses **route-based i18n**. The root `/` redirects to the default language (Galician `/gl`).
*   Content is duplicated/localized under `src/pages/[lang]/`.
*   Module data is managed via Astro Content Collections.

### 2. Audio System
*   **Persistence:** The site uses `astro:transitions` (`<ViewTransitions />`) to keep the audio state alive during navigation.
*   **Implementation:** A global `window.audioController` object (Singleton pattern) in `src/layouts/Layout.astro` manages the `AudioContext` and playback state.
*   **State:** Mute state is persisted in `localStorage`.

### 3. Styling
*   **Global Variables:** Defined in `src/layouts/Layout.astro` (colors, fonts).
*   **Scoped Styles:** Prefer using `<style>` blocks inside components.
*   **Responsive Design:** Mobile-first media queries are used in the main Layout.

## Build & Run

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build for production (Cloudflare Pages) |
| `npm run preview` | Preview the production build locally |

## Reference Documents
*   **`QWEN.md`**: Contains the detailed design philosophy ("The Inventor's Workshop"), color palettes, and the original strategic roadmap. Refer to this for design decisions.
