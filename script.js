function toggleMenu() {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}


let currentIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Loop back to the first slide if out of range
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    // Hide all slides and deactivate all dots
    slides.forEach(slide => (slide.style.display = 'none'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Show the current slide and activate the corresponding dot
    slides[currentIndex].style.display = 'block';
    dots[currentIndex].classList.add('active');
}

function currentSlide(index) {
    currentIndex = index - 1; // Adjust index for zero-based array
    showSlides(currentIndex);
}

// Automatic slideshow
function autoSlide() {
    currentIndex++;
    showSlides(currentIndex);
    setTimeout(autoSlide, 5000); // Change slide every 5 seconds
}

// Initialize the slideshow
showSlides(currentIndex);
autoSlide();
