/**
 * 3.- Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta
 *     introducir un número negativo y ahí mostrar el resultado.
 */

function pideNumero(){

    let numero = prompt('introduce un numero mayor de 0')
    if (!isNaN(numero) || numero<=0 ){
        pideNumero();
    }    
    return numero;
}

let contador;
let sumaTotal;

let numero=pideNumero();
if (numero >0){
    sumatotal += numero;
    contador++;

}else{
    alert('la suma total de los numeros es: ' + sumaTotal +"\n" + 'la media de los numeros introducidos es: ' + (sumaTotal/contador));
}

