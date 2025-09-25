// Ingresar un número y mostrar el factorial de ese número.

/*
// De esta forma no llega al console
const cond = false
while(cond == true){
    console.log("Entro al while")
}

// Con do while
do {
    console.log("Entro al do/while")
} while(cond == true)
 */


/**
 * Precondiciones:
 *  _ Tenemos que validar que sea un numero
 *  _ Que no sea negativo
 */
let cumpleCondicion = false
let numeroIngresado = Number(prompt("Ingrese un numero para saber factorial")) // parseInt(prompt("Ingrese un numero para su factorial"))
do{
    if(isNaN(numeroIngresado) || numeroIngresado < 0){
        numeroIngresado = Number(prompt("Ingrese un numero ENTERO POSITIVO para saber factorial"))
    } else {
        cumpleCondicion = true
    }
} while(!cumpleCondicion)

/**
 * Factorial de 0 y 1 es 1
 * Ej: factorial(5) = 5*4*3*2*1 = 120
 */
const factorialRecursivo = (n) => {

    if(n >= 0 && n <= 1) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}

const factorialIterativo = (n) => {

    let resultado = n
    for (let index = n; index > 1; index--) {
        resultado *= (index - 1)
    }
    /**
     * Con n = 5
     * index = 5 --> resultado = 20
     * index = 4 --> resultado = 20 * 3 = 60
     * index = 3 --> resultado = 60 * 2 = 120
     * index = 2 --> resultado = 120 * 1 = 120
     */
    return resultado
}

console.log(factorialIterativo(numeroIngresado))