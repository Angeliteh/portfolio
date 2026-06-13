import json
import os

# Load translation.json
with open(r"C:\Users\Angel\Desktop\portfolio\assets\locales\es\translation.json", "r", encoding="utf-8") as f:
    t = json.load(f)

# The list of legacy projects and their translation keys
legacy_projects = [
    {
        "key": "botProject",
        "file": "sistema-bots-ia.html",
        "category": "AI Agents",
        "category_class": "blue",
        "images": ["sistema-bots-ia/image_1.png", "sistema-bots-ia/image_2.png", "sistema-bots-ia/image_3.png", "sistema-bots-ia/image_4.png", "sistema-bots-ia/image_5.png"],
        "v_id": "dQw4w9WgXcQ"
    },
    {
        "key": "excelScraperProject",
        "file": "excel-scraper.html",
        "category": "Desktop & Web",
        "category_class": "green",
        "images": ["excel-scraper/image_1.png", "excel-scraper/image_2.png", "excel-scraper/image_3.png"],
        "v_id": "GgXT9KtJYeM"
    },
    {
        "key": "rtxProject",
        "file": "scraping-productos.html",
        "category": "Data Extraction",
        "category_class": "purple",
        "images": ["scraping-productos/image_1.png", "scraping-productos/image_2.png"],
        "v_id": "V_Nkx7Qy9p0"
    },
    {
        "key": "medicalLicenseProject",
        "file": "licencias-medicas.html",
        "category": "RPA & Automation",
        "category_class": "orange",
        "images": ["licencias-medicas/image_1.png", "licencias-medicas/image_2.png"],
        "v_id": "dQw4w9WgXcQ"
    },
    {
        "key": "remoteMouseProject",
        "file": "mouse-remoto.html",
        "category": "Networking",
        "category_class": "red",
        "images": ["mouse-remoto/image_1.png", "mouse-remoto/image_2.png"],
        "v_id": "X1v3m10vQyY"
    },
    {
        "key": "socialMediaProject",
        "file": "social-media-downloader.html",
        "category": "Web Dev",
        "category_class": "cyan",
        "images": ["social-media-downloader/image_1.png", "social-media-downloader/image_2.png"],
        "v_id": "dQw4w9WgXcQ"
    },
    {
        "key": "distanceCalculatorProject",
        "file": "calculadora-distancias.html",
        "category": "Geo-Spatial",
        "category_class": "indigo",
        "images": ["calculadora-distancias/image_1.png", "calculadora-distancias/image_2.png"],
        "v_id": "dQw4w9WgXcQ"
    }
]

# Next/Prev links for ALL 11 projects (relevance order)
relevance_order = [
    "csv-enricher.html",
    "vioagents.html",
    "forensic-suite.html",
    "massmsg.html",
    "sistema-bots-ia.html",
    "excel-scraper.html",
    "scraping-productos.html",
    "licencias-medicas.html",
    "mouse-remoto.html",
    "social-media-downloader.html",
    "calculadora-distancias.html"
]

def get_links(current_file):
    idx = relevance_order.index(current_file)
    prev_idx = (idx - 1) % len(relevance_order)
    next_idx = (idx + 1) % len(relevance_order)
    
    prev_file = relevance_order[prev_idx]
    next_file = relevance_order[next_idx]
    
    # Prettify names
    def pret(f):
        return f.replace(".html", "").replace("-", " ").title()
        
    return prev_file, pret(prev_file), next_file, pret(next_file)

for p in legacy_projects:
    key = p["key"]
    file_name = p["file"]
    
    # Get dynamic data from translation.json to build the HTML accurately
    obj = t.get(key, {})
    
    # Metrics
    metrics_obj = obj.get("metrics", {})
    metrics_html = ""
    for mk, mv in metrics_obj.items():
        if mk == "website":
            continue
        metrics_html += f"""
            <div class="proj-meta-item">
              <div class="proj-meta-label" style="text-transform:uppercase;">{mk}</div>
              <div class="proj-meta-value" data-i18n="{key}.metrics.{mk}">{mv}</div>
            </div>"""

    # Images
    images = p["images"]
    imgs_html = ""
    for i, img in enumerate(images):
        act = " active" if i==0 else ""
        imgs_html += f'<div class="carousel-slide{act}"><img src="../assets/images/projects/{img}" alt="Screenshot"></div>\n'
    
    dots_html = ""
    for i in range(len(images)):
        act = " active" if i==0 else ""
        dots_html += f'<button class="carousel-dot{act}" data-slide="{i}"></button>\n'

    # Challenges
    challenges_obj = obj.get("challengesList", {}) or obj.get("challenges", {})
    challenges_html = ""
    for ck, cv in challenges_obj.items():
        prob_key = "problem.desc" if "desc" in cv.get("problem", {}) else "problem"
        sol_key = "solution.desc" if "desc" in cv.get("solution", {}) else "solution"
        prob_text = cv["problem"]["desc"] if "desc" in cv.get("problem", {}) else cv.get("problem", "Problem")
        sol_text = cv["solution"]["desc"] if "desc" in cv.get("solution", {}) else cv.get("solution", "Solution")
        
        challenges_html += f"""
                  <div class="challenge-card">
                    <div class="challenge-header">
                      <i class="fas fa-exclamation-triangle"></i>
                      <h4 data-i18n="{key}.{"challengesList" if "challengesList" in obj else "challenges"}.{ck}.title">{cv.get('title', 'Challenge')}</h4>
                    </div>
                    <div class="challenge-body">
                      <div class="challenge-problem">
                        <span class="challenge-label">Problem</span>
                        <p data-i18n="{key}.{"challengesList" if "challengesList" in obj else "challenges"}.{ck}.{prob_key}">{prob_text}</p>
                      </div>
                      <div class="challenge-solution">
                        <span class="challenge-label">Solution</span>
                        <p data-i18n="{key}.{"challengesList" if "challengesList" in obj else "challenges"}.{ck}.{sol_key}">{sol_text}</p>
                      </div>
                    </div>
                  </div>"""

    # Tech Stack Sidebar
    tech_stack_obj = obj.get("techStack", {})
    tech_html = ""
    for tk, tv in tech_stack_obj.items():
        if isinstance(tv, dict):
            # It's an object with .title and properties
            tech_title = tv.get("title", tk)
            items = []
            for subk, subv in tv.items():
                if subk != "title":
                    items.append(subv)
            val = ", ".join(items)
            tech_html += f"""<div class="stack-row"><span class="label" data-i18n="{key}.techStack.{tk}.title">{tech_title}</span><span class="value">{val}</span></div>"""
        else:
            tech_html += f"""<div class="stack-row"><span class="label">{tk}</span><span class="value">{tv}</span></div>"""

    # Features / Overview
    overview_title_key = f"{key}.sections.overview"
    overview_text_key = f"{key}.sections.overviewText"
    
    prev_link, prev_name, next_link, next_name = get_links(file_name)
    
    html = f"""<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{obj.get('title', 'Project')} - Angel</title>
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
            <span class="proj-category-badge {p['category_class']}">{p['category']}</span>
          </div>
          <h1 class="proj-hero-title" data-i18n="{key}.title">{obj.get('title', 'Title')}</h1>
          <p class="proj-hero-tagline" data-i18n="{key}.subtitle">{obj.get('subtitle', 'Subtitle')}</p>
          <div class="proj-hero-actions">
            <a href="https://github.com/angeliteh" target="_blank" class="btn-secondary">
              <i class="fab fa-github"></i> <span data-i18n="{key}.resourceLinks.sourceCode">Ver Código</span>
            </a>
          </div>

          <div class="proj-meta-row">
            {metrics_html}
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
                <div class="content-block-title" data-i18n="{overview_title_key}">{obj.get('sections', {}).get('overview', 'Overview')}</div>
                <p data-i18n="{overview_text_key}">{obj.get('sections', {}).get('overviewText', 'Description')}</p>
              </div>

              <div class="demo-tabs-wrap">
                <div class="demo-tabs-header">
                  <button class="demo-tab-btn active" data-tab="demo"><i class="fas fa-play-circle"></i> <span data-i18n="{key}.sections.videoDemo">Video Demo</span></button>
                </div>
                <div class="demo-tab-pane active" id="pane-demo">
                  <div class="youtube-wrap">
                    <iframe src="https://www.youtube.com/embed/{p['v_id']}" allowfullscreen></iframe>
                  </div>
                  <div class="video-caption">
                    <h4 data-i18n="{key}.video.title">{obj.get('video', {}).get('title', 'Demo')}</h4>
                    <p data-i18n="{key}.video.description">{obj.get('video', {}).get('description', 'Watch it in action.')}</p>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <div class="content-block-title" data-i18n="{key}.sections.challenges">Technical Challenges</div>
                <div class="challenges-list">
                  {challenges_html}
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
                  {tech_html}
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
    with open(os.path.join(r"C:\Users\Angel\Desktop\portfolio\proyectos", file_name), "w", encoding="utf-8") as f:
        f.write(html)

print("Generated all legacy files successfully.")
