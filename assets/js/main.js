document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu ul li a');

  navLinks.forEach(link => {
    // Obtem o href do link
    const linkPath = link.getAttribute('href');
    // Se o linkPath for 'index.html' e o caminho atual for "/" ou "/index.html", marca-o como ativo
    if ((currentPath === '/' || currentPath.endsWith('/index.html')) && linkPath === 'index.html') {
      link.classList.add('active');
    }
    // Caso contrário, se o currentPath incluir o linkPath (ex.: "calculadora-renal.html")
    else if (currentPath.includes(linkPath) && linkPath !== 'index.html') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
