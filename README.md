# Mi Portafolio Profesional

Este es un portafolio web profesional diseñado para mostrar proyectos de desarrollo de software de manera atractiva y organizada. Está construido con HTML, CSS y JavaScript, utilizando Bootstrap como framework de CSS.

## Características

- Diseño responsive que se adapta a diferentes tamaños de pantalla
- Efecto de transparencia para un aspecto moderno
- Sistema de temas claro/oscuro basado en la preferencia del sistema
- Secciones para información personal, habilidades, proyectos y contacto
- Galería de proyectos con efectos hover y filtrado por categorías
- Formulario de contacto funcional

## Estructura del Proyecto

```
/
├── assets/
│   ├── css/
│   │   ├── custom-styles.css     # Estilos personalizados
│   │   ├── templatemo-style.css  # Estilos de la plantilla original
│   │   └── ...                   # Otros archivos CSS
│   ├── images/                   # Imágenes del portafolio
│   └── js/
│       ├── custom.js             # JavaScript personalizado
│       ├── isotope.min.js        # Biblioteca para filtrado de proyectos
│       └── ...                   # Otros archivos JavaScript
├── vendor/                       # Bibliotecas de terceros
├── proyectos/                    # Páginas detalladas de proyectos (a crear)
├── index.html                    # Página principal
└── README.md                     # Este archivo
```

## Cómo Agregar Nuevos Proyectos

Para agregar un nuevo proyecto, sigue estos pasos:

1. Añade una imagen del proyecto en `assets/images/` (preferiblemente con dimensiones similares a las existentes)
2. En el archivo `index.html`, dentro de la sección `<div class="isotope-box">`, añade un nuevo elemento siguiendo esta estructura:

```html
<div class="isotope-item" data-type="categoria">
  <figure class="snip1321">
    <img src="assets/images/tu-imagen.jpg" alt="Nombre del Proyecto" />
    <figcaption>
      <a href="proyectos/tu-proyecto.html" data-lightbox="image-1" data-title="Nombre del Proyecto">
        <i class="fa fa-search"></i>
      </a>
      <h4>Nombre del Proyecto</h4>
      <span>Breve descripción</span>
    </figcaption>
  </figure>
</div>
```

3. Crea una página detallada para tu proyecto en la carpeta `proyectos/` con el nombre `tu-proyecto.html`

### Categorías de Proyectos

Las categorías disponibles para filtrar proyectos son:
- `web`: Proyectos de desarrollo web
- `scraping`: Proyectos de web scraping
- `desktop`: Aplicaciones de escritorio
- `*`: Todos los proyectos (categoría por defecto)

Para añadir una nueva categoría, modifica el formulario de filtrado en `index.html`:

```html
<form class="isotope-toolbar">
  <label><input type="radio" data-type="*" checked="" name="isotope-filter" />
  <span>todos</span></label>
  <label><input type="radio" data-type="nueva-categoria" name="isotope-filter" />
  <span>nueva categoría</span></label>
  <!-- Otras categorías -->
</form>
```

## Personalización

### Colores y Fuentes

Los colores y fuentes se definen en el archivo `assets/css/custom-styles.css`. Puedes modificar las variables CSS en la sección `:root` para cambiar los colores del tema.

### Secciones

Puedes modificar el contenido de cada sección editando el archivo `index.html`. Las secciones están organizadas con comentarios para facilitar la edición.

## Contacto

Para configurar el formulario de contacto, edita la acción del formulario en la sección de contacto del archivo `index.html`. Por defecto, está configurado para usar Formspree:

```html
<form id="contact" action="https://formspree.io/f/tuemail@ejemplo.com" method="POST">
```

Reemplaza `tuemail@ejemplo.com` con tu dirección de correo electrónico.

## Créditos

Este portafolio está basado en la plantilla Reflux HTML CSS Template, con modificaciones personalizadas para adaptarlo a las necesidades específicas.

## Licencia

Este proyecto está disponible como código abierto bajo los términos de la licencia MIT. 