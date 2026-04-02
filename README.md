# portfolio_site

Modern personal portfolio built as a **React + Vite single-page application**. Designed to work well with **GitHub Pages**.

## GitHub Pages (recommended: `gh-pages` branch)

This repo publishes the Vite build output (`dist/`) to a separate `gh-pages` branch (so your `main` branch stays as source).

1. In GitHub: **Settings → Pages**
2. Set **Source** to **Deploy from a branch**
3. Choose **Branch:** `gh-pages` and **Folder:** `/ (root)`
4. Save

After that, the website should be available at: `https://<username>.github.io/<repo>/` (or your custom domain).

### Automatic deploy (included)

The workflow file `/.github/workflows/deploy-gh-pages.yml` builds and deploys on every push to `main`.

### SPA routing note

Because this is an SPA, direct links/refreshes need a fallback route. The project includes `public/404.html` which redirects back to the app entry.

## Local files to add (optional)

- `public/images/profile.jpg` — optional headshot (if missing, an initials placeholder is shown).
- `public/images/background.jpg` — optional hero background (a gradient still shows without it).
- `public/assets/resume.pdf` — optional PDF for the “Download Resume” button.

## Contact

GitHub Pages is static, so the contact form opens your email app via `mailto:` from `src/pages/Contact.jsx`.
