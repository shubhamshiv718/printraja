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
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('कृपया सभी फ़ील्ड सही से भरें।');
      e.preventDefault();
    }
  });
}


// --- ✅ Order Form Submission (via WhatsApp) ---
const orderForm = document.getElementById("orderForm");
if (orderForm) {
  orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("orderName").value.trim();
    const phone = document.getElementById("orderPhone").value.trim();
    const email = document.getElementById("orderEmail").value.trim();
    const address = document.getElementById("orderAddress").value.trim();
    const service = document.getElementById("orderService").value;
    const message = document.getElementById("orderMessage").value.trim();

    const status = document.getElementById("orderStatus");

    if (!name || !phone || !address || !service) {
      status.style.color = "red";
      status.textContent = "❌ कृपया सभी आवश्यक जानकारी भरें।";
      return;
    }

    // ✅ Success Message पहले दिखाएं
    status.style.color = "green";
    status.textContent = "✅ Order sent on WhatsApp!";

    const finalMessage = `🛒 *New Order - PrintRaja.in*%0A
👤 Name: ${name}%0A
📞 Phone: ${phone}%0A
📧 Email: ${email}%0A
🏠 Address: ${address}%0A
🛒 Service: ${service}%0A
📝 Note: ${message}%0A
📎 Please send your file here on WhatsApp.`;

    // ✅ WhatsApp redirect
    setTimeout(() => {
      window.open(`https://wa.me/918851006891?text=${encodeURIComponent(finalMessage)}`, '_blank');
    }, 500); // थोड़ी देर में redirect (message दिखने के बाद)

    // ✅ Form Reset करें
    orderForm.reset();
  });
}

