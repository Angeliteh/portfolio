# Contexto del Proyecto: CSV Enrichment Pipeline (SaaS)

## 1. Resumen Ejecutivo
**CSV Enrichment Pipeline** es una plataforma B2B (SaaS) que permite a usuarios sin conocimientos de programación enriquecer, limpiar y clasificar archivos CSV utilizando Inteligencia Artificial (OpenAI). Funciona a través de "Templates" y configuraciones personalizables (MyProfile) que inyectan el contexto específico del negocio en los prompts de la IA.

- **Estado Actual:** En producción (MVP funcional).
- **Modelo de Negocio:** Suscripción/Créditos vía Stripe (Planes Starter y Growth).
- **Core Value:** Transforma horas de trabajo manual de Excel/Google Sheets en un proceso automatizado de 2 minutos.

## 2. Arquitectura y Stack Tecnológico
- **Frontend:** React, Vite, TailwindCSS, React Router, Supabase JS (para autenticación).
- **Backend:** Python, FastAPI, SQLAlchemy.
- **Base de Datos:** SQLite (desarrollo/ligero) / PostgreSQL (producción, preparado).
- **IA/Procesamiento:** OpenAI API (generación de prompts dinámicos por lotes).
- **Pagos:** Stripe (Suscripciones, Checkout, Webhooks seguros).
- **Seguridad y Performance:** Rate limiting (slowapi), CORS configurado, Headers de seguridad, procesamiento en "batches" para no sobrecargar la API de OpenAI.

## 3. ¿Para quién es? (Target Audience)
El sistema está diseñado para profesionales que manejan grandes volúmenes de datos en hojas de cálculo y necesitan inteligencia aplicada a escala:
- **Recursos Humanos (HR):** Filtrado masivo de CVs (Resume Screening).
- **Ventas y Marketing:** Calificación y enriquecimiento de Leads (Lead Enrichment).
- **Soporte al Cliente:** Análisis y categorización de tickets por urgencia y sentimiento.
- **Finanzas / Operaciones:** Procesamiento y categorización de facturas o gastos.
- **Agencias de Marketing / SEO:** Clasificación masiva de keywords o análisis de intenciones de búsqueda.

## 4. Funcionamiento Core (Flujo del Usuario)
1. **Onboarding / Autenticación:** El usuario se registra (vía Supabase Auth).
2. **Selección de Template:** Elige entre múltiples templates predefinidos (Ej. "Resume Screening" o "Invoice Processing").
3. **Personalización (MyProfile):** El usuario adapta el template a su empresa. Ej: Si es para HR, define que busca "Desarrolladores Python con 5 años de experiencia". Este contexto es **vital** y se inyecta en el prompt maestro.
4. **Carga de Datos:** Sube un archivo CSV con los datos crudos.
5. **Procesamiento AI:** El backend de FastAPI toma el CSV, lo divide en lotes (batches), construye un prompt dinámico combinando los datos de las filas con el contexto del "MyProfile", y consulta a OpenAI.
6. **Descarga:** El usuario visualiza el progreso y descarga el CSV resultante con nuevas columnas (ej. "Nivel de Coincidencia", "Sentimiento", "Categoría de Gasto").
7. **Monetización:** Stripe cobra por volumen de procesamiento (filas consumidas restan de los créditos del plan).

## 5. Diferenciadores Competitivos Clave
- **No-Code AI Prompts:** El usuario no necesita saber hacer "Prompt Engineering". El sistema traduce formularios visuales (MyProfile) en instrucciones perfectas para el LLM.
- **Reutilización:** Las configuraciones se guardan. Un equipo puede crear un flujo estandarizado y correr cientos de CSVs a través de él semanalmente sin reconfigurar nada.
- **Especialización Vertical:** Al tener templates por industria, el producto no se siente como una herramienta genérica, sino como una solución específica para el problema del usuario.

## 6. Puntos de Mejora y Oportunidades Futuras (Roadmap)
- **Mejoras UX/UI:** Implementar WebSockets (o Server-Sent Events) para que la barra de progreso en tiempo real de los trabajos pesados sea milimétrica y no mediante polling.
- **Procesamiento Paralelo:** Migrar de un procesamiento lineal por lotes a una arquitectura basada en colas (ej. Celery/Redis) para procesar miles de filas asíncronamente en segundos.
- **Integraciones Nativas:** Permitir exportar directamente a CRMs (HubSpot, Salesforce) o Google Sheets, eliminando la necesidad de descargar el CSV.
- **Configurador Conversacional:** Un chatbot que ayude al usuario a crear la configuración del pipeline inicial sin tocar formularios.

---
*Nota para la IA asistente: Utiliza este contexto base para entender la profundidad técnica, comercial y operativa del proyecto. A partir de esto, formula estrategias de Go-To-Market, SEO, Content Marketing o mejoras arquitectónicas alineadas con un SaaS B2B de crecimiento rápido.*
