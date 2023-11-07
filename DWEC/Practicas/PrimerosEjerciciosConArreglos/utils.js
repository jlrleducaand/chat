function pideNumero() {
  let numero = prompt("introduce un numero mayor de 0");
  if (isNaN(numero) || +numero <= 0) {
    numero = pideNumero();
  }
  return +numero;
}

function pedirIndiceValido(array) {
  let numero = prompt(
    "introduce un indice valido del array de 0 a longitud array" + array.length );
  if (isNaN(numero) || +numero > array.size || +numero < 0) {
    numero = pideNumero();
  } else {
  }
  return +numero;
}

function eliminarIndiceArray(array, indice) {
  if (indice >= 0 && indice < array.length) {
    array.splice(indice, 1);  
  }
}

function ordenaAlfabeticamente(array){

array.sort(function(a, b) {
    return a - b;
});
return array;
}

function ordenaAlfabeticamenteinverso(array){

  array.sort(function(a, b) {
      return b - a;
  });
  return array;
  }