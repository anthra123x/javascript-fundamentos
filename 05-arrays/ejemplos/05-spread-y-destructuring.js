/**
 * EJEMPLO 05 — Spread y destructuring
 *
 * Ejecuta con:  node 05-arrays/ejemplos/05-spread-y-destructuring.js
 *
 * 🔮 PREDICE: ¿qué contiene `copia`? ¿Es la misma array o una distinta?
 * ¿Qué imprime el destructuring?
 */

console.log('=== Spread [...arr] para copiar ===');
const original = [1, 2, 3];
const copia = [...original]; // copia TODOS los elementos en un array NUEVO
console.log('Original:', original);
console.log('Copia:', copia);
console.log('¿Son la misma referencia?', original === copia); // false

// Si modificamos la copia, el original NO cambia
copia.push(4);
console.log('Copia después de push(4):', copia);
console.log('Original intacto:', original);

console.log('\n=== Spread para combinar arrays ===');
const frutas = ['manzana', 'pera'];
const verduras = ['zanahoria', 'lechuga'];
const comida = [...frutas, ...verduras];
console.log('Combinado:', comida);

const encabezado = ['inicio', ...frutas, 'fin'];
console.log('Con elementos alrededor:', encabezado);

console.log('\n=== Destructuring: desempaquetar en variables ===');
const colores = ['rojo', 'verde', 'azul'];
const [primero, segundo] = colores;
console.log('primero:', primero, '| segundo:', segundo);

// Saltear posiciones con comas
const [, elSegundo] = colores;
console.log('Solo el segundo:', elSegundo);

// Destructuring + rest
const [primerColor, ...resto] = colores;
console.log('primerColor:', primerColor, '| resto:', resto);

console.log('\n=== Swap (intercambio) con arrays ===');
let a = 1;
let b = 2;
[a, b] = [b, a]; // ¡intercambio en una línea!
console.log('Después del swap — a:', a, '| b:', b);