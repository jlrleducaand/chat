let numero=+prompt('introduzca un numero positivo: ');
let contador=0;
let sumatorio=0;


while(numero>=0){
    contador++;
    sumatorio+=numero;
    //actualizo condicion para evitar bucle infinito:
    numero=+prompt('introduzca un numero positivo: ');

}
let media= sumatorio/contador;


//INTRODUZCO EN EL HTML LOS DATOS
let sum=document.getElementById('sum');
sum.innerText=sumatorio;
let med=document.getElementById('med');
med.innerText=media;


//CREO FILA PARA BOTON
const filaBoton=document.createElement('div');
filaBoton.setAttribute('id','filaboton');
filaBoton.classList.add('row');
//CREO COLUMNA PARA BOTON
const elemBtn=document.createElement('div');
elemBtn.classList.add('col');

filaBoton.append(elemBtn);

//CREO BOTON:
let boton=document.createElement('button');
boton.classList.add('btn', 'btn-dark' );  //> le doy caracteristicas a la clase 
filaBoton.append(boton);
boton.innerText=' REPETIR ';

//SELECCIONO LUGAR DONDE IRA 
// const fila=document.querySelector('#fila1');
const fila=document.querySelector('#cabecera');
fila.append(filaBoton);//> lo añado

//CREO EL ELEM CONTAINER PARA AÑADIRLE LA FILA AL DOM
const container=document.querySelector('div');
//container.append(fila);
container.insertAdjacentElement('afterbegin',fila);


// peticionDatos=()=>{}
function click_Btn(){

    numero=+prompt('introduzca un numero positivo: ');
    while(numero>=0){
        contador++;
        sumatorio+=numero;
        //actualizo condicion para evitar bucle infinito:
        numero=+prompt('introduzca un numero positivo: ');
    
    }
    media= sumatorio/contador;

    //1-CREO EL ELEM DONDE IRA LA FILA(row)
    let newFila=document.createElement('div');
    newFila.setAttribute('id','filaNueva');
    newFila.classList.add('row');
    //2-CREO EL ELEM DONDE IRA EL col DE SUMATORIO:
    let nuevoSum=document.createElement('div');
    nuevoSum.classList.add('col');
    nuevoSum.innerHTML=sumatorio;
    //3-LOS FUSIONO
    newFila.append(nuevoSum);
    //IDEM CON MEDIA
    let nuevaMed=document.createElement('div');
    nuevaMed.classList.add('col');
    nuevaMed.innerText=media;
    newFila.append(nuevaMed);
    
    //4-LO METO EN EL DOM,PREVIA CREACION DEL ELEM Q LO CONTIENE:
    const contenedorNew=document.querySelector('div');
    contenedorNew.append(newFila);

}

//EVENTO PARA ASOCIAR EL CLICK DEL RATON CON LANZAMIENTO DE FUNCION
//boton.addEventListener('click',console.log("ha pulsado"));
boton.addEventListener('click',click_Btn);