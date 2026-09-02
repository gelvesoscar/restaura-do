// restaura.do — comportamiento del sitio (sin dependencias externas)

// [PENDIENTE-WHATSAPP] Reemplazar por el número de WhatsApp Business real,
// formato internacional sin "+" ni espacios, ej: "573001234567".
// Al reemplazar este valor, todos los botones de WhatsApp del sitio quedan activos.
const WHATSAPP_NUMBER = '573138955486';

// [PENDIENTE-AGENDA] Reemplazar por el link real del sistema de agenda (Calendly u
// otro), conectado al CRM (Bigin) con origen "web".
// Al reemplazar este valor, todos los botones "Agendar..." del sitio quedan activos.
const AGENDA_URL = 'https://calendly.com/gelves-oscar/30min';

function buildWhatsAppUrl(message) {
  const base = 'https://api.whatsapp.com/send';
  const params = new URLSearchParams({ phone: WHATSAPP_NUMBER });
  if (message) params.set('text', message);
  return `${base}?${params.toString()}`;
}

function initWhatsAppLinks() {
  document.querySelectorAll('[data-wa-msg]').forEach((el) => {
    const message = el.getAttribute('data-wa-msg') || '';
    el.setAttribute('href', buildWhatsAppUrl(message));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });
}

function initAgendaLinks() {
  document.querySelectorAll('[data-agenda]').forEach((el) => {
    el.setAttribute('href', AGENDA_URL);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });
}

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initWhatsAppLinks();
  initAgendaLinks();
  initMobileNav();
});
