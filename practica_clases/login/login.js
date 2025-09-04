// Armar logica para poder tener acceso al boton
//const botonEntrar = document.getElementById("btnEntrar")
//const remember = document.querySelector("[name=remember]")
//console.log(remember)

//Chequeamos si el usuario ya esta logueado
if(localStorage.getItem("usuario") != null && localStorage.getItem("password") != null) {
    location.href = "../index.html"
}

const botonEntrar = document.querySelector("#btnEntrar")
let username = ""
let password = ""
botonEntrar.addEventListener("click", () => {

    // Oculto los mensajes
    const mensajeExito = document.querySelector("#mensaje_error")
    mensajeExito.className = "mensaje_exito_oculto"

    const mensajeError = document.querySelector("#mensaje_exito")
    mensajeError.className = "mensaje_error_oculto"
    
    // Cargo el valor del Correo electrónico y la Contraseña
    username = document.querySelector("#email").value
    password = document.querySelector("#password").value

    //console.log(username)
    //console.log(password)
    // Valido que los campos no esten vacios
    let estanVaciosLosCampos = true
    if(username.length > 0 && password.length > 0){
        console.log("No estan vacios los campos")
        estanVaciosLosCampos = false
    } else {
        console.log("Estan vacios los campos")
    }
    
    // Tiene que ser un email valido con @ y .com
    // Forma 1
    let tieneArroba = false
    let tienePuntoCom = false
    for (let index = 0; index < username.length; index++) {

        const caracterLeido = username[index]
        // Chequeo que tenga @
        if(caracterLeido === "@"){
            tieneArroba = true
        }

        // Chequeo que termine en .com
        if(index === username.length -1) {
            if(caracterLeido === "m" 
                    && username[index -1] === "o" 
                    && username[index -2] === "c" 
                    && username[index -3] === "."
            ){
                tienePuntoCom = true
            }
        }
    }

    let cumpleCondicionesDeUsername = false
    if(tieneArroba && tienePuntoCom) {
        cumpleCondicionesDeUsername = true
        console.log("Cumple las condiciones de username")
    } else {    
        console.log("No cumple condicion de username")
    }

    // Verifico si cumple las condiciones de username y password
    if(!estanVaciosLosCampos && cumpleCondicionesDeUsername) {
        
        localStorage.setItem("usuario", username)
        localStorage.setItem("password", password)
        mensajeExito.className = "mensaje_exito_visible"

        // Redirijo despues de 3 segundos
        setTimeout(() => {
            location.href = "../index.html"
        }, 3000);
        //console.log(mensajeExito.className)

    } else {
        mensajeError.className = "mensaje_error_visible"
    }
    
    //console.log("Termina con .com" + username.endsWith(".com"))
    //console.log("Es un email valido: " + /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(username))

})
