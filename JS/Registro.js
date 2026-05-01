let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let correo = document.getElementById("correo")
let contraseña = document.getElementById("contraseña")
let boton = document.getElementById("btnRegistro")

let errorNombre = document.getElementById("errorNombre")
let errorApellido = document.getElementById("errorApellido")
let errorCorreo = document.getElementById("errorCorreo")
let errorContraseña = document.getElementById("errorContraseña")

// Esta función se ejecuta cuando el usuario hace clic en el botón
boton.addEventListener("click", function(e) {

e.preventDefault()

let valido = true
 if (nombre.value === "") {
        errorNombre.textContent = "⚠️ El nombre es obligatorio"
        errorNombre.style.color = "red"
        valido = false
    } else {
        errorNombre.textContent = ""
    }

    // --- VALIDACIÓN DEL APELLIDO ---
    if (apellido.value === "") {
        errorApellido.textContent = "⚠️ El apellido es obligatorio"
        errorApellido.style.color = "red"
        valido = false
    } else {
        errorApellido.textContent = ""
    }

    // --- VALIDACIÓN DEL CORREO ---
    if (correo.value === "") {
        errorCorreo.textContent = "⚠️ El correo es obligatorio"
        errorCorreo.style.color = "red"
        valido = false
    } else if (!correo.value.includes("@")) {
        errorCorreo.textContent = "⚠️ El correo debe tener @"
        errorCorreo.style.color = "red"
        valido = false
    } else {
        errorCorreo.textContent = ""
    }

    // --- VALIDACIÓN DE CONTRASEÑA ---
    if (contrasena.value === "") {
        errorContrasena.textContent = "⚠️ La contraseña es obligatoria"
        errorContrasena.style.color = "red"
        valido = false
    } else if (contrasena.value.length < 8) {
        errorContrasena.textContent = "⚠️ La contraseña debe tener mínimo 8 caracteres"
        errorContrasena.style.color = "red"
        valido = false
    } else {
        errorContrasena.textContent = ""
    }

    // ---  REDIRIGE AL LOGIN ---
    if (valido === true) {
        window.location.href = "Login.html"
    }
  
})