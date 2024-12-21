// script.js

window.addEventListener('load', () => {
    const images = document.querySelectorAll('.image img');
    images.forEach(image => {
        image.classList.add('loaded'); // A classe "loaded" é aplicada para animar as imagens
    });
});
