let cartasArray = [];
let cartasEscogidas = [];
let cartasTablero = [];

let zIntentos = document.getElementById('intentos');
const btnNuevoJuego = document.getElementById('nuevoJuego');
const btnGuardarJuego = document.getElementById('guardaJuego');
const btnCargarJuego = document.getElementById('cargaJuego');
let contParejas = 0;

let juegoIniciado = false;
let intentos = 0;
const palos = ["C", "D", "H", "S"];
const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let numCarta = 1;
let carta_1 = null;
let carta_2 = null;


nuevoJuego();
