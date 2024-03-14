function habilitarBoton(variableBoton, funcion) {
    variableBoton.addEventListener('click', funcion);
}

function deshabilitarBoton(variableBoton, funcion) {
    variableBoton.removeEventListener('click', funcion);
}

function creaBaraja() {                             // Bidimensional
    for (let i = 0; i < palos.length; i++) {        // Palos   "filas"
        for (let j = 0; j < valores.length; j++) {  // valores "columnas"
            carta = valores[j] + palos[i];
            cartasArray.push(carta);
        }
    }
}

function mezclaBaraja() {
    cartasArray = _.shuffle(cartasArray);
}

function escoge_6_Mezcladas() {
    for (let i = 0; i < 6; i++) {
        cartasEscogidas.push(cartasArray[i]);
    }
    cartasEscogidas = cartasEscogidas.concat(cartasEscogidas);
    cartasEscogidas = _.shuffle(cartasEscogidas);
}

function listenerCartas() {

    for (let i = 0; i < 12; i++) {
        let strC = "carta" + i;
        let zc = document.getElementById(strC);
        zc.addEventListener('click', () => verCarta(zc, i));
    }
    habilitarBoton(btnGuardarJuego, guardarEnLocalStorage);

}

function verCarta(zc, i) {
    if (zc.src.includes('red')) {
        if (numCarta == 2) {
            zc.src = "assets/img/cartas/" + cartasEscogidas[i] + ".png";
            carta_2 = zc;
            numCarta = 1;
            deshabilitarBoton(zc, () => verCarta(zc, i));
            compara_2_Cartas();

        } else {
            zc.src = "assets/img/cartas/" + cartasEscogidas[i] + ".png";
            carta_1 = zc;
            numCarta++;

            deshabilitarBoton(zc, () => verCarta(zc, i));
        }
    }
}

function compara_2_Cartas() {
    intentos++
    zIntentos.innerText = intentos;

    if (carta_1.src !== carta_2.src) {
        setTimeout(function (){
            ocultarCarta(carta_1);
            ocultarCarta(carta_2);
        },500);

    }else{
        contParejas++;
        guardarEnLocalStorage();
        carta_1 = null;
        carta_2 = null;
        if (contParejas == 6){
            habilitarBoton(btnNuevoJuego, inicioJuego())
        }
    }
}

function ocultarCarta(carta){
carta.src = "assets/img/cartas/red_back.png";
}

function guardarEnLocalStorage(){
    // Array con las imagenes del tablero
    let imagenesCartasTablero = document.querySelectorAll('#tablero img');
    // Mapa de img, str
    cartasTablero = Array.from(imagenesCartasTablero).map((img) => img.src);
    // Json de Cartas Tablero
    let cartasTableroJSON = JSON.stringify(cartasTablero);
    localStorage.setItem('cartasGuardadas', cartasTableroJSON);

    let score = document.getElementById('intentos').textContent;
    // Json de intentos
    localStorage.setItem('score', score);

    juegoIniciado = false;
}

function cargarDeLocalStorage(){
    let srcRecuperadoDeLocalStorageJSON = localStorage.getItem('cartasGuardadas');
    if (srcRecuperadoDeLocalStorageJSON){
        //cartasTablero o let srcsDelasCartasRecuperadas
        let srcsDelasCartasRecuperadas = JSON.parse(srcRecuperadoDeLocalStorageJSON);
        srcsDelasCartasRecuperadas.forEach((src, index) => {
            let img = document.querySelector(`#carta${index}`);
            if (img) {
                let ind = img.src.indexOf("assets");
                img.src = src.slice(ind);
            }
        });
        let scoreRecuperadoDeLocalStorageJSON = localStorage.getItem('score');
        let valor = scoreRecuperadoDeLocalStorageJSON;
        zIntentos.innerText = valor;
        intentos = parseInt(valor);
    }
    juegoIniciado = true;
}

function borrarDeLocalStorage(){
    localStorage.clear();
}

function cuentaParejas(array){
    let noRojas = 0;
    let parejas = 0;
    for (let i = 0; i < array.size ; i++) {
        if (!cartasTablero[i].src.includes('red')){
            noRojas++;
        }
    }
    return parejas = noRojas/2;
}


function reseteaVariables() {
    juegoIniciado = true;
    deshabilitarBoton(btnNuevoJuego, nuevoJuego);
    habilitarBoton(btnCargarJuego, cargarDeLocalStorage);
    habilitarBoton(btnGuardarJuego, guardarEnLocalStorage);

    contParejas = cuentaParejas(cartasTablero);
    //borrarDeLocalStorage();

    if(contParejas < 6 ){
        deshabilitarBoton(btnCargarJuego, cargarDeLocalStorage);
        habilitarBoton(btnGuardarJuego, guardarEnLocalStorage);
    }
}

function nuevoJuego() {
    //borrarDeLocalStorage();
    // console.log(CREA BARAJA);
    creaBaraja();
    //console.log(MEZCLA BARAJA);
    mezclaBaraja();
    //console.log(ESCOGE 6 MEZCLADAS);
    escoge_6_Mezcladas();
    //console.log(DESPIERTA LOS BOTONES);
    listenerCartas();
    //console.log(RESETEA VARIABLES);
    reseteaVariables();
    

}
