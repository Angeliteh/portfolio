$(document).ready(function() {
  function updateLanguageButtons(currentLang) {
    $('.lang-btn').removeClass('active');
    $(`.lang-btn[data-lang="${currentLang}"]`).addClass('active');
  }

  // Inicializar con el idioma guardado o el predeterminado
  const savedLang = localStorage.getItem('language') || 'es';
  i18next.changeLanguage(savedLang, function() {
    updateLanguageButtons(savedLang);
    $('body').localize();
  });

  // Manejar clicks en los botones de idioma
  $(document).on('click', '.lang-btn', function() {
    const lang = $(this).data('lang');
    
    i18next.changeLanguage(lang, function(err) {
      if (err) {
        console.error('Error al cambiar idioma:', err);
        return;
      }
      
      updateLanguageButtons(lang);
      localStorage.setItem('language', lang);
      $('body').localize();
    });
  });
});
