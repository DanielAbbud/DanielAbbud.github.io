// Inicializa AOS (Animação ao rolar a página
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Alternar navegação móvel
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu móvel ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Accordion de FAQ
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Fecha todos os itens de FAQ
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Abre o item clicado se ele não estiver ativo
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Integração com WhatsApp
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

// Rolagem suave para links de âncora
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

// Alterar fundo do cabeçalho ao rolar a página
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

// Adicionar animação de carregamento
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

// Intersection Observer para animações
document.querySelectorAll('.benefit-item, .plan-card, .faq-item').forEach(el => {
    observer.observe(el);
});

// Adicionar rastreamento de cliques para análise (opcional)
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

// Rastrear cliques nos botões dos planos
document.querySelectorAll('.btn-whatsapp').forEach(btn => {
    btn.addEventListener('click', () => {
        trackClick('whatsapp-button', 'contact');
    });
});

// Rastrear cliques nos botões do WhatsApp
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

// Validação de formulário (caso adicione um formulário de contato depois)
const style = document.createElement('style');
style.textContent = `
    .error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
`;
document.head.appendChild(style);

// Mostrar/esconder botão SOMENTE na última aba
const btnTopo = document.getElementById("btnTopo");
const ultimaSecao = document.querySelector("#contact"); // última seção

window.addEventListener("scroll", () => {
    const posicaoSecao = ultimaSecao.getBoundingClientRect();

    // Se a parte de cima da última seção estiver visível na tela
    if (posicaoSecao.top <= window.innerHeight / 2) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

// Ação do botão para subir
btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


