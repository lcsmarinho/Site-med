// assets/js/main.js

document.addEventListener('DOMContentLoaded', function() {
  console.log("Site da Dr.ª [Nome] carregado com sucesso!");
  
  // Seleciona o botão hamburger e o menu de navegação
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  // Ao clicar no hamburger, alterna a classe "open" para exibir ou esconder o menu
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('open');
    this.classList.toggle('active');
  });
});
