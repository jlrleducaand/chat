/**
     *  1.- Mayor, Menor, Iguales, Repetir\n\
        2.- Suma y Media hasta Negativo\n\
        3.- Numeros entre Limites\n\
        4.- Impares entre Limites\n\
        5.- Divisores de un numero\n\
        6.- ¿Par o Impar?\n\
        7.- Tabla de num\n');
        8.- Salir
     */


let salir = false;
do {
  let opcion = menu();

  switch (opcion) {
    case 1:
      mayorMenorIguales();
      break;

    case 2:
      sumaMedia();
      break;

    case 3:
      numerosEntreLimites();
      break;

    case 4:
      imparesEntreLimites();
      break;

    case 5:
      divisores();
      break;

    case 6:
      parImpar();
      break;

    case 7:
      tablaMultiplicar();
      break;

    case 8:
      salir = true;
      break;
  }
} while (!salir);
