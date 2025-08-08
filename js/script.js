// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// WhatsApp Integration
function openWhatsApp(plan) {
    const phoneNumber = '553897290904'; //  Numero de telefone do WhatsApp
    // Mensagem personalizada baseada no plano selecionado
    let message = '';

    switch (plan) {
        case 'basico':
            message = 'Olá! Tenho interesse no *Plano Básico* de Zaappyy TV por R$ 24,99/mês. Gostaria de mais informações sobre como assinar.';
            break;
        case 'premium':
            message = 'Olá! Tenho interesse no *Plano Premium* de Zaappyy TV por R$ 34,99/mês. Gostaria de mais informações sobre como assinar.';
            break;
        default:
            message = 'Olá! Gostaria de saber mais sobre os planos de Zaappyy TV.';
    }

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 27, 58, 0.98)';
    } else {
        header.style.background = 'rgba(26, 27, 58, 0.95)';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.benefit-item, .plan-card, .faq-item').forEach(el => {
    observer.observe(el);
});

// Add click tracking for analytics (optional)
function trackClick(element, action) {
    // Aqui você pode adicionar código para rastrear cliques
    // Por exemplo, Google Analytics ou Facebook Pixel
    console.log(`Click tracked: ${element} - ${action}`);
}

// Track plan button clicks
document.querySelectorAll('.plan-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const planName = e.target.closest('.plan-card').querySelector('.plan-header h3').textContent;
        trackClick('plan-button', planName);
    });
});

// Track WhatsApp button clicks
document.querySelectorAll('.btn-whatsapp').forEach(btn => {
    btn.addEventListener('click', () => {
        trackClick('whatsapp-button', 'contact');
    });
});

// Form validation (if you add a contact form later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Add error styles for form validation
const style = document.createElement('style');
style.textContent = `
    .error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
`;
document.head.appendChild(style);

