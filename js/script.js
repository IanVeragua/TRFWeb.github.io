let currentSlide = 0;
const slides = document.querySelectorAll('.slides');

showSlide(currentSlide);

function changeSlide(n) {
    currentSlide += n;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

setInterval(() => {
    changeSlide(1);
}, 3000);

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card-body").forEach(card => {
        let textContainer = card.querySelector(".text-container");
        let toggleLabel = card.querySelector(".label-toggle");

        // Verifica si el contenido supera el alto inicial
        if (textContainer.scrollHeight > textContainer.clientHeight) {
            toggleLabel.style.display = "block"; // Muestra "Leer más"
        }
    });
});