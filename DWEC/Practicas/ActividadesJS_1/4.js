export function pideNumero(){

    let numero = prompt('introduce un numero mayor de 0')
    if (!isNaN(numero) || numero<=0 ){
        pideNumero();
    }    
    return numero;
}

export function numeroMayor(num1, num2){
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

export function numeroMenor(num1, num2){
    let menor;
    
    if (num1<num2){
       menor = num1;
    }else if(num2<num1){
        menor = num2;
    }else{
        
    }

    return menor;
}

export function numerosIguales(num1, num2){
    return num1 == num2;
}

export function menu(){

    let opcion = prompt('MENU \n\
        1.- Mayor, Menor, Iguales\n\
        2.- Mayor, Menor, Iguales, Repetir\n\
        3.- Suma y Media hasta Negativo\n\
        4.- Numeros entre Limites\n\
        5.- Impares entre Limites\n\
        6.- Divisores de un numero\n\
        7.- ¿Par o Impar?\n\
        8.- Tabla de num\n');

        return opcion;

}

export function sumaMedia(){
    let cont = 0;
    let sumaTotal = 0;
    
    let num1 = pideNumero();
    if (num1 > 0){
        cont++;
        sumaTotal += num1;
    }else{
        console.log('el numero total de elementos introducido fue de: '+ cont);
        console.log('La media de los numeros introducidos fue de ' + (sumaTotal/cont));
    }


}