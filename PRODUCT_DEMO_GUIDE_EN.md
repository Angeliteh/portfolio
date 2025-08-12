# Hybrid AI School Management System — Product Demo Guide (English)

## 1) Executive overview
A production‑ready hybrid system that combines a conversational AI assistant with a traditional administrative interface. Directors ask in natural language for searches, statistics, and official certificates; administrators keep full control over the database and document workflows. The backend is local (SQLite) and the app is compiled for distribution.

## 2) Why the UI appears in Spanish
This build was delivered for a real school in Mexico. Labels and some helper messages appear in Spanish (e.g., “Transformar”, “Buscar”, “Constancias”). In this guide and video, we narrate in English. The system is designed to be bilingual: prompts, examples, UI strings, and PDF templates can be localized.

Quick legend (Spanish → English):
- Transformar → Transform documents (e.g., PDF → official certificate)
- Buscar / Generar Constancias → Search students / Generate certificates
- Gestión / Administración → Full administrative management (CRUD)

## 3) What the system is
- Hybrid AI architecture: a “Master” interpreter understands user intent and routes to specialists.
- Specialists: “Student” for data/search/statistics/certificates; “Help” for capabilities; the Master replies directly for general conversation.
- Two complementary interfaces sharing the same backend:
  - Classic Management: controlled editing, validation, and auditability (CRUD).
  - AI Chat: fast, automatic, read‑only experience focused on results.

## 4) The two experiences (at a glance)
- Classic Management
  - Full CRUD over the local SQLite database
  - Search and generate certificates with deliberate control
  - Transform documents with supervised options (templates/branding/persistence)
- AI Chat
  - Natural language requests (e.g., “Find students named Garcia”, “How many in third grade?”, “Generate a certificate for Franco Alexander”) 
  - Automatic list/filters/statistics and PDF generation
  - Read‑only data dialogs (no forms) to maximize speed

## 5) Demo storyline (mirrors the 18‑minute video)

### Part A — Classic Management (foundation)
1. Open Classic Management 
2. Show student records and open a typical entry (name, CURP, matrícula, grade, group, shift)
3. Explain: this local SQLite DB is the system’s single source of truth. AI answers and PDFs are grounded in this data.
4. Card: Transform
   - Pick an external PDF; extract data; generate a properly formatted certificate
   - Optional: show template/branding options and whether to persist changes
5. Card: Search & Generate Certificates
   - Search by name, grade, group, shift, matrícula, CURP
   - Generate the appropriate certificate from a selected record
6. Card: Management (CRUD)
   - Edit/validate/save fields with visual control and auditability
   - Rationale: CRUD remains classic on purpose (clarity and safety)

### Part B — AI Chat (automatic)
1. Open AI Chat (dark theme)
2. Search by name: “Find students with last name Garcia” → list results
3. Context continuation: “From that list, only afternoon shift” → filtered results
4. Progressive narrowing: “Now third grade” → “Now group A” → refined results
5. Statistics: “How many students are in third grade?” → count/distribution
6. Exact lookup: “Show the student with matrícula 2024001” (or by CURP)
7. Generate certificate: “Generate a certificate of studies for [Student Name]” → PDF opens
8. Transform external PDF: attach sample → “Transform this PDF to an official certificate” → automatic extraction + PDF → optional read‑only data view
9. Help: “What can you do?” → capabilities overview in plain language

## 6) Why this order matters
We start with Classic Management to show the underlying data model and controlled workflows. Then we demonstrate the AI Chat performing the same operations through natural language. This builds trust: every AI answer and PDF you see is backed by the same database and document logic.

## 7) Benefits and value
- For directors and staff
  - Natural language: ask for lists, refine with filters, compute statistics, and get official PDFs in seconds
  - No need for SQL or complex UI navigation
- For administrators
  - Full control over data and documents (validation, auditability, templates)
  - Faster daily operations; fewer manual steps
- For IT / companies
  - Reusable Master → Specialists pattern; modular prompts and catalogs
  - Local data (SQLite), consistent PDF pipeline, compiled distribution (PyInstaller)
  - Easy to adapt to other domains with the same architecture

## 8) Architecture (non‑technical)
- Master interpreter: understands intent and context, routes requests
- Student specialist: maps human requests to SQL and certificates; applies filters/limits detected from language
- Help specialist: explains capabilities and guided usage
- Local database (SQLite): single source of truth
- Build: production executable with a compatibility patch for Google’s AI library; automated temp‑file cleanup

## 9) Data, privacy, and deployment
- Local‑first: student data stays on local storage (SQLite)
- PDFs: generated consistently with school branding and templates
- Distribution: compiled executable via PyInstaller
- Logging: informative logs for troubleshooting (no sensitive data in demo logs)

## 10) Bilingual readiness
- Today’s build: Spanish UI (delivered to a Mexican school)
- Ready for English: prompts/examples, UI strings, and PDF templates can be localized
- AI can reply in the user’s language while keeping a consistent internal schema



## 12) Glossary (Spanish → English)
- Grado → Grade  
- Grupo → Group  
- Turno → Shift (MATUTINO = Morning, VESPERTINO = Afternoon)  
- Matrícula → Student ID  
- Constancia → Official certificate  
- Buscar → Search  
- Gestión → Administration / Management


