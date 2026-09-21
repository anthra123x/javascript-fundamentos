/**
 * EJEMPLO 04 — Scope: global vs local y shadowing
 *
 * Ejecuta con:  node 04-funciones/ejemplos/04-scope.js
 *
 * 🔮 PREDICE: ¿qué imprime cada console.log? ¿Dónde falla el programa?
 * ¿Qué es el shadowing?
 */

console.log('=== Scope: global vs local ===');

// Variable GLOBAL: visible desde cualquier parte del archivo
const mensaje = 'Soy una variable global';

function mostrarMensaje() {
  // Variable LOCAL: solo existe dentro de las llaves de la función
  const mensajeLocal = 'Soy una variable local';

  console.log('Dentro de la función (global):', mensaje);
  console.log('Dentro de la función (local):', mensajeLocal);
}

mostrarMensaje();

// Esta línea da error porque mensajeLocal NO existe fuera de la función:
// console.log(mensajeLocal); // ReferenceError: mensajeLocal is not defined

console.log('Fuera de la función (global):', mensaje);

console.log('\n=== Shadowing ===');

// Shadowing: una variable local con el MISMO nombre que una global
// "tapa" (sombrea) a la global DENTRO de su bloque.
const PI = 3.14159;

function areaCirculo(radio) {
  const PI = 3; // sombrea a la PI global solo dentro de esta función
  return PI * radio * radio;
}

console.log('PI global:', PI);
console.log('areaCirculo(2):', areaCirculo(2)); // usa la PI local (3)
console.log('PI global sigue intacta:', PI);

// Bloques { } también crean scope para let/const
if (true) {
  const soloDentro = 'no salgo del bloque';
  console.log('Dentro del bloque:', soloDentro);
}
// console.log(soloDentro); // ReferenceError: soloDentro is not defined

// var tiene scope de función, no de bloque:
if (true) {
  var sobrevive = 'var no respeta bloques';
}
console.log('var sobrevive fuera del bloque:', sobrevive); // existe