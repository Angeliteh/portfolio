class ThemeSwitcher {
  static init() {
    // Esperar a que el sidebar se cargue
    window.addEventListener('sidebarLoaded', () => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', savedTheme);

      const themeSwitch = document.querySelector('.theme-switch');
      if (themeSwitch) {
        themeSwitch.addEventListener('click', () => {
          const currentTheme = document.documentElement.getAttribute('data-theme');
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          document.documentElement.setAttribute('data-theme', newTheme);
          localStorage.setItem('theme', newTheme);
        });
      }
    });
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  ThemeSwitcher.init();
}); 
