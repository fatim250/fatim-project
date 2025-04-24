let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

// Function to show the next slide
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0'; // Hide all slides
    }
    
    currentSlideIndex++;
    
    if (currentSlideIndex > slides.length) {
        currentSlideIndex = 1;
    }

    slides[currentSlideIndex - 1].style.opacity = '1'; // Show the current slide

    // Automatically move to the next slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Initial call to start the slideshow
showSlides();
