// Función para establecer el tema
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
}

// Función para alternar entre temas
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

// Función para inicializar el tema al cargar la página
function initTheme() {
    // Verificar si hay un tema guardado en localStorage
    if (localStorage.getItem('theme')) {
        setTheme(localStorage.getItem('theme'));
    } else {
        // Si no hay tema guardado, verificar preferencia del sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    
    // Actualizar el estado del interruptor
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (toggleSwitch) {
        toggleSwitch.checked = localStorage.getItem('theme') === 'dark';
        
        // Agregar evento de cambio
        toggleSwitch.addEventListener('change', function(e) {
            if (e.target.checked) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        });
    }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initTheme); 