class TemplateLoader {
  static async loadSidebar() {
    try {
      const response = await fetch('/templates/sidebar.html');
      const html = await response.text();
      document.getElementById('sidebar-container').innerHTML = html;
      
      // Inicializar eventos del sidebar
      this.initSidebarEvents();
    } catch (error) {
      console.error('Error cargando el sidebar:', error);
    }
  }

  static initSidebarEvents() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const menu = document.getElementById('menu');

    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        menu.classList.add('active');
      });
    }

    if (menuClose) {
      menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Ajustar las rutas de navegación según la ubicación actual
  function adjustNavLinks() {
    const isProjectPage = window.location.pathname.includes('/proyectos/');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      const section = link.getAttribute('href').split('#')[1];
      if (isProjectPage) {
        // Si estamos en una página de proyecto, añadir la ruta relativa al index
        link.href = `../index.html#${section}`;
      } else {
        // Si estamos en la página principal, usar enlaces locales
        link.href = `#${section}`;
      }
    });
  }

  // Cargar el sidebar y ajustar los enlaces
  TemplateLoader.loadSidebar().then(() => {
    adjustNavLinks();
  });
});

// Después de cargar el sidebar
$(document).ready(function() {
    // Ajustar las rutas de navegación según la ubicación actual
    function adjustNavLinks() {
        const isProjectPage = window.location.pathname.includes('/proyectos/');
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            if (isProjectPage) {
                // Si estamos en una página de proyecto, añadir la ruta relativa al index
                link.href = '../index.html' + link.getAttribute('href');
            } else {
                // Si estamos en la página principal, dejar los enlaces como están
                link.href = link.getAttribute('href');
            }
        });
    }

    // Llamar a la función después de cargar el sidebar
    adjustNavLinks();
});


