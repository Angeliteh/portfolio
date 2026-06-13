import os

def generate_html(title, desc, tags, category, role, timeline, impact, stack, images, v_id, features, challenges, quotes, prev_link, prev_name, next_link, next_name, out_file):
    imgs_html = ""
    for i, img in enumerate(images):
        act = " active" if i==0 else ""
        imgs_html += f'<div class="carousel-slide{act}"><img src="../assets/images/projects/{img}" alt="Screenshot"></div>\n'
    
    dots_html = ""
    for i in range(len(images)):
        act = " active" if i==0 else ""
        dots_html += f'<button class="carousel-dot{act}" data-slide="{i}"></button>\n'
    
    html = f"""<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Angel</title>
    <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
    <link rel="stylesheet" href="../assets/css/fontawesome.css">
    <link rel="stylesheet" href="../assets/css/portfolio.css">
    <link rel="stylesheet" href="../assets/css/project.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  </head>
  <body class="project-page">
    <div id="sidebar-container"></div>
    <div id="main-content">
      <div class="container">
        
        <div class="proj-hero">
          <a href="../index.html#section3" class="proj-hero-back">
            <i class="fas fa-arrow-left"></i> Volver al Portafolio
          </a>
          <div class="proj-hero-meta">
            <span class="proj-category-badge green">{category}</span>
          </div>
          <h1 class="proj-hero-title">{title}</h1>
          <p class="proj-hero-tagline">{desc}</p>
          <div class="proj-hero-actions">
            <a href="https://github.com/angeliteh" target="_blank" class="btn-secondary">
              <i class="fab fa-github"></i> Ver Código
            </a>
          </div>

          <div class="proj-meta-row">
            <div class="proj-meta-item">
              <div class="proj-meta-label">Role</div>
              <div class="proj-meta-value">{role}</div>
            </div>
            <div class="proj-meta-item">
              <div class="proj-meta-label">Timeline</div>
              <div class="proj-meta-value">{timeline}</div>
            </div>
            <div class="proj-meta-item">
              <div class="proj-meta-label">Tech</div>
              <div class="proj-meta-value">{stack}</div>
            </div>
            <div class="proj-meta-item">
              <div class="proj-meta-label">Impact</div>
              <div class="proj-meta-value">{impact}</div>
            </div>
          </div>
        </div>

        <div class="proj-content">
          <div class="proj-content-grid">
            <main class="proj-main">
              
              <div class="proj-carousel-wrap">
                <div class="carousel-container">
                  <div class="carousel-slides count-{len(images)}" id="carousel-slides">
                    {imgs_html}
                  </div>
                  <button class="carousel-btn prev" id="carousel-prev"><i class="fas fa-chevron-left"></i></button>
                  <button class="carousel-btn next" id="carousel-next"><i class="fas fa-chevron-right"></i></button>
                  <button class="carousel-fullscreen-btn" id="carousel-fullscreen"><i class="fas fa-expand"></i></button>
                  <div class="carousel-counter"><span id="current-slide">1</span> / {len(images)}</div>
                </div>
                <div class="carousel-indicators-row" id="carousel-indicators">
                  {dots_html}
                </div>
              </div>

              <div class="content-block">
                <div class="content-block-title">Overview</div>
                <h3>{features[0]['title']}</h3>
                <p>{features[0]['desc']}</p>
              </div>

              <div class="demo-tabs-wrap">
                <div class="demo-tabs-header">
                  <button class="demo-tab-btn active" data-tab="demo"><i class="fas fa-play-circle"></i> Video Demo</button>
                  <button class="demo-tab-btn" data-tab="arch"><i class="fas fa-layer-group"></i> Architecture</button>
                </div>
                <div class="demo-tab-pane active" id="pane-demo">
                  <div class="youtube-wrap">
                    <iframe src="https://www.youtube.com/embed/{v_id}" allowfullscreen></iframe>
                  </div>
                  <div class="video-caption">
                    <h4>Demostración Técnica</h4>
                    <p>Observa el sistema en acción mostrando su rendimiento y flujo de trabajo principal.</p>
                  </div>
                </div>
                <div class="demo-tab-pane" id="pane-arch">
                  <div class="arch-block">
                    <pre>
<span class="purple">Frontend Layer</span>
    └─ Interfaz de usuario y controles

<span class="blue">Core Logic</span>
    └─ Procesamiento de datos y algoritmos

<span class="accent">Integrations</span>
    └─ APIs de terceros y base de datos</pre>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <div class="content-block-title">Technical Challenges</div>
                <div class="challenges-list">
                  <div class="challenge-card">
                    <div class="challenge-header">
                      <i class="fas fa-exclamation-triangle"></i>
                      <h4>{challenges[0]['title']}</h4>
                    </div>
                    <div class="challenge-body">
                      <div class="challenge-problem">
                        <span class="challenge-label">Problem</span>
                        <p>{challenges[0]['prob']}</p>
                      </div>
                      <div class="challenge-solution">
                        <span class="challenge-label">Solution</span>
                        <p>{challenges[0]['sol']}</p>
                      </div>
                    </div>
                  </div>
                  <div class="challenge-card">
                    <div class="challenge-header">
                      <i class="fas fa-exclamation-triangle"></i>
                      <h4>{challenges[1]['title']}</h4>
                    </div>
                    <div class="challenge-body">
                      <div class="challenge-problem">
                        <span class="challenge-label">Problem</span>
                        <p>{challenges[1]['prob']}</p>
                      </div>
                      <div class="challenge-solution">
                        <span class="challenge-label">Solution</span>
                        <p>{challenges[1]['sol']}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <div class="content-block-title">Business Impact</div>
                <div class="testimonials-grid">
                  <div class="testimonial-card">
                    <div class="testimonial-header">
                      <div class="testimonial-avatar"><i class="fas fa-bolt"></i></div>
                      <div>
                        <div class="testimonial-name">Eficiencia</div>
                        <div class="testimonial-role">Productivity</div>
                      </div>
                    </div>
                    <p class="testimonial-quote">"{quotes[0]}"</p>
                    <div class="testimonial-metrics">
                      <span class="metric-badge">Ahorro de Tiempo</span>
                    </div>
                  </div>
                  <div class="testimonial-card">
                    <div class="testimonial-header">
                      <div class="testimonial-avatar"><i class="fas fa-shield-alt"></i></div>
                      <div>
                        <div class="testimonial-name">Robustez</div>
                        <div class="testimonial-role">Engineering</div>
                      </div>
                    </div>
                    <p class="testimonial-quote">"{quotes[1]}"</p>
                    <div class="testimonial-metrics">
                      <span class="metric-badge blue">100% Escalable</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="proj-navigation">
                <a href="{prev_link}" class="proj-nav-link">
                  <i class="fas fa-arrow-left"></i>
                  <div><span class="proj-nav-label">Previous</span>{prev_name}</div>
                </a>
                <a href="{next_link}" class="proj-nav-link next">
                  <i class="fas fa-arrow-right"></i>
                  <div><span class="proj-nav-label">Next</span>{next_name}</div>
                </a>
              </div>
            </main>

            <aside class="proj-sidebar">
              <div class="sidebar-widget">
                <div class="sidebar-widget-title">Tech Stack</div>
                <div class="stack-list">
                  <div class="stack-row"><span class="label">Main Tech</span><span class="value">{stack}</span></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-modal" id="carousel-modal">
      <button class="carousel-modal-close" id="carousel-modal-close"><i class="fas fa-times"></i></button>
      <button class="carousel-modal-nav carousel-modal-prev" id="carousel-modal-prev"><i class="fas fa-chevron-left"></i></button>
      <button class="carousel-modal-nav carousel-modal-next" id="carousel-modal-next"><i class="fas fa-chevron-right"></i></button>
      <div class="carousel-modal-counter"><span id="modal-current-slide">1</span> / {len(images)}</div>
      <img id="carousel-modal-img" src="" alt="Fullscreen view">
    </div>

    <script src="../assets/js/template-loader.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', async () => {{
        await TemplateLoader.loadSidebar();
        
        // Carousel Logic
        const slides = document.getElementById('carousel-slides');
        const dots = document.querySelectorAll('.carousel-dot');
        const counter = document.getElementById('current-slide');
        let index = 0; const total = {len(images)};

        function update() {{
          slides.style.transform = `translateX(-${{index * (100/total)}}%)`;
          dots.forEach((d, i) => d.classList.toggle('active', i === index));
          counter.textContent = index + 1;
        }}
        document.getElementById('carousel-next')?.addEventListener('click', () => {{ index = (index + 1) % total; update(); }});
        document.getElementById('carousel-prev')?.addEventListener('click', () => {{ index = (index - 1 + total) % total; update(); }});
        dots.forEach((d, i) => d.addEventListener('click', () => {{ index = i; update(); }}));

        // Tabs Logic
        document.querySelectorAll('.demo-tab-btn').forEach(btn => {{
          btn.addEventListener('click', () => {{
            document.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.demo-tab-pane').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('pane-' + btn.dataset.tab).classList.add('active');
          }});
        }});

        // Fullscreen Modal Logic
        const modal = document.getElementById('carousel-modal');
        const modalImg = document.getElementById('carousel-modal-img');
        const modalCounter = document.getElementById('modal-current-slide');
        
        function updateModal() {{
          modalImg.src = document.querySelectorAll('.carousel-slide img')[index].src;
          modalCounter.textContent = index + 1;
        }}

        document.getElementById('carousel-fullscreen')?.addEventListener('click', () => {{
          updateModal();
          modal.classList.add('active');
        }});

        document.getElementById('carousel-modal-close')?.addEventListener('click', () => {{
          modal.classList.remove('active');
        }});

        document.getElementById('carousel-modal-next')?.addEventListener('click', () => {{
          index = (index + 1) % total;
          updateModal();
          update();
        }});

        document.getElementById('carousel-modal-prev')?.addEventListener('click', () => {{
          index = (index - 1 + total) % total;
          updateModal();
          update();
        }});
      }});
    </script>
  </body>
</html>
"""
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(html)


# 0. excel-scraper
generate_html(
    title="Sistema Universal de Validación Excel",
    desc="Plataforma híbrida (PyQt + React) que automatiza la extracción, validación y visualización de tablas Excel educativas complejas con celdas combinadas.",
    tags=[],
    category="Desktop & Web",
    role="Full Stack Developer",
    timeline="4 Weeks",
    impact="95% Menos Tiempo",
    stack="PyQt5, React, Flask, Pandas",
    images=["excel-scraper/image_1.png", "excel-scraper/image_2.png", "excel-scraper/image_3.png"],
    v_id="GgXT9KtJYeM",
    features=[{"title": "Procesamiento Inteligente de Celdas Combinadas", "desc": "El núcleo implementa un algoritmo bidimensional de detección de celdas combinadas a partir de marcadores [valor], generando spans precisos, datos limpiamente combinados y una base robusta."}],
    challenges=[
        {"title":"Aislamiento Perfecto entre Pestañas", "prob":"La segunda pestaña no detectaba correctamente archivos ya procesados y compartía estado global con la primera.", "sol":"Aislamiento de datos específicos por pestaña/archivo en app_controller con verificación dual y guardado de procesos secuenciales aislados."},
        {"title":"Portabilidad de Lógica a Web", "prob":"Replicar la combinación bidimensional de PyQt en React sin causar bucles infinitos ni re-renders masivos al dibujar la tabla.", "sol":"Funciones puras memoizadas (useMemo/useCallback) y una estructura combinada de mergedCells + dataToRender con eventos estrictamente controlados."}
    ],
    quotes=["Antes tardábamos horas procesando manualmente cada archivo Excel. Ahora el sistema detecta la estructura y valida todo en minutos.", "La arquitectura híbrida permite mantener un solo core de negocio para desktop y web. El algoritmo bidimensional es elegante y reutilizable."],
    prev_link="sistema-bots-ia.html", prev_name="Sistema Bots IA",
    next_link="mouse-remoto.html", next_name="Mouse Remoto",
    out_file=r"C:\Users\Angel\Desktop\portfolio\proyectos\excel-scraper.html"
)

# 1. mouse-remoto
generate_html(
    title="Mouse Remoto WiFi",
    desc="Aplicación Android + Cliente PC en C++ que convierte un smartphone en un mouse inalámbrico de alta precisión usando sockets UDP.",
    tags=[],
    category="Networking & C++",
    role="Systems Developer",
    timeline="3 Weeks",
    impact="Latencia < 5ms",
    stack="C++, Android Java, WinAPI",
    images=["mouse-remoto/image_1.png", "mouse-remoto/image_2.png"],
    v_id="X1v3m10vQyY",
    features=[{"title": "Comunicación UDP de Baja Latencia", "desc": "Implementación de sockets UDP en C++ puro para el servidor Windows y Java para el cliente Android, optimizando la transmisión para latencia inferior a 5ms para una experiencia fluida."}],
    challenges=[
        {"title":"Movimiento Errático del Cursor", "prob":"La transmisión de coordenadas absolutas por WiFi causaba saltos erráticos por pérdida de paquetes UDP.", "sol":"Cambio a transmisión de deltas relativos de movimiento y algoritmos de suavizado en C++."},
        {"title":"Firewall Blocks", "prob":"El Firewall de Windows bloqueaba los puertos por defecto de la aplicación.", "sol":"Implementación de scripts de auto-configuración y reglas explícitas de puerto en el instalador."}
    ],
    quotes=["Logré usar mi teléfono como presentador a larga distancia sin cortes.", "El código C++ utiliza WinAPI nativa para el movimiento del mouse, minimizando el overhead de librerías de terceros."],
    prev_link="excel-scraper.html", prev_name="Excel Scraper",
    next_link="scraping-productos.html", next_name="Scraping de Productos",
    out_file=r"C:\Users\Angel\Desktop\portfolio\proyectos\mouse-remoto.html"
)

# 2. scraping-productos
generate_html(
    title="Pipeline de Scraping B2B",
    desc="Motor de extracción de datos a gran escala usando Python y Selenium para monitoreo de precios y catálogos de e-commerce.",
    tags=[],
    category="Data Extraction",
    role="Data Engineer",
    timeline="4 Weeks",
    impact="+500k Productos/Mes",
    stack="Python, Selenium, BeautifulSoup",
    images=["scraping-productos/image_1.png", "scraping-productos/image_2.png"],
    v_id="V_Nkx7Qy9p0",
    features=[{"title": "Rotación de Proxies y User-Agents", "desc": "El sistema maneja un pool dinámico de proxies residenciales y rotación de headers para evitar bloqueos y captchas durante extracciones masivas."}],
    challenges=[
        {"title":"Detección de Bots Avanzada", "prob":"Los sitios de e-commerce detectaban a Selenium inyectando variables en el entorno JavaScript (navigator.webdriver).", "sol":"Modificación del binario de ChromeDriver y uso de undetected_chromedriver para evadir heurísticas."},
        {"title":"Páginas Dinámicas Pesadas", "prob":"Renderizado SPA donde los productos cargaban por fragmentos asíncronos.", "sol":"Intercepción directa de las respuestas JSON de la API subyacente en lugar de parsear el DOM HTML."}
    ],
    quotes=["El sistema nos permitió ajustar nuestros precios dinámicamente frente a la competencia.", "La evasión de bloqueos mantiene una tasa de éxito del 99% incluso en sitios fuertemente protegidos."],
    prev_link="mouse-remoto.html", prev_name="Mouse Remoto",
    next_link="licencias-medicas.html", next_name="Licencias Médicas",
    out_file=r"C:\Users\Angel\Desktop\portfolio\proyectos\scraping-productos.html"
)

# 3. licencias-medicas
generate_html(
    title="Validación de Licencias Médicas",
    desc="Sistema RPA que automatiza la verificación y descarga masiva de estados de licencias médicas desde portales gubernamentales.",
    tags=[],
    category="RPA & Automation",
    role="RPA Developer",
    timeline="2 Weeks",
    impact="Zero Manual Errors",
    stack="Python, Puppeteer, Pandas",
    images=["licencias-medicas/image_1.png", "licencias-medicas/image_2.png"],
    v_id="dQw4w9WgXcQ",
    features=[{"title": "Manejo Seguro de Credenciales", "desc": "Automatización del portal de salud asegurando la privacidad de los datos médicos de los empleados mediante procesamiento local."}],
    challenges=[
        {"title":"Sesiones Expiradas", "prob":"El portal desconectaba al bot tras procesar cierta cantidad de RUTs.", "sol":"Implementación de reconexión automática y persistencia de cookies."},
        {"title":"Lectura de CAPTCHAs", "prob":"El sistema gubernamental introdujo CAPTCHAs de imagen simples.", "sol":"Integración de un OCR básico (Tesseract) entrenado específicamente para la fuente del portal."}
    ],
    quotes=["El equipo de RRHH pasó de gastar 3 días revisando licencias a solo 15 minutos semanales.", "La robustez frente a caídas del portal asegura que ninguna licencia se quede sin revisar."],
    prev_link="scraping-productos.html", prev_name="Scraping",
    next_link="social-media-downloader.html", next_name="SM Downloader",
    out_file=r"C:\Users\Angel\Desktop\portfolio\proyectos\licencias-medicas.html"
)

# 4. social-media-downloader
generate_html(
    title="Social Media Engine",
    desc="Herramienta unificada para descargar videos, reels y posts de múltiples plataformas usando ingeniería inversa de APIs.",
    tags=[],
    category="Reverse Engineering",
    role="Backend Dev",
    timeline="3 Weeks",
    impact="10+ Platforms",
    stack="Python, yt-dlp, FFmpeg",
    images=["social-media-downloader/image_1.png", "social-media-downloader/image_2.png"],
    v_id="dQw4w9WgXcQ",
    features=[{"title": "Muxing de Video y Audio", "desc": "Uso intensivo de FFmpeg para descargar streams DASH separados (video HD sin audio y audio HQ) y unificarlos en tiempo real sin pérdida de calidad."}],
    challenges=[
        {"title":"APIs Cambiantes", "prob":"Instagram y TikTok cambian sus endpoints internos constantemente para evitar descargas.", "sol":"Integración con yt-dlp y sistema de actualización automática de selectores basados en la red comunitaria."},
        {"title":"Throttling de Velocidad", "prob":"YouTube limitaba la velocidad de descarga a 50kb/s para conexiones sin autenticar.", "sol":"Implementación de algoritmos chunked-downloading con múltiples threads para evadir la restricción."}
    ],
    quotes=["Descarga contenido 4K en segundos sin marcas de agua.", "El uso de streams paralelos multiplicó la velocidad de descarga por 10x."],
    prev_link="licencias-medicas.html", prev_name="Licencias Médicas",
    next_link="calculadora-distancias.html", next_name="Calc Distancias",
    out_file=r"C:\Users\Angel\Desktop\portfolio\proyectos\social-media-downloader.html"
)

# 5. calculadora-distancias
generate_html(
    title="Calculadora de Distancias Geo",
    desc="Aplicación logística que calcula y optimiza rutas geográficas y distancias usando la API de Google Maps.",
    tags=[],
    category="Geo-Spatial",
    role="Full Stack",
    timeline="1 Week",
    impact="Routing Optimization",
    stack="JS Vanilla, Maps API",
    images=["calculadora-distancias/image_1.png", "calculadora-distancias/image_2.png"],
    v_id="dQw4w9WgXcQ",
    features=[{"title": "Matriz de Distancias Dinámica", "desc": "Cálculo de múltiples orígenes y destinos simultáneamente para optimización de entregas de última milla."}],
    challenges=[
        {"title":"Costos de API", "prob":"Llamar a la API de Maps por cada pequeño movimiento consumía el presupuesto rápidamente.", "sol":"Implementación de sistema de caché local con Redis y agrupación de llamadas (Batching)."},
        {"title":"Geocoding Impreciso", "prob":"Direcciones rurales no eran reconocidas correctamente por la API.", "sol":"Integración de fallback a coordenadas GPS y Autocomplete estricto para validar la dirección antes del envío."}
    ],
    quotes=["Redujo los costos de logística al encontrar rutas de reparto óptimas.", "La interfaz limpia permite a los despachadores planear el día sin entrenamiento previo."],
    prev_link="social-media-downloader.html", prev_name="SM Downloader",
    next_link="csv-enricher.html", next_name="CSV Enricher",
    out_file=r"C:\Users\Angel\Desktop\portfolio\proyectos\calculadora-distancias.html"
)

# 6. sistema-bots-ia
generate_html(
    title="Sistema Multi-Bot Empresarial IA",
    desc="Plataforma de IA conversacional multi-bot con arquitectura modular escalable para empresas",
    tags=[],
    category="AI Agents",
    role="AI Engineer",
    timeline="4 Weeks",
    impact="100% Automatización",
    stack="Python, OpenAI, React",
    images=["sistema-bots-ia/image_1.png", "sistema-bots-ia/image_2.png", "sistema-bots-ia/image_3.png", "sistema-bots-ia/image_4.png", "sistema-bots-ia/image_5.png"],
    v_id="dQw4w9WgXcQ",
    features=[{"title": "Arquitectura Multi-Tenant", "desc": "Sistema maestro que administra múltiples agentes de IA especializados por dominio (ej: Energía Solar, Desarrollo Web) bajo un mismo motor central de LLM."}],
    challenges=[
        {"title":"Gestión de Memoria y Contexto", "prob":"Los agentes perdían el hilo conversacional o excedían el límite de tokens en chats largos.", "sol":"Implementación de un sistema de ventana deslizante y compresión semántica usando embeddings de texto para priorizar el contexto."},
        {"title":"Aislamiento de Prompts", "prob":"Riesgo de prompt injection o cruce de personalidades entre diferentes bots (ej: Bot Solar respondiendo cosas de Web Dev).", "sol":"Arquitectura de RAG estricta con barreras de contención (Gatekeepers) a nivel prompt-system."}
    ],
    quotes=["El sistema nos permitió desplegar 5 agentes especializados para diferentes departamentos en un solo fin de semana.", "La gestión centralizada del conocimiento hace que entrenar a los bots sea trivial."],
    prev_link="calculadora-distancias.html", prev_name="Calc Distancias",
    next_link="excel-scraper.html", next_name="Excel Scraper",
    out_file=r"C:\Users\Angel\Desktop\portfolio\proyectos\sistema-bots-ia.html"
)

print("Migration scripts completed.")
