class TemplateLoader {
  static get baseUrl() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    const isProjectPage = window.location.pathname.includes('/proyectos/');
    if (isGitHubPages) {
      return isProjectPage ? '..' : '/portfolio';
    }
    return isProjectPage ? '..' : '';
  }

  static getAssetPath(path) {
    const isProjectPage = window.location.pathname.includes('/proyectos/');
    if (isProjectPage) {
      return path.replace(/^\//, '../');
    }
    return `${this.baseUrl}${path}`;
  }

  static async loadSidebar() {
    try {
      const isProjectPage = window.location.pathname.includes('/proyectos/');
      const sidebarPath = isProjectPage 
        ? '../templates/sidebar.html' 
        : 'templates/sidebar.html';
      
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
    const isProjectPage = window.location.pathname.includes('/proyectos/');
    
    // Manejar clics en enlaces del sidebar
    document.querySelectorAll('.main-nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        if (isProjectPage && href.startsWith('#')) {
          // Si estamos en una página de proyecto, volver al index
          window.location.href = '../index.html' + href;
        } else if (href.startsWith('#')) {
          // Si estamos en el index, hacer scroll
          const targetSection = document.querySelector(`[data-section="${href.substring(1)}"]`);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Solo cargar el sidebar
  TemplateLoader.loadSidebar();
});




