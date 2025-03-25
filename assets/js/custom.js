(function($) {
  const isGitHubPages = window.location.hostname.includes('github.io');
  const baseUrl = isGitHubPages ? '/portfolio' : '';

  function initializeNavigation() {
    $(".main-nav a").on("click", function(e) {
      e.preventDefault();
      const href = $(this).attr('href');
      
      if (window.location.pathname.includes('/proyectos/')) {
        // Redirigir a la página principal
        window.location.href = `${baseUrl}/index.html${href}`;
        return;
      }
      
      if (href.startsWith('#')) {
        const section = href.split('#')[1];
        const $target = $(`[data-section="${section}"]`);
        
        if ($target.length) {
          $('html, body').animate({
            scrollTop: $target.offset().top
          }, 800);
          
          // Actualizar URL
          const newUrl = isGitHubPages 
            ? `/portafolio${href}`
            : href;
          window.history.pushState({}, '', newUrl);
        }
        
        // Actualizar navegación activa
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
