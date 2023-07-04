const readline= require('readline-sync')

let jugadaPC
let jugadaUsuario
let Opciones=["piedra","papel","tijera"]

function obtenerJugadaComputadora() {
   let jugada=Math.floor(Math.random()*2.5)
    return jugada
}

function obtenerJugadaUsuario() {
  let  opcionUsuario=readline.question("ingrese piedra, papel o tijera :")
    if (opcionUsuario==="piedra" || opcionUsuario==="papel" || opcionUsuario==="tijera"){
        return opcionUsuario
    }else{
        console.log("opcion invalida")
    }
}

function determinarGanador(jugadaPc,jugadaUsuario) {
    let ganador
    if(jugadaUsuario===undefined){
        console.log("El usuario no ingreso una opcion valida")
    }else{
        if (Opciones[jugadaPc]===jugadaUsuario){
            console.log(`La computadora eligio: ${Opciones[jugadaPc]}`)
            console.log(`El usuario eligio: ${jugadaUsuario}`)
            console.log("El resultado es Empate")
        }else{
            if (Opciones[jugadaPc]==="piedra" && jugadaUsuario==="tijera" || 
                    Opciones[jugadaPc]==="papel" && jugadaUsuario==="piedra" || 
                        Opciones[jugadaPc]==="tijera" && jugadaUsuario==="papel"){
               ganador="Gana la computadora" 
            }else{
                ganador="Gana el usuario"
            }
            console.log(`La computadora eligio: ${Opciones[jugadaPc]}`)
            console.log(`El usuario eligio: ${jugadaUsuario}`)
            console.log(`El resultado es ${ganador}`)
        }
    }
}

jugadaPC=obtenerJugadaComputadora()
jugadaUsuario=obtenerJugadaUsuario()
determinarGanador(jugadaPC,jugadaUsuario)
