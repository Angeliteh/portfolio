class TemplateLoader {
  static get baseUrl() {
    // Detectar si estamos en GitHub Pages y ajustar la ruta base
    const isGitHubPages = window.location.hostname.includes('github.io');
    const projectPath = isGitHubPages ? '/portafolio' : '';
    
    // Si estamos en una página de proyecto, ajustar la ruta relativa
    const isProjectPage = window.location.pathname.includes('/proyectos/');
    return isGitHubPages ? 
      projectPath : 
      (isProjectPage ? '..' : '');
  }

  static async loadSidebar() {
    try {
      // Construir la ruta correcta para el sidebar
      const sidebarPath = `${this.baseUrl}/templates/sidebar.html`;
      console.log('Intentando cargar sidebar desde:', sidebarPath); // Debug
      
      const response = await fetch(sidebarPath);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const html = await response.text();
      document.getElementById('sidebar-container').innerHTML = html;
      
      this.initSidebarEvents();
    } catch (error) {
      console.error('Error cargando el sidebar:', error);
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





