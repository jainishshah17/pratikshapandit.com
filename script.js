// Smooth scrolling for navigation links
const navbar = document.querySelector('#navbar');
const navMenu = document.querySelector('.nav-menu');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });

            // Close mobile menu if open
            if (navMenu) navMenu.classList.remove('active');
        }
    });
});

// Mobile menu toggle
if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container') && navMenu && mobileMenuToggle) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// Navbar scroll effect + parallax
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (navbar) {
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    if (!prefersReducedMotion) {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && currentScroll < window.innerHeight) {
            heroContent.style.transform = `translateY(${currentScroll * 0.2}px)`;
            heroContent.style.opacity = Math.max(0.65, 1 - (currentScroll / window.innerHeight) * 0.5);
        }
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll animations for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.education-item, .experience-item, .video-item');

    animateElements.forEach((el, index) => {
        el.classList.add('scroll-animate');
        el.style.transitionDelay = `${Math.min(index, 8) * 0.08}s`;
        observer.observe(el);
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm && formMessage) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        try {
            const mailtoLink = `mailto:jainishshah@yahoo.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;

            window.location.href = mailtoLink;

            formMessage.textContent = 'Your email client will open. Please send the message from there.';
            formMessage.className = 'form-message success';

            contactForm.reset();

            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);

        } catch (error) {
            formMessage.textContent = 'Something went wrong. Please try again or email directly.';
            formMessage.className = 'form-message error';
        }
    });
}

// Lazy loading for YouTube videos
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const iframe = entry.target.querySelector('iframe');
            if (iframe && !iframe.src && iframe.dataset.src) {
                iframe.src = iframe.dataset.src;
            }
            videoObserver.unobserve(entry.target);
        }
    });
}, { rootMargin: '150px' });

document.querySelectorAll('.video-item').forEach(video => {
    videoObserver.observe(video);
});

// Smooth reveal for hero elements
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.fade-in');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, prefersReducedMotion ? 0 : index * 200);
    });
});

// Add animation to section titles when they come into view
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.section-title').forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(30px)';
    title.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    titleObserver.observe(title);
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

console.log('%c👋 Hello! Welcome to Pratiksha Pandit\'s Portfolio', 'font-size: 20px; font-weight: bold; color: #6366f1;');
