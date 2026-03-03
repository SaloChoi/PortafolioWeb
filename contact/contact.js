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

  // Envio
 emailjs.send("service_yspk1ft", "template_rht3nrd", {
  name: nombre,
  email: email,
  message: mensaje,
  title:" Contacto desde Portafolio",
})
.then(function () {
  respuesta.textContent = "Mensaje enviado correctamente.";
  respuesta.style.color = "green";
  form.reset();
})
.catch(function (error) {
  respuesta.textContent = "❌ Error al enviar el mensaje.";
  respuesta.style.color = "red";
  console.error(error);
});
});

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

