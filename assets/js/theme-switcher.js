function setTheme(theme) {
    const root = document.documentElement;
    if (!root) return;
    
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Actualizar el ícono del botón si existe
    const themeButton = document.querySelector('.theme-switch');
    if (themeButton) {
        const sunIcon = themeButton.querySelector('.fa-sun');
        const moonIcon = themeButton.querySelector('.fa-moon');
        if (sunIcon && moonIcon) {
            if (theme === 'dark') {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        }
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    
    // Esperar a que el sidebar se cargue
    const observer = new MutationObserver((mutations) => {
        const themeButton = document.querySelector('.theme-switch');
        if (themeButton && !themeButton.hasListener) {
            themeButton.hasListener = true;
            themeButton.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                setTheme(newTheme);
            });
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}); 
