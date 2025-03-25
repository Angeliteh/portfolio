(function($) {
  const isGitHubPages = window.location.hostname.includes('github.io');
  const isProjectPage = window.location.pathname.includes('/proyectos/');

  function getBasePath() {
    return isGitHubPages ? '/portfolio' : '';
  }

  function initializeNavigation() {
    $(".main-nav a").on("click", function(e) {
      e.preventDefault();
      const href = $(this).attr('href');
      
      if (isProjectPage) {
        // Redirigir a la página principal
        const basePath = getBasePath();
        location.href = `${basePath}/index.html${href}`;
        return;
      }
      
      if (href.startsWith('#')) {
        const section = href.split('#')[1];
        scrollToSection(section);
        
        // Actualizar URL sin recargar
        const newUrl = isGitHubPages 
          ? `/portfolio/${href}`
          : href;
        window.history.pushState({}, '', newUrl);
        
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

  function scrollToSection(section) {
    const $target = $(`[data-section="${section}"]`);
    if ($target.length) {
      $('html, body').animate({
        scrollTop: $target.offset().top
      }, 800);
    }
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
