/* Progressive enhancement: content and destinations work without JavaScript. */
(() => {
  document.addEventListener('keydown', () => document.body.classList.add('keyboard-input'));
  document.addEventListener('pointerdown', () => document.body.classList.remove('keyboard-input'));
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.hidden = false;
    toggle.closest('nav').classList.add('nav-enhanced');
    const close = (restore) => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
      if (restore) toggle.focus();
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      links.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    links.addEventListener('click', (event) => { if (event.target.closest('a')) close(false); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') close(true); });
    document.addEventListener('click', (event) => { if (!event.target.closest('nav')) close(false); });
    window.matchMedia('(min-width: 701px)').addEventListener('change', () => close(false));
  }
  const explorer = document.getElementById('approachExplorer');
  if (explorer) {
    const tablist = explorer.querySelector('.scenario-tabs');
    const tabs = Array.from(explorer.querySelectorAll('.scenario-tab'));
    const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
    if (tablist && tabs.length && panels.every(Boolean)) {
      const activate = (index, focus = false) => {
        tabs.forEach((tab, i) => { tab.setAttribute('aria-selected', String(i === index)); tab.tabIndex = i === index ? 0 : -1; panels[i].hidden = i !== index; });
        if (focus) tabs[index].focus();
      };
      tablist.setAttribute('role', 'tablist');
      tablist.setAttribute('aria-orientation', 'vertical');
      tabs.forEach((tab, index) => {
        tab.setAttribute('role', 'tab');
        panels[index].setAttribute('role', 'tabpanel');
        panels[index].setAttribute('aria-labelledby', tab.id);
        panels[index].tabIndex = 0;
        tab.addEventListener('click', () => activate(index));
        tab.addEventListener('keydown', (event) => {
          let next;
          if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
          if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
          if (event.key === 'Home') next = 0;
          if (event.key === 'End') next = tabs.length - 1;
          if (next !== undefined) { event.preventDefault(); activate(next, true); }
        });
      });
      activate(tabs.length - 1);
      tablist.hidden = false;
      explorer.classList.add('approach-enhanced');
    }
  }
  if (navigator.clipboard && window.isSecureContext) {
    const status = document.getElementById('copyStatus');
    let timeout;
    document.querySelectorAll('[data-copy-email]').forEach(button => {
      button.hidden = false;
      button.addEventListener('click', async () => {
        button.disabled = true;
        try { await navigator.clipboard.writeText(button.dataset.copyEmail); status.textContent = 'Email copied.'; }
        catch { status.textContent = 'Could not copy. Select the email address or use the email link.'; }
        finally { button.disabled = false; window.clearTimeout(timeout); timeout = window.setTimeout(() => { status.textContent = ''; }, 5000); }
      });
    });
  }
})();
