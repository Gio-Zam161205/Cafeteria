const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.navbar .fa-bars-staggered'); // Icono para abrir menú
const menuClose = document.querySelector('.menu-close');

menuToggle.addEventListener('click', () => {
    menu.classList.add('open');
    document.body.classList.add('menu-open');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('open');
    document.body.classList.remove('menu-open');
});

// section menu destacados
document.querySelectorAll('.container-options span').forEach(option => {
    option.addEventListener('click', function() {
        // Remover la clase 'active' de todos los spans dentro de "Mejores Productos"
        document.querySelectorAll('.container-options span').forEach(span => {
            span.classList.remove('active');
        });

        // Agregar la clase 'active' al span seleccionado
        this.classList.add('active');

        // Obtener el filtro seleccionado
        const filter = this.getAttribute('data-filter');

        // Mostrar/Ocultar productos solo dentro de los contenedores
        document.querySelectorAll('#mejores-productos .card-product').forEach(product => {
            if (product.classList.contains(filter)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
