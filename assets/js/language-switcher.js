$(document).ready(function() {
  // Función para actualizar los botones de idioma
  function updateLanguageButtons(currentLang) {
    $('.language-switch').removeClass('active');
    $(`.language-switch[data-lang="${currentLang}"]`).addClass('active');
  }

  // Manejar el clic en los botones de idioma
  $('.language-switch').on('click', function() {
    const lang = $(this).data('lang');
    
    // Cambiar el idioma usando i18next
    i18next.changeLanguage(lang, function(err) {
      if (err) {
        console.error('Error changing language:', err);
        return;
      }
      
      // Actualizar botones
      updateLanguageButtons(lang);
      
      // Guardar preferencia
      localStorage.setItem('language', lang);
      
      // Traducir la página
      $('body').localize();
    });
  });

  // Establecer idioma inicial
  const savedLang = localStorage.getItem('language') || 'es';
  i18next.changeLanguage(savedLang, function(err) {
    if (err) {
      console.error('Error setting initial language:', err);
      return;
    }
    updateLanguageButtons(savedLang);
    $('body').localize();
  });
window.initializeLanguageSwitcher = initializeLanguageSwitcher;
});