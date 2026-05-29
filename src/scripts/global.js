document.addEventListener('DOMContentLoaded', () => {

  const body = document.body;
  const navbar = document.querySelector('.navbar');
  const footer = document.querySelector('.footer');
  const allSections = document.querySelectorAll('section');
  const skillDivs = document.querySelectorAll('.skills-grid div');
  const backToTopBtn = document.getElementById('back-to-top');
  const lightGradients = document.querySelector('.light-gradients');
  const darkGradients = document.querySelector('.dark-gradients');

  // 🌙 SIEMPRE MODO OSCURO
  applyDarkMode();

  function applyDarkMode() {
    body.classList.add('dark-mode-fondo');
    navbar?.classList.add('dark-mode-navbar');
    footer?.classList.add('dark-mode-footer');

    allSections.forEach(section => {
      section.classList.add('dark-mode-section');
    });

    skillDivs.forEach(div => {
      div.classList.add('dark-mode-skill');
    });

    backToTopBtn?.classList.add('dark-mode-back-to-top');

    if (lightGradients && darkGradients) {
      lightGradients.style.display = 'none';
      darkGradients.style.display = 'block';
    }
  }

});