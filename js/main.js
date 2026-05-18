const navbar = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger-menu');

if (navbar && hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('activated');
    const isOpen = navbar.classList.contains('activated');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
}
