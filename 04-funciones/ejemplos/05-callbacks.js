/**
 * EJEMPLO 05 — Callbacks: funciones como argumentos
 *
 * Ejecuta con:  node 04-funciones/ejemplos/05-callbacks.js
 *
 * 🔮 PREDICE: ¿qué imprime cada console.log? ¿Qué función se "inyecta" en
 * cada llamada de `aplicar`?
 */

console.log('=== Callbacks ===');

// Operaciones básicas (funciones normales)
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

// `aplicar` recibe una FUNCIÓN como tercer parámetro (callback)
// y la invoca con (a, b). No le importa QUÉ hace: solo la ejecuta.
function aplicar(a, b, operacion) {
  return operacion(a, b);
}

console.log('aplicar(5, 2, sumar):', aplicar(5, 2, sumar));
console.log('aplicar(5, 2, restar):', aplicar(5, 2, restar));

// Podemos pasar una arrow function INLINE, sin nombrarla
console.log('aplicar(5, 2, arrow async):', aplicar(5, 2, (a, b) => a * b));
console.log('aplicar(5, 2, arrow potencia):', aplicar(5, 2, (a, b) => a ** b));

console.log('\n=== forEach con callback ===');

// forEach es un método de arrays que recibe un callback por cada elemento
const frutas = ['manzana', 'pera', 'uva'];

frutas.forEach((fruta, indice) => {
  console.log(`Índice ${indice}: ${fruta}`);
});

console.log('\n=== forEach con nombres de funciones ===');

// También podemos pasar una función declarada como callback
function mostrarFrutas(fruta) {
  console.log('Fruta:', fruta);
}

frutas.forEach(mostrarFrutas); // sin paréntesis: pasamos la función, no la llamamos