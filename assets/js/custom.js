(function($) {
  // Cargar la sidebar
  function loadSidebar() {
    const isProjectPage = window.location.pathname.includes('/proyectos/');
    const sidebarPath = isProjectPage ? '../../templates/sidebar.html' : 'templates/sidebar.html';
    
    return $.get(sidebarPath).then(function(sidebar) {
      $('#sidebar-container').html(sidebar);
      
      // Mostrar el menú correcto según la página
      if (isProjectPage) {
        $('.project-menu').show();
        $('.main-menu').hide();
      } else {
        $('.main-menu').show();
        $('.project-menu').hide();
      }
      
      initializeSidebarEvents();
    });
  }

  // Inicializar eventos de la sidebar
  function initializeSidebarEvents() {
    const isProjectPage = window.location.pathname.includes('/proyectos/');
    
    // Toggle del menú móvil
    $("#menu-toggle").on("click", function() {
      $("#menu").addClass("open");
    });

    $("#menu-close").on("click", function() {
      $("#menu").removeClass("open");
    });

    // Navegación del menú
    $(".main-nav a").on("click", function(e) {
      const href = $(this).attr('href');
      
      // Si es un enlace interno y estamos en la página principal
      if (!isProjectPage && href.startsWith('#')) {
        e.preventDefault();
        const section = href.split('#')[1];
        scrollToSection(section);
        
        $(this).closest('li')
          .addClass('active')
          .siblings()
          .removeClass('active');
      }

      if ($(window).width() < 846) {
        $('#menu').removeClass('open');
      }
    });

    // Actualizar menú activo al hacer scroll (solo en index)
    if (!isProjectPage) {
      $(window).on('scroll', function() {
        $(".section").each(function() {
          const $section = $(this);
          const topEdge = $section.offset().top - 80;
          const bottomEdge = topEdge + $section.height();
          const wScroll = $(window).scrollTop();
          
          if (topEdge < wScroll && bottomEdge > wScroll) {
            const currentId = $section.data("section");
            const $reqLink = $(`a[href="#${currentId}"]`);
            
            $reqLink
              .closest("li")
              .addClass('active')
              .siblings()
              .removeClass('active');
          }
        });
      });
    }
  }

  // Función para scroll suave
  function scrollToSection(sectionId) {
    const $section = $(`[data-section="${sectionId}"]`);
    if ($section.length) {
      $("html, body").animate({
        scrollTop: $section.offset().top
      }, 800);
    }
  }

  // Inicializar cuando el documento esté listo
  $(document).ready(function() {
    loadSidebar();
  });
})(jQuery);
