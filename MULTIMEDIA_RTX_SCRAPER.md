# 📸 Recursos Multimedia Necesarios - RTX Web Scraper

## 🖼️ Imagen Principal (PRIORITARIA)

### **Archivo**: `assets/images/rtx-scraper-preview.jpg`
### **Especificaciones**:
- **Resolución**: 1920x1280px (ratio 3:2)
- **Formato**: JPG optimizado para web
- **Peso máximo**: 500KB

### **Contenido requerido**:
```
✅ Dashboard principal del scraper funcionando
✅ Grid de productos RTX con imágenes reales
✅ Precios en pesos mexicanos ($MXN)
✅ Filtros activos visibles (por modelo/tienda)
✅ Estadísticas en la parte superior
✅ Interfaz limpia y profesional
✅ Datos reales (no placeholders)
```

### **Elementos específicos a capturar**:
- Header con título "RTX Web Scraper"
- Barra de filtros (Amazon MX, MercadoLibre, modelos RTX)
- Grid de productos mostrando:
  - Imágenes de GPUs
  - Nombres de productos
  - Precios en formato $XX,XXX MXN
  - Enlaces a tiendas
- Estadísticas: "51 productos encontrados", "Última actualización: hace X minutos"
- Footer con información del scraping

---

## 🎬 Video Demo (ALTAMENTE RECOMENDADO)

### **Archivo**: `assets/videos/rtx-scraper-demo.mp4`
### **Especificaciones**:
- **Duración**: 60-90 segundos
- **Resolución**: 1080p (1920x1080)
- **Formato**: MP4, H.264
- **Peso máximo**: 10MB

### **Guión sugerido**:

#### **Segundos 0-15: Mostrar el Problema**
```
🎬 Escena: Navegador abierto en Amazon/MercadoLibre
📝 Narración: "Buscar la mejor GPU RTX manualmente es tedioso..."
🎯 Mostrar: Búsqueda manual, múltiples pestañas, comparación difícil
```

#### **Segundos 15-45: Ejecutar el Scraper**
```
🎬 Escena: Terminal/consola ejecutando el scraper
📝 Narración: "Con RTX Web Scraper, automatizamos todo el proceso"
🎯 Mostrar: 
- Comando de ejecución
- Logs del scraping en tiempo real
- "Procesando Amazon MX... 25 productos encontrados"
- "Procesando MercadoLibre... 26 productos encontrados"
- "Filtrando productos irrelevantes..."
- "Guardando en base de datos..."
```

#### **Segundos 45-75: Navegar la Interfaz**
```
🎬 Escena: Dashboard web funcionando
📝 Narración: "Interfaz web completa con filtros y visualización"
🎯 Mostrar:
- Cargar página web (localhost:5000)
- Grid de productos con imágenes y precios
- Usar filtros (por tienda, por modelo)
- Ordenar por precio
- Ver historial de un producto
```

#### **Segundos 75-90: Gráficos y Alertas**
```
🎬 Escena: Gráficos de precios y configuración de alertas
📝 Narración: "Historial de precios y alertas automáticas"
🎯 Mostrar:
- Gráfico de tendencia de precios
- Configuración de alertas
- Ejemplo de notificación
```

### **Herramientas recomendadas**:
- **Grabación**: OBS Studio (gratis)
- **Edición**: DaVinci Resolve (gratis)
- **Compresión**: HandBrake

---

## 📱 Screenshots Adicionales (OPCIONALES)

### **1. Historial de Precios**
- **Archivo**: `assets/images/rtx-scraper-history.jpg`
- **Contenido**: Gráfico de Chart.js mostrando evolución de precios

### **2. Configuración de Alertas**
- **Archivo**: `assets/images/rtx-scraper-alerts.jpg`
- **Contenido**: Panel de configuración de notificaciones

### **3. Vista Móvil**
- **Archivo**: `assets/images/rtx-scraper-mobile.jpg`
- **Contenido**: Dashboard responsive en dispositivo móvil

### **4. Terminal/Logs**
- **Archivo**: `assets/images/rtx-scraper-terminal.jpg`
- **Contenido**: Consola mostrando proceso de scraping

---

## 📊 Diagramas Técnicos (ÚTILES)

### **1. Arquitectura del Sistema**
- **Archivo**: `assets/images/rtx-scraper-architecture.png`
- **Contenido**: Diagrama mostrando flujo de datos
- **Herramienta**: Draw.io, Excalidraw

```
[Amazon MX] ──┐
              ├─→ [Scrapers] ─→ [Filtros] ─→ [SQLite] ─→ [Flask Web] ─→ [Usuario]
[MercadoLibre]──┘                                      ↓
                                                   [Alertas Bot]
```

### **2. Flujo de Scraping**
- **Archivo**: `assets/images/rtx-scraper-workflow.png`
- **Contenido**: Proceso paso a paso del scraping

---

## 🎯 Checklist de Creación

### **Preparación**:
- [ ] Tener el scraper funcionando localmente
- [ ] Datos reales en la base de datos
- [ ] Interfaz web cargando correctamente
- [ ] Configurar OBS Studio para grabación

### **Captura de Imagen Principal**:
- [ ] Ejecutar scraper para tener datos frescos
- [ ] Abrir dashboard en navegador
- [ ] Ajustar zoom para captura óptima
- [ ] Capturar screenshot en alta resolución
- [ ] Optimizar imagen (comprimir sin perder calidad)
- [ ] Renombrar a `rtx-scraper-preview.jpg`
- [ ] Colocar en `assets/images/`

### **Grabación de Video**:
- [ ] Preparar guión y timing
- [ ] Configurar OBS con resolución 1080p
- [ ] Grabar en segmentos (más fácil de editar)
- [ ] Editar y agregar transiciones
- [ ] Exportar en MP4 H.264
- [ ] Comprimir a menos de 10MB
- [ ] Renombrar a `rtx-scraper-demo.mp4`

### **Implementación**:
- [ ] Subir archivos a carpetas correspondientes
- [ ] Actualizar rutas en HTML
- [ ] Probar carga de imágenes
- [ ] Verificar responsive design
- [ ] Probar en diferentes navegadores

---

## 📝 Notas Importantes

### **Para la Imagen Principal**:
- Asegúrate de que los precios sean reales y actuales
- Usa productos RTX variados (3060, 3070, 3080, 4060, 4070, etc.)
- Muestra tanto Amazon como MercadoLibre
- Incluye el timestamp de última actualización

### **Para el Video**:
- Mantén un ritmo dinámico (no muy lento)
- Usa transiciones suaves entre escenas
- Asegúrate de que el audio sea claro (si incluyes narración)
- Muestra resultados reales, no datos de prueba

### **Optimización Web**:
- Comprime imágenes sin perder calidad visible
- Usa lazy loading para mejorar rendimiento
- Considera WebP como formato alternativo
- Prueba en conexiones lentas

---

**🚀 Una vez que tengas estos recursos, simplemente reemplaza los placeholders en el HTML y tendrás una página de proyecto completamente profesional.**
