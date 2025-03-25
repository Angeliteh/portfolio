class TemplateLoader {
  static get baseUrl() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    const isProjectPage = window.location.pathname.includes('/proyectos/');
    if (isGitHubPages) {
      return isProjectPage ? '/portfolio' : '/portfolio';
    }
    return isProjectPage ? '..' : '';
  }

  static getAssetPath(path) {
    const isProjectPage = window.location.pathname.includes('/proyectos/');
    if (isProjectPage && path.startsWith('/')) {
      path = '.' + path; // Convierte rutas absolutas en relativas
    }
    return `${this.baseUrl}${path}`;
  }

  static updateCSSPaths() {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      const originalHref = link.getAttribute('href');
      if (originalHref && originalHref.startsWith('/assets/')) {
        link.href = this.getAssetPath(originalHref);
      }
    });
  }

  static async loadSidebar() {
    try {
      const isProjectPage = window.location.pathname.includes('/proyectos/');
      const sidebarPath = isProjectPage 
        ? '../templates/sidebar.html' 
        : 'templates/sidebar.html';
      
      console.log('Loading sidebar from:', sidebarPath);
      
      const response = await fetch(sidebarPath);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const html = await response.text();
      
      const sidebarContainer = document.getElementById('sidebar-container');
      if (sidebarContainer) {
        sidebarContainer.innerHTML = html;
        this.initSidebarEvents();
        this.updateCSSPaths();
      }
    } catch (error) {
      console.error('Error loading sidebar:', error);
    }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  TemplateLoader.updateCSSPaths();
  TemplateLoader.loadSidebar();
});

