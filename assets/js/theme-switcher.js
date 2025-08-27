// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar el tema guardado (por defecto oscuro)
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  console.log('Tema inicializado:', savedTheme);

  // Esperar a que el sidebar se cargue
  const observer = new MutationObserver((mutations, obs) => {
    const themeSwitch = document.querySelector('.theme-switch');
    if (themeSwitch) {
      // El sidebar se ha cargado, configurar el switch
      themeSwitch.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      });
      
      // Detener el observer ya que encontramos el switch
      obs.disconnect();
    }
  });

  // Comenzar a observar cambios en el DOM
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}); 
