# Medchem

The site is self-contained. Its content and media are stored in the repository,
so production does not require a CMS, content API, project ID, dataset, token, or
remote image host.

## Local content

- `public/content/home.json` is the homepage data consumed by the app.
- `public/content/data.json` is the complete source snapshot, including every
  content document, asset metadata record, and an export/validation summary.
- `public/content/assets/images` contains every exported image, including assets
  that are not currently referenced by the homepage.
- `public/content/assets/files` is reserved for file assets. The source export
  contained no file assets.

All image URLs in the JSON use `/content/assets/...` paths.

## Development

Install dependencies and start the app:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Use `pnpm lint` and `pnpm build` before deployment.
