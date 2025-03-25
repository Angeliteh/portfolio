document.addEventListener('DOMContentLoaded', function() {
  // Configuración inicial de i18next
  const i18nextConfig = {
    debug: false, // Cambiar a false en producción
    fallbackLng: 'es',
    resources: {
      es: {
        translation: {
          // Añadir todas las traducciones aquí
          about: {
            title: "Sobre Mí",
            subtitle: "Desarrollador especializado en automatización y soluciones eficientes",
            // ... resto de traducciones
          },
          // ... resto de secciones
        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  };

  // Inicializar i18next
  i18next
    .init(i18nextConfig)
    .then(function(t) {
      jqueryI18next.init(i18next, $);
      $('[data-i18n]').localize();
    });

  function setupLanguageButtons() {
    // Marcar el botón del idioma actual como activo
    $('.language-switch').removeClass('active');
    $(`.language-switch[data-lang="${i18next.language}"]`).addClass('active');

    // Manejar el cambio de idioma
    $('.language-switch').on('click', function() {
      const newLang = $(this).data('lang');
      
      i18next.changeLanguage(newLang, function(err) {
        if (err) {
          console.error('Error changing language:', err);
          return;
        }

        // Actualizar el estado activo de los botones
        $('.language-switch').removeClass('active');
        $(`.language-switch[data-lang="${newLang}"]`).addClass('active');

        // Guardar la preferencia
        localStorage.setItem('language', newLang);

        // Traducir la página
        $('body').localize();
      });
    });
  }
});


