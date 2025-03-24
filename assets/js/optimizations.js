// Lazy loading de imágenes
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll("img.lazy");
  
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }
});

// Optimización de animaciones
const animatedElements = document.querySelectorAll('.feature-item, .metric-card');
animatedElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    requestAnimationFrame(() => {
      element.style.transform = element.classList.contains('feature-item') 
        ? 'translateY(-5px)' 
        : 'scale(1.05)';
    });
  });
  
  element.addEventListener('mouseout', () => {
    requestAnimationFrame(() => {
      element.style.transform = 'none';
    });
  });
});

// Mejora de accesibilidad
document.querySelectorAll('[tabindex="0"]').forEach(element => {
  element.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      element.click();
    }
  });
});