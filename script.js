const menuButton = document.querySelector('#menuBtn');
const navigation = document.querySelector('#nav');
const header = document.querySelector('#header');
const languageButton = document.querySelector('.language-btn');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
  navigation.classList.toggle('active', !isOpen);
});

document.querySelectorAll('#nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('active');
  });
});

window.addEventListener('scroll', () => {
  header.classList.toggle('has-shadow', window.scrollY > 50);
});

const revealElements = document.querySelectorAll(
  '.expertise-card, .product-card, .service, .restaurant-point, .gallery-item, .quality-content'
);

revealElements.forEach((element) => element.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

const translations = {
  Accueil: 'Home',
  'Notre expertise': 'Our expertise',
  'Nos pains': 'Our breads',
  'Nos services': 'Our services',
  Restaurateurs: 'Restaurants',
  Contact: 'Contact'
};
let currentLanguage = 'FR';

languageButton?.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'FR' ? 'EN' : 'FR';
  languageButton.textContent = currentLanguage;
  document.documentElement.lang = currentLanguage === 'EN' ? 'en' : 'fr';

  document.querySelectorAll('#nav a').forEach((link) => {
    const french = link.dataset.fr || link.textContent.trim();
    link.dataset.fr = french;
    link.textContent = currentLanguage === 'EN' ? (translations[french] || french) : french;
  });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) current = section.id;
  });
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
