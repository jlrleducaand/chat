// VARIABLES
let contadorFil = 2;  // el sitio web contendra un numero de filas indeterminados filas
// comenzamos en fila 2  la fila 1 es para las cabeceras dispuestas en el html
let filas = document.getElementById('filas');
//  FUNCIONES
function createNewLine() {  // cuando Click sobre el boton creamos una nueva linea 
    // VARIABLES  GLOBALES 
    let nume1 = 0;          
    let nume2 = 0;
    let contadorCol = 1;    // cada fila contendra un numero de campos determinados (4 MAX)

        const numestr = pideNumero();  // almacenamos el numero tras su verificacion por funcion  pideNumero()

        // Campo 1
        if (contadorCol === 1) {
            let columna = "f" + contadorFil + "col" + contadorCol; // formacion de la cadena id 
            const celda1 = document.createElement("div"); // crea elemento que contendra el Campo
            celda1.id = columna;            // seteamos el atributo id a celda2            
            celda1.className = "col-2  p-2 text-center ";// seteamos el atributo clases  de celda2
            celda1.innerText = numestr;     // seteamos el contenido de celda2
            filas.appendChild(celda1);  // inserta el codigo en Dom

            nume1 = +numestr;   // paso a numérico
            contadorCol++;      // siguiente columna

        // Campo 2
        }else if (contadorCol === 2) {   // comportamiento diferente y excluyente de cotadorCol === 1 -> else if
            let columna = "f" + contadorFil + "col" + contadorCol; // formacion de la cadena id
            const celda2 = document.createElement("div"); // crea elemento que contendra el Campo
            celda2.id = columna;            // seteamos el atributo id a celda2
            celda2.className = "col-2  p-2 text-center";// seteamos el atributo clases  de celda2
            celda2.innerText = numestr;     // seteamos el contenido de celda2
            filas.appendChild(celda2);  // inserta el codigo en Dom

            nume2 = +numestr2;   // paso a numérico
            contadorCol++;      // siguiente columna

            // Campo 3   no pasamos este if  hasta que hemos pasado por el Campo 2 por eso va dentro de él anidado
            if (contadorCol === 3) {  // condicion de paso
                const mayor = nume1 + " es mayor que " + nume2;
                const menor = nume1 + " es menor que " + nume2;
                const igual = nume1 + " es igual que " + nume2;
                const res = [mayor, menor, igual];   // Array de resultados 

                let columna = "f" + contadorFil + "col" + contadorCol;  // formacion de la cadena id
                const resultadoOperacion =                              // logica de resultado texto
                    nume1 > nume2 ? res[0] : nume1 < nume2 ? res[1] : res[2];

                const resultadoCasilla = document.createElement("div"); // crea Casilla Campo en la misma linea Padre
                resultadoCasilla.id = columna;                          // Seteo al id del nuevo campo
                resultadoCasilla.className = "col-6  p-2 text-center";  // seteo de las clases del campo
                resultadoCasilla.innerText = resultadoOperacion;        // introduccion del valor calculado     
                filas.appendChild(resultadoCasilla); // inserta el codigo en Dom 

                contadorCol++;  // siguiente columna
            }

            if (contadorCol === 4) { // comportamiento común agregado
                const check = '<i class="fas fa-check"></i>';
                const crux = '<i class="fas fa-times"></i>';
                const equal = '<i class="fas fa-equals"></i>';
                const imagenes = [check, crux, equal];  // Array de simbolos de resultados

                let columna = "f" + contadorFil + "col" + contadorCol;  // formacion de la cadena id
                const resultadoImagen =                                 // logica de resultado imagen
                    nume1 > nume2 ? imagenes[0] : nume1 < nume2 ? imagenes[1] : imagenes[2];

                const imagenCasilla = document.createElement("div");// crea Casilla Campo
                imagenCasilla.id = columna;                         // Seteo al id del nuevo campo   
                imagenCasilla.className = "col-2  p-2 text-center"; // seteo de las clases del campo
                imagenCasilla.innerHTML = resultadoImagen;          // introduccion de la imagen asignada al calculo     
                filas.appendChild(imagenCasilla); // inserta el codigo en Dom

                contadorFil++;      // siguiente fila
                resetVariables();
            }
    }    


    //return boton_click; //  se devuelve y se asigna nuevamente como manejador de eventos para el botón,

     
}
function borrarFilas(){ 

    filas.innerHTML = '';

}
 
function resetVariables() {
    nume1 = 0;
    nume2 = 0;
    contadorCol = 1;
}

function pideNumero() {
    const numero = prompt("Introduce un número mayor de 0");
    if (isNaN(numero) || +numero <= 0) {
        return pideNumero();
    }
    return numero;
}

// LOGIC
const boton = document.getElementById("pide_numero");
const botonBorrar = document.getElementById('borrar_filas')

boton.addEventListener("click", createNewLine); // Boton en escucha
borrar_filas.addEventListener('click', borrarFilas ); 