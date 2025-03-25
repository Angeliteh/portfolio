class TemplateLoader {
  static getBaseUrl() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    return isGitHubPages ? '/portfolio' : '';
  }

  static async loadSidebar() {
    try {
      const baseUrl = this.getBaseUrl();
      const sidebarPath = `${baseUrl}/templates/sidebar.html`;
      
      console.log('Loading sidebar from:', sidebarPath);
      
      const response = await fetch(sidebarPath);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const html = await response.text();
      
      const sidebarContainer = document.getElementById('sidebar-container');
      if (sidebarContainer) {
        sidebarContainer.innerHTML = html;
      }
    } catch (error) {
      console.error('Error loading sidebar:', error);
    }
  }

  static updateCSSPaths() {
    const baseUrl = this.getBaseUrl();
    
    document.querySelectorAll('link[rel="stylesheet"], script[src]').forEach(element => {
      const srcAttr = element.tagName.toLowerCase() === 'script' ? 'src' : 'href';
      const path = element.getAttribute(srcAttr);
      
      if (path && !path.startsWith('http') && !path.startsWith('//')) {
        // Convert relative paths (../../) to absolute paths with baseUrl
        if (path.startsWith('../')) {
          const newPath = path.replace(/^\.\.\/\.\.\//, baseUrl + '/');
          element[srcAttr] = newPath;
        }
      }
    });
  }
}

// Export for global use
window.TemplateLoader = TemplateLoader;

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  TemplateLoader.loadSidebar();
  TemplateLoader.updateCSSPaths();
});








