class TemplateLoader {
  static getBasePath() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    const currentPath = window.location.pathname;
    let baseUrl = '';

    if (isGitHubPages) {
      // Si estamos en GitHub Pages, detectar si hay un subdirectorio
      const pathParts = currentPath.split('/').filter(part => part);
      if (pathParts.length > 0 && !pathParts[0].includes('.html')) {
        baseUrl = '/' + pathParts[0];
      }
    }

    console.log('TemplateLoader - Base path:', baseUrl);
    return baseUrl;
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
        console.log('Sidebar HTML cargado exitosamente');

        // Esperar un poco para que el DOM se actualice
        await new Promise(resolve => setTimeout(resolve, 100));

        this.initSidebarEvents();
        console.log('Eventos del sidebar inicializados');

        // Disparar evento personalizado para notificar que el sidebar está listo
        window.dispatchEvent(new CustomEvent('sidebarLoaded'));
      } else {
        console.error('No se encontró el contenedor del sidebar (#sidebar-container)');
      }
    } catch (error) {
      console.error('Error cargando sidebar:', error);
      // Intentar cargar de nuevo después de un delay
      setTimeout(() => {
        console.log('Reintentando cargar sidebar...');
        this.loadSidebar();
      }, 1000);
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
          // Usar la animación personalizada de custom.js en lugar de scrollIntoView
          const section = href.replace('#', '');
          const targetSection = document.querySelector(`[data-section="${section}"]`);

          console.log('Navegando a sección:', section, 'Elemento encontrado:', !!targetSection, 'jQuery disponible:', !!window.jQuery);

          if (targetSection && window.jQuery) {
            // Prevenir comportamiento por defecto
            event.preventDefault();

            // Usar jQuery para la animación suave - scrollbar normal
            window.jQuery('html, body').stop(true, false).animate({
              scrollTop: window.jQuery(targetSection).offset().top
            }, {
              duration: 1200,
              easing: window.jQuery.easing.easeInOutCubic ? 'easeInOutCubic' : 'swing'
            });

            // Actualizar URL
            const newUrl = `${window.location.pathname}${href}`;
            window.history.pushState({}, '', newUrl);
          } else {
            console.log('Fallback: usando scrollIntoView');
            if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      });
    });

    // Inicializar nuevo sistema de menú móvil
    this.initMobileMenu();
  }

  static initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const responsiveNav = document.getElementById('responsive-nav');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (!mobileToggle || !responsiveNav || !overlay) {
      console.log('Elementos del menú móvil no encontrados');
      return;
    }

    // Función para abrir el menú
    const openMenu = () => {
      responsiveNav.classList.add('mobile-active');
      overlay.classList.add('active');
      mobileToggle.classList.add('active');
      document.body.classList.add('mobile-menu-open');
    };

    // Función para cerrar el menú
    const closeMenu = () => {
      responsiveNav.classList.remove('mobile-active');
      overlay.classList.remove('active');
      mobileToggle.classList.remove('active');
      document.body.classList.remove('mobile-menu-open');
    };

    // Event listener para el botón hamburguesa
    mobileToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (responsiveNav.classList.contains('mobile-active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Event listener para el overlay
    overlay.addEventListener('click', closeMenu);

    // Cerrar menú al hacer clic en los enlaces de navegación
    const navLinks = responsiveNav.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Pequeño delay para permitir que la navegación se complete
        setTimeout(closeMenu, 100);
      });
    });

    // Cerrar menú al redimensionar la ventana (si se cambia a desktop)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });

    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && responsiveNav.classList.contains('mobile-active')) {
        closeMenu();
      }
    });


  }

  static updateCSSPaths() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    if (!isGitHubPages) return;

    const basePath = this.getBasePath();
    
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || 
          href.startsWith('http') || 
          href.startsWith('//') || 
          href.startsWith(basePath)) return;

      // Limpiar la ruta
      let newHref = href.replace(/^\.\.\//, '');  // Remover ../
      newHref = newHref.replace(/^\//, '');       // Remover / inicial
      newHref = `${basePath}/${newHref}`;         // Añadir basePath
      
      console.log(`Actualizando ruta CSS de: ${href} a: ${newHref}`);
      link.href = newHref;
    });
  }
}

// Debugging helper
if (window.location.hostname.includes('github.io')) {
  console.log('GitHub Pages detected');
  console.log('Base path:', TemplateLoader.getBasePath());
  console.log('Current pathname:', window.location.pathname);
  console.log('Full URL:', window.location.href);
}

// Exportar para uso global
window.TemplateLoader = TemplateLoader;


