window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var boton = document.getElementById('boton');
    var imagen = document.getElementById('imagen_logo');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'rgba(30, 57, 50, 0.7)'; /* Cambia el color de fondo al hacer scroll */
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; /* Agrega sombra */
        boton.style.Color = '#1E3932';
        navbar.classList.add('shrink');
        imagen
    } else {
        navbar.style.backgroundColor = '';
        navbar.style.boxShadow = 'none'; /* Elimina la sombra */
        boton.style.backgroundColor = '';
        navbar.classList.remove('shrink');
    }
});
