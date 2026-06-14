document.addEventListener('DOMContentLoaded', async function () {
    await window.i18nextInitialized;

    let buttonsSetup = false; // Flag para no registrar listeners duplicados

    function updateLanguageButtons(currentLang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            }
        });
    }

    function changeLanguage(lang) {
        if (i18next.language === lang) {
            // Mismo idioma, solo re-localizar y actualizar botones
            updateLanguageButtons(lang);
            $('body').localize();
            return;
        }
        i18next.changeLanguage(lang, function (err) {
            if (err) { console.error('Error cambiando idioma:', err); return; }
            window.langStorage.set(lang);
            updateLanguageButtons(lang);
            $('body').localize();
        });
    }

    function setupLanguageButtons() {
        const buttons = document.querySelectorAll('.lang-btn');
        if (!buttons.length) return;
        if (buttonsSetup) {
            // Botones ya configurados — solo actualizar estado visual
            updateLanguageButtons(i18next.language || 'es');
            return;
        }
        buttonsSetup = true;
        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                changeLanguage(this.getAttribute('data-lang'));
            });
        });
        updateLanguageButtons(i18next.language || 'es');
    }

    // Setup inicial
    setupLanguageButtons();

    // Observar solo cuando se agrega el sidebar (no text nodes, no attribute changes)
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                // Solo reaccionar cuando se agrega un elemento HTML (no texto)
                if (node.nodeType === 1) {
                    setupLanguageButtons();
                    return; // Un solo pass es suficiente
                }
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: false });
    // subtree: false → solo hijos directos del body, no cada texto modificado por localize()
});
