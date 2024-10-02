const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.navbar .fa-bars-staggered'); // Icono para abrir menú
const menuClose = document.querySelector('.menu-close');

menuToggle.addEventListener('click', () => {
    menu.classList.add('open');
    document.body.classList.add('menu-open'); // Deshabilitar scroll
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('open');
    document.body.classList.remove('menu-open'); // Habilitar scroll
});