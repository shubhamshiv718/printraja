// script.js

// --- Slideshow Logic ---
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000); // हर 3 सेकंड में स्लाइड बदलेगा


// --- Contact Form Validation ---
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('कृपया सभी फ़ील्ड सही से भरें।');
    e.preventDefault();
  }
});
