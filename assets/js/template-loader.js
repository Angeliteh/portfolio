class TemplateLoader {
  static get baseUrl() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    return isGitHubPages ? '/portfolio' : '';
  }

  static getProjectBasePath() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    const isProjectPage = window.location.pathname.includes('/proyectos/');
    
    if (isGitHubPages) {
      return isProjectPage ? '/portfolio' : '/portfolio';
    }
    return isProjectPage ? '..' : '';
  }

  static async loadSidebar() {
    try {
      const isProjectPage = window.location.pathname.includes('/proyectos/');
      const isGitHubPages = window.location.hostname.includes('github.io');
      
      let sidebarPath;
      if (isGitHubPages) {
        sidebarPath = isProjectPage 
          ? '/portfolio/templates/sidebar.html'
          : '/portfolio/templates/sidebar.html';
      } else {
        sidebarPath = isProjectPage 
          ? '../templates/sidebar.html'
          : 'templates/sidebar.html';
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
    const isProjectPage = window.location.pathname.includes('/proyectos/');
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    document.querySelectorAll('.main-nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        if (isProjectPage) {
          // Si estamos en una página de proyecto
          if (isGitHubPages) {
            window.location.href = '/portfolio/index.html' + href;
          } else {
            window.location.href = '../index.html' + href;
          }
        } else if (href.startsWith('#')) {
          // Si estamos en el index, hacer scroll
          const targetSection = document.querySelector(`[data-section="${href.substring(1)}"]`);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            // Actualizar la URL sin recargar la página
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

