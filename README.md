# OnPass Website

Static website source for the OnPass project.

## What it documents

- OnPass Desktop: the Windows application that stores the encrypted vault and serves the localhost API
- OnPass Extension: the browser extension that connects to the desktop app for local autofill
- OnPass architecture: a local-first password manager workflow with no remote vault dependency

## Main pages

- `index.html` - landing page and project summary
- `about.html` - architecture and design priorities
- `download.html` - desktop and extension repository links plus setup flow
- `export_user_tutorial.html` - export/import guide
- `privacy_policy.html` - privacy assumptions tied to the actual implementation
- `support.html` - GitHub-based support entry points

## Development

```bash
npm install
npm run dev
```

## Notes

This site was adapted from an earlier website source and rewritten to reflect the current OnPass desktop and extension projects.
