class TemplateLoader {
  static getBaseUrl() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    return isGitHubPages ? '/portfolio' : '';
  }

  static async loadSidebar() {
    try {
      const baseUrl = this.getBaseUrl();
      const sidebarPath = `${baseUrl}/templates/sidebar.html`;
      
      const response = await fetch(sidebarPath);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const html = await response.text();
      
      const sidebarContainer = document.getElementById('sidebar-container');
      if (sidebarContainer) {
        sidebarContainer.innerHTML = html;
        // Disparar evento cuando el sidebar se carga
        window.dispatchEvent(new Event('sidebarLoaded'));
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
        const newPath = baseUrl + (path.startsWith('/') ? path : '/' + path);
        element.setAttribute(srcAttr, newPath);
      }
    });
  }
}

window.TemplateLoader = TemplateLoader;

