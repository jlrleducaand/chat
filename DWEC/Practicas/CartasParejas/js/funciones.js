function habilitarBoton(variableBoton, funcion){
    variableBoton.addEventListener('click', funcion);
}

function deshabilitarBoton(variableBoton, funcion){
    variableBoton.removeEventListener('click', funcion);
}

function delay(texto) {
    // mostrara una alerta despues de 500mlsegundos
    setTimeout(() => alert(texto), 500);
}

unction readLocalScore(){

    // forma de dar valores estilo booleana:  o vales lo que haya si hay  o vales 0
    const scoresStoraged = localStorage.getItem('scores')||"0";   //Map lee
    const scoresJson = JSON.parse(scoresStoraged);       //Parsea la cadena a Json para leerlo
    const mapScores = new Map(Object.entries(scoresJson));  //Map carga

    if (mapScores.size === 0) {
        // Establecer los marcadores a cero si no hay datos de otras partidas
        mapScores.set("Jugador", 0);
        mapScores.set("Compu", 0);
    }
    creaZonaLocalStorageLimpia();

    // Repintado / Machaca el marcador
    // Iterar sobre los elementos del Map usando map() para rellenar la zona con los marcadores
    mapScores.forEach((value, key) => {
        // Crear un elemento h2 para cada marcador
        const h4Element = document.createElement('h4');
        h4Element.textContent = `Partidas Ganadas por ${key}: ${value}`;

        // Agregar el elemento h2 al div creado anteriormente
        zonaScore.append(h4Element);

    });
    scores = mapScores;   // iguala la variable map scores al localStorages
}

function updateToScore(player, points) {
    //actualizamos score de player
    if (scores.has(player)) {
        let currentScore = scores.get(player);
        scores.set(player, currentScore + points);
    } else {
        scores.set(player, points);
    }
    // Registra los nuevos datos en localStorage
    const scoreObj = Object.fromEntries(scores);    //Mapea Map Player points
    const scoreJson = JSON.stringify(scoreObj);     //Json  to String
    localStorage.setItem('scores', scoreJson);      //Graba variable  valor

    // Lee y Pinta los datos de localStorage.
    readLocalScore();
}



function resetProcesosVariables() {
    texto = "";
    valor = 0;
    jugandoEn = "zonaJugador";
    zonaJugador.innerHTML = "";
    console.log("Borrado cartas jugador")
    zonaCompu.innerHTML = "";
    console.log("Borrado cartas Compu")
    valorContPuntosJug = 0;
    zContJug.textContent = valorContPuntosJug;
    valorContPuntosCompu = 0;
    zContCompu.textContent = valorContPuntosCompu;
    cartaSobreMesa = false;
}

function despiertaBotones() {
    habilitarBoton(vBtnPedirCarta, pedirCartaNueva);
    deshabilitarBoton(vBtnNewScore, newScoreZERO);
    deshabilitarBoton(vBtnNuevoJuego, nuevoJuego);
    deshabilitarBoton(vBtnDetener, detenerJugador);

    //console.log(Botones Despertados);
}

function creaZonaLocalStorageLimpia(){
    zonaScore.id = 'localScore';  //
    zonaBTNS.append(zonaScore);
    zonaScore.innerHTML = '';    // Limpia la zona divScore de localStorage
}

function newScoreZERO(){
    // despues de borrar el score se puede iniciar otro contador
    scores.clear();
    const mapScore = Object.fromEntries(scores); //transforma una lista o Array de Arrays(clave, Valor) en un Objeto
    const scoresStr = JSON.stringify(mapScore); //convierte un objeto o valor de JavaScript en una cadena de texto JSON
    //Esto es necesario porque localStorage solo puede almacenar cadenas de texto.
    //por lo que debes convertirlos a una cadena de texto en formato JSON usando JSON.stringify().
    localStorage.setItem('scores', scoresStr);  //Graba una key y un value convertido en String
    console.log('localStorage puesta a cero');

    deshabilitarBoton(vBtnNewScore, newScoreZERO);
    readLocalScore();
}

function creaBaraja() {                             // Bidimensional
    for (let i = 0; i < palos.length; i++) {        // Palos   "filas"
        for (let j = 0; j < valores.length; j++) {  // Valores "columnas"
            carta = figuras[j] + palos[i];
            cartasArray.push(carta);
        }
    }
}

function mezclaBaraja(){
    cartasArray = _.shuffle(cartasArray);
}

function escoge_6_Mezcladas(){
    for (let i = 0; i < 6; i++) {
        cartasEscogidas.push(cartasArray[i]);
    }
    cartasEscogidas = cartasEscogidas.concat(cartasEscogidas);
    cartasEscogidas = _.shuffle(cartasEscogidas);
}

function listenerCartas(){

    for (let i = 0; i < 12 ; i++) {
        let c = "carta"+i;
        c = document.getElementById(c);
        c.addEventListener('click', () => volteaCarta(c, i))
    }

}

function volteaCarta(c, i){
c.src = "asset/img/cartas/" + cartasEscogidas[i]+"png";
}

f

function nuevoJuego() {
    // console.log(CREA BARAJA);
    creaBaraja();
    //console.log(MEZCLA BARAJA);
    mezclaBaraja();
    //console.log(RESETEA PROCESOS Y VARIABLES)
    resetProcesosVariables();
    //console.log(DESPIERTA LOS BOTONES)
    despiertaBotones();
}

function inicioJuego(){
    creaBaraja();
    mezclaBaraja();
    escoge_6_Mezcladas();
    listenerCartas();

}


