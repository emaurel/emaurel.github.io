# Edgar Maurel - Portfolio

A single-page portfolio site (plain HTML/CSS/JS, no build step) showcasing
selected AI and software-engineering projects.

**Live goal:** deploy on GitHub Pages at `https://emaurel.github.io`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | All content (hero, about, projects, experience, skills, contact). |
| `styles.css` | Styling - dark theme, CSS variables at the top are easy to tweak. |
| `script.js`  | Project filtering, scroll reveal, nav state. |

## Preview locally

No tooling needed - just open the file:

```bash
# option A: open directly
xdg-open index.html          # Linux
# option B: tiny local server (nicer for testing)
python3 -m http.server 8000  # then visit http://localhost:8000
```

## Deploy to GitHub Pages

GitHub Pages serves a **user site** from a repo named exactly
`emaurel.github.io` on the `main` branch.

```bash
cd portfolio
git init
git add .
git commit -m "Portfolio site"
gh repo create emaurel.github.io --public --source=. --push
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a
branch → Branch: `main` / `/ (root)`**. Your site goes live at
`https://emaurel.github.io` within a minute or two.

> Prefer a project page instead of the root user site? Name the repo anything
> (e.g. `portfolio`), push, enable Pages, and it serves at
> `https://emaurel.github.io/portfolio/`.

## Editing checklist

- **Email** - currently `edgar.maurel@gmail.com` (in `index.html`, contact +
  footer). Swap if you'd rather route freelance mail elsewhere.
- **Colors** - edit the `:root` variables at the top of `styles.css`.
- **Projects** - each project is one `<article class="card">` block in
  `index.html`; `data-cat` controls which filter(s) it appears under
  (`ai`, `mobile`, `web`, `systems`). Adding `card--feature` makes a card span
  the full grid width and enables the two-column body (`feature__grid`:
  lede + `feature__stats` on the left, `feature__points` on the right) - used
  for the flagship Agent Environment card.
- **Screenshots** - the cards use gradient placeholders. To use real images,
  replace the `<div class="card__art">…</div>` with
  `<img class="card__art" src="assets/xyz.png" alt="">` and add the file to
  `assets/`. Screenshots noticeably increase click-through.
