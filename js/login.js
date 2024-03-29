document.addEventListener("DOMContentLoaded", function () {

  const formularioLogin = document.getElementById("formularioLogin");
  const usuarioInput = document.getElementById("usuarioInput");
  const passwordInput = document.getElementById("passwordInput");
  const camposVaciosMensaje = document.getElementById("camposVacios");

  formularioLogin.addEventListener("submit", function (e) {
    e.preventDefault();
    if (usuarioInput.value.trim() === '' || passwordInput.value.trim() === '') {
      camposVaciosMensaje.textContent = "Por favor completa todos los campos.";
      return;
    }
    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioEncontrado = usuariosGuardados.find(usuario => usuario.username === usuarioInput.value);
    if (!usuarioEncontrado || usuarioEncontrado.password !== passwordInput.value) {
      camposVaciosMensaje.textContent = "Usuario o contraseña incorrectos.";
      return;
    }

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Signing in ..."
    });

    setTimeout(function () {
      window.location.href = "/html/servicios.html";
    }, 3000); 

    

  });


  



});
