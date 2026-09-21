/**
 * EJEMPLO 07-02 — try / catch / finally
 *
 * try/catch es la red de seguridad de JavaScript: intentás ejecutar algo
 * que puede fallar (try) y, si falla, en vez de romper todo el programa,
 * el error cae en el catch donde lo podés manejar.
 *
 * Bloques:
 *   - try:      el código "arriesgado" (el que podría lanzar un error)
 *   - catch:    SOLO se ejecuta si algo en try lanzó un error
 *   - finally:  se ejecuta SIEMPRE, haya error o no
 *
 * Corré este archivo con:
 *   node 07-errores-y-depuracion/ejemplos/02-try-catch.js
 */

// ─────────────────────────────────────────────
// 1. Función que intenta parsear JSON de forma segura
// ─────────────────────────────────────────────
function intentarParsear(texto) {
  try {
    const dato = JSON.parse(texto); // puede lanzar SyntaxError
    console.log('  ✅ Parseado con éxito:', dato);
    return dato;
  } catch (error) {
    console.log('  ⚠️  Error capturado:', error.message);
    return null; // devolvemos algo "seguro" en vez de romper el programa
  } finally {
    console.log('  🔁 finally: esto se ejecuta SIEMPRE (haya error o no)');
  }
}

console.log('Llamada 1 (JSON válido):');
const resultado1 = intentarParsear('{"nombre":"Ana","edad":30}');
console.log('  El retorno fue:', resultado1);

console.log('\nLlamada 2 (JSON inválido):');
const resultado2 = intentarParsear('{esto no es JSON}');
console.log('  El retorno fue:', resultado2);

// ─────────────────────────────────────────────
// 2. El orden de ejecución (importantísimo)
// ─────────────────────────────────────────────
// Observá en la salida: el código del FINALLY corre ANTES de que la
// función devuelva el valor. Y el catch NO corre si no hubo error.
console.log('\nFlujo de la llamada 1:  try → finally → return');
console.log('Flujo de la llamada 2:  try (falla) → catch → finally → return');

// ─────────────────────────────────────────────
// 3. Acceder a propiedades del error capturado
// ─────────────────────────────────────────────
try {
  const arreglo = [];
  arreglo[0].length; // TypeError: leer length de undefined
} catch (error) {
  // `error` es un objeto con propiedades útiles:
  console.log('\nPropiedades del error:');
  console.log('  name:', error.name);
  console.log('  message:', error.message);
  console.log('  stack (primeras 2 líneas):');
  const lineas = error.stack.split('\n').slice(0, 2);
  for (const linea of lineas) {
    console.log('   ', linea);
  }
}

// ─────────────────────────────────────────────
// 4. ¿Cuándo NO usar try/catch?
// ─────────────────────────────────────────────
// No atrapar TODO: si el programa necesita saber que algo falló,
// a veces es mejor dejar que el error se propague. Envolver cada línea
// en try/catch puede esconder bugs. El buen uso es delimitar la parte
// "arriesgada" y nada más.