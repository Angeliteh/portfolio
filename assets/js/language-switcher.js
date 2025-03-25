document.addEventListener('DOMContentLoaded', async function() {
    // Esperar a que i18next esté inicializado
    await window.i18nextInitialized;

    function updateLanguageButtons(currentLang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            }
        });
    }

    function changeLanguage(lang) {
        if (i18next.language === lang) return; // Evitar cambio innecesario

        i18next.changeLanguage(lang, function(err) {
            if (err) {
                console.error('Error al cambiar idioma:', err);
                return;
            }
            
            localStorage.setItem('language', lang);
            updateLanguageButtons(lang);
            $('body').localize();
        });
    }

    // Configurar los botones de idioma
    function setupLanguageButtons() {
        const buttons = document.querySelectorAll('.lang-btn');
        if (buttons.length) {
            buttons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const lang = this.getAttribute('data-lang');
                    changeLanguage(lang);
                });
            });
            
            // Establecer el estado inicial
            const currentLang = i18next.language || 'es';
            updateLanguageButtons(currentLang);
        }
    }

    // Configurar inicialmente si los botones ya existen
    setupLanguageButtons();

    // Observar cambios en el DOM para botones añadidos dinámicamente
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                setupLanguageButtons();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
