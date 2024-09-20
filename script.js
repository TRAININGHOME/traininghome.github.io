// Al finalizar la animación, se oculta el preloader y se muestra el contenido
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Después de la animación de fadeOut, ocultar el preloader y mostrar el contenido
    preloader.addEventListener('animationend', () => {
        preloader.style.display = 'none';
        content.style.display = 'block';
    });
});
// Mostrar la caja emergente cuando se cargue la página o al hacer clic en un botón
window.addEventListener('load', () => {
    const carouselPopup = document.querySelector('.carousel-popup');
    carouselPopup.style.display = 'flex'; // Mostrar el popup al cargar la página
});

// También puedes añadir un botón de cierre en el HTML y JavaScript para ocultar el popup si es necesario.
