const readline = require('readline-sync');
let nro = parseInt(readline.question("Por favor ingrese un nro:"));
if(nro>0){
    console.log("El número es positivo")
}else if(nro<0){
    console.log("El número es negativo")
}else{
    console.log("El número es cero")
}
    
