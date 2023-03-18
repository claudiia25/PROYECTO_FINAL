// Ejecutar hasta que todo esté cargado
window.onload = function() {
    // Con esta variable controlamos el botón
    let btn = document.getElementById('toggle-btn');
  
    // Con esta variable controlamos el botónel menú
    let side = document.getElementById('sidebar');
  
    // Agregar evento "onclick" al botón, este sirve para abrir el menú lateral cuando lo pulsamos.
    btn.addEventListener('click', function() {
      // Agregar o quitar clase "active" a botón y menú
      btn.classList.toggle('active');
      side.classList.toggle('active');
    });
  }