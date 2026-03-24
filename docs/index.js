let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
let slideInterval = setInterval(nextSlide, 5000);

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    
    currentSlide = index;
    
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    // Para o tempo quando o usuário clica manualmente e reinicia
    clearInterval(slideInterval);
    showSlide(currentSlide + direction);
    slideInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}