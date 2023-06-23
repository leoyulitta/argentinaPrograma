const readline = require('readline-sync');
let entero = parseInt(readline.question("Por favor ingrese un nro entero:"));
if (entero>0 && entero%2==0){
    console.log(`El numero ${entero} es positivo y par`)
}else if(entero>0 && entero%2 !==0){
    console.log(`El numero ${entero} es positivo e impar`)
}else if(entero<0){
    console.log(`El numero ${entero} es negativo`)
}else{
    console.log(`El numero ${entero} es cero`)
}
