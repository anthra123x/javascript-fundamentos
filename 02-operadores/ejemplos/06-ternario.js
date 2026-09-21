/**
 * EJEMPLO 06 — Operador ternario (condición ? sí : no)
 *
 * Ejecuta con:  node 02-operadores/ejemplos/06-ternario.js
 *
 * 🔮 PREDICE: ¿qué imprime cada console.log?
 */

// El ternario es una forma compacta de escribir un if/else simple.
// Sintaxis:  condición ? valorSiVerdadero : valorSiFalso

const edad = 20;
const mensaje = edad >= 18 ? 'Sos mayor de edad' : 'Todavía sos menor';
console.log(mensaje); // 'Sos mayor de edad'

// El mismo código con if/else normal (para que veas la equivalencia):
let mensajeConIf;
if (edad >= 18) {
  mensajeConIf = 'Sos mayor de edad';
} else {
  mensajeConIf = 'Todavía sos menor';
}
console.log(mensajeConIf); // igual resultado

// Se puede usar directamente como argumento de una función:
console.log('Clasificación:', edad >= 18 ? 'adulto' : 'menor');

// Se puede usar en un template literal:
const hora = 19;
console.log(`Buen${hora < 12 ? 'os días' : 'as tardes'}!`); // Buenas tardes!

// ⚠️ OJO: anidar ternarios se vuelve ilegible. Evitalo:
const nota = 85;
const letra = nota >= 90 ? 'A' : nota >= 80 ? 'B' : nota >= 70 ? 'C' : 'F';
console.log('Nota con ternarios anidados:', letra); // B

// ✅ Mejor: guardá cada paso en una variable para que se entienda.
const esSobresaliente = nota >= 90;
const esNotable = nota >= 80;
const letraLegible = esSobresaliente ? 'A' : esNotable ? 'B' : 'F';
console.log('Nota legible:', letraLegible); // B