/**
 * EJEMPLO 02 — Expresión de función vs Arrow function
 *
 * Ejecuta con:  node 04-funciones/ejemplos/02-expresion-y-arrow.js
 *
 * 🔮 PREDICE: ¿qué imprime cada console.log? ¿Hay alguna diferencia visible
 * en el resultado?
 */

console.log('=== Expresión de función vs Arrow function ===');

// 1) Declaración clásica (ya la viste en el ejemplo 01)
function duplicar(numero) {
  return numero * 2;
}

// 2) Expresión de función: la función se guarda en una variable
//    IMPORTANTE: las expresiones NO sufren hoisting completo (se comportan
//    como variables: no podés llamarlas antes de su línea).
const triplicar = function (numero) {
  return numero * 3;
};

// 3) Arrow function con cuerpo explícito (llaves + return)
const cuadruplicar = (numero) => {
  return numero * 4;
};

// 4) Arrow function con retorno implícito (sin llaves ni return)
//    Solo sirve cuando la función devuelve una sola expresión.
const quintuplicar = (numero) => numero * 5;

console.log('duplicar(7):', duplicar(7));
console.log('triplicar(7):', triplicar(7));
console.log('cuadruplicar(7):', cuadruplicar(7));
console.log('quintuplicar(7):', quintuplicar(7));

// Todas son funciones: se pueden guardar en un array y recorrer
const funciones = [duplicar, triplicar, cuadruplicar, quintuplicar];
const numeros = [1, 3, 5, 7];

console.log('\nRecorriendo un array con las funciones:');
numeros.forEach((num) => {
  console.log(`Número ${num} →`, funciones.map((fn) => fn(num)));
});

// Las arrows inline también pueden pasarse directamente como argumento
console.log('\nArrow inline:', [1, 2, 3].map((n) => n * 10));