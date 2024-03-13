document.addEventListener("DOMContentLoaded", function () {

    const formRegist = document.getElementById("formRegist");
    const userRegist = document.getElementById("userRegist");
    const emailRegist = document.getElementById("emailRegist");
    const passRegist = document.getElementById("passRegist");

    formRegist.addEventListener("submit", function (e) {
        e.preventDefault();
        if (userRegist.value.trim() === '' || emailRegist.value.trim() === '' || passRegist.value.trim() === '') {
            alert("Por favor completa todos los campos.");
            return;
        }
        if (passRegist.value.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
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


        alert("Te has registrado correctamente.")
        
    });
});
