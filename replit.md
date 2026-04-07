# Dr. Gábor Majoros — Executive Profile Website

## Overview
Premium minimalist multi-page personal website for a senior privacy, AI governance, and regulatory risk expert. Editorial, board-level aesthetic — not a consulting sales site.

## Architecture
- **Static multi-page site** — plain HTML, shared `styles.css`, shared `script.js`
- Served via `python3 -m http.server 5000 --bind 0.0.0.0`
- No frameworks, no build tools, no dark mode

## Files
- `index.html` — Home / hero
- `profile.html` — Professional background and core capability
- `areas-of-focus.html` — Six areas of professional depth
- `track-record.html` — Experience, credentials, scope
- `perspective.html` — Editorial stance on privacy and AI governance
- `ai-governance.html` — Deep-dive AI governance page
- `contact.html` — Email only, no form
- `styles.css` — All shared styles
- `script.js` — Hamburger menu, active nav, fade-in on scroll

## Design System
- **Background**: `#f8f7f4`
- **Text**: `#1a1a1a`
- **Muted**: `#5c5b58`
- **Faint**: `#9a9895`
- **Accent**: `#1f3a5f` (deep navy)
- **Border/dividers**: `#dedad2`
- **Serif**: Playfair Display (Google Fonts)
- **Sans**: Inter (Google Fonts)
- **Content max-width**: 760px
- **Nav max-width**: 1100px

## Navigation
- Sticky header, left: brand name, right: 7 nav links
- Active page highlighted with accent underline (set by script.js via pathname)
- Mobile: hamburger opens vertical dropdown menu

## Global Footer
- Name, sub-line "Privacy, AI, and regulatory risk"
- Email: gabor@majorosgabor.com

## Tone & Rules
- Executive, understated, authoritative — no consulting/sales framing
- No pricing, no CTAs, no forms
- No dark mode, no cards, no icons (except minimal)
- English only
- Smooth IntersectionObserver fade-in on scroll
- `fade-in` → `visible` class pattern
