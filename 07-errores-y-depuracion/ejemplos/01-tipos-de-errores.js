/**
 * EJEMPLO 07-01 — Tipos de errores en JavaScript
 *
 * Cuando el código falla, JavaScript lanza un ERROR. No todos los errores
 * son iguales: cada tipo tiene un nombre y un significado distinto.
 *
 * En este archivo vamos a ver (y capturar con try/catch) los tipos más
 * comunes. Como el archivo tiene que poder CORRER sin romperse, cada error
 * se lanza ADENTRO de un try/catch. En el ejemplo 02 ves cómo funciona
 * try/catch en detalle.
 *
 * Corré este archivo con:
 *   node 07-errores-y-depuracion/ejemplos/01-tipos-de-errores.js
 */

// ─────────────────────────────────────────────
// 1. ReferenceError — usás una variable que NO existe
// ─────────────────────────────────────────────
// Ocurre cuando JavaScript no encuentra una variable por su nombre.
try {
  console.log(edadDeAna); // ¿de dónde sale `edadDeAna`? ¡No existe!
} catch (error) {
  console.log('Tipo:', error.name);        // → ReferenceError
  console.log('Mensaje:', error.message);  // → edadDeAna is not defined
}

// ─────────────────────────────────────────────
// 2. SyntaxError — la sintaxis del código está mal escrita
// ─────────────────────────────────────────────
// 🚨 OJO: un SyntaxError NO se puede capturar con try/catch porque el
// código ni siquiera llega a ejecutarse. Si el archivo tiene uno, Node
// lo rechaza al leerlo y NO corre nada del archivo.
//
// Ejemplo de SyntaxError (NO descomentes esta línea: rompería el archivo):
//   const x = ;
//   console.log('hola
//   function () {}     // falta el nombre de la función
//
// Por eso en este ejemplo solo te lo explicamos en comentarios:
console.log('\nUn SyntaxError rompe el archivo antes de ejecutarse: no se puede capturar con try/catch.');

// ─────────────────────────────────────────────
// 3. TypeError — operación inválida sobre un valor
// ─────────────────────────────────────────────
// Ocurre cuando, por ejemplo, llamás como función algo que no es función
// o leés una propiedad de algo que es null/undefined.
try {
  const numero = 42;
  numero.toUpperCase(); // los números NO tienen toUpperCase()
} catch (error) {
  console.log('\nTipo:', error.name);        // → TypeError
  console.log('Mensaje:', error.message);    // → numero.toUpperCase is not a function
}

// Otro TypeError clásico:
try {
  const persona = null;
  console.log(persona.nombre); // leer propiedad de null
} catch (error) {
  console.log('Tipo:', error.name);        // → TypeError
  console.log('Mensaje:', error.message);  // → Cannot read properties of null
}

// ─────────────────────────────────────────────
// 4. RangeError — un número está fuera del rango permitido
// ─────────────────────────────────────────────
// Ocurre con valores numéricos que no son válidos para cierta operación.
try {
  const array = new Array(-3); // no existe un array de -3 elementos
} catch (error) {
  console.log('\nTipo:', error.name);        // → RangeError
  console.log('Mensaje:', error.message);    // → Invalid array length
}

// Otro ejemplo muy común: recursión que no termina (stack overflow)
function recursiva() {
  return recursiva(); // se llama a sí misma para siempre
}

try {
  recursiva();
} catch (error) {
  console.log('Tipo:', error.name);        // → RangeError
  console.log('Mensaje:', error.message);  // → Maximum call stack size exceeded
}

// ─────────────────────────────────────────────
// Resumen
// ─────────────────────────────────────────────
//  - ReferenceError: variable inexistente
//  - SyntaxError: código mal escrito (no se puede capturar)
//  - TypeError: operación inválida (llamar lo que no es función, etc.)
//  - RangeError: número fuera de rango (arrays, recursión infinita)
//
// TODOS los errores tienen `.name` (el tipo) y `.message` (la descripción).