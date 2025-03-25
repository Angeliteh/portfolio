// Crear una promesa global para el estado de inicialización
window.i18nextInitialized = new Promise(async (resolve) => {
    const savedLang = localStorage.getItem('language') || 'es';
    const baseUrl = window.location.hostname.includes('github.io') ? '/portfolio' : '';

    try {
        // Verificar si i18next ya está inicializado
        if (!i18next.isInitialized) {
            await i18next
                .use(i18nextHttpBackend)
                .init({
                    debug: true,
                    fallbackLng: 'es',
                    lng: savedLang,
                    backend: {
                        loadPath: `${baseUrl}/assets/locales/{{lng}}/translation.json`
                    },
                    interpolation: {
                        escapeValue: false
                    }
                });

            // Inicializar jquery-i18next
            jqueryI18next.init(i18next, $);
        }
        
        // Aplicar traducciones iniciales
        $('body').localize();

        // Marcar el botón del idioma actual como activo
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === savedLang) {
                btn.classList.add('active');
            }
        });

        resolve();
    } catch (error) {
        console.error('Error loading translations:', error);
        resolve(); // Resolvemos la promesa incluso en caso de error
    }
});

