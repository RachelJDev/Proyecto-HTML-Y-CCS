let usuario = document.getElementById("usuario")
let contrasena = document.getElementById("contrasena")
let boton = document.getElementById("btnLogin")

let errorUsuario = document.getElementById("errorUsuario")
let errorContrasena = document.getElementById("errorContrasena")

boton.addEventListener("click", function(e) {

e.preventDefault()

let valido = true
 if (usuario.value === "") {
        errorUsuario.textContent = "⚠️ El Usuario es obligatorio"
        errorUsuario.style.color = "red"
        valido = false
    } else {
        errorUsuario.textContent = ""
    }

    // --- VALIDACIÓN DEL APELLIDO ---
    if (contrasena.value === "") {
        errorContrasena.textContent = "⚠️ La Contrasena es obligatoria"
        errorContrasena.style.color = "red"
        valido = false
    } else {
        errorContrasena.textContent = ""
    }
if (valido === true) {
        window.location.href = "Index.html"
    }
  
})