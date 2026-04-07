# Dr. Gábor Majoros — Executive Advisory Website

## Project Overview
A premium multi-page executive advisory website for Dr. Gábor Majoros — board-facing advisor in AI governance, privacy strategy, and digital trust. Designed to feel like a high-end executive advisory platform, not a resume site.

## Tech Stack
- **Languages**: HTML5, CSS3, vanilla JavaScript
- **Fonts**: Zodiak (serif display) + General Sans (body) via Fontshare
- **Build system**: None — pure static site
- **Package manager**: None

## Project Structure
```
index.html          Homepage — large name-led hero, pillars, "why this profile"
advisory.html       Advisory scope — 6 service areas
track-record.html   Sector-led mandates (not a CV timeline)
perspective.html    Executive thought leadership — 4 themes
contact.html        Discreet, minimal contact page
styles.css          Shared design system (all CSS)
main.js             Shared JS — theme toggle, mobile menu, scroll reveal
replit.md           This file
```

## Design Principles
- Light mode default, optional dark mode toggle (preference saved to localStorage)
- Large editorial serif name as homepage centrepiece
- Whitespace-led layout — no card grids
- English only throughout
- No CV energy — executive brand energy

## Running the Project
Served via Python's built-in HTTP server on port 5000:
```
python3 -m http.server 5000 --bind 0.0.0.0
```
The "Start application" workflow handles this automatically.

## Deployment
Configured as a **static** deployment (root directory).
