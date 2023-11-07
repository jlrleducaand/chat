//ejercicio1
let arreglo = [];

for (i = 0; i < 3; i++) {
  arreglo.push(pideNumero());
}

alert(arreglo);

//ejercicio2    AÑADE ELEMENTO AL FINAL
arreglo.push(4);

//ejercicio3   AÑADE ELEMENTO AL PRINCIPIO
arreglo.unshift(5);

//ejercicio4  MUESTRA EL ARRAY Y EL TAMAÑO DEL MISMO
alert("Array " + arreglo + "DE TAMAÑO " + arreglo.length);

//ejercicio 5  ELIMINAR O NO ELIMINAR POR INDICE
let continuar = true;

let indice = pedirIndiceValido(arreglo);
eliminarIndiceArray(arreglo, indice);

while (continuar) {
  let salir = prompt("¿quiere eliminar otro?  Y/N");
  if (salir.toLocaleUpperCase === "Y") {
    let indice = pedirIndiceValido(arreglo);
    eliminarIndiceArray(arreglo, indice);   
  }else{
    continuar = false;
  }
}

//ejercicio 6
let valor = prompt('introduce el valor "numerico" del arreglo a buscar');

if (arreglo.includes(+valor)){

    alert('la posicion del valor '+ valor +' es: '+ arreglo.indexOf(+valor));

}else{
    alert("El valor que ha pedido no se encuentra en el Array \n Good Bye")
}

//ejercicio 7
alert( "E arreglo se ha quedado como sigue: \n" + arreglo);
alert( "La longitud del arreglo es de: "+ arreglo.length);

//ejercicio 8 
//Entries()
let iterador = arreglo.entries();
let cadena = "";
for (let entrada of iterador){
    cadena += entrada+"\n";
}
alert("el Entries del arreglo es: \n" + cadena);
alert(arreglo);

//Every()
let sonNumeros = arreglo.every(function(elemento){
    return !isNaN(elemento);
});
alert("los elementos del arreglo son todos numeros: "+ sonNumeros);


//ejercicio 9  devuelve el array ordenado
alert("El array ordenado alfabeticamente es: \n" 
                + ordenaAlfabeticamente(arreglo));

//ejercicio 10 devuelve el array ordenado al contrario
alert("El array ordenado alfabeticamente inverso  es: \n" 
                + ordenaAlfabeticamenteinverso(arreglo));

//ejercicio 11 
alert("el Array desordenado es el siguiente:  " + _.shuffle(arreglo));