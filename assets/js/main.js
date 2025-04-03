document.addEventListener('DOMContentLoaded', function() {
  // Ativação automática do link ativo com base no URL
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu ul li a');
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if ((currentPath === '/' || currentPath.endsWith('/index.html')) && linkPath === 'index.html') {
      link.classList.add('active');
    } else if (currentPath.includes(linkPath) && linkPath !== 'index.html') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Menu hamburger para mobile
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      navMenu.classList.toggle('open');
      console.log('Hamburger clicado. Estado atual do nav-menu:', navMenu.className);
    });
  } else {
    console.warn("Não foi possível encontrar 'hamburger' ou 'nav-menu'.");
  }

  // FAQ Accordion (se houver FAQs na página)
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length) {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', () => {
          item.classList.toggle('active');
        });
      }
    });
  }

  // Modal de Resultado (para Calculadora)
  const modal = document.getElementById('resultModal');
  const modalClose = document.getElementById('modalClose');
  if (modal && modalClose) {
    modalClose.addEventListener('click', () => {
      modal.style.display = "none";
    });
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // Carregar FAQs extras via IntersectionObserver (se houver)
  const faqSentinel = document.getElementById('faq-sentinel');
  const extraFaqs = document.querySelectorAll('.extra-faq');
  if (faqSentinel && extraFaqs.length) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            extraFaqs.forEach(item => {
              item.classList.remove('hidden');
              item.style.opacity = "1";
              item.style.maxHeight = "300px";
            });
            observer.unobserve(faqSentinel);
          }
        });
      }, { threshold: 0.5 });
      observer.observe(faqSentinel);
    } else {
      extraFaqs.forEach(item => {
        item.classList.remove('hidden');
        item.style.opacity = "1";
        item.style.maxHeight = "300px";
      });
    }
  }
});
