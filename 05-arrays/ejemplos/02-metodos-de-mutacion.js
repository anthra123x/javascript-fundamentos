/**
 * EJEMPLO 02 — Métodos de mutación
 *
 * Ejecuta con:  node 05-arrays/ejemplos/02-metodos-de-mutacion.js
 *
 * 🔮 PREDICE: anotá el estado del array después de cada console.log.
 * Estos métodos SÍ modifican (mutan) el array original.
 */

console.log('=== push: agregar al final ===');
let numeros = [1, 2, 3];
console.log('ANTES:', numeros);
const largoPush = numeros.push(4); // push devuelve el nuevo length
console.log('DESPUÉS de push(4):', numeros, '| devuelve length:', largoPush);

console.log('\n=== pop: quitar del final ===');
const quitado = numeros.pop(); // pop devuelve el elemento quitado
console.log('DESPUÉS de pop():', numeros, '| elemento quitado:', quitado);

console.log('\n=== unshift: agregar al inicio ===');
numeros.unshift(0);
console.log('DESPUÉS de unshift(0):', numeros);

console.log('\n=== shift: quitar del inicio ===');
const quitadoDelInicio = numeros.shift();
console.log('DESPUÉS de shift():', numeros, '| elemento quitado:', quitadoDelInicio);

console.log('\n=== splice: quitar e insertar en el medio ===');
const letras = ['a', 'b', 'c', 'd', 'e'];
console.log('ANTES:', letras);
const borrados = letras.splice(1, 2); // desde índice 1, quitá 2 elementos
console.log('DESPUÉS de splice(1, 2):', letras, '| borrados:', borrados);

// splice también puede INSERTAR: (índice, 0 elementos a borrar, 'nuevo1', 'nuevo2')
letras.splice(2, 0, 'X', 'Y');
console.log('DESPUÉS de splice(2, 0, X, Y):', letras);

// splice para REEMPLAZAR: (índice, cuántos borra, qué inserta)
letras.splice(0, 1, 'Z');
console.log('DESPUÉS de splice(0, 1, Z):', letras);