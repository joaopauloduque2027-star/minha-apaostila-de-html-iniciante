// assets/script.js — behavior for TOC, details toggles, smooth scroll, PDF button
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        // Open the target's details if inside one
        const details = target.closest('details');
        if (details && !details.open) details.open = true;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Move focus for accessibility
        const focusable = target.querySelector('h2, h1, p, a, input, button');
        if (focusable) focusable.focus && focusable.focus();
      }
    });
  });

  // TOC active highlight on scroll
  const tocLinks = Array.from(document.querySelectorAll('.toc a'));
  const sections = tocLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

  function onScroll() {
    let current = sections[0];
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top <= 120) current = sections[i];
    }
    tocLinks.forEach(link => link.classList.toggle('active', document.querySelector(link.getAttribute('href')) === current));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Ensure details expand when linking directly
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      const details = target.closest('details');
      if (details && !details.open) details.open = true;
    }
  }

  // Accessibility: enable keyboard toggle for summaries
  document.querySelectorAll('summary').forEach(function (s) {
    s.setAttribute('tabindex', '0');
    s.addEventListener('keypress', function (e) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        const parent = s.parentElement;
        if (parent.tagName.toLowerCase() === 'details') parent.open = !parent.open;
      }
    });
  });

  // PDF button behavior
  const pdfBtn = document.getElementById('btn-pdf');
  if (pdfBtn) pdfBtn.addEventListener('click', function () { window.print(); });
});
