// Remove polyfill.io script
(function() {
  // Remove any polyfill.io scripts that might be already loaded
  document.addEventListener('DOMContentLoaded', function() {
    const scripts = document.querySelectorAll('script[src*="polyfill.io"]');
    scripts.forEach(function(script) {
      script.remove();
    });
  });
  
  // Also intercept dynamic script loading
  const originalAppend = Element.prototype.appendChild;
  Element.prototype.appendChild = function(node) {
    if (node.src && node.src.includes('polyfill.io')) {
      return node;
    }
    return originalAppend.call(this, node);
  };
})();
