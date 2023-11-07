//Funciones

// Variables
// Dias de la Semana
const dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

// Lisener a los Botones
const botonDias = document.querySelector("#dias");
const botonMeses = document.querySelector("#meses");

const divBotonDias = document.createElement("div");
const divBotonMeses = document.createElement("div");

botonDias.addEventListener("click", () => {
  divBotonDias.innerHTML = "";
  divBotonMeses.innerHTML = "";
  rellenaDias();
  rellenaDesplegableDias();
});
botonMeses.addEventListener("click", () => {
  divBotonMeses.innerHTML = "";
  divBotonDias.innerHTML = "";

  rellenaMeses();
  rellenaDesplegableMeses();
});

function rellenaDias() {
  botonDias.insertAdjacentElement("afterend", divBotonDias);
  divBotonDias.setAttribute("id", "idDivBotonDias");

  const tituloDias = document.createElement("h2");
  tituloDias.textContent = "DIAS DE LA SEMANA";

  divBotonDias.appendChild(tituloDias);

  const nuevoDiv = document.createElement("div");
  tituloDias.insertAdjacentElement("afterend", nuevoDiv);

  dias.forEach((element) => {
    const nuevoElemento = document.createElement("h4");
    nuevoElemento.textContent = element;

    nuevoDiv.appendChild(nuevoElemento);
  });
  // botonDias.removeEventListener('click', rellenaDias);
}

function rellenaMeses() {
  botonMeses.insertAdjacentElement("afterend", divBotonMeses);
  divBotonMeses.setAttribute("id", "idDivBotonMeses");

  const tituloMeses = document.createElement("h2");
  tituloMeses.textContent = "MESES DEL AÑO";

  divBotonMeses.appendChild(tituloMeses);

  const nuevoDiv = document.createElement("div");
  tituloMeses.insertAdjacentElement("afterend", nuevoDiv);

  meses.forEach((element) => {
    const nuevoElemento = document.createElement("h4");
    nuevoElemento.textContent = element;

    nuevoDiv.appendChild(nuevoElemento);
  });
  // botonMeses.removeEventListener('click', rellenaMeses);
}

function rellenaDesplegableDias() {
  const rellenaDesplegable = document.getElementById("desplegable");

  rellenaDesplegable.innerHTML = "";

  dias.forEach((element) => {
    const nuevoElemento = document.createElement("option");
    nuevoElemento.textContent = element;

    rellenaDesplegable.append(nuevoElemento);
  });
}
function rellenaDesplegableMeses() {
  const rellenaDesplegable = document.getElementById("desplegable");

  rellenaDesplegable.innerHTML = "";

  meses.forEach((element) => {
    const nuevoElemento = document.createElement("option");
    nuevoElemento.textContent = element;

    rellenaDesplegable.append(nuevoElemento);
  });
}
