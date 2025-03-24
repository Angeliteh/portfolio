$(document).ready(function() {
  // Configuración de i18next
  i18next
    .use(i18nextHttpBackend)
    .init({
      debug: true, // Cambiado a true temporalmente para ver posibles errores
      fallbackLng: 'es',
      defaultNS: 'translation',
      ns: 'translation',
      lng: localStorage.getItem('language') || 'es',
      backend: {
        loadPath: 'assets/locales/{{lng}}/{{ns}}.json',
      }
    }, function(err, t) {
      if (err) {
        console.error('Error al inicializar i18next:', err);
        return;
      }
      
      // Inicializar jqueryI18next
      jqueryI18next.init(i18next, $, {
        useOptionsAttr: true
      });
      
      // Traducir la página inicial
      $('body').localize();
      
      // Actualizar botones de idioma
      updateLanguageButtons(i18next.language);
    });

  // Función para actualizar los botones de idioma
  function updateLanguageButtons(currentLang) {
    $('.language-switch').removeClass('active');
    $(`.language-switch[data-lang="${currentLang}"]`).addClass('active');
  }

  // Manejar clics en los botones de idioma
  $('.language-switch').on('click', function() {
    const lang = $(this).data('lang');
    
    i18next.changeLanguage(lang, function(err) {
      if (err) {
        console.error('Error al cambiar el idioma:', err);
        return;
      }
      
      // Guardar preferencia
      localStorage.setItem('language', lang);
      
      // Actualizar botones
      updateLanguageButtons(lang);
      
      // Traducir la página
      $('body').localize();
    });
  });
});


