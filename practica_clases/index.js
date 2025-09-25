// Si el usuario esta logeado, mostrar username en lugar de login
const mostrarUsernameSiAplica = () => {

  const username = localStorage.getItem("usuario")
  if(username) {// Seria la misma evaluacion que username != null && username != "" && username != undefined

    const linkLogin = document.getElementById("linkLogin")
    linkLogin.innerHTML = "<span class='show-username'>" + username + "</span>"
  }
}

mostrarUsernameSiAplica()

const ordenarCarrerasPorNombre = () => {

  /*const numeros = [1, 2, 9, 7, 5]
  const ordenarNumeros = (primerNumero, segundoNumero) => {
    if (primerNumero > segundoNumero) {
      return 1;
    }
    if (primerNumero < segundoNumero) {
      return -1;
    }
    return 0;
  }
  console.log(numeros.sort(ordenarNumeros))*/
  const ordenadorDeCarreras = (primerCarrera, segundaCarrera) => {
    if (primerCarrera.nombre > segundaCarrera.nombre) {
      return 1;
    }
    if (primerCarrera.nombre < segundaCarrera.nombre) {
      return -1;
    }
    return 0;
  }
  carreras.sort(ordenadorDeCarreras)
}

ordenarCarrerasPorNombre()

const cargarCarrerasEnPantalla = () => {

  console.log(carreras)

  // Accedo a los datos del primer elementos de las carreras
  /*const primerCarrera = carreras[0]
  console.log(primerCarrera.nombre)
  console.log(primerCarrera.imagen)
  console.log(primerCarrera.descripcion)
  console.log(primerCarrera.alcance_titulo)*/

  /*carreras.forEach((carrera, index) => {
    cargarItemCard(carrera, index)
  })*/

  for (let index = 0; index < carreras.length; index++) {

    const carrera = carreras[index];
    cargarItemCard(carrera, index)
    
  }
}

const cargarItemCard = (carrera, indice) => {

  /**
   * <article class="card">
          <img src="https://picsum.photos/id/11/480/240" alt="Imagen Lorem picsum" class="card__img" />
          <div class="card__body">
              <h3 class="card__title">Lic. en Ciencia de Datos</h3>
              <p class="card__text">Estamos transitando una época donde todas las Organizaciones, desde las
                  gubernamentales hasta las científicas, pasando por las Empresariales e Industriales,
                  entienden que los datos constituyen uno de sus principales activos...
              </p>
              <a href="#modal-demo" class="button">Abrir modal</a>
          </div>
      </article>
   */

  const article = document.createElement("article")
  article.className = "card"

  const imagen = document.createElement("img")
  imagen.src = carrera.imagen
  imagen.alt = carrera.nombre
  imagen.className = "card__img"
  article.append(imagen)

  const div = document.createElement("div")
  div.className = "card__body"
  article.append(div)

  const h3 = document.createElement("h3")
  h3.className = "card__title"
  h3.innerText = carrera.nombre
  div.append(h3)

  const p = document.createElement("p")
  p.className = "card__text"
  p.innerText = carrera.descripcion
  div.append(p)

  const a = document.createElement("a")
  a.href = "#modal-demo"
  a.className = "button"
  a.innerText = "Abrir modal"
  a.setAttribute("indiceCarrera", indice)
  div.append(a)

  const cardList = document.getElementById("cards")
  cardList.append(article)
}

cargarCarrerasEnPantalla()

const manejoEventoClickModal = () => {

  const botonesAbrirModal = document.getElementsByClassName("button")

  for (let index = 0; index < botonesAbrirModal.length; index++) {

    const botonAbrirModal = botonesAbrirModal[index];
    //console.log(botonAbrirModal.parentElement.children)
    const indice = botonAbrirModal.getAttribute("indiceCarrera")
    console.log(indice) 
    botonAbrirModal.addEventListener("click",() => {

      const carrera = carreras[indice]
      console.log(carrera)
      const listadoModal = document.getElementById("listaModal")
      listadoModal.innerHTML = ""

      for (let index = 0; index < carrera.alcance_titulo.length; index++) {

        const alcance = carrera.alcance_titulo[index];
        const li = document.createElement("li")
        li.innerText = alcance
        listadoModal.append(li)
      }

    })
  }
}

manejoEventoClickModal()