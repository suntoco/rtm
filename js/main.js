document.addEventListener('DOMContentLoaded', function() {
    // Fade-in animation on scroll
    const sections = document.querySelectorAll('section');
    function revealSection() {
        const trigger = window.innerHeight * 0.85;
        sections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if (rect.top < trigger) {
                sec.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealSection);
    revealSection();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Optional: Prevent form submit reload
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Cảm ơn bạn đã liên hệ!');
            form.reset();
        });
    }
});