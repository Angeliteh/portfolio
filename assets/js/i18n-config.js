document.addEventListener('DOMContentLoaded', function() {
  // Configuración inicial de i18next
  i18next
    .use(i18nextHttpBackend)
    .init({
      debug: true,
      fallbackLng: 'es',
      defaultNS: 'translation',
      ns: 'translation',
      lng: localStorage.getItem('language') || 'es',
      backend: {
        loadPath: function(lngs, namespaces) {
          // Ajustar la ruta según si estamos en una página de proyecto o en la principal
          const isProjectPage = window.location.pathname.includes('/proyectos/');
          const basePath = isProjectPage ? '../../assets/locales/{{lng}}/{{ns}}.json' : 'assets/locales/{{lng}}/{{ns}}.json';
          return basePath.replace('{{lng}}', lngs[0]).replace('{{ns}}', namespaces[0]);
        }
      }
    }, function(err, t) {
      if (err) {
        console.error('Error initializing i18next:', err);
        return;
      }

      // Inicializar jqueryI18next
      jqueryI18next.init(i18next, $, {
        useOptionsAttr: true
      });

      // Traducir la página inicial
      $('body').localize();

      // Configurar los botones de idioma
      setupLanguageButtons();
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

