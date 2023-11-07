// ************  METODOS DE DOCUMENT   *******************

/**
 * Nos permite recuperar el primer elemento que cumple la condición que yo le especifico. 
 * Por ejemplo: Si ponemos document.querySelector('a’) me devolverá el primer enlace de la web 
 * que tengamos cargada en el navegador.
 * Puede utilizar    . / #  para clases o id respectivamente   
 * también puede buscar tags o etiquetas directamente
 */
const celda = document.querySelector('#f1c3');

/**
 * A diferencia del anterior este selecciona todos los elementos que cumplen la condición. 
 * En el caso anterior seleccionaría todos los enlaces.
 * Los meterá en un arreglo, con lo cuál, si queremos manipularlo tendremos que acceder a el 
 * a través del índice a cada uno de los valores. con un bucle for (for(let c of fila2) {}) 
 **/ 
const fila = document.querySelectorAll('#fila2 .col');  (ARRAY)

/**
 * A diferencia del anterior, sólo selecciona la etiqueta 
 * que contenga el id concreto. 
 * También podríamos hacerlo indicando la # dentro del Document.querySelector
 */
const fila1 = document.getElementById('id'); 

/**
 * Selecciona todas las etiquetas que contenga la clase concreta. 
 * También podríamos hacerlo indicando la . dentro de la clase.
 */
const fila2 = document.getElementsByClassName('clase');


/**  
 * Crea un Elemento en memoria pero no se vera en el DOM
 * Crea un atributo en memoria  // no lo usamos MACHACA el anterior
 * Settea un elemento con un Atributo o una Clase  NO MACHACA etc..
 * Añade Classe  al elemento NO MACHACA
 */
const elemento = document.createElement('div');
const atributo = document.createAttribute(tipo 'id' , nombre 'adorno');
elemento.setAttribute('id',  'atrib');
elemento.classList.add('ultimaFila');           

//*************  INSERTAR CONTENIDO EN EL DOM  *****************
// se hace mediante metodos indicando el lugar y el contenido
// Insertar HTML
variable = document.querySelector(celda1); 
variable.innerHTML = `<h2>${c.innerText}</h2>`;
/**
 * Insertaremos el texto y etiquetas que encontramos en la variable c 
 * dentro de la celda1
 */
