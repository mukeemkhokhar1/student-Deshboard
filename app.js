// Navigation toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle?.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

// Close nav when link is clicked
siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
  });
});

// Close nav when clicking outside
document.addEventListener('click', (event) => {
  const isNavToggle = event.target.closest('.nav-toggle');
  const isNavOpen = siteNav.classList.contains('open');
  
  if (!isNavToggle && isNavOpen && !event.target.closest('.site-nav')) {
    siteNav.classList.remove('open');
  }
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formFeedback.textContent = 'Please fill in all fields before sending.';
    formFeedback.style.color = '#ef4444';
    return;
  }

  formFeedback.textContent = 'Thanks for your message! I'll respond soon.';
  formFeedback.style.color = '#7c3aed';
  contactForm.reset();
});
