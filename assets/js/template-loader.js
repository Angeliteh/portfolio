class TemplateLoader {
  static getBasePath() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    return isGitHubPages ? '/portfolio' : '';
  }

  static async loadSidebar() {
    try {
      const basePath = this.getBasePath();
      const sidebarPath = `${basePath}/templates/sidebar.html`;
      console.log('Intentando cargar sidebar desde:', sidebarPath);

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
    }
  }

  static initSidebarEvents() {
    const mainNavLinks = document.querySelectorAll('.main-nav a');
    const basePath = this.getBasePath();
    const isProjectPage = window.location.pathname.includes('/proyectos/');

    mainNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');

        if (isProjectPage) {
          window.location.href = `${basePath}/index.html${href}`;
        } else {
          const targetSection = document.querySelector(`[data-section="${href.replace('#', '')}"]`);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            const newUrl = `${window.location.pathname}${href}`;
            window.history.pushState({}, '', newUrl);
          }
        }
      });
    });

    // Manejo del sidebar móvil
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const responsiveNav = document.getElementById('responsive-nav');
    
    if (sidebarToggle && responsiveNav) {
      const overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      document.body.appendChild(overlay);

      sidebarToggle.addEventListener('click', () => {
        responsiveNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = responsiveNav.classList.contains('active') ? 'hidden' : '';
      });

      overlay.addEventListener('click', () => {
        responsiveNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });

      const menuLinks = responsiveNav.querySelectorAll('a');
      menuLinks.forEach(link => {
        link.addEventListener('click', () => {
          responsiveNav.classList.remove('active');
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        });
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          responsiveNav.classList.remove('active');
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  }

  static updateCSSPaths() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    if (!isGitHubPages) return; // No modificar rutas en local

    const basePath = this.getBasePath();
    
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('//')) return;

      // Eliminar cualquier '../' inicial
      let cleanHref = href.replace(/^\.\.\//, '');
      // Eliminar cualquier '/' inicial
      cleanHref = cleanHref.replace(/^\//, '');
      
      // Construir la nueva ruta
      const newHref = `${basePath}/${cleanHref}`;
      
      console.log(`Actualizando ruta CSS: ${href} -> ${newHref}`);
      link.href = newHref;
    });
  }
}

// Exportar la clase para uso global
window.TemplateLoader = TemplateLoader;

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded - Iniciando carga...');
  TemplateLoader.loadSidebar().catch(error => {
    console.error('Error en la carga inicial:', error);
  });
  TemplateLoader.updateCSSPaths();
});

// Debugging helper
if (window.location.hostname.includes('github.io')) {
  console.log('GitHub Pages detected');
  console.log('Base path:', TemplateLoader.getBasePath());
  console.log('Current pathname:', window.location.pathname);
}



