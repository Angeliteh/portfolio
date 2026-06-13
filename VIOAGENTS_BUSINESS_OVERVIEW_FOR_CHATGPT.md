# VIOAGENTS: DOSSIER DE NEGOCIO Y FUNCIONAMIENTO (DOCUMENTO DE CONTEXTO PARA IA)

Este documento ha sido estructurado específicamente para ser inyectado en una sesión de ChatGPT/LLM. Contiene todo el contexto estratégico, comercial, operativo y técnico simplificado de **VioAgents (Virtual Intelligent Operators)**, una de las 4 ofertas de servicios que poseo.

---

## 1. FICHA TÉCNICA Y RESUMEN EJECUTIVO

*   **Nombre de la Oferta / Producto:** VioAgents (Virtual Intelligent Operators).
*   **Definición Comercial:** Plataforma SaaS e infraestructura de despliegue y operación de agentes conversacionales especializados (operadores inteligentes virtuales) con integraciones reales para negocios físicos y digitales.
*   **Propósito del Producto:** Reemplazar los flujos monótonos o ineficientes de atención al cliente, ventas por catálogo, toma de citas y respuestas a preguntas frecuentes mediante agentes autónomos con comportamiento humano, controlable y libre de alucinaciones.
*   **Modelo de Entrega:** SaaS Multi-tenant (1 Tenant = 1 Cliente de negocio con múltiples agentes configurables) e integración mediante Widget flotante en la web del cliente mediante un script de 2 líneas.
*   **Stack Tecnológico Real:**
    *   **Backend:** FastAPI (Python) + OpenRouter/OpenAI API.
    *   **Base de Datos y Seguridad:** Supabase (PostgreSQL) + Supabase Auth + Supabase Storage para control documental.
    *   **Frontend y Widget:** React (Vite) + Tailwind CSS + Vanilla JS para el Widget embebido.
    *   **Integraciones Core:** Google Calendar API (agendamiento real), Generación automática de PDFs para cotizaciones, motor de búsqueda en catálogos CSV.

---

## 2. ARQUITECTURA COGNITIVA: CÓMO FUNCIONA REALMENTE EL MOTOR

VioAgents no es un chatbot tradicional ("wrapper" simple de un LLM). Utiliza un **sistema de orquestación cognitiva en tres momentos (M1 -> M2 -> M3)** con validación de ejecutabilidad de tipo "Gatekeeping". Esto garantiza consistencia y evita errores:

### Flujo Cognitivo por Turno de Conversación:
1.  **Momento 1 (M1) - El Conversacional / Recepcionista:**
    *   *Misión:* Entender la intención del usuario y determinar si se requiere una acción especializada.
    *   *Lógica:* Analiza el mensaje e historial. Si la intención requiere bases de datos o transacciones (ej. cotizar, buscar en agenda), define un "paquete de necesidades" (`need_package`) con estados explícitos: `readiness` (si ya están listos los datos) y `missing_requirements` (si falta información, como el nombre o el canal de contacto).
    *   *Guardrail:* Si falta información crítica, M1 frena el flujo hacia las APIs/herramientas y responde directamente pidiendo el dato faltante de forma natural.
2.  **Momento 2 (M2) - El Especialista técnico:**
    *   *Misión:* Ejecutar consultas exactas a la base de datos (catálogos CSV), generar PDFs o interactuar con el proveedor de agendamiento (Google Calendar).
    *   *Lógica:* Valida los datos recibidos de M1. En lugar de responder libremente al usuario, interactúa de forma directa mediante "tool calling" estructurado. Traduce el lenguaje natural del usuario a filtros y queries de base de datos exactas basándose en la estructura e inventario real del catálogo.
3.  **Momento 3 (M3) - El Conversador Terrenal (Grounding):**
    *   *Misión:* Tomar la información exacta devuelta por M2 (productos reales con sus precios, IDs y URLs de imagen, o slots de agenda disponibles) y redactar la respuesta final para el cliente.
    *   *Lógica:* M3 tiene prohibido inventar o usar su memoria estadística para precios, productos o citas. Si M2 devolvió un catálogo vacío, M3 comunica transparentemente que no hay stock sin alucinar alternativas falsas. Presenta la información usando tablas markdown de manera elegante.

---

## 3. PORTAFOLIO DE OFERTAS (LOS 3 SERVICIOS CORE)

VioAgents se vende al mercado estructurado bajo 3 pilares de soluciones listas para usar:

### 1. Ventas (Sales Agent)
*   **Función:** Vendedor y asesor experto en un catálogo específico del negocio.
*   **Capacidades:**
    *   Búsqueda inteligente multi-query en el catálogo (ej. si el usuario busca herramientas, pintura y brochas a la vez, el agente los busca en un solo turno).
    *   Ofrece productos alternativos si el solicitado no tiene stock.
    *   Realiza venta cruzada (cross-selling) sugiriendo accesorios indispensables para el proyecto del cliente.
    *   Genera cotizaciones en formato PDF descargables en tiempo real al obtener el nombre del cliente.
*   **Flujo Crítico:** Si el cliente solicita cotizar pero no ha dado su nombre, el agente detiene el flujo transaccional y le solicita el nombre amablemente antes de generar el archivo.

### 2. Agendamiento (Booking Agent)
*   **Función:** Gestor de agenda para citas de servicios, demostraciones o consultas.
*   **Capacidades:**
    *   Consulta real de disponibilidad horaria mediante integración directa con Google Calendar (respeta zonas horarias del negocio y del usuario).
    *   Bloqueo de horarios duplicados en tiempo real.
    *   Creación del evento en el calendario corporativo con los datos mínimos del cliente (Nombre, Fecha, Hora y Canal de contacto - Correo o WhatsApp).
*   **Flujo Crítico:** Si el cliente solicita una hora ya reservada, el agente analiza el día y le propone de forma inmediata y natural 2 o 3 alternativas de horarios libres cercanos.

### 3. Informativo (Knowledge / FAQ Agent)
*   **Función:** Consultor de información institucional, planes, políticas de envío, garantías y preguntas frecuentes.
*   **Capacidades:**
    *   Consumo estructurado de documentos de conocimiento en Markdown (`knowledge.md`).
    *   Escalamiento inteligente a humanos en situaciones críticas (Handoff).
*   **Flujo Crítico:** Si detecta frustración, enojo o una solicitud explícita de hablar con un humano, invoca la herramienta de transferencia. En ese momento, el backend pausa el bot (`bot_paused`), permitiendo que un operador del negocio responda directamente desde su bandeja de entrada integrada en la consola.

---

## 4. PROPUESTA DE VALOR (VALUE PROPOSITION CANVAS)

Este análisis detalla el encaje entre las necesidades reales de los negocios tradicionales/digitales y la solución que provee VioAgents:

### Perfil del Cliente de Negocio (El Target):
*   **Dolores actuales (Pains):**
    *   Pérdida de leads en WhatsApp o Web por tiempos de respuesta lentos (fuera de horario comercial).
    *   Costes elevados de mantener personal de soporte dedicados únicamente a responder las mismas 10 preguntas frecuentes o revisar stock manual.
    *   Errores humanos al cotizar o agendar citas (citas duplicadas, precios desactualizados).
    *   Frustración con chatbots rígidos del pasado basados en árboles de decisión predecibles que no entienden al cliente.
*   **Ganancias deseadas (Gains):**
    *   Automatizar la atención de primer nivel manteniendo la calidez de un asesor humano.
    *   Vender en piloto automático 24/7 sin descuidar el inventario real.
    *   Capturar leads perfilados con nombres, contactos y cotizaciones listos para el equipo de ventas.
    *   Instalación instantánea sin lidiar con arquitecturas complejas de software.

### Mapa de Soluciones de VioAgents:
*   **Aliviadores de Dolores (Pain Relievers):**
    *   **Respuestas en < 2 segundos:** Atención inmediata a cualquier hora del día.
    *   **Validación de stock real:** Sincronización mediante catálogos CSV subidos a la plataforma. No inventa stock que no existe.
    *   **Escalado Humano con Contexto:** Si el bot se detiene por solicitud de ayuda humana, el operador recibe en su panel el resumen cognitivo del caso para no tener que preguntarle todo de nuevo al cliente.
*   **Creadores de Ganancias (Gain Creators):**
    *   **Embudo Integrado:** Convierte una consulta casual en una cotización PDF descargable o una cita en Google Calendar de manera fluida.
    *   **Widget Flotante "Show, Don't Tell":** La landing del propio VioAgents no vende con teoría; sus llamadas a la acción abren al agente en vivo configurado para agendarle la demo al cliente en ese instante.

---

## 5. ESTRATEGIA DE ESCALABILIDAD HORIZONTAL

Uno de los mayores valores técnicos y operativos del sistema es su jerarquía de herencia organizativa:
```
DOMINIO (Sales/Booking/Informativo) -> NICHO (Ferreterías/Refaccionarias/Clínicas) -> NEGOCIO (Ferretería López / Clínica Central)
```

### Reglas de Herencia de Configuración:
*   **`_base` (Nivel Dominio):** Define las reglas globales y transversales del comportamiento (ej. cómo capturar leads, políticas base).
*   **`_niche` (Nivel Sectorial):** Define el contexto técnico y vocabulario de un sector específico (ej. en el nicho de ferreterías, define categorías del catálogo, tipos de medidas y necesidades comunes de remodelación).
*   **`{business}/tenant_defaults.md` (Nivel Negocio):** Guarda exclusivamente la información y políticas del cliente final (ej. "Ferretería López ofrece envíos gratis en compras mayores a $500 y abre de 9 AM a 6 PM").

**Impacto de negocio:** Para dar de alta a un cliente nuevo dentro de un nicho existente (ej. una nueva ferretería), solo se necesita crear una carpeta de negocio con un archivo de texto con sus políticas (`tenant_defaults.md`), un JSON simplificado de configuración y subir su archivo de catálogo en CSV. El núcleo cognitivo y las reglas sectoriales se heredan automáticamente, reduciendo el coste de despliegue a minutos y haciéndolo altamente escalable.

---

## 6. ESTRATEGIAS DE MARKETING E INTRODUCCIÓN AL MERCADO

*   **Puntos de Venta Únicos (USPs):**
    1.  *"No es un chatbot de respuestas rígidas; es tu representante de ventas digital que conoce tu inventario al centavo".*
    2.  *Instalación express de 2 líneas de código:* Se quita la barrera de entrada técnica para el cliente.
    3.  *Garantía Anti-Alucinaciones:* Lógica de 3 momentos que protege la reputación del negocio al no inventar datos.
*   **Estrategia Go-To-Market (GTM):**
    *   **Enfoque "Show, Don't Tell":** El Widget comercial vivo en la landing del producto. Al cliente potencial no se le explica el producto; se le invita a agendar su cita de ventas hablando con el propio agente de Booking en el widget.
    *   **Nichos de Entrada:** Negocios locales con catálogos medianos y alta carga de atención repetitiva (Ferreterías, Refaccionarias automotrices, Clínicas dentales/médicas locales, Agencias de servicios B2B).
    *   **Estrategia de Integración Fácil:** Mostrar una sección visual con la etiqueta `<script src="vioagents.js"></script>` para eliminar el miedo a integraciones complejas de software.
*   **Esquema de Monetización Propuesto:**
    *   *Setup Fee (Pago Único):* Costo por digitalizar el catálogo CSV del negocio, configurar el Google Calendar y refinar el `tenant_defaults.md`.
    *   *Suscripción SaaS Mensual:* Acceso a la consola operativa (ver conversaciones, pausar bots, handoff manual a operadores humanos).
    *   *Fee por Transacción / Consumo:* Tarifa marginal por cotización generada con éxito o reserva de cita concretada en agenda, alineando el valor del cobro directamente con el éxito del negocio del cliente.
