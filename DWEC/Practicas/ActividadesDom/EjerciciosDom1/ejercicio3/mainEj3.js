// VARIABLES
const ballena   = "/ActividadesDom/EjerciciosDom1/ejercicio3/imagenes/ballena.png" ;
const elefante  = "/ActividadesDom/EjerciciosDom1/ejercicio3/imagenes/elefante.png";
const gallo     = "/ActividadesDom/EjerciciosDom1/ejercicio3/imagenes/gallo.png"   ;
const gato      = "/ActividadesDom/EjerciciosDom1/ejercicio3/imagenes/gato.png"    ;
const leon      = "/ActividadesDom/EjerciciosDom1/ejercicio3/imagenes/leon.png"    ;
const pajaro    = "/ActividadesDom/EjerciciosDom1/ejercicio3/imagenes/pajaro.png"  ;
const perro     = "/ActividadesDom/EjerciciosDom1/ejercicio3/imagenes/perro.png"   ;
const rino      = "/ActividadesDom/EjerciciosDom1/ejercicio3/imagenes/rino.png"    ;
const ArrayAnimales = [ballena, elefante, gallo, gato, leon, pajaro, perro, rino];

//FUNCIONES

// Función para crear los elementos de imagen y agregar los event listeners
function crearArrayOrigen() {
  ArrayAnimales.forEach(imagen => {
    const imgElement = document.createElement('img');
    imgElement.className = "col-1";
    imgElement.src = imagen;

    // Agregar el event listener a cada imagen
    imgElement.addEventListener('click', moverImagen);
    
    // desactivar el boton
    boton.removeEventListener('click', crearArrayOrigen); 
    
    containerImagenes.appendChild(imgElement);
  });
}

// Función para mover la imagen al contenedor destino
function moverImagen(event) {
  const imagen = event.target;
  imagen.removeEventListener('click', moverImagen); // Remover el event listener para evitar duplicados

  // Mover la imagen al contenedor destino
  containerDestino.appendChild(imagen);
}


//COLOCACION DE LOS CONTENEDORES Y SUS HIJOS

//Creo Boton
const boton = document.createElement("button");
boton.id = "boton"; //asignacion
boton.classList.add("btn", "btn-dark", "m-3");
boton.innerText = "Genera Array inicial";

// coloca el boton despues de la cabecera
cabecera.insertAdjacentElement("afterend", boton);

// Referencia al contenedor Res
const containerImagenes = document.getElementById('res');

// Referencia al contenedor Destino
const containerDestino = document.createElement('div');
containerDestino.id = 'destino';
containerDestino.classList.add('row', 'mt-3');

// Agregar el contenedor Destino debajo del contenedor Res
containerImagenes.insertAdjacentElement("afterend", containerDestino);

boton.addEventListener("click", crearArrayOrigen);
