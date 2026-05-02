let usuario = document.getElementById("usuario")
let contrasena = document.getElementById("contrasena")
let boton = document.getElementById("btnLogin")
let ojito = document.getElementById("ojito")

let errorUsuario = document.getElementById("errorUsuario")
let errorContrasena = document.getElementById("errorContrasena")

ojito.addEventListener("click", function() {
    if (contrasena.type === "password") {
        contrasena.type = "text"
        ojito.classList.remove("fa-eye")
        ojito.classList.add("fa-eye-slash")
    } else {
        contrasena.type = "password"
        ojito.classList.remove("fa-eye-slash")
        ojito.classList.add("fa-eye")
    }
})




boton.addEventListener("click", function(e) {

e.preventDefault()




let valido = true
 if (usuario.value === "") {
        errorUsuario.textContent = "⚠️ El Usuario es obligatorio"
        errorUsuario.style.color = "red"
         usuario.style.borderBottom = "2px solid red"
        valido = false
    } else {
        errorUsuario.textContent = ""
        usuario.style.borderBottom = ""
    }

    // --- VALIDACIÓN DEL APELLIDO ---
    if (contrasena.value === "") {
        errorContrasena.textContent = "⚠️ La Contrasena es obligatoria"
        errorContrasena.style.color = "red"
         contrasena.style.borderBottom = "2px solid red"
        valido = false
    } else {
        errorContrasena.textContent = ""
        contrasena.style.borderBottom = ""
    }
if (valido === true) {
        window.location.href = "Index.html"
    }
  
})