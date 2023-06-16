let a=11
let b=11
let c=4
let d=2
let suma=a+b
let resta=c-d
let resultadoFinal=suma*resta

function funcionEsPar(resultadoFinal){
    return resultadoFinal%2===0
}

let esPar=funcionEsPar(resultadoFinal);

console.log("Mis variables iniciales fueron:"+" "+a+","+b+","+c+","+d+".")
console.log("La respuesta a verificar si el resultado final es par es:"+" "+esPar)
