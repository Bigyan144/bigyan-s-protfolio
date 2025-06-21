document.addEventListener('DOMContentLoaded', function() {
    // 1. Smooth Scrolling for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // 2. Animate Elements on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

    // 3. Animate Skill Bars
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = `${level}%`;
        });
    };

    // 4. Toggle Blog Content
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const content = this.parentElement.querySelector('.full-content');
            const isExpanded = content.classList.toggle('show');
            this.textContent = isExpanded ? 'Read less' : 'Read more';
        });
    });

    // 5. Initialize animations when page loads
    setTimeout(() => {
        animateSkillBars();
        
        // Optional: Add active class to nav items based on scroll position
        window.addEventListener('scroll', highlightNavLink);
        highlightNavLink(); // Call once on load
    }, 500);

    // Helper function to highlight active nav link
    function highlightNavLink() {
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // 6. Basic Form Submission (without email functionality)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! (Note: Form submissions are disabled in this demo)');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
});
