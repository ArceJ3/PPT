//capturamos los elementos del DOM en este caso los botones
let botonPiedra = document.querySelector('.piedra');
let botonPapel = document.querySelector('.papel');
let botonTijera = document.querySelector('.tijera');

let manoUsuario = document.querySelector('.mano-usuaria');
let manoComputador = document.querySelector('.mano-computadora');

let puntajeUsuario = document.querySelector('.puntaje-usuaria p');
let puntajeComputador = document.querySelector('.puntaje-computadora p');

let labelResultado = document.querySelector('.resultado');

let tablero = document.querySelector('.tablero');

let eleccionUsuario = "";
let eleccionComputador = "";

let contadorUsuario = 0;
let contadorComputador = 0;

botonPiedra.onclick =()=> {
    manoUsuario.src = "assets/piedra_user.png";
    manoComputador.src = "assets/piedra_computadora.png";
    labelResultado.textContent = '...';
    tablero.classList.add("jugando");
    setTimeout (()=>{
        eleccionUsuario =("piedra");
        manoUsuario.src = "assets/piedra_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando")
    }, 200);
}
botonPapel.onclick =()=> {
    manoUsuario.src = "assets/papel_user.png";
    manoComputador.src = "assets/papel_computadora.png";
    labelResultado.textContent = '...';
    tablero.classList.add("jugando");
    setTimeout (()=>{
        eleccionUsuario =("papel");
        manoUsuario.src = "assets/papel_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando")
    }, 200);
}
botonTijera.onclick =()=> {
    manoUsuario.src = "assets/tijera_user.png";
    manoComputador.src = "assets/tijera_computadora.png";
    labelResultado.textContent = '...';
    tablero.classList.add("jugando");
    setTimeout (()=>{
        eleccionUsuario =("tijera");
        manoUsuario.src = "assets/tijera_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando")
    }, 200);
}
Swal.fire(
    'Melo'
)