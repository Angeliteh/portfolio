# 📸 Recursos Multimedia Necesarios - Sistema Universal de Validación Excel

## 🖼️ Imagen Principal (PRIORITARIA)

### **Archivo**: `assets/images/excel-scraper-preview.jpg`
### **Especificaciones**:
- **Resolución**: 1920x1280px (ratio 3:2)
- **Formato**: JPG optimizado para web
- **Peso máximo**: 500KB

### **Contenido requerido**:
```
✅ Captura Paso 1 y Paso 4 (Desktop y Web)
✅ Datos reales con celdas combinadas visibles
✅ Interfaz PyQt (Desktop) y React (Web) lado a lado
✅ Algoritmo bidimensional en acción
✅ Validaciones universales mostradas
✅ Flujo de 4 pasos claramente visible
✅ Tabla tipo Excel con selección de rango
✅ Arquitectura multiplataforma evidente
```

### **Elementos específicos a capturar**:
- **Desktop (PyQt)**: Interfaz principal con pestañas, proceso secuencial, datos combinados
- **Web (React)**: ModernExcelTable con selección de rangos, navegación de teclado
- **Paso 1**: Vista combinada con celdas merged visibles
- **Paso 4**: Datos finales validados con coherencia/subtotales/totales
- **Core compartido**: Evidencia de reutilización entre plataformas
- **Validaciones**: Panel de resultados con discrepancias detectadas

---

## 🎬 Video Demo (ALTAMENTE RECOMENDADO)

### **Archivo**: `assets/videos/excel-scraper-demo.mp4`
### **Especificaciones**:
- **Duración**: 60-90 segundos
- **Resolución**: 1080p (1920x1080)
- **Formato**: MP4, H.264
- **Peso máximo**: 15MB

### **Guión sugerido**:

#### **Segundos 0-15: Mostrar el Problema**
```
🎬 Escena: Múltiples archivos Excel con celdas combinadas complejas
📝 Narración: "Validar tablas Excel manualmente toma horas y genera errores"
🎯 Mostrar: Celdas combinadas confusas, validaciones manuales, errores humanos
```

#### **Segundos 15-30: Presentar la Solución Desktop**
```
🎬 Escena: Abrir aplicación PyQt y cargar archivo
📝 Narración: "El sistema detecta automáticamente celdas combinadas"
🎯 Mostrar:
- Interfaz PyQt con selector de periodo/modo
- Cargar archivo Excel con celdas combinadas
- Algoritmo bidimensional detectando spans
```

#### **Segundos 30-60: Flujo de 4 Pasos**
```
🎬 Escena: Demostrar proceso secuencial completo
📝 Narración: "Flujo de 4 pasos: vista combinada, datos crudos, recorte, validación"
🎯 Mostrar:
- Paso 1: Celdas combinadas renderizadas correctamente
- Paso 2: Datos crudos extraídos y limpiados
- Paso 3: Recorte visual de rangos
- Paso 4: Validaciones universales (coherencia, subtotales, totales)
```

#### **Segundos 60-90: Interfaz Web y Arquitectura**
```
🎬 Escena: Cambiar a interfaz web React
📝 Narración: "Misma funcionalidad en web con tabla tipo Excel"
🎯 Mostrar:
- Interfaz React con ModernExcelTable
- Selección de rangos con mouse/teclado
- Core compartido entre Desktop y Web
- Validaciones consistentes en ambas plataformas
```

### **Herramientas recomendadas**:
- **Grabación**: OBS Studio (gratis)
- **Edición**: DaVinci Resolve (gratis)
- **Compresión**: HandBrake

---

## 📱 Screenshots Adicionales (RECOMENDADOS)

### **1. Modo Selector (Desktop)**
- **Archivo**: `assets/images/excel-scraper-selector.jpg`
- **Contenido**: Interfaz de selección de periodo y modo
- **Elementos**: Dropdown de periodos, opciones de modo, configuración centralizada

### **2. Validaciones Detalladas**
- **Archivo**: `assets/images/excel-scraper-validations.jpg`
- **Contenido**: Panel de validaciones con discrepancias
- **Elementos**: Coherencia, subtotales, totales, logs detallados

### **3. Panel de Pestañas (Desktop)**
- **Archivo**: `assets/images/excel-scraper-tabs.jpg`
- **Contenido**: Aislamiento por pestaña y archivo
- **Elementos**: Múltiples pestañas, estado independiente, datos específicos

### **4. ModernExcelTable (Web)**
- **Archivo**: `assets/images/excel-scraper-web-table.jpg`
- **Contenido**: Tabla tipo Excel con selección de rangos
- **Elementos**: Selección de celdas, navegación de teclado, copy/paste

### **5. Arquitectura del Sistema**
- **Archivo**: `assets/images/excel-scraper-architecture.jpg`
- **Contenido**: Diagrama de componentes
- **Elementos**: Core, Controllers, Desktop UI, Web UI, APIs

---

## 📊 Diagramas Técnicos (ÚTILES)

### **1. Arquitectura Multiplataforma**
- **Archivo**: `assets/images/excel-scraper-architecture.png`
- **Contenido**: Separación de capas
- **Herramienta**: Draw.io, Excalidraw

```
[Desktop PyQt] ←→ [Controllers] ←→ [Core Python] ←→ [Controllers] ←→ [Web React/Flask]
                        ↓                ↓                ↓
                [UI Manager]    [Data Processor]    [API Blueprints]
                        ↓                ↓                ↓
                [Sequential]    [Cell Combiner]    [REST Endpoints]
```

### **2. Flujo de Datos 4 Pasos**
- **Archivo**: `assets/images/excel-scraper-flow.png`
- **Contenido**: Proceso secuencial

```
[Excel File] → [Paso 1: Vista Combinada] → [Paso 2: Datos Crudos]
                        ↓                           ↓
[Paso 4: Validación] ← [Paso 3: Recorte Visual] ←
```

### **3. Algoritmo de Combinación Bidimensional**
- **Archivo**: `assets/images/excel-scraper-algorithm.png`
- **Contenido**: Detección de spans

```
[Marcadores [valor]] → [Detección Horizontal] → [Detección Vertical]
                                ↓                       ↓
[mergedCells] ← [Generación Spans] ← [rowspan/colspan]
```

---

## 🎯 Checklist de Creación

### **Preparación**:
- [ ] Configurar entorno Desktop (PyQt5, Python 3.8+)
- [ ] Configurar entorno Web (React, Flask, Node.js)
- [ ] Preparar archivos Excel con celdas combinadas reales
- [ ] Ejecutar start_web_development.py para demo

### **Captura de Imagen Principal**:
- [ ] Ejecutar aplicación Desktop con archivo de ejemplo
- [ ] Mostrar Paso 1 (vista combinada) y Paso 4 (validaciones)
- [ ] Ejecutar interfaz Web en paralelo
- [ ] Capturar ambas interfaces lado a lado
- [ ] Asegurar que celdas combinadas sean visibles
- [ ] Optimizar imagen para web
- [ ] Renombrar a `excel-scraper-preview.jpg`

### **Grabación de Video**:
- [ ] Preparar script con archivos Excel reales
- [ ] Configurar OBS con resolución 1080p
- [ ] Grabar problema inicial (validación manual)
- [ ] Demostrar carga y detección automática
- [ ] Mostrar flujo completo de 4 pasos
- [ ] Cambiar a interfaz web y mostrar paridad
- [ ] Incluir validaciones universales
- [ ] Editar con transiciones profesionales

### **Screenshots Adicionales**:
- [ ] Modo selector con configuración centralizada
- [ ] Panel de validaciones con discrepancias detalladas
- [ ] Pestañas múltiples con aislamiento
- [ ] ModernExcelTable con selección activa
- [ ] Diagrama de arquitectura del sistema

---

## 📝 Notas Importantes

### **Para la Imagen Principal**:
- Mostrar claramente la diferencia Desktop vs Web
- Celdas combinadas deben ser visibles y complejas
- Incluir evidencia del algoritmo bidimensional
- Validaciones universales con resultados reales

### **Para el Video**:
- Enfatizar la reducción de tiempo (90-95%)
- Mostrar robustez del algoritmo de combinación
- Demostrar paridad entre Desktop y Web
- Incluir validaciones educativas específicas

### **Para Screenshots Adicionales**:
- Selector: Configuración centralizada por periodo/modo
- Validaciones: Discrepancias específicas con logs
- Pestañas: Aislamiento perfecto entre archivos
- Web Table: Experiencia tipo Excel familiar
- Arquitectura: Separación clara de responsabilidades

### **Casos de Uso a Demostrar**:

#### **1. Educación/Administración Pública**:
- Validación de tablas estadísticas escolares
- Consolidación de datos de múltiples instituciones
- Reportes estandarizados automáticos

#### **2. Análisis de Datos Complejos**:
- Procesamiento de hojas con celdas combinadas
- Validación de coherencia en grandes volúmenes
- Detección automática de discrepancias

#### **3. Desarrollo Full-Stack**:
- Arquitectura multiplataforma robusta
- Reutilización de core entre Desktop y Web
- APIs REST bien diseñadas

---

## 🚀 Ventajas Competitivas a Destacar

### **1. Algoritmo Bidimensional Único**:
- Detección horizontal/vertical a partir de marcadores [valor]
- Limpio, determinista y reproducible
- Spans precisos para renderizado y exportación

### **2. Arquitectura Cross-Platform**:
- Desktop PyQt y Web React/Flask comparten core
- Controllers como orquestadores especializados
- Máxima reutilización de lógica de negocio

### **3. Validaciones Educativas Avanzadas**:
- Coherencia, subtotales, totales específicas por tabla
- Operación sobre datos crudos unificados
- Logs detallados con evidencia de decisiones

### **4. Separación de Responsabilidades**:
- Core puro sin dependencias de UI
- Controladores especializados por función
- Configuración centralizada por periodo/modo

### **5. Interfaz Web Moderna**:
- Tabla tipo Excel con selección de rangos
- Copy/paste y navegación de teclado
- Experiencia familiar y productiva

---

## 🔧 Instrucciones de Ejecución

### **Desktop**:
```bash
python main.py
# Seleccionar periodo y modo
# Cargar archivo Excel con celdas combinadas
```

### **Web Backend**:
```bash
cd web/backend
pip install -r requirements.txt
python app.py
# Backend en http://localhost:5000
```

### **Web Frontend**:
```bash
cd web/frontend
npm install
REACT_APP_API_URL=http://localhost:5000 npm start
# Frontend en http://localhost:3000
```

### **Arranque Asistido**:
```bash
python start_web_development.py
# Configura y ejecuta ambos servidores automáticamente
```

---

**🚀 Una vez que tengas estos recursos multimedia, la página del Sistema Universal de Validación Excel será completamente profesional y demostrará la complejidad técnica y valor práctico del proyecto full-stack.**
