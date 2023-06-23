const readline = require('readline-sync');
let dia = parseInt(readline.question("Por favor ingrese numero del 1 al 7:"))
switch (dia) {
    case 1:
        console.log("hoy es lunes")
        break;
    case 2:
        console.log("hoy es martes")
        break;
    case 3:
        console.log("hoy es miercoles")
        break;
    case 4:
        console.log("hoy es jueves")
        break;
    case 5:
        console.log("hoy es viernes")
        break;
    case 6:
        console.log("hoy es sabado")
        break;
    case 7:
        console.log("hoy es domingo")
        break;
    default:
        console.log("numero invalido")
        break;
}
