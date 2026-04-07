# Dr. Gábor Majoros — Executive Profile Website

## Overview
Premium, minimalist single-page personal website for an executive-level privacy and AI governance expert. Editorial, board-level aesthetic — not a consulting business site.

## Architecture
- **Single-page static site** — all content in `index.html`, fully self-contained (CSS and JS embedded)
- Served via `python3 -m http.server 5000 --bind 0.0.0.0`
- Additional pages from previous multi-page iteration remain: `expertise.html`, `track-record.html`, `perspective.html`, `contact.html`, `styles.css`, `main.js` (not linked from main index)

## Design System
- **Background**: `#f8f7f4` (soft off-white)
- **Text**: `#1a1a1a`
- **Muted**: `#5c5b58`
- **Accent**: `#1f3a5f` (deep navy)
- **Border**: `#e5e2db`
- **Serif**: Playfair Display (Google Fonts)
- **Sans**: Inter (Google Fonts)
- **Max width**: 720px

## Pages
- `index.html` — Main single-page profile
- `ai-governance.html` — Standalone AI Governance deep-dive page (links back to index.html)

## Page Structure (index.html)
1. Sticky minimal header — name + location, no nav
2. Hero — Dr. Gábor / Majoros name block, role, tagline in italic accent
3. Quote band — full-width dark navy with signature quote
4. Executive Positioning — short strategic paragraph
5. Career Context — 4 bullet points with dash rule
6. Executive Focus — heading + 6 numbered expertise items (01–06)
7. Industry Context — sector paragraph
8. Education & Credentials — degrees + certification pills
9. Contact — LinkedIn link, no form, no email

## Tone & Rules
- Executive, understated, authoritative — NOT consulting/services framing
- No pricing, no CTAs, no "discuss an engagement" language
- English only
- No dark mode toggle on this version
- "Dr." and given name always at the same typographic size
- Smooth scroll + IntersectionObserver fade-in reveals

## LinkedIn
https://www.linkedin.com/in/majorosgt/
