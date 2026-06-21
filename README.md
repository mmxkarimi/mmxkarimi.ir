# mmxkarimi.ir

Personal portfolio website for Mohammad Mahdi Karimi.

## Tech Stack

- **Bun** — Runtime & package manager
- **Vite** — Build tool
- **Tailwind CSS v4** — Utility-first CSS
- **Lucide** — Icons (tree-shaken, bundled)

## Getting Started

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

Output goes to `dist/` — upload to S3 or any static host.

## Project Structure

```
src/
├── index.html       # Main HTML
├── style.css        # Tailwind + custom styles
├── main.js          # Icons & interactions
├── fonts/           # Vazirmatn (local)
├── img/             # Images
└── manifest.json    # PWA manifest
```
