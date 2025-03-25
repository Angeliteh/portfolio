class TemplateLoader {
  static async loadSidebar() {
    try {
      const isGitHubPages = window.location.hostname.includes('github.io');
      const isProjectPage = window.location.pathname.includes('/proyectos/');
      
      let sidebarPath;
      if (isGitHubPages) {
        sidebarPath = '/portfolio/templates/sidebar.html';
      } else {
        sidebarPath = isProjectPage ? '../templates/sidebar.html' : './templates/sidebar.html';
      }

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
      try {
        const fallbackPath = '/portfolio/templates/sidebar.html';
        console.log('Intentando fallback:', fallbackPath);
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
          window.location.href = `${baseUrl}/index.html${href}`;
        } else {
          const targetSection = document.querySelector(`[data-section="${href.replace('#', '')}"]`);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            const newUrl = `${baseUrl}${href}`;
            window.history.pushState({}, '', newUrl);
          }
        }
      });
    });

    // Agregar manejo del sidebar móvil
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const responsiveNav = document.getElementById('responsive-nav');
    
    if (sidebarToggle && responsiveNav) {
      // Crear overlay
      const overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      document.body.appendChild(overlay);

      // Toggle del sidebar
      sidebarToggle.addEventListener('click', () => {
        responsiveNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = responsiveNav.classList.contains('active') ? 'hidden' : '';
      });

      // Cerrar al hacer click en el overlay
      overlay.addEventListener('click', () => {
        responsiveNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });

      // Cerrar al hacer click en los enlaces del menú
      const menuLinks = responsiveNav.querySelectorAll('a');
      menuLinks.forEach(link => {
        link.addEventListener('click', () => {
          responsiveNav.classList.remove('active');
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        });
      });

      // Manejar el resize de la ventana
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
    const baseUrl = isGitHubPages ? '/portfolio' : '';
    
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('//')) {
        link.href = `${baseUrl}/${href.replace(/^\//, '')}`;
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




