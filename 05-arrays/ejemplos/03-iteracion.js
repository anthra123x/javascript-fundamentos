/**
 * EJEMPLO 03 — Iteración: for, for...of y forEach
 *
 * Ejecuta con:  node 05-arrays/ejemplos/03-iteracion.js
 *
 * 🔮 PREDICE: ¿cuántas veces se ejecuta cada bucle? ¿Qué imprime cada uno?
 */

console.log('=== for clásico (con índice) ===');
const colores = ['rojo', 'verde', 'azul'];
for (let i = 0; i < colores.length; i++) {
  console.log(`Color en posición ${i}: ${colores[i]}`);
}

console.log('\n=== for...of (elemento directo) ===');
for (const color of colores) {
  console.log('Color:', color);
}

console.log('\n=== forEach (función callback) ===');
colores.forEach((color, indice) => {
  console.log(`Índice ${indice}: ${color}`);
});

console.log('\n=== forEach con un solo parámetro ===');
colores.forEach((color) => console.log('Solo el valor:', color));

console.log('\n=== for...of con números y suma ===');
const numeros = [5, 10, 15];
let suma = 0;
for (const numero of numeros) {
  suma += numero;
}
console.log('Suma de los números:', suma);