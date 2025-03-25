class TemplateLoader {
  static get baseUrl() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    return isGitHubPages ? '/portfolio' : '';
  }

  static async loadSidebar() {
    try {
      const sidebarPath = `${this.baseUrl}/templates/sidebar.html`;
      console.log('Loading sidebar from:', sidebarPath);
      
      const response = await fetch(sidebarPath);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const html = await response.text();
      
      const sidebarContainer = document.getElementById('sidebar-container');
      if (sidebarContainer) {
        sidebarContainer.innerHTML = html;
        this.initSidebarEvents();
      }
    } catch (error) {
      console.error('Error loading sidebar:', error);
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






