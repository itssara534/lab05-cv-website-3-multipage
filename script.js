// Enable page switching (if this file fails to load, all pages stay visible)
document.documentElement.classList.add('js');

const pages = document.querySelectorAll('.page');
const navLinkEls = document.querySelectorAll('.nav-link');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

// Show one page based on the URL hash
// (#home, #about, #projects, #contact, #certificates)
function route() {
  let name = (location.hash || '#home').replace('#', '');
  if (!document.getElementById('page-' + name)) name = 'home';

  pages.forEach(p => p.classList.toggle('active', p.id === 'page-' + name));
  navLinkEls.forEach(l => l.classList.toggle('active', l.dataset.page === name));

  document.title = 'Sara Ahmad | ' + name.charAt(0).toUpperCase() + name.slice(1);
  if (navLinks) navLinks.classList.remove('open');
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', route);
route();

// Mobile menu
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Footer year
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();

// Contact form (opens the user's email app with the message filled in)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('message').value;
    const subject = encodeURIComponent('Portfolio message from ' + name);
    const body = encodeURIComponent(msg + '\n\nFrom: ' + name + ' (' + email + ')');
    window.location.href = 'mailto:itssara198@gmail.com?subject=' + subject + '&body=' + body;
  });
}