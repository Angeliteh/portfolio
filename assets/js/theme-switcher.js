function setTheme(theme) {
    const root = document.documentElement;
    if (!root) return; // Evitar error si el elemento no existe

    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

// Observador para cambios en el DOM
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            const themeButtons = document.querySelectorAll('.theme-switch');
            if (themeButtons.length) {
                themeButtons.forEach(button => {
                    if (!button.hasListener) {
                        button.hasListener = true;
                        button.addEventListener('click', () => {
                            const currentTheme = document.documentElement.getAttribute('data-theme');
                            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                            setTheme(newTheme);
                        });
                    }
                });
            }
        }
    });
});

// Inicializar tema cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    observer.observe(document.body, { childList: true, subtree: true });
}); 
