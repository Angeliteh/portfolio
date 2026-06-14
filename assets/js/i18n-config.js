// ── Safe localStorage wrapper (Tracking Prevention en Edge/Firefox bloquea localStorage en localhost) ──
window.langStorage = {
  get: () => { try { return localStorage.getItem('language'); } catch(e) { return null; } },
  set: (v) => { try { localStorage.setItem('language', v); } catch(e) {} }
};

// ── Promesa global de inicialización ──
window.i18nextInitialized = new Promise(async (resolve) => {
    const savedLang = window.langStorage.get() || 'es';
    const applyTranslations = () => {
        document.documentElement.lang = i18next.language || savedLang || 'es';
        $('body').localize();
    };

    // Detectar ruta base para GitHub Pages

    const isGitHubPages = window.location.hostname.includes('github.io');
    const currentPath   = window.location.pathname;
    let baseUrl = '';
    if (isGitHubPages) {
        const pathParts = currentPath.split('/').filter(p => p && !p.includes('.html'));
        if (pathParts.length > 0) baseUrl = '/' + pathParts[0];
    }

    console.log('i18n | lang:', savedLang, '| base:', baseUrl || '(root)');

    try {
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
                    interpolation: { escapeValue: false }
                });

            jqueryI18next.init(i18next, $);
        }

        applyTranslations();
        resolve();
    } catch (error) {
        console.error('i18n init error:', error);
        resolve();
    }
});
