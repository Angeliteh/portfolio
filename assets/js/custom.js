(function($) {
  const isProjectPage = window.location.pathname.includes('/proyectos/');

  function initializeNavigation() {
    $(".main-nav a").on("click", function(e) {
      e.preventDefault();
      const href = $(this).attr('href');
      
      if (isProjectPage) {
        // Redirigir a la página principal
        location.href = location.origin + href;
        return;
      }
      
      if (href.startsWith('#')) {
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
    initializeNavigation();
    
    // Toggle del menú móvil
    $("#menu-toggle").on("click", function() {
      $("#menu").addClass("open");
    });

    $("#menu-close").on("click", function() {
      $("#menu").removeClass("open");
    });
  });

})(jQuery);
