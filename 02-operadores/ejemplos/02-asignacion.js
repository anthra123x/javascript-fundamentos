/**
 * EJEMPLO 02 — Operadores de asignación
 *
 * Ejecuta con:  node 02-operadores/ejemplos/02-asignacion.js
 *
 * 🔮 PREDICE: antes de correr, anotá en papel qué imprime cada console.log.
 */

// El operador = asigna un valor a una variable.
let puntaje = 100;
console.log('puntaje inicial:', puntaje);

// +=  suma y asigna en un solo paso
puntaje += 50; // lo mismo que: puntaje = puntaje + 50
console.log('puntaje += 50 →', puntaje); // 150

// -=  resta y asigna
puntaje -= 20; // lo mismo que: puntaje = puntaje - 20
console.log('puntaje -= 20 →', puntaje); // 130

// *=  multiplica y asigna
puntaje *= 2; // lo mismo que: puntaje = puntaje * 2
console.log('puntaje *= 2 →', puntaje); // 260

// /=  divide y asigna
puntaje /= 4; // lo mismo que: puntaje = puntaje / 4
console.log('puntaje /= 4 →', puntaje); // 65

// %=  guarda el resto de dividir y asigna
let resto = 10;
resto %= 3; // lo mismo que: resto = resto % 3
console.log('resto %= 3 →', resto); // 1

// **=  eleva a una potencia y asigna
let potencia = 2;
potencia **= 5; // lo mismo que: potencia = potencia ** 5
console.log('potencia **= 5 →', potencia); // 32

// 💡 Tip: += es el más usado: sirve para acumular resultados en bucles.
let suma = 0;
suma += 1; // suma = 1
suma += 2; // suma = 3
suma += 3; // suma = 6
console.log('acumulando con +=:', suma); // 6