# Mi Portfolio Personal

Este es un portfolio personal moderno y responsive, diseñado para mostrar proyectos y habilidades de manera atractiva.

## Características

- Diseño responsive que se adapta a todos los dispositivos
- Sección "Sobre Mí" para presentarte profesionalmente
- Sección "Mis Trabajos" con filtrado por categorías
- Proyectos organizados en un grid 2x2 para mejor visualización
- Etiquetas de tecnologías para cada proyecto
- Botón de acceso directo a la página detallada de cada proyecto
- Paginación de proyectos
- Efecto de transparencia para un aspecto moderno
- Selector de tema claro/oscuro con persistencia
- Páginas detalladas para cada proyecto
- Formulario de contacto
- Integración con redes sociales

## Estructura del Proyecto

```
portfolio/
├── index.html                  # Página principal
├── assets/
│   ├── css/
│   │   ├── custom-styles.css   # Estilos personalizados
│   │   └── ...                 # Otros archivos CSS
│   ├── js/
│   │   ├── theme-switcher.js   # Script para cambio de tema
│   │   └── ...                 # Otros archivos JavaScript
│   └── images/                 # Imágenes del portfolio
├── vendor/                     # Bibliotecas de terceros
└── proyectos/                  # Páginas detalladas de proyectos
    ├── plantilla-proyecto.html # Plantilla para nuevos proyectos
    └── ...                     # Páginas de proyectos individuales
```

## Cómo Personalizar

### Información Personal

Edita el archivo `index.html` para actualizar:

- Tu nombre y profesión
- Descripción "Sobre Mí"
- Habilidades
- Enlaces a redes sociales

### Añadir Nuevos Proyectos

Para añadir un nuevo proyecto a la sección "Mis Trabajos":

1. Añade una nueva imagen para el proyecto en `assets/images/`
2. Edita el archivo `index.html` y añade un nuevo elemento en la sección "Mis Trabajos":

```html
<div class="isotope-item" data-type="CATEGORÍA">
  <figure class="snip1321">
    <img src="assets/images/tu-imagen.jpg" alt="Nombre del Proyecto">
    <figcaption>
      <h4>Nombre del Proyecto</h4>
      <span>Breve descripción</span>
      <a href="proyectos/nombre-proyecto.html" class="project-btn">Ver Proyecto</a>
    </figcaption>
    <div class="tech-tags">
      <span class="tech-tag">Tecnología 1</span>
      <span class="tech-tag">Tecnología 2</span>
      <span class="tech-tag">Tecnología 3</span>
    </div>
  </figure>
</div>
```

3. Si necesitas añadir una nueva página de proyectos, crea un nuevo contenedor con el ID correspondiente:

```html
<div class="isotope-box" id="page-3" style="display: none;">
  <!-- Nuevos proyectos aquí -->
</div>
```

4. Actualiza la paginación añadiendo un nuevo número de página:

```html
<li><a href="#" data-page="3">3</a></li>
```

5. Crea una página detallada para el proyecto:
   - Copia `proyectos/plantilla-proyecto.html` a un nuevo archivo
   - Personaliza el contenido con los detalles de tu proyecto
   - Incluye imágenes, descripciones, desafíos y aprendizajes

### Categorías de Proyectos

Las categorías disponibles para filtrar proyectos son:

- `web`: Proyectos de desarrollo web
- `scraping`: Proyectos de web scraping
- `desktop`: Aplicaciones de escritorio
- `mobile`: Aplicaciones móviles

Para añadir una nueva categoría:

1. Edita el archivo `index.html` y añade un nuevo filtro en la sección de filtros:

```html
<div class="item-filter">
  <input type="radio" name="filter" id="nueva-categoria">
  <label for="nueva-categoria">Nueva Categoría</label>
</div>
```

2. Asigna la nueva categoría a tus proyectos usando el atributo `data-type`:

```html
<div class="isotope-item" data-type="nueva-categoria">
  <!-- Contenido del proyecto -->
</div>
```

### Etiquetas de Tecnologías

Cada proyecto muestra las tecnologías utilizadas mediante etiquetas debajo de la imagen. Para personalizar estas etiquetas:

1. Edita el elemento `tech-tags` dentro de cada proyecto:

```html
<div class="tech-tags">
  <span class="tech-tag">Tecnología 1</span>
  <span class="tech-tag">Tecnología 2</span>
  <span class="tech-tag">Tecnología 3</span>
</div>
```

2. Puedes añadir tantas etiquetas como necesites, pero se recomienda no más de 3-4 para mantener un diseño limpio.

### Paginación

El portfolio incluye un sistema de paginación que muestra proyectos en formato de cuadrícula. Para gestionar la paginación:

1. Cada página de proyectos debe tener un ID único (`page-1`, `page-2`, etc.)
2. La navegación entre páginas se maneja automáticamente con el script incluido
3. Si añades nuevas páginas, asegúrate de actualizar la paginación en el HTML

### Personalizar Colores y Fuentes

Los colores y fuentes se pueden personalizar en el archivo `assets/css/custom-styles.css`:

- Modifica las variables CSS en `:root` para cambiar los colores del tema claro
- Modifica las variables en `[data-theme="dark"]` para cambiar los colores del tema oscuro
- Cambia las fuentes importadas y sus aplicaciones

### Selector de Tema Claro/Oscuro

El portfolio incluye un selector de tema que permite al usuario cambiar entre modo claro y oscuro:

- El tema seleccionado se guarda en localStorage para persistir entre visitas
- Por defecto, se respeta la preferencia del sistema del usuario
- El selector está disponible en todas las páginas

### Configurar el Formulario de Contacto

Para que el formulario de contacto funcione, necesitarás configurar un servicio de backend:

1. Edita el atributo `action` del formulario en `index.html`
2. Configura el método de envío (GET/POST)
3. Asegúrate de que los campos del formulario coincidan con lo que espera tu backend

## Créditos

Esta plantilla está basada en [Reflux Template](https://templatemo.com/tm-531-reflux) con modificaciones personalizadas.

## Licencia

Este proyecto está disponible como código abierto bajo la licencia MIT. 