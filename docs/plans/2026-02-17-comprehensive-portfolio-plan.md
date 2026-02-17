# Comprehensive Portfolio Enhancement — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the single-page portfolio at erickaquino.github.io from a basic CV site into a comprehensive showcase with integration ecosystem diagram, client verticals, case study cards, skill proficiency indicators, downloadable CVs, and enhanced CTAs.

**Architecture:** Single index.html file with embedded CSS and JS. No build step. All enhancements are additive edits to the existing file. CV PDFs copied into the same directory for download links.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox, CSS animations), vanilla JavaScript (IntersectionObserver, requestAnimationFrame), Google Fonts (JetBrains Mono, Outfit).

---

### Task 1: Copy CV PDFs into site directory

**Files:**
- Copy: `Aquino_Erick_CV_ATS.pdf` → `site/Aquino_Erick_CV_ATS.pdf`
- Copy: `Aquino_Erick_CV_Designed.pdf` → `site/Aquino_Erick_CV_Designed.pdf`

**Step 1: Copy files**

```bash
cp /Users/ej/AI/project-linkedin/Aquino_Erick_CV_ATS.pdf /Users/ej/AI/project-linkedin/site/
cp /Users/ej/AI/project-linkedin/Aquino_Erick_CV_Designed.pdf /Users/ej/AI/project-linkedin/site/
```

**Step 2: Verify**

```bash
ls -la /Users/ej/AI/project-linkedin/site/*.pdf
```

Expected: Two PDF files present.

**Step 3: Commit**

```bash
cd /Users/ej/AI/project-linkedin/site
git add Aquino_Erick_CV_ATS.pdf Aquino_Erick_CV_Designed.pdf
git commit -m "Add CV PDFs for featured downloads section"
```

---

### Task 2: Enhance Hero section

**Files:**
- Modify: `site/index.html` — Hero HTML (lines ~1170-1196) and CSS (lines ~332-394)

**Changes:**
1. Change status-grid from `repeat(4, 1fr)` to `repeat(5, 1fr)` in CSS
2. Add 5th status card "Lines of Code" with data-target="29500" after the Certifications card
3. Add static tagline `<div class="hero-tagline">` below the typing animation div
4. Add "Download CV" button (links to Aquino_Erick_CV_Designed.pdf) alongside existing hero CTAs
5. Add `.hero-tagline` CSS styles (mono font, small, text-tertiary)
6. Update responsive breakpoints: 5 cards → wraps to 3+2 on tablet, 2+2+1 on mobile

**Step 1: Add CSS for hero-tagline and update grid**

Add after `.status-sub .live` block (~line 394):
```css
.hero-tagline {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--text-tertiary);
    letter-spacing: 0.3px;
}
```

Change `.status-grid` grid-template-columns from `repeat(4, 1fr)` to `repeat(5, 1fr)`.

Update responsive: at 900px change to `repeat(3, 1fr)`, at 640px keep `repeat(2, 1fr)`.

**Step 2: Add HTML for 5th status card, tagline, and download button**

After the Certifications status-card, add:
```html
<div class="status-card">
    <div class="status-label">Lines of Code</div>
    <div class="status-value"><span class="counter" data-target="29500">0</span><span class="unit">+</span></div>
    <div class="status-sub">Python (EKW-SPHERE)</div>
</div>
```

After the hero-title div, add:
```html
<div class="hero-tagline">Enterprise ERP architecture, integration design, and SuiteCloud development</div>
```

Add download button to hero-actions:
```html
<a href="Aquino_Erick_CV_Designed.pdf" class="btn btn-ghost" target="_blank">Download CV &darr;</a>
```

**Step 3: Verify in browser, commit**

```bash
git add index.html && git commit -m "Enhance hero: 5th status card, tagline, CV download button"
```

---

### Task 3: Add "What Sets Me Apart" highlight cards to About section

**Files:**
- Modify: `site/index.html` — About HTML (~lines 1202-1254) and CSS

**Changes:**
1. Add CSS for `.highlights-strip` (3-column grid below the about-grid)
2. Add CSS for `.highlight-card` (bg-card, border, icon symbol, title, description)
3. Add HTML: 3 highlight cards after the `.about-grid` closing div

**Step 1: Add CSS**

Add after the `.cert-date` block:
```css
.highlights-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 48px;
}

.highlight-card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 8px;
    padding: 24px;
    text-align: center;
}

.highlight-icon {
    font-size: 28px;
    margin-bottom: 12px;
    line-height: 1;
}

.highlight-title {
    font-family: var(--font-sans);
    font-size: 16px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.highlight-desc {
    font-size: 13px;
    color: var(--text-tertiary);
    line-height: 1.5;
}
```

At 900px responsive: change `.highlights-strip` to `repeat(1, 1fr)`.

**Step 2: Add HTML**

After the `.about-grid` closing div (before the `</div>` that closes `.container`), add:
```html
<div class="highlights-strip stagger-children">
    <div class="highlight-card reveal" style="--i:0">
        <div class="highlight-icon" style="color:var(--amber);">&#9733;</div>
        <div class="highlight-title">Ex-Oracle SWAT</div>
        <div class="highlight-desc">Selected for the elite unit supporting NetSuite's Top 200 enterprise customers and strategic partners</div>
    </div>
    <div class="highlight-card reveal" style="--i:1">
        <div class="highlight-icon" style="color:var(--cyan);">&#9830;</div>
        <div class="highlight-title">Celigo Legendary</div>
        <div class="highlight-desc">Highest Celigo mastery certification tier — Level 4 Legendary, the pinnacle of iPaaS integration expertise</div>
    </div>
    <div class="highlight-card reveal" style="--i:2">
        <div class="highlight-icon" style="color:var(--amber);">&#9670;</div>
        <div class="highlight-title">Sole Architect at Scale</div>
        <div class="highlight-desc">1,200+ custom scripts delivered end-to-end for a single enterprise client as the sole technical architect</div>
    </div>
</div>
```

**Step 3: Verify in browser, commit**

```bash
git add index.html && git commit -m "Add 'What Sets Me Apart' highlight cards to About section"
```

---

### Task 4: Add Integration Ecosystem diagram section

**Files:**
- Modify: `site/index.html` — Add new section between About and Experience, plus CSS

**Changes:**
1. Add CSS for `.ecosystem` section: hub-and-spoke layout using CSS grid/flexbox with a central hub and orbital nodes
2. Add CSS for pulsing connection line animations
3. Add HTML section with NetSuite center hub and 6 spoke groups
4. Update nav links to include "Ecosystem" link

**Step 1: Add CSS for ecosystem**

```css
/* Integration Ecosystem */
.ecosystem-diagram {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
}

.eco-hub {
    text-align: center;
    margin-bottom: 48px;
}

.eco-hub-label {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 700;
    color: var(--cyan);
    background: var(--bg-card);
    border: 2px solid var(--cyan);
    border-radius: 12px;
    padding: 16px 32px;
    position: relative;
    box-shadow: 0 0 30px var(--cyan-glow);
}

.eco-spokes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.eco-spoke {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 8px;
    padding: 20px;
    position: relative;
    overflow: hidden;
}

.eco-spoke::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    animation: pulseGlow 3s ease-in-out infinite;
}

@keyframes pulseGlow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}

.eco-spoke.tpl::before { background: var(--cyan); animation-delay: 0s; }
.eco-spoke.carriers::before { background: var(--amber); animation-delay: 0.5s; }
.eco-spoke.ecom::before { background: #a78bfa; animation-delay: 1s; }
.eco-spoke.middleware::before { background: #4da6ff; animation-delay: 1.5s; }
.eco-spoke.edi::before { background: #f97316; animation-delay: 2s; }
.eco-spoke.marketplace::before { background: #ec4899; animation-delay: 2.5s; }

.eco-spoke-label {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
}

.eco-spoke.tpl .eco-spoke-label { color: var(--cyan); }
.eco-spoke.carriers .eco-spoke-label { color: var(--amber); }
.eco-spoke.ecom .eco-spoke-label { color: #a78bfa; }
.eco-spoke.middleware .eco-spoke-label { color: #4da6ff; }
.eco-spoke.edi .eco-spoke-label { color: #f97316; }
.eco-spoke.marketplace .eco-spoke-label { color: #ec4899; }

.eco-spoke-items {
    list-style: none;
}

.eco-spoke-items li {
    font-size: 13px;
    color: var(--text-secondary);
    padding: 3px 0;
}
```

At 900px responsive: `.eco-spokes` to `repeat(2, 1fr)`.
At 640px: `.eco-spokes` to `1fr`.

**Step 2: Add HTML between About and Experience sections**

```html
<section id="ecosystem">
    <div class="container">
        <div class="section-header reveal">
            <div class="section-label">Architecture</div>
            <h2 class="section-title">Integration ecosystem</h2>
        </div>

        <div class="ecosystem-diagram">
            <div class="eco-hub reveal">
                <div class="eco-hub-label">NetSuite ERP</div>
            </div>

            <div class="eco-spokes stagger-children">
                <div class="eco-spoke tpl reveal" style="--i:0">
                    <div class="eco-spoke-label">3PL Providers</div>
                    <ul class="eco-spoke-items">
                        <li>Masonhub</li>
                        <li>ShipBob</li>
                        <li>Capacity</li>
                        <li>ILG</li>
                        <li>Radial</li>
                    </ul>
                </div>
                <div class="eco-spoke carriers reveal" style="--i:1">
                    <div class="eco-spoke-label">Carriers</div>
                    <ul class="eco-spoke-items">
                        <li>DHL</li>
                        <li>FedEx</li>
                    </ul>
                </div>
                <div class="eco-spoke ecom reveal" style="--i:2">
                    <div class="eco-spoke-label">E-Commerce</div>
                    <ul class="eco-spoke-items">
                        <li>Shopify</li>
                        <li>SuiteCommerce</li>
                    </ul>
                </div>
                <div class="eco-spoke middleware reveal" style="--i:3">
                    <div class="eco-spoke-label">Middleware</div>
                    <ul class="eco-spoke-items">
                        <li>Celigo iPaaS</li>
                        <li>REST / SOAP APIs</li>
                        <li>ODBC</li>
                    </ul>
                </div>
                <div class="eco-spoke edi reveal" style="--i:4">
                    <div class="eco-spoke-label">Retail EDI</div>
                    <ul class="eco-spoke-items">
                        <li>Walmart</li>
                        <li>Lowe's</li>
                        <li>Home Depot</li>
                    </ul>
                </div>
                <div class="eco-spoke marketplace reveal" style="--i:5">
                    <div class="eco-spoke-label">Marketplaces</div>
                    <ul class="eco-spoke-items">
                        <li>Amazon</li>
                        <li>eBay</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Step 3: Update nav to include Ecosystem link**

Add `<li><a href="#ecosystem">Ecosystem</a></li>` after the About link in the nav.

**Step 4: Verify in browser, commit**

```bash
git add index.html && git commit -m "Add integration ecosystem hub-and-spoke diagram section"
```

---

### Task 5: Add Client Verticals section

**Files:**
- Modify: `site/index.html` — Add new section between Ecosystem and Experience, plus CSS

**Changes:**
1. Add CSS for `.verticals-band` (horizontal flex/grid of industry tiles)
2. Add CSS for `.vertical-tile` (dark card with glyph + label + metric)
3. Add HTML section with 8 vertical tiles

**Step 1: Add CSS**

```css
/* Client Verticals */
.verticals-band {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}

.vertical-tile {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    transition: border-color 0.2s;
}

.vertical-tile:hover {
    border-color: var(--border-medium);
}

.vertical-glyph {
    font-size: 24px;
    margin-bottom: 10px;
    line-height: 1;
    opacity: 0.7;
}

.vertical-name {
    font-family: var(--font-sans);
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.vertical-metric {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-tertiary);
}
```

At 900px: `.verticals-band` to `repeat(2, 1fr)`.
At 640px: `.verticals-band` to `repeat(2, 1fr)`.

**Step 2: Add HTML**

```html
<section id="verticals">
    <div class="container">
        <div class="section-header reveal">
            <div class="section-label">Industries</div>
            <h2 class="section-title">Client verticals</h2>
        </div>

        <div class="verticals-band stagger-children">
            <div class="vertical-tile reveal" style="--i:0">
                <div class="vertical-glyph">&#9827;</div>
                <div class="vertical-name">Beauty &amp; DTC</div>
                <div class="vertical-metric">896+ scripts</div>
            </div>
            <div class="vertical-tile reveal" style="--i:1">
                <div class="vertical-glyph">&#9878;</div>
                <div class="vertical-name">Sports Equipment</div>
                <div class="vertical-metric">1,200+ scripts</div>
            </div>
            <div class="vertical-tile reveal" style="--i:2">
                <div class="vertical-glyph">&#9889;</div>
                <div class="vertical-name">Consumer Electronics</div>
                <div class="vertical-metric">700+ scripts</div>
            </div>
            <div class="vertical-tile reveal" style="--i:3">
                <div class="vertical-glyph">&#9733;</div>
                <div class="vertical-name">Consumer Goods</div>
                <div class="vertical-metric">538+ scripts</div>
            </div>
            <div class="vertical-tile reveal" style="--i:4">
                <div class="vertical-glyph">&#9881;</div>
                <div class="vertical-name">Industrial Mfg</div>
                <div class="vertical-metric">190+ objects</div>
            </div>
            <div class="vertical-tile reveal" style="--i:5">
                <div class="vertical-glyph">&#9670;</div>
                <div class="vertical-name">Metals &amp; Commodities</div>
                <div class="vertical-metric">118+ scripts</div>
            </div>
            <div class="vertical-tile reveal" style="--i:6">
                <div class="vertical-glyph">&#8962;</div>
                <div class="vertical-name">Furniture &amp; Home</div>
                <div class="vertical-metric">74+ scripts</div>
            </div>
            <div class="vertical-tile reveal" style="--i:7">
                <div class="vertical-glyph">&#10047;</div>
                <div class="vertical-name">Fashion &amp; Apparel</div>
                <div class="vertical-metric">Multi-marketplace</div>
            </div>
        </div>
    </div>
</section>
```

**Step 3: Verify in browser, commit**

```bash
git add index.html && git commit -m "Add client verticals industry tiles section"
```

---

### Task 6: Enhance Experience section

**Files:**
- Modify: `site/index.html` — Experience HTML (~lines 1264-1362)

**Changes:**
1. Ekwani: Add 2 new bullets — Signifyd/Amazon/fraud detection, EDI retail chains (Walmart, Lowe's, Home Depot), AI-augmented development
2. Kodella: Add 2 new bullets — 26+ MapReduce scripts, platform governance

**Step 1: Add Ekwani bullets**

After the existing 5th Ekwani bullet, add:
```html
<li>Built a Signifyd fraud detection-integrated omnichannel e-commerce platform with Amazon marketplace connectivity, multi-language/region support, and direct-to-consumer order processing for a global consumer goods company.</li>
<li>Built warehouse and EDI connectivity for major retail chains (Walmart, Lowe's, Home Depot) with dual B2B/B2C routing, Shopify synchronization, and RMA automation.</li>
<li>Leveraging AI-powered development tools to accelerate SuiteScript engineering, automate code analysis, and prototype intelligent workflow enhancements.</li>
```

**Step 2: Add Kodella bullets**

After existing 4th Kodella bullet, add:
```html
<li>Owned platform configuration governance: custom fields, workflows, roles/permissions, custom record types, and scripted automations with audit-ready documentation.</li>
```

**Step 3: Verify in browser, commit**

```bash
git add index.html && git commit -m "Enhance experience: add EDI, Signifyd, AI-augmented dev, governance bullets"
```

---

### Task 7: Overhaul Projects into Case Studies (8 projects)

**Files:**
- Modify: `site/index.html` — Projects HTML and CSS

**Changes:**
1. Add CSS for `.project-challenge`, `.project-solution`, `.project-impact`, `.tech-pills` (small tag pills)
2. Replace existing 6 project cards with 8 case study cards in new format: Tag, Title, Challenge, Solution, Impact metrics, Tech stack pills
3. First card (Sports Equipment) remains wide

**Step 1: Add CSS for case study elements and tech pills**

```css
.project-challenge,
.project-solution {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 8px;
}

.project-challenge .label,
.project-solution .label {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-right: 6px;
}

.project-challenge .label { color: var(--amber-dim); }
.project-solution .label { color: var(--cyan-dim); }

.tech-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 12px;
}

.tech-pill {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-tertiary);
    background: var(--bg-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: 4px;
    padding: 3px 8px;
    letter-spacing: 0.3px;
}
```

**Step 2: Replace projects HTML with 8 case study cards**

Replace the entire `.projects-grid` inner content with the 8 cards. Each card follows this structure:
```html
<div class="project-card [wide] reveal" style="--i:N">
    <div class="project-card-content">
        <div class="project-tag">VERTICAL</div>
        <div class="project-title">TITLE</div>
        <div class="project-challenge"><span class="label">Challenge</span>PROBLEM</div>
        <div class="project-solution"><span class="label">Solution</span>WHAT WAS BUILT</div>
        <div class="project-metrics">
            <div class="metric"><span class="metric-value">VALUE</span><span class="metric-label">LABEL</span></div>
        </div>
        <div class="tech-pills">
            <span class="tech-pill">TECH</span>
        </div>
    </div>
</div>
```

The 8 projects:
1. **Wide** — Global Sports Equipment Manufacturer (1,200+ scripts)
2. Major DTC Beauty Brand (800+ scripts)
3. Signifyd Omnichannel Platform (538+ scripts)
4. Retail EDI Connectivity (Walmart/Lowe's/Home Depot)
5. COMEX Metals Trading Platform (118+ scripts)
6. EKW-SPHERE SaaS Platform (29,500+ lines)
7. Multi-Client B2B Fulfillment Platform (74+ scripts, 11+ clients)
8. Hybrid Reconciliation Platform (Python FastAPI + SuiteScript)

**Step 3: Verify in browser, commit**

```bash
git add index.html && git commit -m "Overhaul projects into 8 case study cards with challenge/solution/impact"
```

---

### Task 8: Enhance Skills with proficiency dots

**Files:**
- Modify: `site/index.html` — Skills CSS and HTML

**Changes:**
1. Add CSS for `.proficiency` (5-dot indicator)
2. Update each skill list item to include a proficiency dot indicator
3. Add missing skills: SuiteQL, Amazon/eBay connectors, Salesforce
4. Change skill-list layout to flex with space-between for name and dots

**Step 1: Add CSS**

```css
.skill-list li {
    /* update existing to add space-between */
    justify-content: space-between;
}

.proficiency {
    display: flex;
    gap: 3px;
    flex-shrink: 0;
    margin-left: 8px;
}

.proficiency .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--border-subtle);
}

.proficiency .dot.filled {
    background: var(--cyan);
}

.proficiency .dot.filled.amber {
    background: var(--amber);
}
```

**Step 2: Add proficiency dots to each skill item**

For each `<li>`, append a `.proficiency` span with the appropriate number of filled dots. Example:
```html
<li class="primary">
    <span>NetSuite (Admin, Config, Implementation)</span>
    <span class="proficiency">
        <span class="dot filled"></span>
        <span class="dot filled"></span>
        <span class="dot filled"></span>
        <span class="dot filled"></span>
        <span class="dot filled"></span>
    </span>
</li>
```

Proficiency ratings (5 = expert, 4 = advanced, 3 = proficient, 2 = familiar):
- Platform: NetSuite 5, SuiteScript 5, SuiteFlow/SuiteTalk/SDF 5, Celigo 5, SuiteBuilder 4, SuiteCommerce 3
- Integration: REST/SOAP 5, EDI 4, Shopify 5, 3PL 5, Carriers 4, JSON/XML 4, ODBC 3, Amazon/eBay 3, Salesforce 3, SuiteQL 4
- Languages: JS/TS 5, Python 4, Node.js 4, React 3, Flask/FastAPI 4, PostgreSQL/Redis 4, SQL/SuiteQL 4, HTML/CSS 4
- Business: O2C 5, P2P 5, Fulfillment 5, RevRec 4, WMS 4, Financial Close 4, Supply Chain 4
- DevOps: Git 4, Jenkins 3, SonarQube 3, Selenium 3, AI-Augmented 4
- Architecture: Integration Arch 5, Solution Design 5, Req Analysis 4, Perf Opt 4, Platform Gov 4

**Step 3: Add missing skills to Integration & Data category**

Add to Integration & Data:
```html
<li>Amazon / eBay Connectors ...</li>
<li>Salesforce ...</li>
<li>SuiteQL ...</li>
```

**Step 4: Verify in browser, commit**

```bash
git add index.html && git commit -m "Add skill proficiency dot indicators and missing skills"
```

---

### Task 9: Add Featured Downloads section

**Files:**
- Modify: `site/index.html` — Add new section between Education and Contact, plus CSS

**Changes:**
1. Add CSS for `.downloads-grid` and `.download-card`
2. Add HTML section with 2 download cards (ATS + Designed CV)

**Step 1: Add CSS**

```css
/* Featured Downloads */
.downloads-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 700px;
}

.download-card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 8px;
    padding: 24px;
    display: flex;
    align-items: center;
    gap: 20px;
    transition: all 0.25s var(--ease-out-quart);
    text-decoration: none;
    color: inherit;
}

.download-card:hover {
    border-color: var(--border-strong);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    color: inherit;
}

.download-icon {
    font-size: 32px;
    color: var(--cyan);
    flex-shrink: 0;
}

.download-info {
    flex: 1;
}

.download-title {
    font-family: var(--font-sans);
    font-size: 15px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.download-desc {
    font-size: 12px;
    color: var(--text-tertiary);
}
```

At 640px: `.downloads-grid` to `1fr`.

**Step 2: Add HTML**

```html
<section id="downloads">
    <div class="container">
        <div class="section-header reveal">
            <div class="section-label">Resources</div>
            <h2 class="section-title">Download my CV</h2>
        </div>

        <div class="downloads-grid">
            <a href="Aquino_Erick_CV_ATS.pdf" target="_blank" class="download-card reveal">
                <div class="download-icon">&#128196;</div>
                <div class="download-info">
                    <div class="download-title">CV — ATS Optimized</div>
                    <div class="download-desc">Clean format optimized for applicant tracking systems</div>
                </div>
            </a>
            <a href="Aquino_Erick_CV_Designed.pdf" target="_blank" class="download-card reveal reveal-delay-1">
                <div class="download-icon">&#128203;</div>
                <div class="download-info">
                    <div class="download-title">CV — Visual Design</div>
                    <div class="download-desc">Polished visual resume for direct review</div>
                </div>
            </a>
        </div>
    </div>
</section>
```

**Step 3: Verify in browser, commit**

```bash
git add index.html && git commit -m "Add featured downloads section with ATS and designed CV PDFs"
```

---

### Task 10: Enhance Contact section

**Files:**
- Modify: `site/index.html` — Contact HTML

**Changes:**
1. Replace single "Open to conversations" text with dual-path messaging
2. Replace single CTA with two distinct buttons: recruiter + consulting
3. Add "Open to" topics list
4. Remove any GitHub references from contact terminal
5. Add "open_to" line to terminal contact card

**Step 1: Update contact text and CTAs**

Replace the contact-text content with:
```html
<div class="contact-text reveal">
    <p><strong>Hiring?</strong> I'm open to senior NetSuite architecture and integration roles — remote or hybrid.</p>
    <p><strong>Need an architect?</strong> I consult on NetSuite platform design, integration strategy, and ERP modernization for enterprise teams.</p>
    <div class="hero-actions">
        <a href="mailto:ejaquino26@gmail.com?subject=Career%20Opportunity" class="btn btn-primary">I'm hiring</a>
        <a href="mailto:ejaquino26@gmail.com?subject=Consulting%20Inquiry" class="btn btn-ghost">I need an architect</a>
    </div>
</div>
```

**Step 2: Add open_to line to terminal card**

After the "status" line, add:
```html
<div class="line"><span class="key">open_to</span><span class="val">NetSuite Architecture, Integration Strategy, ERP Modernization</span></div>
```

**Step 3: Verify in browser, commit**

```bash
git add index.html && git commit -m "Enhance contact: dual CTA paths, open-to topics, no GitHub link"
```

---

### Task 11: Final push to GitHub Pages

**Step 1: Push all commits**

```bash
cd /Users/ej/AI/project-linkedin/site
git push origin master
```

**Step 2: Verify deployment**

```bash
gh api repos/erickaquino/erickaquino.github.io/pages --jq '.status'
```

Expected: `built` (may take 30-60 seconds).

**Step 3: Open in browser to verify live site**

```bash
open https://erickaquino.github.io
```

---

## Summary

| Task | Description | Commit message |
|------|-------------|----------------|
| 1 | Copy CV PDFs | `Add CV PDFs for featured downloads section` |
| 2 | Enhance Hero | `Enhance hero: 5th status card, tagline, CV download button` |
| 3 | About highlights | `Add 'What Sets Me Apart' highlight cards to About section` |
| 4 | Ecosystem diagram | `Add integration ecosystem hub-and-spoke diagram section` |
| 5 | Client verticals | `Add client verticals industry tiles section` |
| 6 | Enhance Experience | `Enhance experience: add EDI, Signifyd, AI-augmented dev, governance bullets` |
| 7 | Case study projects | `Overhaul projects into 8 case study cards with challenge/solution/impact` |
| 8 | Skill proficiency | `Add skill proficiency dot indicators and missing skills` |
| 9 | Featured Downloads | `Add featured downloads section with ATS and designed CV PDFs` |
| 10 | Enhance Contact | `Enhance contact: dual CTA paths, open-to topics, no GitHub link` |
| 11 | Deploy | `git push origin master` |
