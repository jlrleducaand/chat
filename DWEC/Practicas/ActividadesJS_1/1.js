/**
 * Proyecto que pida dos números y que nos diga cual es mayor, menor o si son iguales.
 * Realizar el ejercicio con estructuras if y con el operador condicional ternario.
 */

let num1;
let num2;
let iguales = false;
let mayor;

console.log('introduce un numero1: ');
console.log('introduce un numero2: ');

if (num1>num2){
    mayor = num1;
    menor = num2;
    console.log('el mayor de los dos es: ' + mayor);
    console.log('el menor de los dos es: ' + menor);

}else if (num2>num1){
    mayor = num2;
    menor = num1;
    console.log('el mayor de los dos es: ' + mayor);
    console.log('el menor de los dos es: ' + menor);
}else{
    iguales=true;
    console.log('los numeros son iguales')
}
