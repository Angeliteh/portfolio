// Definir TemplateLoader inmediatamente
window.TemplateLoader = class TemplateLoader {
    static get baseUrl() {
        const isGitHubPages = window.location.hostname.includes('github.io');
        const isProjectPage = window.location.pathname.includes('/proyectos/');
        return isGitHubPages ? (isProjectPage ? '..' : '/portfolio') : (isProjectPage ? '..' : '');
    }

    static getAssetPath(path) {
        const isProjectPage = window.location.pathname.includes('/proyectos/');
        return isProjectPage ? path.replace(/^\//, '../') : `${this.baseUrl}${path}`;
    }

    static async loadSidebar() {
        try {
            const response = await fetch(`${this.baseUrl}/templates/sidebar.html`);
            const html = await response.text();
            document.querySelector('#sidebar-container').innerHTML = html;
            return true;
        } catch (error) {
            console.error('Error loading sidebar:', error);
            return false;
        }
    }

    static updateCSSPaths() {
        document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('/')) {
                link.href = this.getAssetPath(href);
            }
        });
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', async () => {
    await TemplateLoader.loadSidebar();
    TemplateLoader.updateCSSPaths();
});





