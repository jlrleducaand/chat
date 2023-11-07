// alert("funciona");

const variable = "ejemploCadena";

 ////Modificar DIV primera celda (id: f1c1)
 let celda1 = document.getElementById('f1c1');
 celda1.innerText= "Primera Celda";

 // asignar innerText que incluya etiquetas HTML  cambia tamaño a h2
 celda1 = document.getElementById('f1c1');
 celda1.innerHTML = "<h2>Primera celda</h2>";   // introduce Etiquetas y Contenido

 //////Modificar DIV segunda celda (id: f1c2)
 let celda2 = document.getElementById('f1c2');
 celda2.innerText="Segunda Celda";              // introduce contenido a la etiqueta de id...
 celda2.style.color = 'blue';
 celda2.style.fontSize = '1.5em';
 // asignar innerHTML que incluya etiquetas HTML



 //////Modificar DIV tercera celda (id: f1c3) asignando estilo CSS (color y fontsize)
 const celda3 = document.querySelector('#f1c3');
 celda3.innerText = "Tercera celda";
 celda3.style.color = 'red';
 celda3.style.fontSize = '1.5em';

//////Modificar / Incluir imagen (https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png)
const imagen = document.querySelector('.row img');  // Guarda en imagen el contenido de los parametros
imagen.src = "https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png";
const fila = document.getElementById("row-img");
fila.style.width = "200px";     // las dos opciones sirven Padre
imagen.style.height = "150px";  // las dos opciones sirven Hijo

// opcion 2  carga una funcion anonima   *******
    imagen.addEventListener('load', function() {
        imagen.style.height = '300px';   // Cuerpo de la funcion
        imagen.style.width = '300px';    // Cuerpo de la funcion
      });

 //////CAmbia tamaño del texto de la fila 2 (todos los div dentro de fila2) usando $
 const fila2 = document.querySelectorAll('#fila2 .col');  // creamos un array con todos los elementos que sean  de id:fila2 y class col
 for(let c of fila2) {  // iteramos sobre el array de columas en la fila2
     c.innerHTML = `<h6>${c.innerText}</h6>`; // insertamos de forma dinamica contenido en el div con etiquetas h2
     c.style.color ='blue';  // cambiamos el color del texto
 }

 //// otro metodo con  css 
  const fila2b = document.querySelectorAll('#fila2');  // Array Creado con las columnas



 ////Cambiar texto de la última celda (id: f2c3), texto pedido al usuario.
 const celda6 = document.getElementById('f2c3');
 //celda6.innerText = prompt("Dime Texto"); // comentada mientras trabajo
 celda6.innerText = variable;               // variable definida al principio
 celda6.style.fontSize = '16px';
 celda6.style.color = 'black';


//  // opcion 2 esta no funciona aunque se lo traga el ide pita el Dom
//  const celda7 =  document.getElementById('f2c3');
//  celda7.innerText.prompt("Dime Texto");

 ////Función para la deteccion y pulsación del botón
 // contexto  ->  boton_click: añadir * a los lados del título;  
 function boton_click() {
     const titulo = document.querySelector('h1'); // Selector H1
     titulo.innerText = `*${titulo.innerHTML}*`;  // inserta codigo html con asteriscos
     titulo.style.color = 'red';
     //titulo.innerHTML = '*' + titulo.innerText + '*'; // segunda forma deprecated
 }

 //boton_click2: añadir - en título
  function boton_unclick() { 
      const titulo = document.querySelector('h1'); // Selector H1 
      titulo.innerText = `+${titulo.innerHTML}+`; // inserta codigo html con signos +
      titulo.style.color = 'blue'; 
      //titulo.innerHTML = '*' + titulo.innerText + '*';  // segunda forma deprecated
}

 //Asignación de función a la pulsación del botón (click, mousedown, mouseup)
 const boton = document.getElementById('boton');  
 boton.addEventListener('click', boton_click); 
 //console.log(boton.addEventListener('mousedown', boton_click));
 //boton.addEventListener('mouseup', boton_unclick);


 //Restauración del título al hacer clic en el mismo.
 function restaura_Titulo(){
 //document.querySelector('h1').innerText = `MANEJO DEL DOM`;   //1Forma
 const newTitulo = document.getElementById('miTitulo');         //2Forma no se hace seguido (2lineas)
 newTitulo.innerText = `MANEJO DEL DOM CON HTML`;
 }
 const titulo = document.querySelector('h1');
 titulo.addEventListener('click', restaura_Titulo);


 ////Añadir nuevos elementos HTML al final de un elemento existente (id: ultimaFila)
 //Crear una nueva fila div-row, con un elemento columna div-col (con bg-danger).
 let ultimaFila = document.createElement('div');    // crear un div vacio
 ultimaFila.setAttribute('id', 'lastRow');          // dar atributos id
 ultimaFila.classList.add('ultimaFila');            // dar atributo class añade no machaca class

 const ultimoElemento = document.createElement('div');
 ultimoElemento.classList.add('col', 'bg-danger');       //Añade Clases a la lista
 ultimoElemento.innerText= "SOY EL ULTIMO DIV";

 // AUN NO APARECEN EN EL SITIO WEB .....
 ultimaFila.append(ultimoElemento);   // inserta el elemento en el contenedor para verlo
 //Añadir al final del contenedor (container || container-fluid)
 const container = document.querySelector('div');
 //container.insertAdjacentElement("beforeend", ultimaFila );  opcion 1
 container.append(ultimaFila);                              // opcion 2


 ////Añadir nuevo elemento HTML junto a un elemento existente (antes de ultimaFila)
 ////element.insertAdjacentElement(position, element); //beforbegin, afterbegin, beforeend, afterend
 //Crear una nueva fila div-row, con un elemento columna div-col (con bg-warning).
 const penultimaFila = document.createElement('div');
 penultimaFila.setAttribute('id', 'unlastRow');         // dar atributos id
 penultimaFila.classList.add('penultimaFila');

 const penultimoElemento =  document.createElement('div');
 penultimoElemento.classList.add('col', 'bg-warning');
 penultimoElemento.innerText = "SOY EL PENULTIMO DIV";

 //Añadir antes del div con id ultimaFila
 penultimaFila.append(penultimoElemento);   // inserta el elemento en el contenedor para verlo
 ultimaFila.insertAdjacentElement('beforebegin', penultimaFila);  // pone el contenedor en posicion 
