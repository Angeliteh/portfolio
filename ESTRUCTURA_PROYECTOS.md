# Estructura Estándar para Proyectos en el Portafolio

## Reglas de Congruencia Visual

Este documento establece las reglas estándar que deben seguir **TODOS** los proyectos en la página principal (`index.html`) para mantener la congruencia visual.

## Estructura HTML Estándar

Cada proyecto debe seguir exactamente esta estructura:

```html
<div class="isotope-item" data-type="[CATEGORIA]">
  <div class="project-container">
    <figure class="project-card">
      <div class="gradient-preview">
        <div class="preview-content">
          <i class="fas fa-[ICONO]"></i>
          <span class="preview-title" data-i18n="projects.project[N].name">[NOMBRE_PROYECTO]</span>
        </div>
      </div>
      <div class="overlay">
        <h4 data-i18n="projects.project[N].title">[TITULO_PROYECTO]</h4>
        <p class="project-description" data-i18n="projects.project[N].desc">
          [DESCRIPCION_PROYECTO]
        </p>
        <a href="proyectos/[ARCHIVO].html" class="project-btn" data-i18n="projects.viewProject">Ver Proyecto</a>
      </div>
    </figure>
    <div class="tech-tags-container">
      <span class="tech-badge" data-i18n="tech.[TECH1]">[TECH1_TEXTO]</span>
      <span class="tech-badge" data-i18n="tech.[TECH2]">[TECH2_TEXTO]</span>
      <span class="tech-badge" data-i18n="tech.[TECH3]">[TECH3_TEXTO]</span>
    </div>
  </div>
</div>
```

## Reglas Obligatorias

### 1. Estructura del Proyecto
- **SIEMPRE** usar `gradient-preview` con `preview-content`
- **NUNCA** usar `<img>` directamente en `project-card`
- **SIEMPRE** incluir icono FontAwesome en `preview-content`
- **SIEMPRE** usar `overlay` para el contenido del proyecto

### 2. Etiquetas de Tecnología
- **SIEMPRE** usar la clase `tech-badge` (NO `tech-tag`)
- **SIEMPRE** incluir `data-i18n="tech.[TECNOLOGIA]"`
- **SIEMPRE** incluir texto de respaldo después del atributo `data-i18n`
- **SIEMPRE** usar exactamente 3 etiquetas de tecnología por proyecto

### 3. Internacionalización
- **SIEMPRE** usar `data-i18n` para todos los textos
- **SIEMPRE** incluir texto de respaldo en español
- **SIEMPRE** seguir el patrón `projects.project[N].[CAMPO]`

### 4. Categorías Permitidas
- `data-type="automation"` - Herramientas de automatización y scraping
- `data-type="web-apps"` - Aplicaciones web (software con interfaz web)
- `data-type="web-design"` - Diseño web comercial y marketing
- `data-type="mobile"` - Aplicaciones móviles
- `data-type="desktop"` - Aplicaciones de escritorio

## Tecnologías Disponibles

Las siguientes tecnologías están configuradas en los archivos de traducción:

- `tech.python` → "Python"
- `tech.javascript` → "JavaScript"
- `tech.flutter` → "Flutter"
- `tech.react` → "React"
- `tech.nodejs` → "Node.js"
- `tech.sqlite` → "SQLite"
- `tech.database` → "Bases de Datos"
- `tech.api` → "APIs RESTful"
- `tech.googlemaps` → "Google Maps API"
- `tech.socketio` → "Socket.io"
- `tech.beautifulsoup` → "BeautifulSoup"
- `tech.html` → "HTML/CSS"
- `tech.responsive` → "Responsive Design"

## Iconos Recomendados (FontAwesome)

- `fa-chart-line` - Para proyectos de análisis/scraping
- `fa-mouse` - Para aplicaciones de control
- `fa-download` - Para herramientas de descarga
- `fa-map-marked-alt` - Para aplicaciones de mapas
- `fa-file-excel` - Para herramientas de Excel
- `fa-mobile-alt` - Para aplicaciones móviles
- `fa-globe` - Para aplicaciones web
- `fa-desktop` - Para aplicaciones de escritorio

## Proceso para Agregar Nuevos Proyectos

1. **Agregar traducciones** en `assets/locales/es/translation.json` y `assets/locales/en/translation.json`
2. **Agregar tecnologías nuevas** si es necesario en la sección `tech`
3. **Seguir la estructura HTML estándar** exactamente como se muestra arriba
4. **Verificar que todas las clases y atributos** coincidan con el estándar
5. **Probar la internacionalización** en ambos idiomas

## ❌ Errores Comunes a Evitar

- Usar `tech-tag` en lugar de `tech-badge`
- Omitir el texto de respaldo en las etiquetas
- Usar `<img>` en lugar de `gradient-preview`
- No incluir `data-i18n` en todos los textos
- Usar estructura diferente en `project-card`
- Omitir iconos en `preview-content`

## ✅ Checklist de Verificación

Antes de agregar un nuevo proyecto, verificar:

- [ ] Estructura HTML idéntica a la estándar
- [ ] Todas las clases CSS correctas
- [ ] Traducciones agregadas en ambos idiomas
- [ ] Tecnologías con `tech-badge` y texto de respaldo
- [ ] Icono FontAwesome apropiado
- [ ] Categoría `data-type` correcta
- [ ] Enlaces a páginas de proyecto funcionales

---

**Nota**: Esta estructura es obligatoria para mantener la congruencia visual en todo el portafolio. Cualquier desviación debe ser documentada y justificada.
