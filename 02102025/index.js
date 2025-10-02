/**
 * Ingresar el valor correspondiente a un año, y determinar si un año es bisiesto o no lo es por pantalla o por la consola. 
 * (Un año es bisiesto si es divisible entre 4, excepto los años múltiplos de 100, a menos que también sean múltiplos de 400).
 */

const resultadoEnPantalla = document.getElementById("resultado")
const esAnioBisiesto = (anio) => {

    let mensaje = ""

    if(anio % 4 === 0) {
        if(anio % 100 === 0 && anio % 100 === 400){
            mensaje = "El año es bisiesto"
        } else {
            mensaje = "El año no es bisiesto"
        }
    } else {
        mensaje = "El año no es bisiesto"
    }
    resultadoEnPantalla.innerHTML = mensaje
}

/*const anioElegido = parseInt(prompt("Ingrese un año valido"))
esAnioBisiesto(anioElegido)*/

/**
    Buscar el máximo y mínimo en una lista de 10 números. También indicar las posiciones en la lista que ocupan esos números.
 */
const numeros = [1, 99, 5, 7, 10, 8, 40, 88, 20, 2]

// Nos va a devolver el numero maximo en una lista
const buscarMaximoYPosicion = () => {

    let numeroMaximo = numeros[0]
    let posicion = 0
    for (let index = 1; index < numeros.length; index++) {
        const numero = numeros[index];
        if(numeroMaximo < numero){
            numeroMaximo = numero
            posicion = index
        }
    }

    return { indice: posicion, numero: numeroMaximo }
}

// Nos va a devolver el numero minimo en una lista
const buscarMinimoYPosicion = () => {

    let numeroMinimo = numeros[0]
    let posicion = 0
    for (let index = 1; index < numeros.length; index++) {
        const numero = numeros[index];
        if(numeroMinimo > numero){
            numeroMinimo = numero
            posicion = index
        }
    }

    return { indice: posicion, numero: numeroMinimo }
}

const div1 = document.createElement("div")
const resultadoMaximoYPosicion = buscarMaximoYPosicion()
div1.innerText = `La posicion del maximo es: ${resultadoMaximoYPosicion.indice} y el maximo es: ${resultadoMaximoYPosicion.numero}`
const div2 = document.createElement("div")
const resultadoMinimoYPosicion = buscarMinimoYPosicion()
div2.innerText = `La posicion del minimo es: ${resultadoMinimoYPosicion.indice} y el minimo es: ${resultadoMinimoYPosicion.indice}`
resultadoEnPantalla.append(div1)
resultadoEnPantalla.append(div2)

// Ordenar lista
const ordenarPorBurbujeo = (lista) => {

    // Ej: [1,4,2,9,7,5]
    const listaParaBurbujeo = [...lista] // spread operator
    let cantidadRecorridos = 0
    for (let i = 0; i < listaParaBurbujeo.length -1; i++) {
    
        
        let huboCambios = false
        for (let j = 0; j < listaParaBurbujeo.length - 1; j++) {
           
            cantidadRecorridos++
            const numeroActual = listaParaBurbujeo[j];
            const numeroSiguiente = listaParaBurbujeo[j + 1]
            if(numeroSiguiente < numeroActual){
                listaParaBurbujeo[j] = numeroSiguiente
                listaParaBurbujeo[j + 1] = numeroActual
                huboCambios = true
            }
        }
        
        if(!huboCambios) {
            break
        }
    }
    console.log("Array ordenado: " + listaParaBurbujeo + ", cantidad de recorridos: " + cantidadRecorridos)
    return listaParaBurbujeo
}

const listaNumerosOrdenada = ordenarPorBurbujeo(numeros)
console.log(listaNumerosOrdenada)

// Busqueda binaria
const encontroValorPorBusquedaBinariaIterativa = (lista, valorBuscado) => {

    let inicio = 0
    let fin = lista.length - 1

    // [1,2,4,5,7,9]
    while (inicio <= fin) {

        // Calcula el índice del medio para evitar desbordamiento
        const mitad = inicio + Math.floor( (fin - inicio) / 2)
        const valorDeLaMitad = lista[mitad]

        // Compara el elemento del medio con el valor buscado
        if (valorDeLaMitad === valorBuscado) {
            return true
        } else if (valorDeLaMitad < valorBuscado) {
            // El valor buscado está en la mitad derecha del array
            inicio = mitad + 1
        } else {
            // El valor buscado está en la mitad izquierda del array
            fin = mitad - 1
        }
    }

    return false
}
const numeroPedido = parseInt(prompt("Ingrese valor a buscar"))
const valorEncontrado = encontroValorPorBusquedaBinariaIterativa(listaNumerosOrdenada, numeroPedido)
if(valorEncontrado){
    console.log(`Encontro el numero ${numeroPedido}`)
} else {
    console.log("No encontro el valor buscado")
}