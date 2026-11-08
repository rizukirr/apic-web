## APIC web

[Apic](https://github.com/rizukirr/apic) official website: a static landing page plus Docusaurus docs, published at https://rizukirr.github.io/apic-web/.

If you are a web developer and can make it look better, please open a PR, thank you.

- `static/` holds the landing page (plain HTML and CSS), copied to the site root as is.
- `docs/` is generated: `npm run sync-docs` pulls `README.md`, `COMMAND.md`, `CONTRACT.md`, `SENDING.md` and `GUI.md` from the apic repo. Edit the docs there, not here.
- `src/css/custom.css` styles the docs with the landing page's palette and fonts.
- `images/` keeps the original apic-gui screenshots; the cropped ones the page uses are in `static/images/web/`.

```bash
npm install
npm start        # syncs the docs, then serves at http://localhost:3000/apic-web/docs/
npm run build    # syncs the docs, then builds into build/
```

Pushing to `main` deploys through `.github/workflows/deploy.yml`, which also rebuilds daily to pick up doc changes from the apic repo.
