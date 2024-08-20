// Smooth scrolling for navigation links

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    const nameInput = document.getElementById('nameInput').value;
    const emailInput = document.getElementById('emailInput').value;
    const messageInput = document.getElementById('messageInput').value;

    if (!nameInput || !emailInput || !messageInput) {
        alert('Please fill in all fields');
        e.preventDefault();
    }
});

// Circle progress bar (simple static demo implementation)
document.querySelectorAll('.progress-circle').forEach(circle => {
    const progress = circle.getAttribute('data-progress');
    circle.style.background = conic-gradient(#A2CA71 ${progress * 3.6}deg, #ddd ${progress * 3.6}deg);
});