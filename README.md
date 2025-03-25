# Portafolio Personal - Desarrollador Full-Stack

Un portafolio moderno y responsive para mostrar proyectos y habilidades como desarrollador. Incluye modo oscuro/claro, diseño responsive y una estructura modular.

## Estructura del Proyecto

```
portafolio/
│
├── index.html                  # Página principal
├── README.md                   # Documentación
├── prepros-6.config           # Configuración de Prepros
│
├── templates/                  # Componentes reutilizables
│   └── sidebar.html           # Barra lateral de navegación
│
├── assets/
│   ├── css/
│   │   ├── custom-styles.css  # Estilos personalizados y variables CSS
│   │   └── ...               # Otros archivos CSS
│   │
│   ├── js/
│   │   ├── custom.js         # Funcionalidades principales
│   │   ├── template-loader.js # Cargador de componentes
│   │   ├── theme-switcher.js # Control del tema claro/oscuro
│   │   └── ...              # Otros scripts
│   │
│   └── images/               # Recursos de imagen
│
└── proyectos/                # Páginas individuales de proyectos
    ├── plantilla-proyecto.html
    ├── mouse-remoto.html
    └── ...
```

## Características

- **Tema Claro/Oscuro**: Sistema de temas con variables CSS personalizables
- **Diseño Responsive**: Adaptable a móvil, tablet y escritorio
- **Componentes Modulares**: Sistema de templates reutilizables
- **Navegación Dinámica**: Ajuste automático de rutas según la ubicación
- **Persistencia de Preferencias**: Almacenamiento local del tema seleccionado

## Personalización

### Sistema de Temas

El portafolio utiliza variables CSS para gestionar los temas. Definidas en `assets/css/custom-styles.css`:

```css
:root {
  /* Modo claro */
  --text-color: #2c3e50;
  --bg-color: rgba(246, 248, 250, 0.95);
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --accent-color: #9b59b6;
  /* ... más variables ... */
}

[data-theme="dark"] {
  /* Modo oscuro */
  --text-color: #e2e8f0;
  --bg-color: rgba(26, 32, 44, 0.95);
  /* ... más variables ... */
}
```

### Componentes

Los componentes reutilizables se encuentran en la carpeta `templates/`:
- `sidebar.html`: Navegación principal y selector de tema

### JavaScript

- `template-loader.js`: Gestiona la carga dinámica de componentes
- `theme-switcher.js`: Controla el cambio de tema y su persistencia
- `custom.js`: Funcionalidades específicas y eventos

### Proyectos

Para añadir un nuevo proyecto:
1. Copiar `plantilla-proyecto.html` en la carpeta `proyectos/`
2. Actualizar contenido y metadatos
3. Asegurar rutas relativas correctas (usando `../` para recursos)

## Desarrollo

### Prepros

El proyecto utiliza Prepros para:
- Compilación de assets
- Servidor de desarrollo local
- Live reload
- Optimización de recursos

Configuración en `prepros-6.config`

### Rutas

- Páginas de proyecto: Usar rutas relativas (`../`) para recursos
- Componentes: Cargados dinámicamente vía `template-loader.js`
- Assets: Referencias relativas a la raíz del proyecto

## Compatibilidad

- Navegadores modernos con soporte para CSS Variables
- JavaScript ES6+
- Diseño responsive desde 320px hasta 4K

## Créditos

Desarrollado con tecnologías web modernas, utilizando:
- CSS Variables para theming
- JavaScript modular
- Sistema de templates dinámico
