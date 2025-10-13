// Espera a que DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleMode');


    toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-fondo');
    document.querySelector("svg").classList.toggle('dark-mode-fondo');
    let lecciones= Array.from(document.querySelectorAll("section"));
    lecciones.forEach(section => {
      section.classList.toggle('dark-mode-section');
    });
    let descripciones= Array.from(document.querySelectorAll(".certifications-card"));
    descripciones.forEach(descripcion => {
      descripcion.classList.toggle('dark-mode-section');
    });
    let experiencia= Array.from(document.querySelectorAll(".works-card"));
    experiencia.forEach(trabajo => {
      trabajo.classList.toggle('dark-mode-section');
    });
     let skills= Array.from(document.querySelectorAll(".skills-grid div"));
    skills.forEach(skill => {
      skill.classList.toggle('dark-mode-skill');
    });
    let projects= Array.from(document.querySelectorAll(".project-card"));
    projects.forEach(project => {
      project.classList.toggle('dark-mode-section');
    });
    document.querySelector(".navbar").classList.toggle('dark-mode-navbar');
    document.getElementById("back-to-top").classList.toggle('dark-mode-back-to-top');
    let imagenes= Array.from(document.querySelectorAll("section .contact-links img"));
    imagenes.forEach(imagen => {
      imagen.classList.toggle('dark-mode');
    });
    let footer= document.querySelector("footer");
    footer.classList.toggle('dark-mode-footer');



  toggleButton.classList.toggle('dark');


  });



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

    toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-fondo');
    document.querySelector("svg").classList.toggle('dark-mode-fondo');
    let lecciones= Array.from(document.querySelectorAll("section"));
    lecciones.forEach(section => {
      section.classList.toggle('dark-mode-section');
    });
    let descripciones= Array.from(document.querySelectorAll(".certifications-card"));
    descripciones.forEach(descripcion => {
      descripcion.classList.toggle('dark-mode-section');
    });
    let experiencia= Array.from(document.querySelectorAll(".works-card"));
    experiencia.forEach(trabajo => {
      trabajo.classList.toggle('dark-mode-section');
    });
     let skills= Array.from(document.querySelectorAll(".skills-grid div"));
    skills.forEach(skill => {
      skill.classList.toggle('dark-mode-skill');
    });
    let projects= Array.from(document.querySelectorAll(".project-card"));
    projects.forEach(project => {
      project.classList.toggle('dark-mode-section');
    });
    document.querySelector(".navbar").classList.toggle('dark-mode-navbar');
    document.getElementById("back-to-top").classList.toggle('dark-mode-back-to-top');
    let imagenes= Array.from(document.querySelectorAll("section .contact-links img"));
    imagenes.forEach(imagen => {
      imagen.classList.toggle('dark-mode');
    });
    let footer= document.querySelector("footer");
    footer.classList.toggle('dark-mode-footer');



  toggleButton.classList.toggle('dark');


  });

  });

