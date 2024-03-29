document.addEventListener("DOMContentLoaded", function () {

    const formRegist = document.getElementById("formRegist");
    const userRegist = document.getElementById("userRegist");
    const emailRegist = document.getElementById("emailRegist");
    const passRegist = document.getElementById("passRegist");

    formRegist.addEventListener("submit", function (e) {
        e.preventDefault();
        if (userRegist.value.trim() === '' || emailRegist.value.trim() === '' || passRegist.value.trim() === '') {
            Swal.fire({
                title: "Debes completar los campos obligatorios.",
                text: "That thing is still around?",
                icon: "question"
              });
            return;
        }
        if (passRegist.value.length < 6) {
            Swal.fire({
                title: "La contraseña debe tener mas de 6 digitos.",
                text: "Para mayor seguridad le recomendamos incluir signos y numeros.",
                icon: "error"
              });
            return;
        } 

        const nuevoUsuario = {
            username: userRegist.value,
            email: emailRegist.value,
            password: passRegist.value
        };

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(nuevoUsuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        userRegist.value = '';
        emailRegist.value = '';
        passRegist.value = '';


        Swal.fire({
            title: "Usuario registrado!",
            text: "Se te ha enviado un correo con instrucciones.",
            icon: "success"
          });
        
    });
});
