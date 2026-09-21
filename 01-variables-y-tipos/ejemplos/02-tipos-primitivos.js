/**
 * EJEMPLO 02 — Tipos primitivos
 *
 * Ejecuta con:  node 01-variables-y-tipos/ejemplos/02-tipos-primitivos.js
 *
 * 🔮 PREDICE: ¿qué imprime cada typeof?
 */

// number: números enteros y decimales
const entero = 42;
const decimal = 3.14;
console.log(typeof entero, entero);
console.log(typeof decimal, decimal);

// string: texto, con comillas simples, dobles o backticks (template literal)
const comillas = 'texto';
const dobles = "otro texto";
const plantilla = `valor: ${entero}`; // template literal: interpola variables
console.log(typeof comillas, comillas);
console.log(typeof plantilla, plantilla);

// boolean: verdadero o falso
const activo = true;
console.log(typeof activo, activo);

// null: "vacío" INTENCIONAL (lo pones vos)
const nulo = null;
console.log(typeof nulo, nulo); // ⚠️ typeof null === 'object' (bug histórico)

// undefined: "nunca se asignó valor"
let indefinido;
console.log(typeof indefinido, indefinido);

// bigint: números muy grandes
const grande = 9007199254740991n;
console.log(typeof grande, grande);

// symbol: identificadores únicos
const id = Symbol('id');
console.log(typeof id);