(function($) {
  $(document).ready(function() {
    // Verificar si estamos en una página de proyecto
    const isProjectPage = window.location.pathname.includes('/proyectos/');

    // Función para scroll suave
    function scrollToSection(sectionId) {
      const $section = $(`[data-section="${sectionId}"]`);
      if ($section.length) {
        $("html, body").animate({
          scrollTop: $section.offset().top
        }, 800);
      }
    }

    // Manejo de la navegación del menú
    $(document).on('click', '.main-menu a', function(e) {
      e.preventDefault();
      const href = $(this).attr('href');
      
      if (isProjectPage) {
        // Si estamos en una página de proyecto, redirigir al index
        window.location.href = '../../' + href;
      } else {
        // Si estamos en el index, hacer scroll suave
        const section = href.split('#')[1];
        scrollToSection(section);
        
        // Actualizar la clase active
        $(this).closest('li')
          .addClass('active')
          .siblings()
          .removeClass('active');
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
              .addClass("active")
              .siblings()
              .removeClass("active");
          }
        });
      });
    }

    // Menu toggle functionality
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const close = document.getElementById("menu-close");

    if (toggle && menu && close) {
      toggle.addEventListener("click", function(e) {
        if (menu.classList.contains("open")) {
          menu.classList.remove("open");
        } else {
          menu.classList.add("open");
        }
      });

      close.addEventListener("click", function(e) {
        menu.classList.remove("open");
      });
    }
  });
})(jQuery);

$(document).ready(function() {
  // Verificar si estamos en una página de proyecto
  const isProjectPage = window.location.pathname.includes('/proyectos/');

  // Manejo de la navegación del menú
  $(".main-menu a").on("click", function(e) {
    e.preventDefault();
    const href = $(this).attr('href');
    
    if (isProjectPage) {
      // Redirigir a la página principal con el anchor
      const sectionId = href.replace('#', '');
      window.location.href = '../../#' + sectionId;
    } else {
      // Scroll suave en el index
      const section = href.split('#')[1];
      scrollToSection(section);
    }

    // Cerrar el menú en móvil después de hacer clic
    if ($(window).width() < 846) {
      $('#menu').removeClass('open');
    }
  });

  // Cerrar menú después de click en pantallas pequeñas
  $(window).on("resize", function() {
    if ($(window).width() < 846) {
      $(".main-menu a").on("click", function() {
        if (menu) menu.classList.remove("open");
      });
    }
  });

  // Carousel initialization
  if ($(".owl-carousel").length) {
    $(".owl-carousel").owlCarousel({
      items: 4,
      lazyLoad: true,
      loop: true,
      dots: true,
      margin: 30,
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 }
      }
    });
  }

  // Hover effect
  $(".hover").mouseleave(function() {
    $(this).removeClass("hover");
  });

  // Isotope initialization
  if ($(".isotope-wrapper").length) {
    $(".isotope-wrapper").each(function() {
      var $isotope = $(".isotope-box", this);
      var $filterCheckboxes = $('input[type="radio"]', this);

      var filter = function() {
        var type = $filterCheckboxes.filter(":checked").data("type") || "*";
        if (type !== "*") {
          type = '[data-type="' + type + '"]';
        }
        $isotope.isotope({ filter: type });
      };

      $isotope.isotope({
        itemSelector: ".isotope-item",
        layoutMode: "masonry"
      });

      $(this).on("change", filter);
      filter();
    });
  }

  // Lightbox configuration
  if (typeof lightbox !== 'undefined') {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true
    });
  }

  // Filtrado de proyectos
  $('.item-filter input').on('change', function() {
    var filterValue = this.id;
    
    if (filterValue === 'all') {
      $('.isotope-item').show();
    } else {
      $('.isotope-item').hide();
      $('.isotope-item[data-type="' + filterValue + '"]').show();
    }
    
    $('.item-filter label').removeClass('active');
    $(this).next('label').addClass('active');
    
    reorganizeGrid();
  });

  // Función para reorganizar el grid
  function reorganizeGrid() {
    var visibleItems = $('.isotope-item:visible');
    
    if (visibleItems.length === 0) {
      if (!$('.no-projects-message').length) {
        $('.isotope-box').append('<div class="no-projects-message">No hay proyectos que coincidan con este filtro.</div>');
      }
    } else {
      $('.no-projects-message').remove();
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
            .addClass("active")
            .siblings()
            .removeClass("active");
        }
      });
    });
  }

  // Función para mostrar una página específica
  function showPage(pageNum) {
    // Ocultar todas las páginas
    $('.isotope-box').hide();
    
    // Mostrar la página seleccionada
    $(`#page-${pageNum}`).show();
    
    // Actualizar la paginación activa
    $('.pagination li').removeClass('active');
    $(`.pagination li a[data-page="${pageNum}"]`).parent().addClass('active');
    
    // Actualizar estado de los botones prev/next
    const totalPages = $('.pagination a[data-page]').length;
    $('#prev-page').parent().toggleClass('disabled', pageNum === 1);
    $('#next-page').parent().toggleClass('disabled', pageNum === totalPages);
    
    // Reorganizar el grid si es necesario
    reorganizeGrid();
  }

  // Click en números de página
  $('.pagination a[data-page]').on('click', function(e) {
    e.preventDefault();
    const pageNum = $(this).data('page');
    showPage(pageNum);
  });

  // Click en botón previo
  $('#prev-page').on('click', function(e) {
    e.preventDefault();
    const currentPage = $('.pagination li.active a').data('page');
    if (currentPage > 1) {
      showPage(currentPage - 1);
    }
  });

  // Click en botón siguiente
  $('#next-page').on('click', function(e) {
    e.preventDefault();
    const currentPage = $('.pagination li.active a').data('page');
    const totalPages = $('.pagination a[data-page]').length;
    if (currentPage < totalPages) {
      showPage(currentPage + 1);
    }
  });

  // Inicializar en la primera página
  showPage(1);
});
