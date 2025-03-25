class TemplateLoader {
  static async loadSidebar() {
    try {
      // Determinar la ruta base
      const isGitHubPages = window.location.hostname.includes('github.io');
      const isProjectPage = window.location.pathname.includes('/proyectos/');
      
      // Construir la ruta absoluta del sidebar
      let sidebarPath;
      if (isGitHubPages) {
        // Para GitHub Pages, usar ruta absoluta
        sidebarPath = '/portfolio/templates/sidebar.html';
      } else {
        // Para desarrollo local
        sidebarPath = isProjectPage ? '../templates/sidebar.html' : './templates/sidebar.html';
      }

      console.log('Intentando cargar sidebar desde:', sidebarPath); // Debug

      const response = await fetch(sidebarPath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const html = await response.text();
      const sidebarContainer = document.getElementById('sidebar-container');
      if (sidebarContainer) {
        sidebarContainer.innerHTML = html;
        this.initSidebarEvents();
      }
    } catch (error) {
      console.error('Error cargando sidebar:', error);
      // Intento de fallback
      const fallbackPath = '/portfolio/templates/sidebar.html';
      console.log('Intentando fallback:', fallbackPath);
      try {
        const response = await fetch(fallbackPath);
        if (response.ok) {
          const html = await response.text();
          const sidebarContainer = document.getElementById('sidebar-container');
          if (sidebarContainer) {
            sidebarContainer.innerHTML = html;
            this.initSidebarEvents();
          }
        }
      } catch (fallbackError) {
        console.error('Fallback también falló:', fallbackError);
      }
    }
  }

  static initSidebarEvents() {
    const mainNavLinks = document.querySelectorAll('.main-nav a');
    const isGitHubPages = window.location.hostname.includes('github.io');
    const baseUrl = isGitHubPages ? '/portfolio' : '';
    const isProjectPage = window.location.pathname.includes('/proyectos/');

    mainNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');

        if (isProjectPage) {
          // Si estamos en una página de proyecto, volver a la página principal
          window.location.href = `${baseUrl}/index.html${href}`;
        } else {
          // Si estamos en la página principal, hacer scroll
          const targetSection = document.querySelector(`[data-section="${href.replace('#', '')}"]`);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            const newUrl = `${baseUrl}${href}`;
            window.history.pushState({}, '', newUrl);
          }
        }
      });
    });
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  TemplateLoader.loadSidebar();
});



