/*process.argv.forEach((index, value) => {
    console.log(`${index} : ${value}`);
});
const colors = [`Blue`,`Yellow`,];
console.table(colors);


const name = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout,
});*/

const codigo = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout,
});

codigo.question("Cual es tu codigo de Estudiante: ", codigo=>{
    console.log(`Bienvenido Estudiante: ${codigo}`);
});