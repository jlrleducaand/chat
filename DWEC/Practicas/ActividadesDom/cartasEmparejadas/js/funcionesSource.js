

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

function delay(texto) {
    // mostrara una alerta despues de 500mlsegundos
    setTimeout(() => alert(texto), 500);
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

//Zonas de Arrays para leer y cargar en el DOM
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

function creaZonaLocalStorageLimpia(){
    zonaScore.id = 'localScore';  //
    zonaBTNS.append(zonaScore);
    zonaScore.innerHTML = '';    // Limpia la zona divScore de localStorage
}

function readLocalScore(){

    // forma de dar valores estilo booleana:  o vales lo que haya si hay  o vales 0
    const scoresStoraged = localStorage.getItem('scores')||"0";   //Map lee
    const scoresJson = JSON.parse(scoresStoraged);       //Parsea la cadena a Json para leerlo
    const mapScores = new Map(Object.entries(scoresJson));  //Map lee JSON y carga en la variable

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

// contadores de valor + suma
function registrarFallo() {
    // Obtener el número actual de fallos desde localStorage y convertirlo a entero
    let numeroDeFallos = parseInt(localStorage.getItem('numeroDeFallos')) || 0;

    // Incrementar el contador de fallos
    numeroDeFallos++;

    // Guardar el nuevo número de fallos en localStorage
    localStorage.setItem('numeroDeFallos', numeroDeFallos.toString());
}

function obtenerNumeroDeFallos() {
    // Obtener el número de fallos desde localStorage y convertirlo a entero
    let numeroDeFallos = parseInt(localStorage.getItem('numeroDeFallos')) || 0;
    return numeroDeFallos;
}

// Ejemplo de cómo mostrar el número de fallos
console.log('Número de fallos:', obtenerNumeroDeFallos());

function reiniciarContadorDeFallos() {
    // Reiniciar el contador de fallos a 0
    localStorage.setItem('numeroDeFallos', '0');
}


function inicio(){
    habilitarBoton(vBtnNuevoJuego, nuevoJuego);
    habilitarBoton(vBtnNewScore,newScoreZERO);
    salidaNavegador(window, handleBeforeUnload);
    readLocalScore();
}

function handleBeforeUnload(){
    // podria haber puesto directamente  updateToScore()  pero asi queda mas legible
    if(cartaSobreMesa == true)guardarVictoriaComputadora();
}


// FETCH en URL peliculas
fetch(baseURL + "peliculas").then( resp => {

    // Verificar si la solicitud fue exitosa (código de estado 200)
    if (resp.status == 200) {

        // Leemos las peliculas del json
        resp.json().then(data => {

            // Para cada una de las peliculas del json
            for(let p of data) {

                // Creamos li e introducimos los nombres en los enlaces
                let nuevoLi = document.createElement('li');
                nuevoLi.innerHTML = '<a href="#" class="pelicula">'+p.nombre+'</a>';

                // Evento para cuando se pulse en un link
                nuevoLi.addEventListener('click', async () => {

                    // Mostrar mensaje de carga y ocultar película anterior
                    divCargando.classList.remove('oculto');
                    divInfo.classList.add('oculto');

                    // Esperamos que la función fetchSlow se resuelva
                    await buscarPelicula(p.id);
                })

                // Lo cargamos en el html
                listadoPeliculas.appendChild(nuevoLi);
            }
            console.log("fetch1 leído");
        })

    } else {
        // Si no encuentra, null
        pelicula = null;
        console.log("La película no existe");
    }
}).catch (error => console.log("fetch1 error:" + error));


/**
 * Busca información de una película y la muestra en la interfaz.
 * @param {number} id - El ID de la película a buscar.
 * @returns {Promise<void>} - La Promesa que se resolverá cuando la búsqueda y la actualización de la interfaz estén completas.
 */
async function buscarPelicula(id) {

    // Modificamos texto, en caso de que se haya buscado anteriormente un id inexistente
    divCargando.innerText = "CARGANDO...";

    fetchSlow(baseURL + "pelicula/" + id).then(resp => {

        if (resp.status == 200) {

            resp.json().then(pelicula =>{

                // == ACTUALIZAMOS VALORES ==
                director.innerText = pelicula.director;

                buscarClasificacion(pelicula.clasificacion, function (nombreClasificacion) {
                    clasificacion.innerText = nombreClasificacion;
                })

                // Limpiamos el número de estrellas al consultar una nueva película
                estrellas.innerHTML = "";

                // Iteramos según número de valoración en json
                for (let index = 1; index <= pelicula.valoracion; index++) {
                    estrellas.innerHTML += '<i class="fa fa-star"></i>';
                }

                cartel.src = "assets/imgs/"+pelicula.cartel;

                // Ocultamos mensaje de carga y mostrar información
                divCargando.classList.add('oculto');
                divInfo.classList.remove('oculto');

                console.log("fetch2 leído");
            })

        } else {
            divCargando.innerText = "ERROR: La película no existe..."
            pelicula = null;
            console.log("La película no existe");
        }
    }).catch ( error => {
        console.log("fetch2 error:" + error);
        divCargando.innerText = "ERROR: No hay comunicación con el servidor";
    });
}


/**
 * Busca la clasificación de una película y ejecuta una devolución de llamada con el resultado.
 * @param {number} id - El ID de la clasificación a buscar.
 * @param {function} callback - La función de devolución de llamada que se ejecutará con el resultado.
 * @returns {void}
 */
function buscarClasificacion(id, callback) {

    fetch(baseURL+"clasificaciones/"+id).then(resp =>{

        if(resp.status == 200) {

            resp.json().then(clasificacion => {
                // Ejecutar la devolución de llamada con el nombre de la clasificación
                callback(clasificacion.nombre);
            })

            console.log("fetch3 leído");

        } else {
            // Si la clasificación no existe, llamamos a la devolución de llamada con un valor predeterminado
            callback("(Película sin clasificación)");
            console.log("La clasificación no existe");
        }

    }).catch ( error => console.log("fetch3 error:" + error));

}