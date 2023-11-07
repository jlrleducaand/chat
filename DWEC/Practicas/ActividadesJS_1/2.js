/**
 * 2.- Mejora el ejercicio anterior. Si los números no son número o son menores o iguales a cero,
 *      nos los vuelva a pedir. Podéis utilizar la función isNaN aunque no es necesario.
 */

function pideNumero(){

    let numero = prompt('introduce un numero mayor de 0')
    if (!isNaN(numero) || numero<=0 ){
        pideNumero();
    }    
    return numero;
}

function numeroMayor(num1, num2){
    let mayor;
    if (num1>num2){
       mayor = num1;
    }else if(num2>num1){
        mayor = num2;
    }else{
        mayor = 'son iguales';
    }
    return mayor;
}

function numeroMenor(num1, num2){
    let menor;
    
    if (num1<num2){
       menor = num1;
    }else if(num2<num1){
        menor = num2;
    }else{
        
    }

    return menor;
}

function numerosIguales(num1, num2){
    return num1 == num2;
}

 let numero1 = pideNumero();
 let numero2 = pideNumero();

 if (!numeroMayor(numero1, numero2).isNaN){
    alert('el mayor de los numeros: '+ numero1 +"y" + numero2 + "es \n" + numeroMayor(numero1, numero2));
 }else {
    alert('los numeros: '+ numero1 +"y" + numero2 + "Son iguales");
 }

 if (!numeroMenor(numero1, numero2).isNaN){
    alert('el menor de los numeros: '+ numero1 +"y" + numero2 + "es \n" + numeroMenor(numero1, numero2));
 }else {
    alert('los numeros: '+ numero1 +"y" + numero2 + "Son iguales");
 }

    


