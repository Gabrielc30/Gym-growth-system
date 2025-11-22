// =================================
// CALCULADORA ROI
// =================================

function calculateROI() {
const cuotaInput = document.getElementById(‘cuotaInput’);
const resultValue = document.querySelector(’.result-value’);
const resultAnnual = document.querySelector(’.result-annual’);

```
const cuota = parseInt(cuotaInput.value) || 0;
const mensual = cuota * 20;
const anual = mensual * 12;

// Formatear números con separador de miles
const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

resultValue.textContent = `$${formatNumber(mensual)}`;
resultAnnual.textContent = `($${formatNumber(anual)} al año)`;
```

}

// Inicializar calculadora al cargar
document.addEventListener(‘DOMContentLoaded’, () => {
calculateROI();
});

// =================================
// SMOOTH SCROLL
// =================================

function scrollToContact() {
const contactSection = document.getElementById(‘contacto’);
if (contactSection) {
contactSection.scrollIntoView({
behavior: ‘smooth’,
block: ‘start’
});
}
}

// =================================
// FORMULARIO DE CONTACTO
// =================================

document.getElementById(‘contactForm’).addEventListener(‘submit’, function(e) {
e.preventDefault();

```
// Obtener valores del formulario
const nombre = document.getElementById('nombre').value;
const gimnasio = document.getElementById('gimnasio').value;
const telefono = document.getElementById('telefono').value;
const socios = document.getElementById('socios').value;

// Validaciones básicas
if (!nombre || !gimnasio || !telefono || !socios) {
    alert('Por favor, completá todos los campos');
    return;
}

// Formatear mensaje para WhatsApp
const mensaje = `¡Hola! Quiero información sobre el Gym Growth System 🦾
```

📋 *Mis datos:*
👤 Nombre: ${nombre}
🏋️ Gimnasio: ${gimnasio}
📱 WhatsApp: ${telefono}
👥 Socios actuales: ${socios}

Quiero conseguir 20+ socios nuevos en 30 días.`;

```
// Codificar mensaje para URL
const mensajeCodificado = encodeURIComponent(mensaje);

// Número de WhatsApp (CAMBIAR POR TU NÚMERO REAL)
const numeroWhatsApp = '5493764000000'; // Formato: código país + código área + número

// Construir URL de WhatsApp
const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

// Abrir WhatsApp en nueva ventana
window.open(urlWhatsApp, '_blank');

// Opcional: Limpiar formulario después de enviar
// document.getElementById('contactForm').reset();

// Opcional: Mostrar mensaje de confirmación
showConfirmationMessage();
```

});

// =================================
// MENSAJE DE CONFIRMACIÓN
// =================================

function showConfirmationMessage() {
const form = document.getElementById(‘contactForm’);
const confirmMessage = document.createElement(‘div’);
confirmMessage.className = ‘confirmation-message’;
confirmMessage.innerHTML = `<div style=" background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 1.5rem; border-radius: 1rem; text-align: center; margin-top: 1rem; animation: fadeInUp 0.5s ease-out; "> <strong style="font-size: 1.25rem;">✅ ¡Perfecto!</strong><br> <span style="font-size: 1rem;">Te estoy redirigiendo a WhatsApp...</span> </div>`;

```
form.appendChild(confirmMessage);

// Remover mensaje después de 5 segundos
setTimeout(() => {
    confirmMessage.remove();
}, 5000);
```

}

// =================================
// NAVEGACIÓN STICKY
// =================================

let lastScroll = 0;
const nav = document.querySelector(’.nav’);

window.addEventListener(‘scroll’, () => {
const currentScroll = window.pageYOffset;

```
if (currentScroll <= 0) {
    nav.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
    return;
}

if (currentScroll > lastScroll) {
    // Scroll hacia abajo - ocultar nav
    nav.style.transform = 'translateY(-100%)';
} else {
    // Scroll hacia arriba - mostrar nav
    nav.style.transform = 'translateY(0)';
    nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
}

lastScroll = currentScroll;
```

});

// =================================
// ANIMACIONES AL SCROLL (INTERSECTION OBSERVER)
// =================================

const observerOptions = {
threshold: 0.1,
rootMargin: ‘0px 0px -50px 0px’
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = ‘1’;
entry.target.style.transform = ‘translateY(0)’;
}
});
}, observerOptions);

// Observar elementos para animación
document.addEventListener(‘DOMContentLoaded’, () => {
const animatedElements = document.querySelectorAll(`.problem-card, .solution-card, .faq-item, .testimonial-card, .process-step`);

```
animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    observer.observe(el);
});
```

});

// =================================
// FORMATEO DE TELÉFONO
// =================================

const telefonoInput = document.getElementById(‘telefono’);

telefonoInput.addEventListener(‘input’, function(e) {
// Remover todo excepto números
let value = e.target.value.replace(/\D/g, ‘’);

```
// Limitar a 10 dígitos
if (value.length > 10) {
    value = value.slice(0, 10);
}

// Formatear como: 3764 123456 o similar
if (value.length > 4) {
    value = value.slice(0, 4) + ' ' + value.slice(4);
}

e.target.value = value;
```

});

// =================================
// PREVENIR NÚMEROS NEGATIVOS EN CALCULADORA
// =================================

document.getElementById(‘cuotaInput’).addEventListener(‘input’, function(e) {
if (e.target.value < 0) {
e.target.value = 0;
}
});

// =================================
// DETECTAR DISPOSITIVO MÓVIL
// =================================

function isMobile() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Ajustar experiencia para móviles
if (isMobile()) {
// Hacer que los links de teléfono sean clickeables
const phoneLinks = document.querySelectorAll(‘a[href^=“tel:”]’);
phoneLinks.forEach(link => {
link.style.pointerEvents = ‘auto’;
});
}

// =================================
// TRACKING (OPCIONAL - GOOGLE ANALYTICS)
// =================================

// Función para trackear eventos importantes
function trackEvent(eventName, eventData = {}) {
// Si tenés Google Analytics instalado, descomentá esto:
/*
if (typeof gtag !== ‘undefined’) {
gtag(‘event’, eventName, eventData);
}
*/

```
// Por ahora solo logueamos en consola
console.log('Event tracked:', eventName, eventData);
```

}

// Trackear clicks en CTAs
document.querySelectorAll(’.cta-button’).forEach(button => {
button.addEventListener(‘click’, () => {
trackEvent(‘cta_click’, {
button_text: button.textContent.trim(),
button_location: button.closest(‘section’)?.className || ‘unknown’
});
});
});

// Trackear envío de formulario
document.getElementById(‘contactForm’).addEventListener(‘submit’, () => {
trackEvent(‘form_submit’, {
form_name: ‘contact_form’
});
});

// Trackear clicks en WhatsApp
document.querySelector(’.whatsapp-float’)?.addEventListener(‘click’, () => {
trackEvent(‘whatsapp_click’, {
button_type: ‘floating’
});
});

// =================================
// MANEJO DE ERRORES DE FORMULARIO
// =================================

function validateForm() {
const nombre = document.getElementById(‘nombre’).value.trim();
const gimnasio = document.getElementById(‘gimnasio’).value.trim();
const telefono = document.getElementById(‘telefono’).value.replace(/\D/g, ‘’);
const socios = document.getElementById(‘socios’).value;

```
let isValid = true;
let errorMessage = '';

if (nombre.length < 2) {
    errorMessage = 'Por favor, ingresá tu nombre completo';
    isValid = false;
} else if (gimnasio.length < 2) {
    errorMessage = 'Por favor, ingresá el nombre de tu gimnasio';
    isValid = false;
} else if (telefono.length < 10) {
    errorMessage = 'Por favor, ingresá un número de teléfono válido';
    isValid = false;
} else if (!socios) {
    errorMessage = 'Por favor, seleccioná cuántos socios tenés';
    isValid = false;
}

if (!isValid) {
    showError(errorMessage);
}

return isValid;
```

}

function showError(message) {
// Crear elemento de error si no existe
let errorDiv = document.querySelector(’.form-error’);

```
if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = `
        background: #fee2e2;
        color: #991b1b;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        border: 2px solid #fca5a5;
        text-align: center;
        font-weight: 600;
    `;
    
    const form = document.getElementById('contactForm');
    form.insertBefore(errorDiv, form.firstChild);
}

errorDiv.textContent = message;

// Remover error después de 5 segundos
setTimeout(() => {
    errorDiv.remove();
}, 5000);
```

}

// =================================
// LAZY LOADING PARA IMÁGENES (SI AGREGAS)
// =================================

if (‘IntersectionObserver’ in window) {
const imageObserver = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const img = entry.target;
img.src = img.dataset.src;
img.classList.add(‘loaded’);
imageObserver.unobserve(img);
}
});
});

```
// Si agregas imágenes con data-src, este código las cargará lazy
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});
```

}

// =================================
// CONSOLA DE DESARROLLO
// =================================

console.log(’%c🦾 Gym Growth System’, ‘font-size: 20px; font-weight: bold; color: #6366f1;’);
console.log(’%cWeb desarrollada con ❤️ por Gabriel’, ‘font-size: 12px; color: #666;’);
console.log(’%c¿Necesitás una web así para tu negocio? Contactame!’, ‘font-size: 12px; color: #10b981;’);

// =================================
// PERFORMANCE MONITORING (OPCIONAL)
// =================================

// Medir tiempo de carga
window.addEventListener(‘load’, () => {
const loadTime = performance.now();
console.log(`Página cargada en ${Math.round(loadTime)}ms`);

```
// Si tenés analytics:
// trackEvent('page_load_time', { duration: Math.round(loadTime) });
```

});
