## APIC web

[Apic](https://github.com/rizukirr/apic) official website: a static landing page plus Docusaurus docs, published at https://rizukirr.github.io/apic-web/.

If you are a web developer and can make it look better, please open a PR, thank you.

- `static/` holds the landing page (plain HTML and CSS), copied to the site root as is.
- `docs/` holds the documentation as Markdown, one file per page. The sidebar order is the `sidebar_position` at the top of each file.
- `src/css/custom.css` styles the docs with the landing page's palette and fonts.
- `images/` keeps the original apic-gui screenshots; the cropped ones the page uses are in `static/images/web/`.

```bash
npm install
npm start        # serves at http://localhost:3000/apic-web/docs/ and reloads on edits
npm run build    # builds into build/
```

Pushing to `main` deploys through `.github/workflows/deploy.yml`.
