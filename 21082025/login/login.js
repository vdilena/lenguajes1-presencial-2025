// Cargo el valor del Correo electrónico y la Contraseña

let username = "juanperez@ElementInternals.com"
let password = "asdf1234"

// Valido que los campos no esten vacios
if(username.length > 0 && password.length > 0){
    console.log("No estan vacios los campos")
}

//let numeros = [1, 3, 8, 4] --> Tiene 4 elementos

// Quiero que el correo electronico tenga formato de correo --> un @ y el .com
for (let index = 0; index < username.length; index++) {
    const caracter = username[index];
    console.log(caracter)
}