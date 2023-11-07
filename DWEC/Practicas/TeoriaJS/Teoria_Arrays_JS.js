console.log('Hola');
//alert('Mensaje de aviso');
let a=4;
console.log("a =", a); //con la , se separan los valores
console.log("a "+ a); //con + no se incluye un espacio
console.log({a}); //con las llaves se muestra la variable y el valor
console.log('%cMensaje formateado', 'color:blue'); //%c es para que la siguiente cadena sea comando css

let b=23;
let c=10;
let nombre ='Juan';

let d=b+c;

nombre = 'Juan Carlos';

// CONSOLE LOG
console.log(nombre,c);

console.log(typeof nombre); //muestra el tipo de la variable

let lista = [1,2,3,4,5,"hola"];

let complejo = [34,lista,[45,'holas'],'ale'];

console.log(complejo);

complejo[0]=7

lista.indexOf(3,3);//devuelve el indice del primer parametro a partir del indice dado

lista.push(15);//añade al final devuelve el tamaño del array resultante

lista.unshift(0);//añade al final devuelve el tamaño del array resultante

lista.pop(); //elimina el ultimo elemento del array, si no hay, devuelve undefined
lista.shift(); //elimina el primero elemento del array, si no hay, devuelve undefined

lista.splice(0,2);//elimina los elementos 0 dos veces si los encuentra

//elemento, indice, array con lambdas
lista.forEach((elemento, indice, array) => { console.log(elemento, indice);})

// una variable anidada, es un objeto con propiedades
let factura = {
    numero:201,
    cliente: 'Transportes'
}
console.log(factura);
console.log(factura.nombre);//con . puedes acceder a las variables anidadas

let tabla = Object.entries(factura); //crea un array multidimensional en el que cada elemento es un array de pares(campo y valor) 

let tabla2 = Object.values(factura); //muestra una array de los valores

let tabla3 = Object.getOwnPropertyNames(factura);//muestra una array de las propiedades


delete literal.cantidad; //delete sirve para borrar propiedades de objetos

Object.freeze(factura); //impide modificar los pares de datos del objeto

//== permite comparar string con numeros, porque hace la conversion al mismo tipo, 3 es igual a '3'
//=== no compara entre distintos tipos de datos, 3 no es igual a '3'