const readline = require('readline-sync');
let edad = parseInt(readline.question("Por favor ingrese su edad:"))
if (edad>=18) {
    console.log("Es mayor de edad")
}else{
    console.log("Es menor de edad")
}
