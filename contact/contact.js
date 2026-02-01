const form = document.getElementById("contactForm");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    respuesta.textContent = "⚠️ Por favor complete todos los campos.";
    respuesta.style.color = "red";
    return;
  }

  if (!validarEmail(email)) {
    respuesta.textContent = "Correo electrónico no válido.";
    respuesta.style.color = "red";
    return;
  }

  // Simulación de envío
  respuesta.textContent = "Mensaje enviado correctamente.";
  respuesta.style.color = "green";

  form.reset();
});

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
