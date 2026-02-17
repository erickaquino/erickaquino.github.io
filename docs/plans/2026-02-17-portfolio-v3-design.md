# Portfolio Site V3 Enhancement Design

**Date:** 2026-02-17
**Approach:** 10 new features added to existing single-page static site
**Constraint:** Single index.html, no build step, GitHub Pages at erickaquino.github.io
**Design:** Terminal Architect (dark-mode, JetBrains Mono + Outfit, cyan/amber accents)

---

## New Features (Section Order on Page)

### 1. Scroll Progress Indicator
- 2px height bar fixed to top of viewport, above nav (z-index: 200)
- Cyan gradient fill, scaleX(0) to scaleX(1) based on scroll position
- CSS transform-origin: left, driven by passive scroll listener
- No layout impact

### 2. Animated Stats Ticker Bar
- Position: between Hero and About
- Full-width dark elevated band (bg-elevated) with subtle top/bottom cyan border glow
- 5 metrics in a horizontal flex row:
  - 10 yrs experience
  - 3,500+ scripts deployed
  - 20+ enterprise clients
  - 7 certifications
  - 29,500+ lines Python
- Each number uses counter animation on scroll-enter (IntersectionObserver)
- Mobile: 2-col grid with 1 orphan spanning full

### 3. Methodology / How I Work
- Position: after About, before Integration Ecosystem
- Title: "How I work"
- 4 horizontal cards connected by animated dashed lines:
  1. **01 Discovery** — Requirements, constraints, stakeholder alignment
  2. **02 Architecture** — System design, integration mapping, tech selection
  3. **03 Build** — SuiteScript, Celigo flows, testing, iteration
  4. **04 Optimize** — Performance tuning, monitoring, documentation
- Each card: terminal-styled, amber number badge, title, one-liner
- Dashed connector lines between cards with pulseDown animation
- Mobile: vertical stack, connectors become vertical dashed lines

### 4. Certifications Visual Showcase
- Position: after Methodology, before Integration Ecosystem
- Title: "Certifications"
- 7 badge cards in a grid (4-col desktop, 2-col tablet, 1-col mobile):
  1. NetSuite AI Foundations — Oracle — Nov 2025
  2. NetSuite BI & Reporting — Oracle — Nov 2025
  3. NetSuite Financial — Oracle — Nov 2025
  4. OCI AI Foundations — Oracle — Nov 2025
  5. SuiteFoundation — Oracle NetSuite
  6. Celigo Legendary (Level 4) — Celigo — Oct 2023
  7. Celigo Builder Core — Celigo — Feb 2025
- Each card: colored top accent (Oracle #ff6b4a, Celigo #4da6ff), cert name, org, date, checkmark icon
- Keep existing About panel certs for redundancy

### 5. Architecture Diagram (Flagship Project)
- Position: inside Projects section, above the case study grid
- Visual data-flow diagram for the 1,200+ script engagement
- Flow: Shopify → Celigo iPaaS → NetSuite ERP → 3PL / Carriers / EDI
                                      ↕ Payment Gateway / Pricing Engine
- CSS grid layout with SVG/CSS animated connection arrows
- Each node: card with system name, role, color-coded by type
- Hoverable for detail tooltip
- Mobile: vertical stack with downward flow arrows

### 6. Code Philosophy / Engineering Principles
- Position: after Skills, before Education
- Title: "Engineering principles"
- 4 cards (2x2 grid on desktop, 1-col mobile):
  1. **Config over Code** — Build once, configure per-client
  2. **MapReduce at Scale** — 87+ MapReduce scripts, batch processing backbone
  3. **Zero-Disruption Upgrades** — Full lifecycle, no downtime
  4. **Integration-First** — Every solution starts with the data flow
- Terminal aesthetic, border-left accent per card

### 7. Technical Writing / Insights
- Position: after Code Philosophy, before Education
- Title: "Insights"
- 3 article preview cards (3-col desktop, 1-col mobile):
  1. "Lessons from 1,200+ scripts as a solo architect"
  2. "MapReduce patterns for enterprise NetSuite"
  3. "Building a SaaS platform in Python from scratch"
- Each: title, 2-line excerpt, date placeholder, "Coming soon" badge
- Links to # for now, ready for LinkedIn articles

### 8. Easter Egg Terminal
- Toggle button: fixed bottom-right, small cyan `[>_]` button
- Opens 400x300 overlay (full-width bottom sheet on mobile)
- Functional mini terminal with hardcoded responses:
  - help, whoami, skills, projects, contact, hire, clear, exit
- Terminal aesthetic matching site (bg-primary, cyan prompt, mono font)
- Closes on `exit` command or clicking outside

### 9. Section Separators
- Animated horizontal line between each major section
- Thin line (1px) that draws from center outward on scroll-enter
- Cyan with subtle glow, matches border aesthetic
- CSS animation: scaleX(0) → scaleX(1) with ease-out

### 10. Enhanced Section Transitions
- Existing reveal animations enhanced:
  - Vary Y-offset per section (some 30px, some 40px)
  - Add subtle scale (0.98 → 1) to some section entries
  - Stagger child elements more aggressively in grids
- Counter animations trigger more dramatically with eased progression

---

## Section Order (top to bottom, with new items marked)

1. Scroll Progress Indicator **(NEW)**
2. Navigation
3. Hero
4. Stats Ticker Bar **(NEW)**
5. About (+ highlight cards)
6. Methodology **(NEW)**
7. Certifications Showcase **(NEW)**
8. Integration Ecosystem
9. Client Verticals
10. Experience
11. Projects (Architecture Diagram **(NEW)** + Case Studies + Extended)
12. Skills
13. Code Philosophy **(NEW)**
14. Insights / Writing **(NEW)**
15. Education
16. Featured Downloads
17. Contact
18. Footer
19. Easter Egg Terminal **(NEW, floating)**
20. Section Separators **(NEW, between all sections)**

---

## Constraints
- Single index.html file
- No GitHub links
- All CSS/JS embedded (no external deps except Google Fonts)
- PDFs served from same directory
- Mobile-first responsive (380/640/900/1024px breakpoints)
- Interactive effects disabled on mobile <768px for performance
