// Selecciona el botón y el menú
const menuToggle = document.getElementById('toggle-menu');
const menu = document.getElementById('menu');

// Añadir un evento de clic al botón
menuToggle.addEventListener('click', () => {
  // Alternar la clase 'active' para mostrar/ocultar el menú
  menu.classList.toggle('active');
});


/* cambiar a partir de aqui en caso de error */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cotizaForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el envío automático
    let valid = true;

    // Limpia errores anteriores
    form.querySelectorAll(".error").forEach(err => err.textContent = "");

    const name = form.name;
    const phone = form.phone;
    const email = form.email;
    const menor = form.pago_menor;
    const mayor = form.pago_mayor;
    const tarifa = form.tarifa;
    const estado = form.estado;
    const privacidad = document.getElementById("privacidad");

    // Validaciones personalizadas
    if (name.value.trim() === "") {
      setError(name, "Por favor ingresa tu nombre.");
      valid = false;
    }

    if (phone.value.trim() === "" || phone.value.length < 8) {
      setError(phone, "Por favor ingresa un número de celular válido.");
      valid = false;
    }

    if (!validateEmail(email.value)) {
      setError(email, "Por favor ingresa un correo válido.");
      valid = false;
    }

    if (menor.value === "") {
      setError(menor, "Selecciona un pago menor.");
      valid = false;
    }

    if (mayor.value === "") {
      setError(mayor, "Selecciona un pago mayor.");
      valid = false;
    }

    if (tarifa.value === "") {
      setError(tarifa, "Selecciona una tarifa.");
      valid = false;
    }

    if (estado.value === "") {
      setError(estado, "Selecciona un estado.");
      valid = false;
    }

    if (!privacidad.checked) {
      const err = privacidad.parentElement.querySelector(".error");
      err.textContent = "Debes aceptar el aviso de privacidad.";
      valid = false;
    }

    if (valid) {
      form.submit(); // Si todo bien, envía el formulario
    }
  });

  function setError(element, message) {
    const error = element.parentElement.querySelector(".error");
    if (error) error.textContent = message;
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});