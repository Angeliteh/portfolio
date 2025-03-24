function initializeTheme() {
    const themeToggle = document.querySelector('.theme-switch');
    
    if (!themeToggle) {
        console.error('Theme switch button not found');
        return;
    }

    // Función para cambiar el tema
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Actualizar íconos
        const sunIcon = themeToggle.querySelector('.fa-sun');
        const moonIcon = themeToggle.querySelector('.fa-moon');
        
        if (theme === 'dark') {
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        }
    }

    // Establecer tema inicial
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Manejar click en el botón
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
}

// Inicializar cuando se carga el sidebar
document.addEventListener('DOMContentLoaded', () => {
    // Si el sidebar ya está cargado
    if (document.querySelector('.theme-switch')) {
        initializeTheme();
    }
});

// Para cuando el sidebar se carga dinámicamente
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            if (document.querySelector('.theme-switch')) {
                initializeTheme();
                observer.disconnect();
            }
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
}); 
