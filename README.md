# portfolio_site

Static personal portfolio: HTML, CSS, and JavaScript. Suitable for [GitHub Pages](https://pages.github.com/) (no build step).

## GitHub Pages

1. Push this repository to GitHub.
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** (or your default branch) and **/ (root)**.
4. Save. After a minute, the site is available at `https://<username>.github.io/<repo>/` (or your custom domain if configured).

`index.html` at the repository root is the homepage.

## Local files to add

- `images/profile.jpg` — optional headshot (if missing, an initials placeholder is shown).
- `images/background.jpg` — optional hero background (a gradient still shows without it).
- `assets/resume.pdf` — optional PDF for the “Download Resume” button.

## Contact form

The contact form uses `mailto:` via `js/main.js`. Set your address on the form in `contact.html` (`data-mailto` on `#contact-form`). For a hosted form without mailto, you can later plug in a provider (for example Formspree) while keeping the same markup.
