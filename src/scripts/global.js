// Tema oscuro/claro toggle
const toggleButton = document.getElementById('toggleMode');
const navbar = document.querySelector('.navbar');
const body = document.body;
const footer = document.querySelector('.footer');
const allSections = document.querySelectorAll('section');
const skillDivs = document.querySelectorAll('.skills-grid div');
const backToTopBtn = document.getElementById('back-to-top');
const lightGradients = document.querySelector('.light-gradients');
const darkGradients = document.querySelector('.dark-gradients');
//Poner de primeras el tema oscuro
document.addEventListener('DOMContentLoaded', () => {
  applyDarkMode();
});

// Verificar tema guardado
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'dark') {
  applyDarkMode();
}

toggleButton.addEventListener('click', () => {
  if (body.classList.contains('dark-mode-fondo')) {
    removeDarkMode();
    localStorage.setItem('theme', 'light');
  } else {
    applyDarkMode();
    localStorage.setItem('theme', 'dark');
  }
});

function applyDarkMode() {
  body.classList.add('dark-mode-fondo');
  navbar.classList.add('dark-mode-navbar');
  footer.classList.add('dark-mode-footer');
  
  allSections.forEach(section => {
    section.classList.add('dark-mode-section');
  });
  
  skillDivs.forEach(div => {
    div.classList.add('dark-mode-skill');
  });
  
  if (backToTopBtn) {
    backToTopBtn.classList.add('dark-mode-back-to-top');
  }
  
  // Cambiar gradientes del SVG
  if (lightGradients && darkGradients) {
    lightGradients.style.display = 'none';
    darkGradients.style.display = 'block';
  }
}

function removeDarkMode() {
  body.classList.remove('dark-mode-fondo');
  navbar.classList.remove('dark-mode-navbar');
  footer.classList.remove('dark-mode-footer');
  
  allSections.forEach(section => {
    section.classList.remove('dark-mode-section');
  });
  
  skillDivs.forEach(div => {
    div.classList.remove('dark-mode-skill');
  });
  
  if (backToTopBtn) {
    backToTopBtn.classList.remove('dark-mode-back-to-top');
  }
  
  // Cambiar gradientes del SVG
  if (lightGradients && darkGradients) {
    lightGradients.style.display = 'block';
    darkGradients.style.display = 'none';
  }
}

// Scroll behavior para navbar
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Back to top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Intersection Observer para animación de aparición
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

allSections.forEach(section => {
  observer.observe(section);
});
