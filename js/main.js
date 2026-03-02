const navbar = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('activated');
});