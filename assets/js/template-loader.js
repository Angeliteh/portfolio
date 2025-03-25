class TemplateLoader {
  static async loadSidebar() {
    try {
      const isGitHubPages = window.location.hostname.includes('github.io');
      const baseUrl = isGitHubPages ? '/portfolio' : '';
      const sidebarPath = `${baseUrl}/templates/sidebar.html`;
      
      console.log('Intentando cargar sidebar desde:', sidebarPath);
      
      const response = await fetch(sidebarPath);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const html = await response.text();
      
      const sidebarContainer = document.getElementById('sidebar-container');
      if (sidebarContainer) {
        sidebarContainer.innerHTML = html;
      }
    } catch (error) {
      console.error('Error cargando el sidebar:', error);
    }
  }

  static updateCSSPaths() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    const baseUrl = isGitHubPages ? '/portfolio' : '';
    
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('//')) {
        // Mantener las rutas relativas como están, solo agregar baseUrl si es necesario
        if (isGitHubPages && href.startsWith('../')) {
          link.href = baseUrl + '/' + href.replace('../', '');
        }
      }
    });
  }
}

// Exportar la clase para uso global
window.TemplateLoader = TemplateLoader;

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  TemplateLoader.loadSidebar();
  TemplateLoader.updateCSSPaths();
});







