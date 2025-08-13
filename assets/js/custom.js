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
          // Agregar clase de transición al body
          $('body').addClass('section-transitioning');

          // Remover clase active-section de todas las secciones
          $('.section').removeClass('active-section');

          // Animación suave con easing personalizado
          $('html, body').animate({
            scrollTop: $target.offset().top
          }, {
            duration: 1200,
            easing: 'easeInOutCubic',
            complete: function() {
              // Agregar clase active-section a la sección destino
              $target.addClass('active-section');

              // Remover clase de transición al completar
              setTimeout(() => {
                $('body').removeClass('section-transitioning');
              }, 100);
            }
          });

          // Actualizar URL
          const newUrl = isGitHubPages
            ? `/portfolio${href}`
            : href;
          window.history.pushState({}, '', newUrl);
        }
        
        // Actualizar navegación activa
        $(this).closest('li')
          .addClass('active')
          .siblings()
          .removeClass('active');
      }


    });
  }

  // Función para detectar sección activa durante scroll
  function updateActiveSection() {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('.section').each(function() {
      const $section = $(this);
      const sectionTop = $section.offset().top;
      const sectionHeight = $section.outerHeight();

      // Verificar si la sección está visible en el viewport
      if (scrollTop >= sectionTop - windowHeight/3 &&
          scrollTop < sectionTop + sectionHeight - windowHeight/3) {

        // Remover active-section de todas las secciones
        $('.section').removeClass('active-section');

        // Agregar active-section a la sección actual
        $section.addClass('active-section');

        // Actualizar navegación activa
        const sectionId = $section.attr('data-section');
        $('.main-nav li').removeClass('active');
        $(`.main-nav a[href*="${sectionId}"]`).parent().addClass('active');
      }
    });
  }

  // Función throttle para optimizar el scroll
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  $(document).ready(function() {
    initializeNavigation();

    // Detectar sección activa en scroll
    $(window).on('scroll', throttle(updateActiveSection, 100));

    // Detectar sección activa al cargar
    setTimeout(updateActiveSection, 500);


  });
})(jQuery);
