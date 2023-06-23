const readline = require('readline-sync');
let mes = parseInt(readline.question("Por favor ingrese un numero del 1 al 12:"))
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
if (mes >= 1 || mes <= 12) {
   switch (meses[mes-1]) {
    case "enero":
        console.log(`La cantidad de días del mes de ${meses[mes-1]} es 31`)
        break;
    case "febrero":
        console.log(`La cantidad de días del mes de ${meses[mes-1]} es 28`)
        break; 
    case "marzo":
        console.log(`La cantidad de días del mes de ${meses[mes-1]} es 31`)
        break;
    case "abril":
        console.log(`La cantidad de días del mes de ${meses[mes-1]} es 30`)
        break;
    case "mayo":
        console.log(`La cantidad de días del mes de ${meses[mes-1]} es 31`)
        break;
    case "junio":
        console.log(`La cantidad de días del mes de ${meses[mes-1]} es 30`)
        break;  
    case "julio":
        console.log(`La cantidad de días del mes de ${meses[mes-1]} es 31`)
        break;
    case "agosto":
        console.log(`La cantidad de días del mes de ${meses[mes-1]} es 31`)
        break; 
    case "septiembre":
        console.log(`La cantidad de días del mes de ${meses[mes-1]} es 30`)
        break;
    case "octubre":
        console.log(`La cantidad de días del mes de ${meses[mes-1]} es 31`)
        break;
    case "noviembre":
        console.log(`La cantidad de días del mes de ${meses[mes-1]} es 30`)
        break;
    case "diciembre":
        console.log(`La cantidad de días del mes de ${meses[mes-1]} es 31`)
        break;
   } 
}
