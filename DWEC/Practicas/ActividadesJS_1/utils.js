/**
 * 
 * @returns 
 */

function menu() {
  let opcion = prompt(
    "MENU \n\
        1.- Mayor, Menor, Iguales, Repetir\n\
        2.- Suma y Media hasta Negativo\n\
        3.- Numeros entre Limites\n\
        4.- Impares entre Limites\n\
        5.- Divisores de un numero\n\
        6.- ¿Par o Impar?\n\
        7.- Tabla de num\n\
        8.- Salir"
  );

  return +opcion;
}

function pideNumero() {
  let numero = prompt("introduce un numero mayor de 0");
  if (isNaN(numero) || +numero <= 0) {
    pideNumero();
  }
  return +numero;
}

function pideNumero2(){
  let numero = prompt("introduce un numero mayor de 0");
  if (isNaN(numero)) {
    pideNumero();
  }
  return +numero;
}

function numeroMayor(num1, num2) {
  let mayor;
  if (num1 > num2) {
    mayor = num1;
  } else if (num2 > num1) {
    mayor = num2;
  }
  return mayor;
}

function numeroMenor(num1, num2) {
  let menor;

  if (num1 < num2) {
    menor = num1;
  } else if (num2 < num1) {
    menor = num2;
  } 
  return menor;
}

function numerosIguales(num1, num2) {
  return num1 == num2;
}

function mayorMenorIguales() {
  let num1 = pideNumero();
  let num2 = pideNumero();

  if (numerosIguales(num1, num2)) {
    alert("los numeros introducidos son iguales");
  } else {
    let mayor = numeroMayor(num1, num2);
    alert("El numero mayor de los dos es: " + mayor);
    let menor = numeroMenor(num1, num2);
    alert("El numero menor de los dos es: " + menor);
  }
}

function sumaMedia() {
  let cont = 0;
  let sumaTotal = 0;
  let num1;
  let seguir = true;
  do {
    num1 = pideNumero2();
    if (num1 > 0) {
      cont++;
      sumaTotal += num1;
    } else {
      seguir = false;
      alert("el numero total de elementos introducido fue de: " + cont + "\n" + 
            "La media de los numeros introducidos fue de: " + (sumaTotal / cont) + "\n"+
            "La suma total de los numeros introducidos es: " + sumaTotal);
    }
  } while (seguir);
}

function numerosEntreLimites() {
    num1 = pideNumero();
    num2 = pideNumero();
    let menor = numeroMenor(num1, num2);
    let mayor = numeroMayor(num1, num2);
    let cadena = "";
    for (i= menor; i<= mayor; i++){
        cadena += (i+" ");
    }
    alert("los numeros entre los rangos son: \n " 
        + cadena);
}

function imparesEntreLimites() {
  let num1, num2;
  let todos = [];
  let impares = [];
  let longTodos; // SOLO LLEVA EL SIZE
  let longImpar; // SOLO LLEVA EL SIZE

  num1 = pideNumero();
  num2 = pideNumero();

  let menor = numeroMenor(num1, num2);
  let mayor = numeroMayor(num1, num2);

  for (i = menor; i <= mayor; i++) {
    longTodos = todos.push(i);
    if (i%2 != 0) {
      longImpar = impares.push(i);
    }
  }

  alert("los numeros impares entre los limites son: \n" + String(impares));
}

function divisores() {
  let num = pideNumero();
  let numeros = [];
  let cont = 0;


  for (i = num - 1; i > 0; i--) {
    if (num % i == 0) {
      numeros.push(i);
    }
  }
  alert("Los divisiores de: " + num + " son los siguientes:\n" 
   + String(numeros));

}

function parImpar() {
  let numero = pideNumero();
  if (numero % 2 == 0) {
    alert("El numero " + numero + " ES PAR");
  } else {
    alert("El numero " + numero + " ES IMPAR");
  }
}

function tablaMultiplicar() {
  let cadena = "";
  let num = pideNumero();
  for (i = 1; i <= 10; i++) {
    cadena +=(num + " x " + i + " = " + num * i + "\n");
  }

  alert(cadena);
}
