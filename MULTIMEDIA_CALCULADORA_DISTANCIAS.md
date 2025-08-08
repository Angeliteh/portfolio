# 📸 Recursos Multimedia Necesarios - Calculadora de Distancias

## 🖼️ Imagen Principal (PRIORITARIA)

### **Archivo**: `assets/images/calculadora-distancias-preview.jpg`
### **Especificaciones**:
- **Resolución**: 1920x1280px (ratio 3:2)
- **Formato**: JPG optimizado para web
- **Peso máximo**: 500KB

### **Contenido requerido**:
```
✅ Mapa de Google Maps con múltiples marcadores
✅ Panel de control lateral con lista de puntos
✅ Matriz de distancias visible
✅ Interfaz moderna con tema claro/oscuro
✅ Rutas dibujadas entre puntos
✅ Coordenadas y direcciones reales
✅ Botones de reordenamiento drag-and-drop
✅ Estadísticas de distancias totales
```

### **Elementos específicos a capturar**:
- **Mapa principal**: Google Maps con 4-5 marcadores conectados por rutas
- **Panel lateral**: Lista de destinos con coordenadas y direcciones
- **Matriz de distancias**: Tabla completa mostrando distancias entre todos los puntos
- **Controles**: Botones para añadir puntos, cambiar tema, exportar datos
- **Estadísticas**: Distancia total, tiempo estimado, número de puntos
- **Tema**: Mostrar el tema claro con posibilidad de cambiar a oscuro

---

## 🎬 Video Demo (ALTAMENTE RECOMENDADO)

### **Archivo**: `assets/videos/calculadora-distancias-demo.mp4`
### **Especificaciones**:
- **Duración**: 60 segundos
- **Resolución**: 1080p (1920x1080)
- **Formato**: MP4, H.264
- **Peso máximo**: 10MB

### **Guión sugerido**:

#### **Segundos 0-10: Mostrar el Problema**
```
🎬 Escena: Múltiples pestañas de Google Maps abiertas
📝 Narración: "¿Necesitas calcular distancias entre múltiples puntos?"
🎯 Mostrar: Confusión con múltiples mapas, cálculos manuales complicados
```

#### **Segundos 10-25: Establecer Punto de Referencia**
```
🎬 Escena: Abrir la aplicación y añadir primer punto
📝 Narración: "Con Calculadora de Distancias, todo es más simple"
🎯 Mostrar:
- Cargar aplicación (localhost:8000)
- Buscar y añadir punto de referencia
- Ver marcador aparecer en el mapa
```

#### **Segundos 25-45: Añadir Múltiples Destinos**
```
🎬 Escena: Añadir varios destinos de diferentes formas
📝 Narración: "Añade destinos por búsqueda, coordenadas o clics"
🎯 Mostrar:
- Búsqueda de lugar por nombre
- Introducir coordenadas manuales
- Clic directo en el mapa
- Ver rutas dibujándose automáticamente
```

#### **Segundos 45-60: Matriz y Características Avanzadas**
```
🎬 Escena: Mostrar matriz de distancias y funcionalidades
📝 Narración: "Matriz completa con reordenamiento y temas"
🎯 Mostrar:
- Matriz de distancias entre todos los puntos
- Reordenar destinos con drag-and-drop
- Cambiar entre tema claro y oscuro
- Mostrar fallback cuando API falla
```

### **Herramientas recomendadas**:
- **Grabación**: OBS Studio (gratis)
- **Edición**: DaVinci Resolve (gratis)
- **Compresión**: HandBrake

---

## 📱 Screenshots Adicionales (RECOMENDADOS)

### **1. Matriz de Distancias Completa**
- **Archivo**: `assets/images/calculadora-distancias-matrix.jpg`
- **Contenido**: Vista detallada de la tabla de distancias
- **Elementos**: Tabla completa, distancias en km/millas, tiempos estimados

### **2. Tema Oscuro**
- **Archivo**: `assets/images/calculadora-distancias-dark.jpg`
- **Contenido**: Interfaz en modo oscuro
- **Elementos**: Mapa oscuro, panel lateral oscuro, contraste optimizado

### **3. Búsqueda de Lugares**
- **Archivo**: `assets/images/calculadora-distancias-search.jpg`
- **Contenido**: Autocompletado de Google Places
- **Elementos**: Campo de búsqueda activo, sugerencias, selección de lugar

### **4. Coordenadas Manuales**
- **Archivo**: `assets/images/calculadora-distancias-coords.jpg`
- **Contenido**: Entrada manual de coordenadas
- **Elementos**: Campos lat/lng, validación, conversión automática

### **5. Sistema de Fallback**
- **Archivo**: `assets/images/calculadora-distancias-fallback.jpg`
- **Contenido**: Funcionamiento sin API de Google
- **Elementos**: Cálculos geométricos, mensaje informativo, precisión mantenida

---

## 📊 Diagramas Técnicos (ÚTILES)

### **1. Arquitectura de Fallback**
- **Archivo**: `assets/images/calculadora-distancias-architecture.png`
- **Contenido**: Sistema de respaldo de APIs
- **Herramienta**: Draw.io, Excalidraw

```
[Google Maps API] → [Success] → [Display Results]
        ↓
[API Failure] → [Geometric Calculations] → [Fallback Results]
        ↓
[localStorage] → [Theme Persistence] → [User Preferences]
```

### **2. Flujo de Interacción**
- **Archivo**: `assets/images/calculadora-distancias-flow.png`
- **Contenido**: Proceso de usuario paso a paso

```
[Add Point] → [Search/Coords/Click] → [Validate] → [Add to Map]
     ↓
[Calculate Distances] → [Update Matrix] → [Draw Routes] → [Display Results]
     ↓
[Reorder Points] → [Recalculate] → [Update All Dependencies]
```

### **3. Estructura de Datos**
- **Archivo**: `assets/images/calculadora-distancias-data.png`
- **Contenido**: Organización de información

---

## 🎯 Checklist de Creación

### **Preparación**:
- [ ] Configurar servidor HTTP local (Python)
- [ ] Obtener API key de Google Maps (para demo)
- [ ] Preparar ubicaciones de ejemplo interesantes
- [ ] Configurar OBS Studio para grabación

### **Captura de Imagen Principal**:
- [ ] Ejecutar aplicación en localhost:8000
- [ ] Añadir 4-5 puntos en ubicaciones reconocibles
- [ ] Generar matriz de distancias completa
- [ ] Asegurar que todas las rutas estén visibles
- [ ] Capturar en resolución alta
- [ ] Optimizar imagen para web
- [ ] Renombrar a `calculadora-distancias-preview.jpg`

### **Grabación de Video**:
- [ ] Preparar script con ubicaciones específicas
- [ ] Configurar OBS con resolución 1080p
- [ ] Grabar añadir punto de referencia
- [ ] Grabar diferentes métodos de añadir destinos
- [ ] Mostrar matriz de distancias generándose
- [ ] Demostrar reordenamiento drag-and-drop
- [ ] Mostrar cambio de tema claro/oscuro
- [ ] Editar con transiciones suaves

### **Screenshots Adicionales**:
- [ ] Matriz de distancias en vista completa
- [ ] Interfaz en tema oscuro
- [ ] Autocompletado de búsqueda activo
- [ ] Entrada de coordenadas manuales
- [ ] Sistema de fallback funcionando

---

## 📝 Notas Importantes

### **Para la Imagen Principal**:
- Usa ubicaciones reconocibles (ciudades importantes, landmarks)
- Asegúrate de que la matriz de distancias sea legible
- Muestra rutas claras entre todos los puntos
- Incluye el panel de control lateral completo

### **Para el Video**:
- Demuestra la velocidad real (< 2s carga inicial)
- Muestra los 3 métodos de añadir puntos
- Incluye el reordenamiento drag-and-drop en acción
- Demuestra el cambio de tema automático

### **Para Screenshots Adicionales**:
- Matriz: Muestra tabla completa con distancias reales
- Tema oscuro: Contraste optimizado y legibilidad
- Búsqueda: Autocompletado de Google Places funcionando
- Coordenadas: Validación y conversión en tiempo real
- Fallback: Mensaje claro sobre el modo de respaldo

### **Casos de Uso a Demostrar**:

#### **1. Planificación Logística**:
- Rutas de entrega optimizadas
- Cálculo de costos de transporte
- Análisis de ubicaciones de almacenes

#### **2. Agentes Inmobiliarios**:
- Distancias a servicios importantes
- Comparación de ubicaciones
- Análisis de accesibilidad

#### **3. Educación Geográfica**:
- Enseñanza de conceptos de distancia
- Comparación de ubicaciones mundiales
- Proyectos de geografía

#### **4. Planificación de Viajes**:
- Rutas turísticas optimizadas
- Cálculo de tiempos de viaje
- Comparación de destinos

---

## 🚀 Ventajas Competitivas a Destacar

### **1. Sistema de Fallback Robusto**:
- Funcionamiento garantizado incluso sin API
- Cálculos geométricos precisos como respaldo
- Sin dependencias críticas externas

### **2. Interfaz Híbrida Intuitiva**:
- Múltiples métodos de entrada (búsqueda, coordenadas, clics)
- Reordenamiento visual drag-and-drop
- Tema automático basado en preferencias del sistema

### **3. Matriz Completa de Distancias**:
- Tabla completa entre todos los puntos
- Ideal para análisis de proximidad
- Exportación de datos disponible

### **4. Experiencia de Usuario Optimizada**:
- Carga inicial < 2 segundos
- Feedback visual inmediato
- Guía integrada en la aplicación

### **5. Código Limpio y Mantenible**:
- Arquitectura MVC clara
- Event-driven con listeners
- Manejo exhaustivo de errores

---

**🚀 Una vez que tengas estos recursos multimedia, la página de la Calculadora de Distancias será completamente profesional y demostrará todas las capacidades avanzadas de la aplicación.**
