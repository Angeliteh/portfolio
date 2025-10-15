/**
 * 🔧 CONFIGURACIÓN DEL CHAT WIDGET
 * 
 * Cambia estos valores según tu bot y servidor
 */

const CHAT_CONFIG = {
  // 🤖 ID del bot (debe coincidir con BOT_CONFIG en server.js)
  botId: "inmobiliaria",
  
  // 🌐 URL del backend
  // Desarrollo: "http://localhost:3000"
  // Producción: "https://tu-servidor.onrender.com"
  backendUrl: "https://bots-ai-websites.onrender.com",
  
  // 👤 Nombre del bot (se muestra en el header)
  botName: "Personal AI Agent",
  
  // 🎨 Personalización visual
  theme: {
    primaryColor: "#1e40af",
    hoverColor: "#2563eb",
    buttonEmoji: "💬"
  }
};

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHAT_CONFIG;
}

