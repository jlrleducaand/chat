// Simbolos
    // ' '  y " " sirven para agrupar cadenas

    // ` ` la comilla invertidas podemos colocar el texto o la salida tal como queremos que salga

    // el simbolo $ sirve para escapar de la scomilla en las que estamos luego ponemos 



// variables
let a;                      // puede ser declarada dos veces pero en diferente scope/ambito
var b;                      // no puede ser declarada dos veces
const c = "inicializada";   // no puede variar en tipo pero si en contenido es decir el interior del elemento

// arrays 

// Funciones
    // funciones Declarativas
        function numeroAleatorio (min, max) {
            return Math.floor(Math.random() * (max-min))+min;
            // primero se declara y luego se invoca
        }

        console.log(numeroAleatorio(10, 100));

        // Funciones Expresadas o Anonimas
        const numAzar = function(min, max){
            return Math.floor(Math.random() * (max-min))+min;
            
        }
        
        console.log(numAzar(100,201));
