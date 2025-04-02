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

  // Lógica do menu hamburger para mobile
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  if (!hamburger) {
    console.warn("Elemento com id 'hamburger' não encontrado.");
  }
  if (!navMenu) {
    console.warn("Elemento com id 'nav-menu' não encontrado.");
  }
  
  // Garante que o botão tenha type="button"
  if (hamburger && !hamburger.getAttribute('type')) {
    hamburger.setAttribute('type', 'button');
  }
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      navMenu.classList.toggle('open');
      console.log('Hamburger clicado. Estado atual do nav-menu:', navMenu.className);
    });
  }
});
