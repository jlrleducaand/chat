// VARIABLES

//TAREA1
function moverAlUltimo() {
  const contenedor1 = document.getElementById("lista");
  const primerHijo = contenedor1.querySelector(":first-child");

  contenedor1.appendChild(primerHijo);
  primerHijo.classList = "bg-primary";
}
moverAlUltimo();

//TAREA2
function copiar() {
  const contenedorOriginal = document.querySelector("#original");
  const contenedorDestino = document.querySelector("#copia");
  const hijos = contenedorOriginal.querySelectorAll("div");

  hijos.forEach((element) => {
    contenedorDestino.appendChild(element.cloneNode(true));
  });
}
copiar();

// TAREA 3
function ordenar() {
  const contenedorLista = document.querySelector("#ordenar");
  const hijos = Array.from(contenedorLista.children);

  hijos.sort((a, b) => (a.textContent.toLowerCase() > b.textContent.toLowerCase())? 1:-1 );

  hijos.forEach((hijo) => {
    contenedorLista.appendChild(hijo);
  });
}
ordenar();

// TAREA 4
function duplicar_y_ordenar() {
  function copiar() {
    const contenedorOriginal = document.querySelector("#desordenado");
    const contenedorDestino = document.querySelector("#ordenado");
    const hijos = contenedorOriginal.querySelectorAll("div");

    hijos.forEach((element) => {
      contenedorDestino.appendChild(element.cloneNode(true));
    });
  }
  copiar();     

  function ordenar() {
    const contenedorLista = document.querySelector("#ordenado");
    const hijos = Array.from(contenedorLista.children);
  
    hijos.sort((a, b) => (a.textContent.toLowerCase() > b.textContent.toLowerCase())? 1:-1 );
  
    hijos.forEach((hijo) => { 
      contenedorLista.appendChild(hijo);
    });
  }
  ordenar(); 
}

duplicar_y_ordenar();
