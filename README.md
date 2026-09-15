# Buru Disom Sangat — channel website

A fast, static site for the **Buru Disom Sangat** YouTube channel (Pradip Mandi). Pure HTML/CSS/JS — no build step, so it's ready for GitHub Pages as-is.

## Files

- `index.html` — page structure and content
- `style.css` — dark cinematic theme, layout, animations
- `script.js` — song list, gallery tiles, mobile menu, scroll reveal

## What's already live

- The **Latest Santali songs** section embeds the channel's uploads playlist directly, so it always shows your newest videos automatically — nothing to update by hand.
- Every button (Watch on YouTube, Subscribe, Message on YouTube) already points to `https://youtube.com/@buruddsomsangat_01`.

## What to edit

Open `script.js`:

- **`SONGS`** — the "Popular songs" list. Replace each `title`/`note` with a real song name and paste that video's YouTube link into `url`.
- **`GALLERY`** — the "Moments" mosaic. Each tile currently uses a drawn motif (`mountain`, `sun`, `drum`, `leaf`, `wave`, `star`). To use a real photo instead, add an `img` field, e.g.:
  ```js
  { label: "Live sessions", img: "images/live-1.jpg" }
  ```
  Then drop your photo in an `images/` folder next to `index.html`.

If you ever change the channel handle, update the four YouTube links inside `index.html` (search for `buruddsomsangat_01`).

## Publish it on GitHub Pages

1. Create a new GitHub repository (e.g. `buru-disom-sangat`).
2. Upload `index.html`, `style.css`, `script.js` (and this `README.md`) to it.
3. Go to the repo's **Settings → Pages**.
4. Under **Build and deployment**, set Source to **Deploy from a branch**, branch `main`, folder `/root`.
5. Save — GitHub gives you a URL like `https://yourusername.github.io/buru-disom-sangat/` within a minute or two.

You can also drag-and-drop the same three files into Netlify or Vercel if you'd rather use those instead.
