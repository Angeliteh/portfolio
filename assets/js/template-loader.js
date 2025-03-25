class TemplateLoader {
  static get baseUrl() {
    return window.location.hostname.includes('github.io') ? '/portfolio' : '';
  }

  static async loadSidebar() {
    try {
      const isGitHubPages = window.location.hostname.includes('github.io');
      const isProjectPage = window.location.pathname.includes('/proyectos/');
      
      // Construir la ruta correcta para el sidebar
      let sidebarPath;
      if (isGitHubPages) {
        sidebarPath = '/portfolio/templates/sidebar.html';
      } else {
        sidebarPath = isProjectPage ? '../templates/sidebar.html' : 'templates/sidebar.html';
      }
      
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

  static initSidebarEvents() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    const isProjectPage = window.location.pathname.includes('/proyectos/');
    
    document.querySelectorAll('.main-nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        if (isProjectPage) {
          // Redirigir a la página principal con la sección correcta
          const baseUrl = isGitHubPages ? '/portfolio' : '';
          window.location.href = `${baseUrl}/index.html${href}`;
        } else if (href.startsWith('#')) {
          // Scroll a la sección en la página principal
          const targetSection = document.querySelector(`[data-section="${href.substring(1)}"]`);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            // Actualizar URL manteniendo la base correcta
            const newUrl = isGitHubPages 
              ? `/portfolio/${href}`
              : href;
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


