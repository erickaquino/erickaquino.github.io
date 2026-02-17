# CLAUDE.md

## Project Overview
Portfolio site for Erick Joshua A. Aquino — Senior NetSuite Solutions Architect.
Single-file static HTML/CSS/JS hosted on GitHub Pages at `erickaquino.github.io`.

## Git & Deployment
- **ALWAYS use personal GitHub account**: `gh auth switch --user erickaquino` before push
- **Switch back after**: `gh auth switch --user ekw-erickaquino`
- Repo: `erickaquino/erickaquino.github.io` — pushes to `master` trigger GitHub Pages deploy
- Verify deploy: `gh api repos/erickaquino/erickaquino.github.io/pages/builds/latest --jq '.status'`

## Site Constraints
- Single `site/index.html` file (~4,000 lines, all CSS/JS embedded)
- No build step, no external JS deps (only Google Fonts)
- No GitHub links on the site (client work is confidential)
- Aesthetic: Terminal Architect — dark-mode, JetBrains Mono + Outfit, cyan (#00d4aa) + amber (#e8a838)
- Breakpoints: 1024px, 900px, 640px, 380px
- PDFs served from `site/` directory

## Verified File Counts (Source of Truth)
- Total WebstormProjects JS files: 6,687 (across ~48 client projects)
- Archived scripts: 1,013
- Grand total: 7,700+
- Top 4: Nidecker 1,248 + GT Golf 1,165 + Rare Beauty 896 + CapitalBrands 697 = 4,006
- EKW-SPHERE actual Python lines: 31,581 (site conservatively claims 29,500+)
- Site claims "4,000+ scripts" — backed by actual counts

## Key Project Directories
- `/Users/ej/WebstormProjects/` — ~48 NetSuite SuiteCloud client projects
- `/Users/ej/AI/` — AI/side projects (ekwsphere, trading-system, phone-terminal, etc.)
- `/Users/ej/Desktop/Projects/Script Project Codes/` — archived NetSuite scripts

## Related Files
- `project_portfolio_context.md` — catalog of all 22+ projects
- `linkedin_profile_guide.md` — LinkedIn optimization content
- `eaquino_cv_revised.md` — full CV
- `site/docs/plans/` — design docs and implementation plans

## Gotchas
- Gemini CLI is at `/usr/local/bin/gemini` (v0.27.3), uses OAuth auth (not API key)
- GEMINI.md exists for Gemini CLI context — keep in sync with CLAUDE.md
- The site previously had duplicate sections (certs, stats) — removed in review fixes
- "Insights" section was removed (empty "Coming soon" cards hurt credibility)
- Certifications standalone section removed (kept in About panel only)
- Nav reduced to 7 links: About, Ecosystem, Experience, Projects, Skills, CV, Contact
