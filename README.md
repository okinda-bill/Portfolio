# Bill Okinda: portfolio

Personal site for Bill Okinda, Business Development Officer (Employer Engagement) at Generation Kenya, and photographer at BTM Photography.

Live at **https://okinda-bill.github.io/portfolio/** (once GitHub Pages is on).

## What's here

| Path | What it is |
|---|---|
| `index.html` | Home: partnerships, experience, freelance, AI evaluation, education, contact |
| `photography/index.html` | BTM Photography gallery, UNFPA feature, services and quote form |
| `cv/Bill-Okinda-CV.pdf` | Downloadable CV |
| `assets/css/site.css` | All styles |
| `assets/js/site.js` | Mobile menu, gallery filters, lightbox, contact forms |
| `assets/img/` | Photos (WebP), favicon, social-share image |
| `assets/fonts/` | Newsreader and Archivo, self-hosted (SIL Open Font License) |
| `CHECKLIST.md` | Things to confirm before launch |

Plain HTML and CSS with no build step: edit a file, commit, and GitHub Pages republishes in about a minute.

## Common edits

- **Change a number or sentence:** edit the text in `index.html`.
- **Add a gallery photo:** put a compressed `.webp` in `assets/img/photography/`, then copy one `<figure class="shot">` block in `photography/index.html` and change the image path, `data-cat` (wedding, event, portrait, documentary), alt text and caption.
- **Make the contact form send email directly:** get a free key at web3forms.com and paste it into `WEB3FORMS_KEY` at the top of `assets/js/site.js`.
