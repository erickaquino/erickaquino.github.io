# GEMINI.md

This file provides guidance to Gemini CLI when working in this repository.

## Project Overview

This is the **portfolio site project** for Erick Joshua A. Aquino — a Senior NetSuite Solutions Architect with 10 years of experience. The site is a single-file static HTML/CSS/JS portfolio hosted on GitHub Pages at `erickaquino.github.io`.

## Key Files

- `site/index.html` — The entire portfolio site (4,000+ lines, all CSS/JS embedded)
- `project_portfolio_context.md` — Catalog of all 22+ projects from the local dev environment
- `linkedin_profile_guide.md` — LinkedIn optimization guide with full career content
- `eaquino_cv_revised.md` — Complete revised CV with all project details
- `eaquino_linkedin_copypaste.md` — LinkedIn copy-paste content
- `site/docs/plans/` — Design docs and implementation plans for site features

## Related Project Directories (Source of Truth for Project Verification)

The actual project codebases live in these directories:

### /Users/ej/WebstormProjects/
~48 NetSuite SuiteCloud client projects. Each subdirectory = one client engagement:
- **Nidecker** — 1,248 JS files, global sports equipment manufacturer (LARGEST project)
- **GT Golf** — 1,165 JS files, sports equipment retail
- **CapitalBrands** — 697+ active JS files (NutriBullet/Magic Bullet), consumer electronics
- **Rare Beauty** — 896 JS files, celebrity DTC beauty brand
- **Hourglass** — 302 JS files, luxury cosmetics
- **Pacifica** — 108 JS files, clean beauty
- **Vegamour** — 88 JS files, hair wellness DTC
- **Kosas** — 41 JS files, clean color cosmetics
- **Tatcha** — 29 JS files, Japanese skincare
- **Merit** — 23 JS files, minimalist beauty
- **Jones Road** — 4 JS files, celebrity-founded beauty
- **Beauty Counter** — 12 JS files, clean beauty network
- **ACG** — 119 JS files, Ames Copper Group (metals/commodities trading)
- **Mindstream** — 6 files
- **EKW-Development-II-EKWSPHERE** — Reconciliation platform (Python FastAPI + NetSuite)
- And ~30 more client projects

### /Users/ej/Desktop/Projects/Script Project Codes/
- **NetSuite-Scripts/** — Archived script collections from past projects

### /Users/ej/AI/
- **ekwsphere** — EKW-SPHERE SaaS platform (29,500+ lines Python, Flask/PostgreSQL/Redis/Celery)
- **trading-system** — Algorithmic trading system (~3,300 lines Python/JS)
- **phone-terminal** — Mobile terminal PWA (~2,300 lines Node.js)
- **ekw-auto-login** — Automation tool (~1,800 lines Node.js)
- **project-linkedin** — This project (portfolio site + career documents)
- **nri-integration** — Integration project

## Site Design

- **Aesthetic**: Terminal Architect (dark-mode, JetBrains Mono + Outfit fonts, cyan/amber accents)
- **Constraint**: Single index.html, no build step, GitHub Pages deployment
- **Breakpoints**: 1024px, 900px, 640px, 380px (mobile-first responsive)
- **Interactive effects**: Cursor-tracking gradient, ambient orbs, scroll reveals, counter animations, easter egg terminal

## Sections on the Site

1. Scroll Progress Indicator
2. Navigation (7 links)
3. Hero (terminal frame, typing animation, 5 status cards, 4 CTAs)
4. Stats Ticker Bar (5 animated metrics)
5. About (narrative + certs panel + 3 highlight cards)
6. Methodology (4-step process: Discovery, Architecture, Build, Optimize)
7. Integration Ecosystem (hub-and-spoke diagram)
8. Client Verticals (8 industry tiles)
9. Experience (timeline with 4 entries covering 7 roles)
10. Projects (architecture diagram + 9 case studies + extended portfolio with 14 compact cards)
11. Skills (6 categories with proficiency dots)
12. Code Philosophy (4 engineering principle cards)
13. Education
14. Featured Downloads (ATS + Designed CV)
15. Contact (dual CTA + terminal contact card)
16. Footer
17. Easter Egg Terminal (floating, 7 commands including cv)
18. Section Separators (animated between all sections)
