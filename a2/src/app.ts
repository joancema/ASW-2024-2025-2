import { operacionCallback } from './ejemplos'

operacionCallback(2, 3, (a, b) => a + b, (resultado) => {
    console.log(resultado); // 5
})



// import { estudiantes } from './ejemplos'
// console.log(estudiantes);

// import { nombreEstudiante, operacionMatematica } from './ejemplos'
//  console.log( operacionMatematica({a: 1, b: 2, operador: '+'}))

// import { nombreEstudiante } from './ejemplos/ejemplo1'
// console.log(nombreEstudiante); // Juan

