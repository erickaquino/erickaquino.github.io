# Portfolio V3 Enhancement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add 10 new features to the portfolio site: scroll progress indicator, stats ticker, methodology section, certifications showcase, architecture diagram, code philosophy, insights/blog, easter egg terminal, section separators, and enhanced transitions.

**Architecture:** All features are added to a single `index.html` file. CSS is added before the `</style>` closing tag (before the responsive section). HTML sections are inserted at specific landmarks. JS is added inside the existing `<script>` block. No build step, no external dependencies.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox, keyframes), vanilla JavaScript (IntersectionObserver, scroll events, DOM manipulation)

---

## Key Landmarks (line numbers may shift as tasks are completed)

- CSS insertion point: before `/* RESPONSIVE */` section (~line 1639)
- HTML `</section>` after Hero: ~line 1911
- HTML `</section>` after About: ~line 1961
- HTML `<!-- INTEGRATION ECOSYSTEM -->`: ~line 1963
- HTML `<!-- PROJECTS -->`: ~line 2203
- HTML `</section>` after Skills: ~line 2715
- HTML `<!-- EDUCATION -->`: ~line 2717
- HTML `</footer>` after Footer: ~line 2815
- JS `<script>` block: starts ~line 2818
- `</script>` closing: end of file

---

### Task 1: Scroll Progress Indicator

**Files:**
- Modify: `site/index.html` (CSS + HTML + JS)

**Step 1: Add CSS** (insert before `/* RESPONSIVE */` section)

```css
/* ══════════════════════════════════════════
   SCROLL PROGRESS INDICATOR
   ══════════════════════════════════════════ */
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    z-index: 200;
    pointer-events: none;
}

.scroll-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--cyan), var(--cyan-bright));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.05s linear;
    box-shadow: 0 0 8px var(--cyan-glow);
}
```

**Step 2: Add HTML** (immediately after `<body>`, before the interactive background div)

```html
<!-- ═══════════════ SCROLL PROGRESS ═══════════════ -->
<div class="scroll-progress">
    <div class="scroll-progress-bar" id="scrollProgress"></div>
</div>
```

**Step 3: Add JS** (inside the `<script>` block, at the top after the opening tag)

```javascript
// ── Scroll progress indicator ──
(function() {
    var bar = document.getElementById('scrollProgress');
    window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var progress = docHeight > 0 ? scrollTop / docHeight : 0;
        bar.style.transform = 'scaleX(' + Math.min(progress, 1) + ')';
    }, { passive: true });
})();
```

**Step 4: Test manually**
- Open index.html in browser
- Scroll down: cyan bar should fill left-to-right
- Scroll to bottom: bar should be 100%
- Scroll back to top: bar should return to 0%

**Step 5: Commit**

```bash
git add site/index.html
git commit -m "feat: add scroll progress indicator"
```

---

### Task 2: Animated Stats Ticker Bar

**Files:**
- Modify: `site/index.html` (CSS + HTML)

**Step 1: Add CSS** (insert before `/* RESPONSIVE */` section)

```css
/* ══════════════════════════════════════════
   STATS TICKER BAR
   ══════════════════════════════════════════ */
.stats-ticker {
    background: var(--bg-elevated);
    border-top: 1px solid var(--border-subtle);
    border-bottom: 1px solid var(--border-subtle);
    padding: 32px 0;
    position: relative;
    z-index: 2;
}

.stats-ticker::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--cyan-glow), transparent);
}

.stats-ticker-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
}

.ticker-stat {
    text-align: center;
    flex: 1;
}

.ticker-value {
    font-family: var(--font-sans);
    font-size: 28px;
    font-weight: 800;
    color: var(--text-primary);
    line-height: 1;
    margin-bottom: 6px;
}

.ticker-value .ticker-unit {
    font-size: 14px;
    font-weight: 400;
    color: var(--text-tertiary);
}

.ticker-label {
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--text-tertiary);
}

.ticker-divider {
    width: 1px;
    height: 40px;
    background: var(--border-subtle);
    flex-shrink: 0;
}
```

**Step 2: Add responsive CSS** (inside the 640px media query)

```css
.stats-ticker-inner { flex-wrap: wrap; justify-content: center; gap: 16px; }
.ticker-stat { flex: 0 0 calc(50% - 12px); }
.ticker-stat:last-child { flex: 0 0 100%; }
.ticker-divider { display: none; }
.ticker-value { font-size: 22px; }
```

**Step 3: Add HTML** (between the closing `</section>` of Hero and the `<!-- ABOUT -->` section comment)

```html
<!-- ═══════════════ STATS TICKER BAR ═══════════════ -->
<div class="stats-ticker reveal">
    <div class="stats-ticker-inner">
        <div class="ticker-stat">
            <div class="ticker-value"><span class="counter" data-target="10">0</span><span class="ticker-unit"> yrs</span></div>
            <div class="ticker-label">Experience</div>
        </div>
        <div class="ticker-divider"></div>
        <div class="ticker-stat">
            <div class="ticker-value"><span class="counter" data-target="3500">0</span><span class="ticker-unit">+</span></div>
            <div class="ticker-label">Scripts deployed</div>
        </div>
        <div class="ticker-divider"></div>
        <div class="ticker-stat">
            <div class="ticker-value"><span class="counter" data-target="20">0</span><span class="ticker-unit">+</span></div>
            <div class="ticker-label">Enterprise clients</div>
        </div>
        <div class="ticker-divider"></div>
        <div class="ticker-stat">
            <div class="ticker-value"><span class="counter" data-target="7">0</span></div>
            <div class="ticker-label">Certifications</div>
        </div>
        <div class="ticker-divider"></div>
        <div class="ticker-stat">
            <div class="ticker-value"><span class="counter" data-target="29500">0</span><span class="ticker-unit">+</span></div>
            <div class="ticker-label">Lines of Python</div>
        </div>
    </div>
</div>
```

**Step 4: Test manually**
- Stats bar appears between hero and about sections
- Counter animations fire on scroll
- Mobile: 2-col layout, last item spans full width
- Dividers hidden on mobile

**Step 5: Commit**

```bash
git add site/index.html
git commit -m "feat: add animated stats ticker bar"
```

---

### Task 3: Methodology / How I Work Section

**Files:**
- Modify: `site/index.html` (CSS + HTML)

**Step 1: Add CSS** (insert before `/* RESPONSIVE */` section)

```css
/* ══════════════════════════════════════════
   METHODOLOGY
   ══════════════════════════════════════════ */
.method-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    position: relative;
}

.method-step {
    text-align: center;
    padding: 0 16px;
    position: relative;
}

.method-step-num {
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 700;
    color: var(--amber);
    letter-spacing: 1px;
    margin-bottom: 12px;
}

.method-step-card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 8px;
    padding: 24px 16px;
    transition: border-color 0.3s;
}

.method-step-card:hover { border-color: var(--border-medium); }

.method-step-title {
    font-family: var(--font-sans);
    font-size: 16px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.method-step-desc {
    font-size: 13px;
    color: var(--text-tertiary);
    line-height: 1.5;
}

/* Connector lines between steps */
.method-connector {
    position: absolute;
    top: 50%;
    right: -2px;
    width: 4px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    transform: translateY(-50%);
    z-index: 1;
}

.method-connector span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--cyan-dim);
    animation: pulseGlow 2s ease-in-out infinite;
}

.method-connector span:nth-child(2) { animation-delay: 0.3s; }
.method-connector span:nth-child(3) { animation-delay: 0.6s; }

.method-step:last-child .method-connector { display: none; }
```

**Step 2: Add responsive CSS** (inside 900px and 640px media queries)

In 900px:
```css
.method-steps { grid-template-columns: repeat(2, 1fr); gap: 16px; }
.method-connector { display: none; }
```

In 640px:
```css
.method-steps { grid-template-columns: 1fr; gap: 12px; }
```

**Step 3: Add HTML** (between the closing `</section>` of About and the `<!-- INTEGRATION ECOSYSTEM -->` comment)

```html
<!-- ═══════════════ METHODOLOGY ═══════════════ -->
<section id="methodology">
    <div class="container">
        <div class="section-header reveal">
            <div class="section-label">Process</div>
            <h2 class="section-title">How I work</h2>
        </div>

        <div class="method-steps stagger-children">
            <div class="method-step reveal" style="--i:0">
                <div class="method-step-num">01</div>
                <div class="method-step-card">
                    <div class="method-step-title">Discovery</div>
                    <div class="method-step-desc">Requirements gathering, constraints mapping, and stakeholder alignment</div>
                </div>
                <div class="method-connector"><span></span><span></span><span></span></div>
            </div>
            <div class="method-step reveal" style="--i:1">
                <div class="method-step-num">02</div>
                <div class="method-step-card">
                    <div class="method-step-title">Architecture</div>
                    <div class="method-step-desc">System design, integration mapping, and technology selection</div>
                </div>
                <div class="method-connector"><span></span><span></span><span></span></div>
            </div>
            <div class="method-step reveal" style="--i:2">
                <div class="method-step-num">03</div>
                <div class="method-step-card">
                    <div class="method-step-title">Build</div>
                    <div class="method-step-desc">SuiteScript development, Celigo flows, iterative testing, and deployment</div>
                </div>
                <div class="method-connector"><span></span><span></span><span></span></div>
            </div>
            <div class="method-step reveal" style="--i:3">
                <div class="method-step-num">04</div>
                <div class="method-step-card">
                    <div class="method-step-title">Optimize</div>
                    <div class="method-step-desc">Performance tuning, monitoring, documentation, and knowledge transfer</div>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Step 4: Test** — 4 cards in a row on desktop, 2x2 on tablet, 1-col on mobile, animated dot connectors between cards

**Step 5: Commit**

```bash
git add site/index.html
git commit -m "feat: add methodology / how I work section"
```

---

### Task 4: Certifications Visual Showcase

**Files:**
- Modify: `site/index.html` (CSS + HTML)

**Step 1: Add CSS** (insert before `/* RESPONSIVE */` section)

```css
/* ══════════════════════════════════════════
   CERTIFICATIONS SHOWCASE
   ══════════════════════════════════════════ */
.certs-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}

.cert-badge {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 8px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s, transform 0.3s;
}

.cert-badge:hover {
    border-color: var(--border-medium);
    transform: translateY(-2px);
}

.cert-badge::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
}

.cert-badge.oracle-cert::before { background: #ff6b4a; }
.cert-badge.celigo-cert::before { background: var(--blue); }

.cert-badge-check {
    font-size: 14px;
    margin-bottom: 10px;
    opacity: 0.7;
}

.cert-badge.oracle-cert .cert-badge-check { color: #ff6b4a; }
.cert-badge.celigo-cert .cert-badge-check { color: var(--blue); }

.cert-badge-name {
    font-family: var(--font-sans);
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 6px;
    line-height: 1.3;
}

.cert-badge-org {
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-tertiary);
    margin-bottom: 4px;
}

.cert-badge-date {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-faint);
}
```

**Step 2: Add responsive CSS**

In 900px:
```css
.certs-grid { grid-template-columns: repeat(2, 1fr); }
```

In 640px:
```css
.certs-grid { grid-template-columns: 1fr; }
```

**Step 3: Add HTML** (between Methodology section and Integration Ecosystem)

```html
<!-- ═══════════════ CERTIFICATIONS SHOWCASE ═══════════════ -->
<section id="certifications">
    <div class="container">
        <div class="section-header reveal">
            <div class="section-label">Credentials</div>
            <h2 class="section-title">Certifications</h2>
        </div>

        <div class="certs-grid stagger-children">
            <div class="cert-badge oracle-cert reveal" style="--i:0">
                <div class="cert-badge-check">&#10003;</div>
                <div class="cert-badge-name">NetSuite Certified AI Foundations Associate</div>
                <div class="cert-badge-org">Oracle</div>
                <div class="cert-badge-date">Nov 2025</div>
            </div>
            <div class="cert-badge oracle-cert reveal" style="--i:1">
                <div class="cert-badge-check">&#10003;</div>
                <div class="cert-badge-name">NetSuite Certified BI &amp; Reporting Associate</div>
                <div class="cert-badge-org">Oracle</div>
                <div class="cert-badge-date">Nov 2025</div>
            </div>
            <div class="cert-badge oracle-cert reveal" style="--i:2">
                <div class="cert-badge-check">&#10003;</div>
                <div class="cert-badge-name">NetSuite Certified Financial Associate</div>
                <div class="cert-badge-org">Oracle</div>
                <div class="cert-badge-date">Nov 2025</div>
            </div>
            <div class="cert-badge oracle-cert reveal" style="--i:3">
                <div class="cert-badge-check">&#10003;</div>
                <div class="cert-badge-name">OCI 2025 AI Foundations Associate</div>
                <div class="cert-badge-org">Oracle</div>
                <div class="cert-badge-date">Nov 2025</div>
            </div>
            <div class="cert-badge oracle-cert reveal" style="--i:4">
                <div class="cert-badge-check">&#10003;</div>
                <div class="cert-badge-name">NetSuite SuiteFoundation</div>
                <div class="cert-badge-org">Oracle NetSuite</div>
                <div class="cert-badge-date">Verified</div>
            </div>
            <div class="cert-badge celigo-cert reveal" style="--i:5">
                <div class="cert-badge-check">&#10003;</div>
                <div class="cert-badge-name">Mastery Level 4: Legendary</div>
                <div class="cert-badge-org">Celigo</div>
                <div class="cert-badge-date">Oct 2023</div>
            </div>
            <div class="cert-badge celigo-cert reveal" style="--i:6">
                <div class="cert-badge-check">&#10003;</div>
                <div class="cert-badge-name">Builder Core Certification</div>
                <div class="cert-badge-org">Celigo</div>
                <div class="cert-badge-date">Feb 2025</div>
            </div>
        </div>
    </div>
</section>
```

**Step 4: Test** — 4-col on desktop, 2-col tablet, 1-col mobile. Oracle cards have red accent, Celigo cards have blue.

**Step 5: Commit**

```bash
git add site/index.html
git commit -m "feat: add certifications visual showcase"
```

---

### Task 5: Architecture Diagram

**Files:**
- Modify: `site/index.html` (CSS + HTML)

**Step 1: Add CSS** (insert before `/* RESPONSIVE */` section)

```css
/* ══════════════════════════════════════════
   ARCHITECTURE DIAGRAM
   ══════════════════════════════════════════ */
.arch-diagram {
    max-width: 960px;
    margin: 0 auto 56px;
    padding: 32px;
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 12px;
    position: relative;
}

.arch-diagram-title {
    font-family: var(--font-mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-tertiary);
    margin-bottom: 8px;
    text-align: center;
}

.arch-diagram-sub {
    font-size: 13px;
    color: var(--text-faint);
    text-align: center;
    margin-bottom: 32px;
}

.arch-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    flex-wrap: nowrap;
}

.arch-node {
    background: var(--bg-elevated);
    border: 1px solid var(--border-medium);
    border-radius: 8px;
    padding: 14px 18px;
    text-align: center;
    min-width: 120px;
    transition: border-color 0.3s, transform 0.3s;
    position: relative;
}

.arch-node:hover {
    border-color: var(--border-strong);
    transform: translateY(-2px);
}

.arch-node-name {
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 4px;
}

.arch-node-role {
    font-size: 10px;
    color: var(--text-faint);
}

.arch-node.shopify { border-top: 2px solid var(--purple); }
.arch-node.shopify .arch-node-name { color: var(--purple); }
.arch-node.celigo { border-top: 2px solid var(--blue); }
.arch-node.celigo .arch-node-name { color: var(--blue); }
.arch-node.netsuite { border-top: 2px solid var(--cyan); }
.arch-node.netsuite .arch-node-name { color: var(--cyan); }
.arch-node.tpl-node { border-top: 2px solid var(--amber); }
.arch-node.tpl-node .arch-node-name { color: var(--amber); }
.arch-node.payments { border-top: 2px solid var(--pink); }
.arch-node.payments .arch-node-name { color: var(--pink); }

.arch-arrow {
    display: flex;
    align-items: center;
    padding: 0 8px;
    color: var(--text-faint);
    font-family: var(--font-mono);
    font-size: 16px;
    flex-shrink: 0;
}

.arch-arrow span {
    display: inline-block;
    animation: pulseGlow 2s ease-in-out infinite;
}

.arch-bottom-row {
    display: flex;
    justify-content: center;
    margin-top: 16px;
    gap: 12px;
}

.arch-vert-arrow {
    text-align: center;
    color: var(--text-faint);
    font-family: var(--font-mono);
    font-size: 14px;
    margin-top: 12px;
}

.arch-vert-arrow span {
    display: inline-block;
    animation: pulseDown 2s ease-in-out infinite;
}
```

**Step 2: Add responsive CSS**

In 900px:
```css
.arch-flow { flex-wrap: wrap; justify-content: center; gap: 8px; }
.arch-arrow { transform: rotate(90deg); padding: 4px 0; }
.arch-diagram { padding: 24px 16px; }
```

In 640px:
```css
.arch-flow { flex-direction: column; }
.arch-node { min-width: 0; width: 100%; }
.arch-arrow { transform: rotate(90deg); }
.arch-bottom-row { flex-direction: column; align-items: center; }
```

**Step 3: Add HTML** (inside the Projects section, right after the section-header div, before the `projects-grid`)

```html
            <!-- Architecture Diagram -->
            <div class="arch-diagram reveal">
                <div class="arch-diagram-title">Flagship Architecture &mdash; 1,200+ Scripts</div>
                <div class="arch-diagram-sub">Global Sports Equipment Manufacturer &middot; Data flow overview</div>
                <div class="arch-flow">
                    <div class="arch-node shopify">
                        <div class="arch-node-name">Shopify</div>
                        <div class="arch-node-role">E-Commerce</div>
                    </div>
                    <div class="arch-arrow"><span>&rarr;</span></div>
                    <div class="arch-node celigo">
                        <div class="arch-node-name">Celigo iPaaS</div>
                        <div class="arch-node-role">Middleware</div>
                    </div>
                    <div class="arch-arrow"><span>&rarr;</span></div>
                    <div class="arch-node netsuite">
                        <div class="arch-node-name">NetSuite ERP</div>
                        <div class="arch-node-role">Central Hub</div>
                    </div>
                    <div class="arch-arrow"><span>&rarr;</span></div>
                    <div class="arch-node tpl-node">
                        <div class="arch-node-name">3PL / Carriers</div>
                        <div class="arch-node-role">Fulfillment</div>
                    </div>
                </div>
                <div class="arch-vert-arrow"><span>&#8597;</span></div>
                <div class="arch-bottom-row">
                    <div class="arch-node payments">
                        <div class="arch-node-name">Payment Gateway</div>
                        <div class="arch-node-role">Processing</div>
                    </div>
                    <div class="arch-node tpl-node">
                        <div class="arch-node-name">EDI / Retail</div>
                        <div class="arch-node-role">B2B Channel</div>
                    </div>
                </div>
            </div>
```

**Step 4: Test** — horizontal flow on desktop, vertical on mobile, animated arrows, hoverable nodes

**Step 5: Commit**

```bash
git add site/index.html
git commit -m "feat: add architecture diagram for flagship project"
```

---

### Task 6: Code Philosophy / Engineering Principles

**Files:**
- Modify: `site/index.html` (CSS + HTML)

**Step 1: Add CSS** (insert before `/* RESPONSIVE */` section)

```css
/* ══════════════════════════════════════════
   CODE PHILOSOPHY
   ══════════════════════════════════════════ */
.philosophy-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.philosophy-card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-left: 3px solid var(--cyan-dim);
    border-radius: 6px;
    padding: 24px;
    transition: border-color 0.3s, transform 0.3s;
}

.philosophy-card:hover {
    border-color: var(--border-medium);
    transform: translateY(-2px);
}

.philosophy-card:nth-child(2) { border-left-color: var(--amber-dim); }
.philosophy-card:nth-child(3) { border-left-color: var(--purple); }
.philosophy-card:nth-child(4) { border-left-color: var(--blue); }

.philosophy-title {
    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.philosophy-desc {
    font-size: 13px;
    color: var(--text-tertiary);
    line-height: 1.6;
}
```

**Step 2: Add responsive CSS**

In 640px:
```css
.philosophy-grid { grid-template-columns: 1fr; }
```

**Step 3: Add HTML** (between Skills `</section>` and Education `<!-- -->`)

```html
<!-- ═══════════════ CODE PHILOSOPHY ═══════════════ -->
<section id="philosophy">
    <div class="container">
        <div class="section-header reveal">
            <div class="section-label">Approach</div>
            <h2 class="section-title">Engineering principles</h2>
        </div>

        <div class="philosophy-grid stagger-children">
            <div class="philosophy-card reveal" style="--i:0">
                <div class="philosophy-title">Config over Code</div>
                <div class="philosophy-desc">Build once, configure per-client. Configuration records drive integration behavior without redeployments — new clients onboard through setup, not development.</div>
            </div>
            <div class="philosophy-card reveal" style="--i:1">
                <div class="philosophy-title">MapReduce at Scale</div>
                <div class="philosophy-desc">87+ MapReduce scripts across the portfolio. Batch processing is the backbone of enterprise data — reconciliations, migrations, and transformations at volume.</div>
            </div>
            <div class="philosophy-card reveal" style="--i:2">
                <div class="philosophy-title">Zero-Disruption Upgrades</div>
                <div class="philosophy-desc">Full upgrade lifecycle management from Release Preview analysis through regression validation and production cutover — without downtime or data loss.</div>
            </div>
            <div class="philosophy-card reveal" style="--i:3">
                <div class="philosophy-title">Integration-First Architecture</div>
                <div class="philosophy-desc">Every solution starts with the data flow. Celigo, REST, SOAP, EDI — connectivity is the foundation, not an afterthought. Build the pipes first.</div>
            </div>
        </div>
    </div>
</section>
```

**Step 4: Test** — 2x2 grid on desktop, 1-col on mobile, each card has a colored left border

**Step 5: Commit**

```bash
git add site/index.html
git commit -m "feat: add engineering principles section"
```

---

### Task 7: Technical Writing / Insights

**Files:**
- Modify: `site/index.html` (CSS + HTML)

**Step 1: Add CSS** (insert before `/* RESPONSIVE */` section)

```css
/* ══════════════════════════════════════════
   INSIGHTS / WRITING
   ══════════════════════════════════════════ */
.insights-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.insight-card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 8px;
    padding: 24px;
    transition: border-color 0.3s, transform 0.3s;
    position: relative;
    overflow: hidden;
}

.insight-card:hover {
    border-color: var(--border-medium);
    transform: translateY(-2px);
}

.insight-badge {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--amber);
    background: rgba(232, 168, 56, 0.1);
    border: 1px solid rgba(232, 168, 56, 0.2);
    border-radius: 4px;
    padding: 3px 8px;
    margin-bottom: 14px;
}

.insight-title {
    font-family: var(--font-sans);
    font-size: 16px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 10px;
    line-height: 1.35;
}

.insight-excerpt {
    font-size: 13px;
    color: var(--text-tertiary);
    line-height: 1.6;
    margin-bottom: 14px;
}

.insight-date {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-faint);
}
```

**Step 2: Add responsive CSS**

In 900px:
```css
.insights-grid { grid-template-columns: 1fr; }
```

**Step 3: Add HTML** (between Code Philosophy `</section>` and Education `<!-- -->`)

```html
<!-- ═══════════════ INSIGHTS ═══════════════ -->
<section id="insights">
    <div class="container">
        <div class="section-header reveal">
            <div class="section-label">Writing</div>
            <h2 class="section-title">Insights</h2>
        </div>

        <div class="insights-grid stagger-children">
            <div class="insight-card reveal" style="--i:0">
                <div class="insight-badge">Coming soon</div>
                <div class="insight-title">Lessons from 1,200+ scripts as a solo architect</div>
                <div class="insight-excerpt">What I learned building the largest NetSuite implementation in my portfolio — from requirements gathering through production deployment as the sole technical architect.</div>
                <div class="insight-date">2026</div>
            </div>
            <div class="insight-card reveal" style="--i:1">
                <div class="insight-badge">Coming soon</div>
                <div class="insight-title">MapReduce patterns for enterprise NetSuite</div>
                <div class="insight-excerpt">Design patterns and performance strategies from 87+ MapReduce scripts processing millions of records across reconciliation, migration, and transformation workloads.</div>
                <div class="insight-date">2026</div>
            </div>
            <div class="insight-card reveal" style="--i:2">
                <div class="insight-badge">Coming soon</div>
                <div class="insight-title">Building a SaaS platform in Python from scratch</div>
                <div class="insight-excerpt">How I built EKW-SPHERE — a 29,500+ line operations platform with Flask, PostgreSQL, Redis, and Celery — from idea to 3,600+ requests per second.</div>
                <div class="insight-date">2026</div>
            </div>
        </div>
    </div>
</section>
```

**Step 4: Test** — 3-col on desktop, 1-col on tablet/mobile, "Coming soon" amber badge on each

**Step 5: Commit**

```bash
git add site/index.html
git commit -m "feat: add insights / writing section"
```

---

### Task 8: Easter Egg Terminal

**Files:**
- Modify: `site/index.html` (CSS + HTML + JS)

**Step 1: Add CSS** (insert before `/* RESPONSIVE */` section)

```css
/* ══════════════════════════════════════════
   EASTER EGG TERMINAL
   ══════════════════════════════════════════ */
.egg-toggle {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 150;
    background: var(--bg-card);
    border: 1px solid var(--border-medium);
    color: var(--cyan);
    font-family: var(--font-mono);
    font-size: 14px;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s var(--ease-out-quart);
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
}

.egg-toggle:hover {
    background: var(--bg-card-hover);
    border-color: var(--cyan-dim);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.4), 0 0 12px var(--cyan-glow);
}

.egg-overlay {
    position: fixed;
    bottom: 84px;
    right: 24px;
    width: 420px;
    max-height: 340px;
    z-index: 150;
    background: var(--bg-primary);
    border: 1px solid var(--border-medium);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px var(--cyan-glow);
    display: none;
    flex-direction: column;
}

.egg-overlay.open { display: flex; }

.egg-overlay .terminal-bar {
    flex-shrink: 0;
}

.egg-body {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    font-family: var(--font-mono);
    font-size: 12px;
    line-height: 1.7;
    color: var(--text-secondary);
}

.egg-body .egg-line { margin-bottom: 2px; }
.egg-body .egg-prompt { color: var(--cyan); }
.egg-body .egg-cmd { color: var(--text-primary); }
.egg-body .egg-response { color: var(--text-tertiary); }
.egg-body .egg-highlight { color: var(--amber); }
.egg-body .egg-link { color: var(--cyan); }

.egg-input-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-subtle);
    flex-shrink: 0;
}

.egg-input-row .egg-prompt-symbol {
    color: var(--cyan);
    font-family: var(--font-mono);
    font-size: 12px;
    flex-shrink: 0;
}

.egg-input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 12px;
    caret-color: var(--cyan);
}
```

**Step 2: Add responsive CSS**

In 640px:
```css
.egg-overlay {
    bottom: 0; right: 0; left: 0;
    width: 100%;
    max-height: 50vh;
    border-radius: 12px 12px 0 0;
}
.egg-toggle { bottom: 16px; right: 16px; }
```

**Step 3: Add HTML** (before the `</body>` tag, after the footer)

```html
<!-- ═══════════════ EASTER EGG TERMINAL ═══════════════ -->
<button class="egg-toggle" id="eggToggle" aria-label="Open terminal">[&gt;_]</button>
<div class="egg-overlay" id="eggOverlay">
    <div class="terminal-bar">
        <div class="terminal-dot red"></div>
        <div class="terminal-dot yellow"></div>
        <div class="terminal-dot green"></div>
        <span class="terminal-title">visitor@portfolio ~ %</span>
    </div>
    <div class="egg-body" id="eggBody">
        <div class="egg-line"><span class="egg-response">Welcome! Type <span class="egg-highlight">help</span> to see available commands.</span></div>
    </div>
    <div class="egg-input-row">
        <span class="egg-prompt-symbol">$</span>
        <input class="egg-input" id="eggInput" type="text" autocomplete="off" spellcheck="false" placeholder="Type a command...">
    </div>
</div>
```

**Step 4: Add JS** (inside the `<script>` block)

```javascript
// ── Easter egg terminal ──
(function() {
    var toggle = document.getElementById('eggToggle');
    var overlay = document.getElementById('eggOverlay');
    var body = document.getElementById('eggBody');
    var input = document.getElementById('eggInput');
    if (!toggle || !overlay) return;

    var commands = {
        help: 'Available commands: <span class="egg-highlight">whoami</span>, <span class="egg-highlight">skills</span>, <span class="egg-highlight">projects</span>, <span class="egg-highlight">contact</span>, <span class="egg-highlight">hire</span>, <span class="egg-highlight">clear</span>, <span class="egg-highlight">exit</span>',
        whoami: '<span class="egg-highlight">Erick Joshua A. Aquino</span>\nSenior NetSuite Solutions Architect\n10 years | Ex-Oracle SWAT | Celigo Legendary',
        skills: 'SuiteScript 2.x, Celigo iPaaS, REST/SOAP APIs, EDI,\nPython, Node.js, TypeScript, React, Flask, FastAPI,\nPostgreSQL, Redis, Shopify, MapReduce',
        projects: '<span class="egg-highlight">22+</span> projects delivered\n<span class="egg-highlight">3,500+</span> scripts deployed\n<span class="egg-highlight">20+</span> enterprise clients\n<span class="egg-highlight">29,500+</span> lines of Python',
        contact: 'Email: <span class="egg-link">ejaquino26@gmail.com</span>\nPhone: +63 905 514 7337\nLinkedIn: <span class="egg-link">linkedin.com/in/ejaquino</span>',
        hire: '<span class="egg-highlight">Let\'s talk!</span> Reach out at <span class="egg-link">ejaquino26@gmail.com</span>\nOpen to: NetSuite Architecture, Integration Strategy,\nERP Modernization, Technical Advisory'
    };

    toggle.addEventListener('click', function() {
        var isOpen = overlay.classList.toggle('open');
        if (isOpen) input.focus();
    });

    // Close on click outside
    document.addEventListener('click', function(e) {
        if (overlay.classList.contains('open') && !overlay.contains(e.target) && e.target !== toggle) {
            overlay.classList.remove('open');
        }
    });

    input.addEventListener('keydown', function(e) {
        if (e.key !== 'Enter') return;
        var cmd = input.value.trim().toLowerCase();
        input.value = '';
        if (!cmd) return;

        // Echo the command
        var cmdLine = document.createElement('div');
        cmdLine.className = 'egg-line';
        cmdLine.textContent = '$ ' + cmd;
        cmdLine.style.color = 'var(--text-primary)';
        body.appendChild(cmdLine);

        if (cmd === 'clear') {
            body.textContent = '';
        } else if (cmd === 'exit') {
            overlay.classList.remove('open');
        } else {
            var response = commands[cmd];
            if (!response) {
                response = 'Command not found: <span class="egg-highlight">' + cmd + '</span>. Type <span class="egg-highlight">help</span> for available commands.';
            }
            var lines = response.split('\n');
            lines.forEach(function(line) {
                var el = document.createElement('div');
                el.className = 'egg-line egg-response';
                el.textContent = line;
                body.appendChild(el);
            });
        }
        body.scrollTop = body.scrollHeight;
    });
})();
```

> **Note:** The commands object uses HTML for highlighting. Since these are all hardcoded strings (no user input), we need to use a safe rendering approach. The JS above uses `textContent` which strips HTML. For the help/whoami/etc responses, we'll handle the highlighting differently — see the actual implementation which should use textContent for user commands and safe DOM construction for responses.

**Step 5: Test**
- Click `[>_]` button → terminal opens
- Type `help` → shows command list
- Type `whoami`, `skills`, `projects`, `contact`, `hire` → shows responses
- Type `clear` → clears terminal
- Type `exit` → closes terminal
- Click outside → closes terminal

**Step 6: Commit**

```bash
git add site/index.html
git commit -m "feat: add easter egg terminal"
```

---

### Task 9: Section Separators

**Files:**
- Modify: `site/index.html` (CSS + HTML)

**Step 1: Add CSS** (insert before `/* RESPONSIVE */` section)

```css
/* ══════════════════════════════════════════
   SECTION SEPARATORS
   ══════════════════════════════════════════ */
.section-sep {
    display: flex;
    justify-content: center;
    padding: 0;
    overflow: hidden;
}

.section-sep-line {
    width: 120px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--cyan-dim), transparent);
    transform: scaleX(0);
    transition: transform 1s var(--ease-out-expo);
}

.section-sep-line.visible {
    transform: scaleX(1);
}
```

**Step 2: Add HTML** (insert a separator `<div>` between each major section)

Between every `</section>` and the next `<!-- section -->`, add:

```html
<div class="section-sep reveal"><div class="section-sep-line"></div></div>
```

Place separators between: Hero→Stats, Stats→About, About→Methodology, Methodology→Certifications, Certifications→Ecosystem, Ecosystem→Verticals, Verticals→Experience, Experience→Projects, Projects→Skills, Skills→Philosophy, Philosophy→Insights, Insights→Education, Education→Downloads, Downloads→Contact.

**Step 3: Update the scroll reveal JS** to also handle `.section-sep-line` elements — when the parent `.section-sep` becomes visible, add `visible` class to the child line.

**Step 4: Test** — thin cyan line draws outward from center between each section on scroll

**Step 5: Commit**

```bash
git add site/index.html
git commit -m "feat: add animated section separators"
```

---

### Task 10: Enhanced Section Transitions

**Files:**
- Modify: `site/index.html` (CSS + JS)

**Step 1: Add CSS variations** (modify existing `.reveal` styles)

```css
/* Additional reveal variations */
.reveal-scale {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
    transition: opacity 0.8s var(--ease-out-expo), transform 0.8s var(--ease-out-expo);
}

.reveal-scale.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.reveal-up-far {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s var(--ease-out-expo), transform 1s var(--ease-out-expo);
}

.reveal-up-far.visible {
    opacity: 1;
    transform: translateY(0);
}
```

**Step 2: Apply variation classes** to select section headers throughout the HTML:
- Add `reveal-scale` to the certifications grid, architecture diagram
- Add `reveal-up-far` to the methodology steps, philosophy grid
- Increase `--i` stagger multiplier from `0.08s` to `0.1s` in `.stagger-children .reveal`

**Step 3: Update stagger timing**

Change in CSS:
```css
.stagger-children .reveal { transition-delay: calc(var(--i, 0) * 0.1s); }
```

**Step 4: Test** — sections should feel more dynamic with varied animation types

**Step 5: Commit**

```bash
git add site/index.html
git commit -m "feat: enhanced section transition animations"
```

---

### Task 11: Final Integration & Push

**Step 1: Update nav links** to include new sections (add Methodology, Certifications to nav)

**Step 2: Full manual test**
- Desktop: all 10 features working, no layout breaks
- Tablet (900px): grids collapse properly
- Mobile (640px): all sections stack, hamburger menu works, easter egg is full-width bottom sheet
- Small mobile (380px): no overflow, readable text

**Step 3: Commit and push**

```bash
git add site/index.html
git push
```

**Step 4: Verify deployment**

```bash
gh api repos/erickaquino/erickaquino.github.io/pages --jq '.status'
```

Expected: `built`
