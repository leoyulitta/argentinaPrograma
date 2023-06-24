let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"]
let admitidos = []
let rechazados = []
for (let i = 0; i < personas.length; i++) {
    if (personas[i] == "Jose" || personas[i] == "Sofia") {
        rechazados.push(personas[i])
    } else {
        admitidos.push(personas[i])
    }
}
console.log("Lista de invitados admitidos:")
for (let i = 0; i < admitidos.length; i++) {
    console.log(admitidos[i])
}
console.log("\n"+"Lista de invitados rechazados:")
for (let i = 0; i < rechazados.length; i++) {
    console.log(rechazados[i])
}
console.log("\n"+"Lista ordenada de invitados admitidos:")
admitidos.sort()
for (let i = 0; i < admitidos.length; i++) {
    console.log(admitidos[i])
}
console.log("\n"+"Lista ordenada de invitados rechazados:")
rechazados.sort()
for (let i = 0; i < rechazados.length; i++) {
    console.log(rechazados[i])
}
