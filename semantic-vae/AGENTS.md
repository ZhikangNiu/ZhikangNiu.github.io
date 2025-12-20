# Repository Guidelines

## Project Overview
This repository hosts a static project page for the Semantic-VAE paper. The site is a single HTML document that references local styles, images, and audio samples.

## Project Structure & Module Organization
- `index.html`: main page markup and content.
- `css/`: stylesheets (Bootstrap, Normalize, and `custom.css` overrides).
- `pics/`: figures used in the page (e.g., `overview.png`).
- `audios_n/`: audio samples and transcripts.
  - Model variants in subfolders (e.g., `E2TTS+VAE/`, `F5TTS+Semantic_VAE/`).
  - Paired transcripts in `text/` directories alongside audio files.

## Build, Test, and Development Commands
This is a static site; no build step is required.
- `open index.html` (macOS) or `xdg-open index.html` (Linux) to view locally.
- `python3 -m http.server 8000` to serve with correct relative paths, then open `http://localhost:8000`.

## Coding Style & Naming Conventions
- HTML uses tab indentation in `index.html`; keep it consistent.
- CSS uses 2-space indentation; group related rules together.
- Use kebab-case for new IDs and classes (e.g., `model-overview`).
- Keep asset filenames lowercase with hyphens; avoid spaces.

## Testing Guidelines
No automated test framework is configured. Validate changes by:
- Loading the page locally and checking layout on desktop and mobile widths.
- Playing at least one sample per model folder after changing `audios_n/`.

## Commit & Pull Request Guidelines
Git history is not available in this workspace. If contributing via Git:
- Use short, imperative commit messages (e.g., `Update model comparison figure`).
- PRs should include a brief summary, a list of updated assets, and screenshots or recordings for visual changes to `index.html`.

## Asset Handling Notes
- Keep audio/transcript pairs aligned; add or remove both together.
- Add new figures to `pics/` and reference them with relative paths.
