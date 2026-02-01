document.getElementById('download_button').addEventListener('click', function() {
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1pPIMkQXEewDEtFd2Nm-LuF9RGLp8TKlu';  

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV_SalomonChoi.pdf'; 

    link.click();
});


window.copiarEmail = function () {
  const emailEl = document.getElementById("email");
  const img = document.querySelector(".copy-img");
  const msg = document.getElementById("copiado-msg");

  if (!emailEl || !img || !msg) {
    console.warn("Elementos para copiar email no encontrados");
    return;
  }

  navigator.clipboard.writeText(emailEl.innerText).then(() => {
    img.src = "./imagenes/aprobar.png";
    msg.classList.add("mostrar");

    setTimeout(() => {
      img.src = "./imagenes/copia.png";
      msg.classList.remove("mostrar");
    }, 1500);
  });
};

