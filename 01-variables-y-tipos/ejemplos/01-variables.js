/**
 * EJEMPLO 01 — Variables
 *
 * Ejecuta con:  node 01-variables-y-tipos/ejemplos/01-variables.js
 *
 * 🔮 PREDICE: ¿qué imprime cada console.log?
 */

// let: la variable puede cambiar de valor
let edad = 30;
edad = 31; // reasignar es válido
console.log('Edad actualizada:', edad);

// const: NO se puede reasignar
const nombre = 'Ana';
// nombre = 'Luis'; // ❌ TypeError: Assignment to constant variable
console.log('Nombre:', nombre);

// pero ojo: const NO significa "inmutable" (ya lo verás con arrays/objetos)
const colores = ['rojo'];
colores.push('azul'); // ✅ esto SÍ se puede
console.log('Colores:', colores);

// var: existe, pero es obsoleta. Preferí let/const.
var viejaEscuela = 'no la uses';
console.log('var:', viejaEscuela);

// convenciones de nombres
// camelCase      -> variables y funciones  (recomendado)
// UpperCamelCase -> clases
// SNAKE_CASE     -> constantes "de verdad" (ej: valores fijos)
const MAX_INTENTOS = 3;
let nombreCompleto = 'Ana Pérez';
console.log('Convención:', nombreCompleto, '- máximo:', MAX_INTENTOS);