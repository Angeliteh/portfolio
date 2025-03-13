# Portafolio Personal - Desarrollador Full-Stack

Un portafolio moderno y responsive para mostrar tus proyectos y habilidades como desarrollador. Incluye secciones para información personal, habilidades, proyectos y contacto.

## Características

- **Diseño Responsive**: Se adapta a cualquier dispositivo (móvil, tablet, escritorio)
- **Sección "Sobre Mí"**: Presenta tu perfil profesional y enfoque de trabajo
- **Sección de Habilidades**: Muestra tus competencias técnicas organizadas por categorías
- **Filtrado de Proyectos**: Permite filtrar proyectos por categoría
- **Etiquetas de Tecnologías**: Cada proyecto muestra las tecnologías utilizadas
- **Paginación**: Muestra los proyectos de forma organizada
- **Selector de Tema**: Permite cambiar entre modo claro y oscuro
- **Páginas de Detalle**: Cada proyecto tiene su propia página con información detallada
- **Formulario de Contacto**: Incluye un formulario para que los visitantes puedan contactarte
- **Integración con Redes Sociales**: Enlaces a tus perfiles profesionales

## Estructura del Proyecto

```
portafolio/
│
├── index.html                  # Página principal
├── README.md                   # Documentación
│
├── assets/                     # Recursos estáticos
│   ├── css/                    # Hojas de estilo
│   │   ├── templatemo-style.css # Estilos principales
│   │   ├── custom-styles.css   # Estilos personalizados
│   │   └── ...                 # Otros archivos CSS
│   │
│   ├── js/                     # Scripts de JavaScript
│   │   ├── custom.js           # Funcionalidades principales
│   │   ├── theme-switcher.js   # Selector de tema claro/oscuro
│   │   └── ...                 # Otros archivos JS
│   │
│   └── images/                 # Imágenes del sitio
│
├── vendor/                     # Bibliotecas de terceros
│   ├── bootstrap/              # Framework Bootstrap
│   ├── jquery/                 # Biblioteca jQuery
│   └── ...                     # Otras bibliotecas
│
└── proyectos/                  # Páginas de detalle de proyectos
    ├── scraping-productos.html # Proyecto: Scraper de Tarjetas RTX
    ├── mouse-remoto.html       # Proyecto: Remote Mouse
    ├── social-media-downloader.html # Proyecto: Descargador de Videos
    ├── app-notas.html          # Proyecto: Calculadora de Distancias
    └── dashboard-admin.html    # Proyecto: Scraper de Excel
```

## Personalización

### Información Personal

Para personalizar la sección "Sobre Mí", edita el archivo `index.html` y busca la sección con el id `section1`. Aquí puedes modificar:

- Tu nombre y título profesional
- Descripción personal y enfoque profesional
- Foto de perfil (reemplaza las imágenes en `assets/images/`)

### Habilidades

La sección de habilidades está organizada en categorías:
- Automatización y Web Scraping
- Desarrollo Backend
- Desarrollo Frontend y Móvil
- Herramientas y DevOps
- Habilidades Adicionales

Para modificar estas categorías, edita la sección con id `section2` en `index.html`.

### Proyectos

Los proyectos se muestran en una cuadrícula con filtrado por categorías. Para añadir un nuevo proyecto:

1. Añade un nuevo elemento HTML en la sección con id `section3` siguiendo la estructura existente
2. Asigna las categorías correspondientes (data-filter)
3. Añade una imagen representativa en `assets/images/`
4. Incluye las etiquetas de tecnologías utilizadas
5. Crea una página de detalle en la carpeta `proyectos/`

#### Etiquetas de Tecnologías

Cada proyecto muestra las tecnologías utilizadas. Para añadir o modificar estas etiquetas, edita el div con clase `tech-tags` dentro de cada proyecto.

#### Paginación

Los proyectos se muestran en una cuadrícula de 2x2 por página. La paginación se gestiona automáticamente en función del número de proyectos.

### Páginas de Detalle de Proyectos

Cada proyecto tiene su propia página de detalle con secciones para:
- Descripción del proyecto
- Características principales
- Tecnologías utilizadas
- Desafíos y soluciones
- Resultados y aprendizajes
- Enlaces al código y demo

Para crear una nueva página de detalle, copia una existente en la carpeta `proyectos/` y personaliza su contenido.

### Colores y Fuentes

El portafolio incluye un selector de tema claro/oscuro. Los colores principales se definen como variables CSS en `assets/css/custom-styles.css`:

```css
:root {
  --primary-color: #f5a425;
  --background-color: #fff;
  --text-color: #2a2a2a;
  --card-bg: #f7f7f7;
  --border-color: #eee;
  /* ... más variables ... */
}

[data-theme="dark"] {
  --primary-color: #f5a425;
  --background-color: #1e1e1e;
  --text-color: #fff;
  --card-bg: #2d2d2d;
  --border-color: #444;
  /* ... más variables ... */
}
```

Para cambiar la fuente principal, modifica la importación de Google Fonts en el `<head>` de `index.html` y actualiza las referencias en CSS.

### Formulario de Contacto

El formulario de contacto está configurado para funcionar con un servicio como FormSubmit. Para configurarlo:

1. Edita el atributo `action` del formulario en la sección con id `section4`
2. Personaliza los campos según tus necesidades
3. Añade validación adicional si es necesario

## Créditos

Esta plantilla está basada en el tema Reflux de TemplateMo, con modificaciones sustanciales para añadir nuevas funcionalidades como el selector de tema, paginación, etiquetas de tecnologías y páginas de detalle de proyectos.

## Licencia

Este proyecto está disponible bajo la licencia MIT. Puedes utilizarlo libremente para tu portafolio personal o profesional. 