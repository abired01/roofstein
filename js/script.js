// Selecciona el botón y el menú
const menuToggle = document.getElementById('toggle-menu');
const menu = document.getElementById('menu');

// Añadir un evento de clic al botón
menuToggle.addEventListener('click', () => {
  // Alternar la clase 'active' para mostrar/ocultar el menú
  menu.classList.toggle('active');
});
