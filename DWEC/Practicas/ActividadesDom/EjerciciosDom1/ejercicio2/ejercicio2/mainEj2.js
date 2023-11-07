// VARIABLES
let arrayNumeros = [];
let sumaTotal = 0;
let media = 0;
let cadenaNum = "";
let contFil = 1; // para la cadena de id generada
let contCol = 1; // para la cadena de id generada
let sizeArray = 0;

// INICIO AUTOMATICO DE LA EJECUCION DEL PROGRAMA
click_Button();  // llama a la funcion de inicio de procesos


//FUNCIONES
function pideNumero() {
  const numero = +prompt("Introduce un número mayor de 0");
  if (isNaN(numero)) {
    return pideNumero();
  }
  return numero;
}


function click_Button() { // Funcion para iniciar los procesos
  numero = pideNumero();
  validacion();
}

function reset() {
  cadenaNum = "";
  contCol = 1;
  sizeArray = 0;
  sumaTotal = 0;
  media = 0;
  arrayNumeros = [];
}

function validacion() {
  // condicion de Validacion de entradas
  while (numero >= 0) {
    sizeArray = arrayNumeros.push(numero);
    sumaTotal += numero;
    media = sumaTotal / sizeArray;    
    cadenaNum = arrayNumeros.toString();        
    numero = pideNumero();
  }

  // primer campo hijo
  let cadIdNumeros = "f" + contFil + "c" + contCol;
  const restFila = document.createElement("div");
  restFila.id = cadIdNumeros;
  restFila.className = "col-4  p-2 text-center";
  restFila.innerText = cadenaNum;
  contCol++;
  document.getElementById("res").appendChild(restFila);
  // segundo campo hijo
  const restSuma = document.createElement("div");
  let suma = "f" + contFil + "c" + contCol;
  restSuma.id = suma;
  restSuma.className = "col-4  p-2 text-center";
  restSuma.innerText = sumaTotal;
  contCol++;
  document.getElementById("res").appendChild(restSuma);
  // tercer campo hijo
  const restMedia = document.createElement("div");
  let Media = "f" + contFil + "c" + contCol;
  restMedia.id = Media;
  restMedia.className = "col-4  p-2 text-center";
  restMedia.innerText = media;
  contCol++;
  document.getElementById("res").appendChild(restMedia);

  contFil++;
  reset();
}

//Creo referencia a la Cabecera  para modificarla
const cabecera = document.getElementById("cabecera");

// Creo fila para el button
const filaBoton = document.createElement("div");
filaBoton.setAttribute("id", "filboton");
filaBoton.classList.add("row");

// Creo la columna contenedora para el button
const elementoBtn = document.createElement("div");
elementoBtn.classList.add("col-6");

filaBoton.appendChild(elementoBtn); // anido la columna en la fila

//Creo Boton
const boton = document.createElement("button");
boton.id = "boton"; //asignacion
boton.classList.add("btn", "btn-dark", "m-3");
boton.innerText = "Nueva Serie";

// coloca el boton despues de la cabecera
cabecera.insertAdjacentElement("afterend", boton);

boton.addEventListener("click", click_Button);
