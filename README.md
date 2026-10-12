# Data Where it Matters: Autonomous Data Collection and Offline Deep Reinforcement Learning for Local Contact-Rich Manipulation

Project page (supplementary video material) for an **anonymous submission under double-blind review**.

> We autonomously collect robot data where it matters — at the contact-rich segment of a task —
> and learn from it with offline deep reinforcement learning. The result is a policy that is
> robust and generalizable, yet very precise.

## Hosting (GitHub Pages)

This repository is a static site. Enable GitHub Pages with:

- **Settings → Pages → Build and deployment → Source: `Deploy from a branch`**
- **Branch: `main` / `/ (root)`**

The site is then served at the repository's Pages URL. A `.nojekyll` file is included so the
`static/` directory is served verbatim.

## Structure

```
index.html                  # the page
paper.pdf                   # the paper
static/
  css/index.css             # styles
  js/index.js               # scroll reveals + viewport-based video autoplay
  images/method.png         # method figure
  images/posters/*.jpg      # video poster frames
  videos/*.mp4              # web-optimized, faststart-enabled clips
```

All videos are sped up and web-optimized (H.264, `+faststart` for progressive playback).
