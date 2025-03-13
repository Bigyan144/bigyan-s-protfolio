// Scroll Animation
const sections = document.querySelectorAll('.section');

const revealSections = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Profile Photo Tilt Effect
const profilePhoto = document.querySelector('.profile-photo img');
document.querySelector('#home').addEventListener('mousemove', (e) => {
    const rect = profilePhoto.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = -(y / rect.height) * 20;
    const tiltY = (x / rect.width) * 20;

    profilePhoto.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.1)`;
});

document.querySelector('#home').addEventListener('mouseleave', () => {
    profilePhoto.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});

// Form Submission (Simple Alert)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! (Note: This is a demo; messages are not sent.)');
    this.reset();
});