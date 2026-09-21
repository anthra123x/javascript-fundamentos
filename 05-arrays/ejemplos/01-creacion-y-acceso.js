/**
 * EJEMPLO 01 — Creación y acceso a arrays
 *
 * Ejecuta con:  node 05-arrays/ejemplos/01-creacion-y-acceso.js
 *
 * 🔮 PREDICE: ¿qué imprime cada console.log? ¿Qué devuelve frutas[3]?
 */

console.log('=== Creación y acceso ===');

// Crear un array con corchetes
const frutas = ['manzana', 'pera', 'uva'];
console.log('Array completo:', frutas);
console.log('Cantidad de elementos (length):', frutas.length);

// Acceso por índice (¡empieza en 0!)
console.log('Primer elemento (índice 0):', frutas[0]);
console.log('Segundo elemento (índice 1):', frutas[1]);
console.log('Último elemento (length - 1):', frutas[frutas.length - 1]);

// Acceder a una posición que NO existe: undefined (sin error)
console.log('Posición 9 (no existe):', frutas[9]);

// Modificar un elemento existente
frutas[1] = 'naranja';
console.log('Después de cambiar frutas[1]:', frutas);

// Los arrays pueden contener tipos mezclados
const mezclado = ['texto', 42, true, null, [1, 2]];
console.log('Array mezclado:', mezclado);
console.log('Elemento 4 (un array adentro):', mezclado[4]);

// Array vacío
const arrayVacio = [];
console.log('Array vacío, length:', arrayVacio.length);