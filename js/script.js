/* ===========================
   AOS (Animação ao rolar)
=========================== */
AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
});

/* ===========================
   Referências de elementos
=========================== */
const header = document.querySelector(".header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const btnTopo = document.getElementById("btnTopo");
const ultimaSecao = document.querySelector("#contact");

/* ===========================
   Navegação móvel (abrir/fechar)
=========================== */
if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

/* ===========================
   FAQ Accordion
=========================== */
document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains("active");

        // Fecha todos
        document.querySelectorAll(".faq-item").forEach((item) => {
            item.classList.remove("active");
        });

        // Abre o clicado (se não estava ativo)
        if (!isActive) {
            faqItem.classList.add("active");
        }
    });
});

/* ===========================
   WhatsApp (mensagem por plano)
=========================== */
function openWhatsApp(plan) {
    const phoneNumber = "553897290904"; // número do WhatsApp
    let message = "";

    switch (plan) {
        case "basico":
            message =
                "Olá! Tenho interesse no *Plano Top* de Zaappyy TV por R$ 25,00/mês. Gostaria de mais informações sobre como assinar.";
            break;
        case "premium":
            message =
                "Olá! Tenho interesse no *Plano Premium* de Zaappyy TV por R$ 35,00/mês. Gostaria de mais informações sobre como assinar.";
            break;
        default:
            message =
                "Olá! Gostaria de saber mais sobre os planos de Zaappyy TV.";
    }

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;
    window.open(whatsappURL, "_blank");
}

/* ===========================
   Rolagem suave para âncoras
=========================== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (!target || !header) return;

        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    });
});

/* ===========================
   Fundo do header ao rolar
=========================== */
window.addEventListener("scroll", () => {
    if (!header) return;
    header.style.background =
        window.scrollY > 100
            ? "rgba(26, 27, 58, 0.98)"
            : "rgba(26, 27, 58, 0.95)";
});

/* ===========================
   "Loaded" no body
=========================== */
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/* ===========================
   Intersection Observer (entradas)
=========================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animate");
    });
}, observerOptions);

document
    .querySelectorAll(".benefit-item, .plan-card, .faq-item")
    .forEach((el) => observer.observe(el));

/* ===========================
   Tracking (opcional)
=========================== */
function trackClick(element, action) {
    // aqui você pode integrar com GA/Pixel
    console.log(`Click tracked: ${element} - ${action}`);
}

document.querySelectorAll(".plan-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".plan-card");
        if (!card) return;
        const planName = card.querySelector(".plan-header h3")?.textContent || "";
        trackClick("plan-button", planName);
    });
});

document.querySelectorAll(".btn-whatsapp").forEach((btn) => {
    btn.addEventListener("click", () => {
        trackClick("whatsapp-button", "contact");
    });
});

/* ===========================
   Validação de formulário (se houver)
=========================== */
function validateForm(form) {
    const inputs = form.querySelectorAll("input[required], textarea[required]");
    let isValid = true;

    inputs.forEach((input) => {
        if (!input.value.trim()) {
            input.classList.add("error");
            isValid = false;
        } else {
            input.classList.remove("error");
        }
    });

    return isValid;
}

// Estilo para campos com erro
const style = document.createElement("style");
style.textContent = `
  .error {
    border-color: #ef4444 !important;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
  }
`;
document.head.appendChild(style);

/* ===========================
   Botão "voltar ao topo"
   - aparece somente na última seção (#contact)
=========================== */
if (btnTopo && ultimaSecao) {
    window.addEventListener("scroll", () => {
        const rect = ultimaSecao.getBoundingClientRect();
        btnTopo.style.display =
            rect.top <= window.innerHeight / 2 ? "block" : "none";
    });

    btnTopo.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}



