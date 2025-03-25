document.addEventListener('DOMContentLoaded', async function() {
  // Esperar a que se carguen las traducciones antes de inicializar
  try {
    const response = await fetch(`${TemplateLoader.baseUrl}/assets/locales/es/translation.json`);
    const translations = await response.json();

    // Configuración de i18next
    await i18next.init({
      debug: false,
      fallbackLng: 'es',
      resources: {
        es: {
          translation: translations
        }
      },
      interpolation: {
        escapeValue: false
      }
    });

    // Inicializar jquery-i18next después de cargar las traducciones
    jqueryI18next.init(i18next, $);
    
    // Aplicar traducciones
    $('[data-i18n]').localize();
  } catch (error) {
    console.error('Error loading translations:', error);
  }
});

