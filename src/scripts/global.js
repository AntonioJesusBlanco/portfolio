// Espera a que DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const backToTop = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section');

  // Función para revelar secciones al hacer scroll
  function scrollHandler() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      backToTop.style.display = 'block';
    } else {
      navbar.classList.remove('scrolled');
      backToTop.style.display = 'none';
    }

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', scrollHandler);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Ejecutar una vez para mostrar visible secciones iniciales
  scrollHandler();
});
