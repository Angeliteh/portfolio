// Objeto con las traducciones
const translations = {
  es: {
    // Menú de navegación
    'nav-home': 'Inicio',
    'nav-about': 'Sobre Mí',
    'nav-skills': 'Habilidades',
    'nav-projects': 'Proyectos',
    'nav-contact': 'Contacto',
    
    // Sección de inicio
    'welcome-title': 'Bienvenido a mi Portafolio',
    'welcome-subtitle': 'Desarrollador Web & Móvil',
    'welcome-description': 'Especializado en crear experiencias digitales atractivas y funcionales.',
    'welcome-button': 'Ver Proyectos',
    
    // Sección sobre mí
    'about-title': 'Sobre Mí',
    'about-subtitle': 'Desarrollador especializado en automatización y soluciones eficientes',
    'about-who': 'Quién soy',
    'about-who-text': 'Soy un desarrollador con experiencia en automatización, web scraping y desarrollo de aplicaciones eficientes. Me especializo en crear herramientas que optimizan procesos mediante Python y otras tecnologías. Mi enfoque está en la eficiencia, escalabilidad y facilidad de uso, desarrollando soluciones para extracción y análisis de datos, control remoto y aplicaciones web funcionales.',
    'about-approach': 'Mi enfoque',
    'about-approach-text': 'Me especializo en el desarrollo de herramientas automatizadas y sistemas de scraping adaptables a distintos tipos de datos y plataformas. Busco optimizar procesos y crear soluciones escalables y de fácil integración. Mis proyectos abarcan desde web scraping avanzado hasta el desarrollo de aplicaciones móviles y web, siempre priorizando rendimiento y usabilidad.',
    
    // Sección de habilidades
    'skills-title': 'Mis Habilidades',
    'skills-subtitle': 'Estas son las tecnologías y habilidades que domino',
    'skills-automation': 'Automatización y Web Scraping',
    'skills-backend': 'Desarrollo Backend',
    'skills-frontend': 'Desarrollo Frontend y Móvil',
    'skills-devops': 'Herramientas y DevOps',
    'skills-additional': 'Habilidades Adicionales',
    
    // Sección de proyectos
    'projects-title': 'Mis Proyectos',
    'projects-subtitle': 'Algunos de mis trabajos más recientes',
    'projects-all': 'Todos',
    'projects-web': 'Web',
    'projects-mobile': 'Móvil',
    'projects-scraping': 'Scraping',
    'projects-desktop': 'Escritorio',
    'project-view': 'Ver Proyecto',
    
    // Proyectos específicos
    'project1-title': 'Scraper de Tarjetas RTX',
    'project1-desc': 'Herramienta automatizada para el seguimiento de precios de tarjetas gráficas RTX en múltiples tiendas. Analiza tendencias, detecta ofertas y genera alertas de precios. Incluye visualización de datos históricos y predicciones de precios futuros.',
    
    'project2-title': 'Remote Mouse',
    'project2-desc': 'Aplicación móvil para control remoto del cursor con latencia ultra baja. Incluye gestos multitáctiles, teclado virtual y accesos rápidos personalizables. Perfecta para presentaciones y control multimedia a distancia.',
    
    'project3-title': 'Descargador de Videos',
    'project3-desc': 'Plataforma web para descargar videos de redes sociales sin publicidad ni marcas de agua. Soporta múltiples formatos y calidades, con procesamiento en paralelo para mayor velocidad. Interfaz intuitiva y moderna.',
    
    'project4-title': 'Calculadora de Distancias',
    'project4-desc': 'Herramienta web para calcular matrices de distancia entre múltiples puntos usando la API de Google Maps. Ideal para optimización de rutas y logística. Incluye estimaciones de tiempo con tráfico en tiempo real y exportación a Excel.',
    
    'project5-title': 'Scraper de Excel',
    'project5-desc': 'Herramienta para consolidación automática de datos desde múltiples archivos Excel. Procesa y combina información de diferentes fuentes, aplicando reglas de negocio y generando reportes personalizados.',
    
    'project6-title': 'Análisis de Precios',
    'project6-desc': 'Sistema automatizado de seguimiento de precios en múltiples tiendas online. Detecta variaciones de precios, genera alertas y produce informes comparativos para toma de decisiones.',
    
    'project7-title': 'Gestor de Inventario',
    'project7-desc': 'Aplicación de escritorio para gestión de inventario con interfaz moderna y eficiente. Incluye control de stock, alertas de reposición, generación de reportes y seguimiento de movimientos.',
    
    'project8-title': 'App de Fitness',
    'project8-desc': 'Aplicación móvil para seguimiento de rutinas de ejercicio y progreso físico. Incluye planes personalizados, tracking de métricas, recordatorios y sincronización con dispositivos wearables.',
    
    // Sección de contacto
    'contact-title': 'Contacto',
    'contact-subtitle': '¿Interesado en colaborar en un proyecto o tienes alguna pregunta? No dudes en contactarme a través del siguiente formulario o por mis redes sociales.',
    'contact-name': 'Nombre',
    'contact-email': 'Correo Electrónico',
    'contact-subject': 'Asunto',
    'contact-message': 'Mensaje',
    'contact-send': 'Enviar Mensaje',
    
    // Pie de página
    'footer-rights': 'Todos los derechos reservados',
    
    // Selector de tema
    'theme-light': 'Claro',
    'theme-dark': 'Oscuro',
    
    // Otros textos
    'developer-role': 'Desarrollador Full-Stack',
    'no-projects': 'No hay proyectos que coincidan con este filtro.'
  },
  en: {
    // Navigation menu
    'nav-home': 'Home',
    'nav-about': 'About Me',
    'nav-skills': 'Skills',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    
    // Home section
    'welcome-title': 'Welcome to my Portfolio',
    'welcome-subtitle': 'Web & Mobile Developer',
    'welcome-description': 'Specialized in creating attractive and functional digital experiences.',
    'welcome-button': 'View Projects',
    
    // About section
    'about-title': 'About Me',
    'about-subtitle': 'Developer specialized in automation and efficient solutions',
    'about-who': 'Who I am',
    'about-who-text': 'I am a developer with experience in automation, web scraping, and efficient application development. I specialize in creating tools that optimize processes using Python and other technologies. My focus is on efficiency, scalability, and ease of use, developing solutions for data extraction and analysis, remote control, and functional web applications.',
    'about-approach': 'My approach',
    'about-approach-text': 'I specialize in developing automated tools and scraping systems adaptable to different types of data and platforms. I seek to optimize processes and create scalable solutions with easy integration. My projects range from advanced web scraping to mobile and web application development, always prioritizing performance and usability.',
    
    // Skills section
    'skills-title': 'My Skills',
    'skills-subtitle': 'These are the technologies and skills I master',
    'skills-automation': 'Automation and Web Scraping',
    'skills-backend': 'Backend Development',
    'skills-frontend': 'Frontend and Mobile Development',
    'skills-devops': 'Tools and DevOps',
    'skills-additional': 'Additional Skills',
    
    // Projects section
    'projects-title': 'My Projects',
    'projects-subtitle': 'Some of my most recent work',
    'projects-all': 'All',
    'projects-web': 'Web',
    'projects-mobile': 'Mobile',
    'projects-scraping': 'Scraping',
    'projects-desktop': 'Desktop',
    'project-view': 'View Project',
    
    // Specific projects
    'project1-title': 'RTX Cards Scraper',
    'project1-desc': 'Automated tool for tracking RTX graphics card prices across multiple stores. It analyzes trends, detects offers, and generates price alerts. Includes historical data visualization and future price predictions.',
    
    'project2-title': 'Remote Mouse',
    'project2-desc': 'Mobile application for remote cursor control with ultra-low latency. Includes multi-touch gestures, virtual keyboard, and customizable shortcuts. Perfect for presentations and remote multimedia control.',
    
    'project3-title': 'Video Downloader',
    'project3-desc': 'Web platform for downloading videos from social networks without ads or watermarks. Supports multiple formats and qualities, with parallel processing for higher speed. Intuitive and modern interface.',
    
    'project4-title': 'Distance Calculator',
    'project4-desc': 'Web tool for calculating distance matrices between multiple points using the Google Maps API. Ideal for route optimization and logistics. Includes real-time traffic time estimates and Excel export.',
    
    'project5-title': 'Excel Scraper',
    'project5-desc': 'Tool for automatic consolidation of data from multiple Excel files. Processes and combines information from different sources, applying business rules and generating customized reports.',
    
    'project6-title': 'Price Analysis',
    'project6-desc': 'Automated price tracking system across multiple online stores. Detects price variations, generates alerts, and produces comparative reports for decision making.',
    
    'project7-title': 'Inventory Manager',
    'project7-desc': 'Desktop application for inventory management with a modern and efficient interface. Includes stock control, replenishment alerts, report generation, and movement tracking.',
    
    'project8-title': 'Fitness App',
    'project8-desc': 'Mobile application for tracking exercise routines and physical progress. Includes customized plans, metric tracking, reminders, and synchronization with wearable devices.',
    
    // Contact section
    'contact-title': 'Contact Me',
    'contact-subtitle': 'Interested in collaborating on a project or have a question? Feel free to contact me through the form below or via my social networks.',
    'contact-name': 'Name',
    'contact-email': 'Email',
    'contact-subject': 'Subject',
    'contact-message': 'Message',
    'contact-send': 'Send Message',
    
    // Footer
    'footer-rights': 'All rights reserved',
    
    // Theme switcher
    'theme-light': 'Light',
    'theme-dark': 'Dark',
    
    // Other texts
    'developer-role': 'Full-Stack Developer',
    'no-projects': 'There are no projects matching this filter.'
  }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
  // Guardar la preferencia de idioma en localStorage
  localStorage.setItem('language', lang);
  
  // Actualizar el atributo lang del HTML
  document.documentElement.setAttribute('lang', lang);
  
  // Actualizar todos los elementos con atributo data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // Si es un input o textarea, actualizar el placeholder
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (element.getAttribute('placeholder')) {
          element.setAttribute('placeholder', translations[lang][key]);
        }
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Actualizar elementos específicos que no tienen data-i18n
  // Rol del desarrollador
  document.querySelector('.author-content span').textContent = translations[lang]['developer-role'];
  
  // Títulos y descripciones de proyectos
  updateProjectContent(lang);
  
  // Mensaje de no hay proyectos
  if (document.querySelector('.no-projects-message')) {
    document.querySelector('.no-projects-message').textContent = translations[lang]['no-projects'];
  }
  
  // Actualizar el botón de idioma activo
  document.querySelectorAll('.language-switch').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Función para actualizar el contenido de los proyectos
function updateProjectContent(lang) {
  // Proyecto 1
  updateProject(1, lang);
  // Proyecto 2
  updateProject(2, lang);
  // Proyecto 3
  updateProject(3, lang);
  // Proyecto 4
  updateProject(4, lang);
  // Proyecto 5
  updateProject(5, lang);
  // Proyecto 6
  updateProject(6, lang);
  // Proyecto 7
  updateProject(7, lang);
  // Proyecto 8
  updateProject(8, lang);
}

// Función auxiliar para actualizar un proyecto específico
function updateProject(num, lang) {
  const projectSelector = `.isotope-item:nth-of-type(${num})`;
  const titleKey = `project${num}-title`;
  const descKey = `project${num}-desc`;
  
  // Buscar en ambas páginas de proyectos
  document.querySelectorAll('#page-1, #page-2').forEach(page => {
    const projectElement = page.querySelector(projectSelector);
    if (projectElement) {
      const titleElement = projectElement.querySelector('h4');
      const descElement = projectElement.querySelector('.project-description');
      
      if (titleElement && translations[lang][titleKey]) {
        titleElement.textContent = translations[lang][titleKey];
      }
      
      if (descElement && translations[lang][descKey]) {
        descElement.textContent = translations[lang][descKey];
      }
    }
  });
}

// Inicializar el idioma al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  // Obtener el idioma guardado o usar español por defecto
  const currentLang = localStorage.getItem('language') || 'es';
  
  // Aplicar el idioma
  changeLanguage(currentLang);
  
  // Configurar los botones de cambio de idioma
  document.querySelectorAll('.language-switch').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
}); 