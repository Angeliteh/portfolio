import os

def generate_html(key, category, category_class, role, timeline, tech, impact, images, v_id, prev_link, prev_name, next_link, next_name, out_file):
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
    <title>Project - Angel</title>
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
            <i class="fas fa-arrow-left"></i> <span data-i18n="{key}.navigation.backToPortfolio">Volver al Portafolio</span>
          </a>
          <div class="proj-hero-meta">
            <span class="proj-category-badge {category_class}">{category}</span>
          </div>
          <h1 class="proj-hero-title" data-i18n="{key}.title">Título</h1>
          <p class="proj-hero-tagline" data-i18n="{key}.subtitle">Subtítulo</p>
          <div class="proj-hero-actions">
            <a href="https://github.com/angeliteh" target="_blank" class="btn-secondary">
              <i class="fab fa-github"></i> <span data-i18n="{key}.resourceLinks.sourceCode">Ver Código</span>
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
              <div class="proj-meta-value">{tech}</div>
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
                <div class="content-block-title" data-i18n="{key}.sections.overview">Overview</div>
                <p data-i18n="{key}.sections.overviewText">Descripción</p>
              </div>

              <div class="demo-tabs-wrap">
                <div class="demo-tabs-header">
                  <button class="demo-tab-btn active" data-tab="demo"><i class="fas fa-play-circle"></i> <span data-i18n="{key}.sections.videoDemo">Video Demo</span></button>
                  <button class="demo-tab-btn" data-tab="arch"><i class="fas fa-layer-group"></i> Architecture</button>
                </div>
                <div class="demo-tab-pane active" id="pane-demo">
                  <div class="youtube-wrap">
                    <iframe src="https://www.youtube.com/embed/{v_id}" allowfullscreen></iframe>
                  </div>
                  <div class="video-caption">
                    <h4 data-i18n="{key}.video.title">Demostración</h4>
                    <p data-i18n="{key}.video.description">Observa el sistema en acción.</p>
                  </div>
                </div>
                <div class="demo-tab-pane" id="pane-arch">
                  <div class="arch-block">
                    <pre>
<span class="purple">Core Layer</span>
    └─ Backend & Analytics

<span class="blue">Service Layer</span>
    └─ API & Processing

<span class="accent">Presentation Layer</span>
    └─ Frontend & Interfaces</pre>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <div class="content-block-title" data-i18n="{key}.sections.challenges">Technical Challenges</div>
                <div class="challenges-list">
                  <div class="challenge-card">
                    <div class="challenge-header">
                      <i class="fas fa-exclamation-triangle"></i>
                      <h4 data-i18n="{key}.challengesList.challenge1.title">Desafío 1</h4>
                    </div>
                    <div class="challenge-body">
                      <div class="challenge-problem">
                        <span class="challenge-label">Problem</span>
                        <p data-i18n="{key}.challengesList.challenge1.problem">Problema</p>
                      </div>
                      <div class="challenge-solution">
                        <span class="challenge-label">Solution</span>
                        <p data-i18n="{key}.challengesList.challenge1.solution">Solución</p>
                      </div>
                    </div>
                  </div>
                  <div class="challenge-card">
                    <div class="challenge-header">
                      <i class="fas fa-exclamation-triangle"></i>
                      <h4 data-i18n="{key}.challengesList.challenge2.title">Desafío 2</h4>
                    </div>
                    <div class="challenge-body">
                      <div class="challenge-problem">
                        <span class="challenge-label">Problem</span>
                        <p data-i18n="{key}.challengesList.challenge2.problem">Problema</p>
                      </div>
                      <div class="challenge-solution">
                        <span class="challenge-label">Solution</span>
                        <p data-i18n="{key}.challengesList.challenge2.solution">Solución</p>
                      </div>
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
                <div class="sidebar-widget-title" data-i18n="{key}.sections.techStack">Tech Stack</div>
                <div class="stack-list">
                  <div class="stack-row"><span class="label">Main Tech</span><span class="value">{tech}</span></div>
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

    <!-- Scripts -->
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../assets/js/template-loader.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/i18next/22.4.9/i18next.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/i18next-http-backend/2.1.1/i18nextHttpBackend.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-i18next/1.2.1/jquery-i18next.min.js"></script>
    <script src="../assets/js/i18n-config.js"></script>
    <script src="../assets/js/language-switcher.js"></script>

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

projects = [
    {
        "key": "botProject",
        "category": "AI Agents",
        "category_class": "blue",
        "role": "AI Engineer",
        "timeline": "4 Weeks",
        "tech": "Node.js, Supabase, Gemini",
        "impact": "ROI 340%",
        "images": ["sistema-bots-ia/image_1.png", "sistema-bots-ia/image_2.png", "sistema-bots-ia/image_3.png"],
        "v_id": "dQw4w9WgXcQ",
        "prev_link": "massmsg.html", "prev_name": "MassMSG",
        "next_link": "excel-scraper.html", "next_name": "Excel Scraper",
        "out_file": r"C:\Users\Angel\Desktop\portfolio\proyectos\sistema-bots-ia.html"
    },
    {
        "key": "excelScraperProject",
        "category": "Desktop & Web",
        "category_class": "green",
        "role": "Full Stack",
        "timeline": "4 Weeks",
        "tech": "PyQt5, React, Flask",
        "impact": "95% Menos Tiempo",
        "images": ["excel-scraper/image_1.png", "excel-scraper/image_2.png", "excel-scraper/image_3.png"],
        "v_id": "GgXT9KtJYeM",
        "prev_link": "sistema-bots-ia.html", "prev_name": "Sistema Bots",
        "next_link": "scraping-productos.html", "next_name": "RTX Scraper",
        "out_file": r"C:\Users\Angel\Desktop\portfolio\proyectos\excel-scraper.html"
    },
    {
        "key": "rtxProject",
        "category": "Data Extraction",
        "category_class": "purple",
        "role": "Data Engineer",
        "timeline": "3 Weeks",
        "tech": "Python, Selenium",
        "impact": "51 productos en <30s",
        "images": ["scraping-productos/image_1.png", "scraping-productos/image_2.png"],
        "v_id": "V_Nkx7Qy9p0",
        "prev_link": "excel-scraper.html", "prev_name": "Excel Scraper",
        "next_link": "licencias-medicas.html", "next_name": "Licencias",
        "out_file": r"C:\Users\Angel\Desktop\portfolio\proyectos\scraping-productos.html"
    },
    {
        "key": "medicalLicenseProject",
        "category": "RPA & Automation",
        "category_class": "orange",
        "role": "RPA Developer",
        "timeline": "2 Weeks",
        "tech": "Python, Docx",
        "impact": "100% Precisión",
        "images": ["licencias-medicas/image_1.png", "licencias-medicas/image_2.png"],
        "v_id": "dQw4w9WgXcQ",
        "prev_link": "scraping-productos.html", "prev_name": "RTX Scraper",
        "next_link": "mouse-remoto.html", "next_name": "Remote Mouse",
        "out_file": r"C:\Users\Angel\Desktop\portfolio\proyectos\licencias-medicas.html"
    },
    {
        "key": "remoteMouseProject",
        "category": "Networking",
        "category_class": "red",
        "role": "Systems Dev",
        "timeline": "3 Weeks",
        "tech": "C++, Android",
        "impact": "Latencia < 8ms",
        "images": ["mouse-remoto/image_1.png", "mouse-remoto/image_2.png"],
        "v_id": "X1v3m10vQyY",
        "prev_link": "licencias-medicas.html", "prev_name": "Licencias",
        "next_link": "social-media-downloader.html", "next_name": "SM Downloader",
        "out_file": r"C:\Users\Angel\Desktop\portfolio\proyectos\mouse-remoto.html"
    },
    {
        "key": "socialMediaProject",
        "category": "Web Dev",
        "category_class": "cyan",
        "role": "Backend Dev",
        "timeline": "3 Weeks",
        "tech": "Python, Flask",
        "impact": "< 2s promedio",
        "images": ["social-media-downloader/image_1.png", "social-media-downloader/image_2.png"],
        "v_id": "dQw4w9WgXcQ",
        "prev_link": "mouse-remoto.html", "prev_name": "Remote Mouse",
        "next_link": "calculadora-distancias.html", "next_name": "Calculadora",
        "out_file": r"C:\Users\Angel\Desktop\portfolio\proyectos\social-media-downloader.html"
    },
    {
        "key": "distanceCalculatorProject",
        "category": "Geo-Spatial",
        "category_class": "indigo",
        "role": "Full Stack",
        "timeline": "1 Week",
        "tech": "JS Vanilla, Maps",
        "impact": "Optimización Global",
        "images": ["calculadora-distancias/image_1.png", "calculadora-distancias/image_2.png"],
        "v_id": "dQw4w9WgXcQ",
        "prev_link": "social-media-downloader.html", "prev_name": "SM Downloader",
        "next_link": "csv-enricher.html", "next_name": "CSV Enricher",
        "out_file": r"C:\Users\Angel\Desktop\portfolio\proyectos\calculadora-distancias.html"
    }
]

for p in projects:
    generate_html(**p)

print("Migration scripts completed successfully.")
