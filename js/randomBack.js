document.addEventListener("DOMContentLoaded", function () {
    const backgrounds = ['fondo1.jpg', 'fondo2.jpg', 'fondo3.jpg', 'fondo4.jpg'];
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const body = document.getElementById('body');
    body.style.backgroundImage = `url('/img/${backgrounds[randomIndex]}')`;
});
