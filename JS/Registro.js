let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let correo = document.getElementById("correo")
let contraseña = document.getElementById("contraseña")
let boton = document.getElementById("btnRegistro")


let errorNombre = document.getElementById("errorNombre")
let errorApellido = document.getElementById("errorApellido")
let errorCorreo = document.getElementById("errorCorreo")
let errorContrasena = document.getElementById("errorContrasena")

let ojito = document.getElementById("ojito")

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



// Esta función se ejecuta cuando el usuario hace clic en el botón
boton.addEventListener("click", function(e) {

e.preventDefault()

let valido = true
 if (nombre.value === "") {
        errorNombre.textContent = "⚠️ El nombre es obligatorio"
        errorNombre.style.color = "red"
         nombre.style.borderBottom = "2px solid red"

         nombre.classList.add("temblar")
    setTimeout(function() { nombre.classList.remove("temblar") }, 300)

        valido = false
    } else {
        errorNombre.textContent = ""
         nombre.style.borderBottom = ""
    }

    // --- VALIDACIÓN DEL APELLIDO ---
    if (apellido.value === "") {
        errorApellido.textContent = "⚠️ El apellido es obligatorio"
        errorApellido.style.color = "red"
         apellido.style.borderBottom = "2px solid red"

          apellido.classList.add("temblar")
    setTimeout(function() { apellido.classList.remove("temblar") }, 300)

        valido = false
    } else {
        errorApellido.textContent = ""
         apellido.style.borderBottom = ""
    }

    // --- VALIDACIÓN DEL CORREO ---
    if (correo.value === "") {
        errorCorreo.textContent = "⚠️ El correo es obligatorio"
        errorCorreo.style.color = "red"
         correo.style.borderBottom = "2px solid red"

          correo.classList.add("temblar")
    setTimeout(function() { correo.classList.remove("temblar") }, 300)

        valido = false
    } else if (!correo.value.includes("@")) {
        errorCorreo.textContent = "⚠️ El correo debe tener @"
        errorCorreo.style.color = "red"
        correo.style.borderBottom = "2px solid red"

         correo.classList.add("temblar")
    setTimeout(function() { correo.classList.remove("temblar") }, 300)

        valido = false

    } else {
        errorCorreo.textContent = ""
         correo.style.borderBottom = ""
    }

    // --- VALIDACIÓN DE CONTRASEÑA ---
    if (contrasena.value === "") {
        errorContrasena.textContent = "⚠️ La contraseña es obligatoria"
        errorContrasena.style.color = "red"
        contrasena.style.borderBottom = "2px solid red"

         contrasena.classList.add("temblar")
    setTimeout(function() { contrasena.classList.remove("temblar") }, 300)

        valido = false
    } else if (contrasena.value.length < 8) {
        errorContrasena.textContent = "⚠️ La contraseña debe tener mínimo 8 caracteres"
        errorContrasena.style.color = "red"
        contrasena.style.borderBottom = "2px solid red"

         contrasena.classList.add("temblar")
    setTimeout(function() { contrasena.classList.remove("temblar") }, 300)


        valido = false
    } else {
        errorContrasena.textContent = ""
         contrasena.style.borderBottom = ""
    }

    // ---  REDIRIGE AL LOGIN ---
    if (valido === true) {
        window.location.href = "Login.html"
    }
  
})