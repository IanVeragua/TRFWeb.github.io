let currentSlide = 0;
const slides = document.querySelectorAll('.slides');

function changeSlide(n) {
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    showSlide(currentSlide);
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

setInterval(() => changeSlide(1), 3000);
showSlide(currentSlide);
