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