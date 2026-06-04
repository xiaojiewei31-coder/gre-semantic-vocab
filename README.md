# GRE Semantic Vocab

A small GRE vocabulary web app built through AI-assisted vibe coding.

It groups about 500 GRE-style vocabulary words into semantic clusters for personal memorization. The main idea is to learn words by their meaning direction, such as words related to obstruction, weakening, ambiguity, praise, restraint, hostility, abundance, and similar patterns.

This is not a complete dictionary. The short Chinese explanations are meant as memory hints, not guaranteed dictionary definitions.

## Why I Made It

GRE vocabulary can feel repetitive in a useful way. Many words share a similar semantic direction, such as:

- obscure or difficult to understand
- weakening or reducing
- blocking or preventing
- criticizing or disparaging
- improving or worsening
- arrogant, humble, generous, stingy, and so on

This app is an experiment in grouping those words together so they become easier to recognize.

## How To Run Locally

This is a static HTML/CSS/JavaScript website. There is no build step.

You can open `index.html` directly in a browser.

For a local preview server, you can also run:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## How It Works

The app includes:

- semantic vocabulary clusters
- positive, negative, and neutral tone filters
- search by English word, Chinese hint, or cluster name
- a browser-based pronunciation button
- a simple classification practice mode
- local progress tracking in the browser
- optional CSV/JSON import for custom word lists

In classification practice, the app shows the English word first. The Chinese hint and correct cluster are revealed after choosing an answer.

## Current Limitations

- The vocabulary list is curated for personal study and may contain mistakes.
- The Chinese hints are short memory aids, not full dictionary entries.
- The app does not include example sentences yet.
- Pronunciation depends on the browser's built-in speech support.
- Progress is stored locally in the browser, not synced across devices.

## Deployment

Because this is a static site, it can be deployed with GitHub Pages directly from the repository root.
