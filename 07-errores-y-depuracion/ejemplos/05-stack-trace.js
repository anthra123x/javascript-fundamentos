/**
 * EJEMPLO 07-05 — Leer un stack trace
 *
 * El STACK TRACE (rastro de pila) es la lista de llamadas que llevaron
 * al error. Aparece en rojo en la consola cuando tu programa se rompe.
 *
 * Se lee DE ARRIBA HACIA ABAJO:
 *   - La PRIMERA línea del stack dice DÓNDE explotó la bomba.
 *   - Cada línea siguiente es el "camino" que recorrió el código
 *     hasta llegar ahí (quién llamó a quién).
 *
 * Corré este archivo con:
 *   node 07-errores-y-depuracion/ejemplos/05-stack-trace.js
 */

// ─────────────────────────────────────────────
// 1. Cadena de llamadas: nivelUno → nivelDos → nivelTres
// ─────────────────────────────────────────────
function nivelTres() {
  // El error se lanza en la función más profunda
  throw new Error('Falla en el nivel tres');
}

function nivelDos() {
  nivelTres(); // nivelDos llama a nivelTres
}

function nivelUno() {
  nivelDos(); // nivelUno llama a nivelDos
}

console.log('=== Llamamos a nivelUno() dentro de un try/catch ===\n');

try {
  nivelUno();
} catch (error) {
  console.log('Mensaje del error:', error.message, '\n');
  console.log('Stack completo:\n');
  console.log(error.stack);
  console.log('');
}

// ─────────────────────────────────────────────
// 2. Cómo LEER el stack de arriba hacia abajo
// ─────────────────────────────────────────────
console.log('=== ¿Cómo se lee? ===');
console.log('Linea 1:   Error: Falla en el nivel tres        ← el mensaje');
console.log('Linea 2:   at nivelTres (archivo.js:8:9)       ← DONDE explotó');
console.log('Linea 3:   at nivelDos (archivo.js:12:3)       ← quien llamó a nivelTres');
console.log('Linea 4:   at nivelUno (archivo.js:16:3)       ← quien llamó a nivelDos');
console.log('Linea 5:   at Object.<anonymous> (archivo:19)  ← quien llamó a nivelUno');
console.log('');
console.log('La primera línea es la causa; cada línea siguiente');
console.log('es un nivel de profundidad en la pila de llamadas.');

// ─────────────────────────────────────────────
// 3. La información que da cada línea del stack
// ─────────────────────────────────────────────
// El formato típico es:
//   at NOMBRE_DE_FUNCION (RUTA_ARCHIVO:LINEO:COLUMNA)
//
// - `RUTA_ARCHIVO` te dice en qué archivo buscar
// - `LINEO` te dice la línea exacta donde ocurrió (con la columna)
//
// Esa línea es donde ponés el cursor cuando abrís el archivo en el editor.

// ─────────────────────────────────────────────
// 4. Consejo práctico de depuración
// ─────────────────────────────────────────────
function buscarOferta() {
  const ofertas = [10, 20, 30];
  return ofertas[-1]; // no existe el índice -1
}

function mostrarCarrito() {
  buscarOferta();
}

try {
  mostrarCarrito();
} catch (error) {
  console.log('=== Error de ejemplo al depurar ===');
  console.log(error.stack);
  console.log('\nEl primer "at ..." te apunta directo a buscarOferta. Empezá el debug ahí.');
}

// Regla de oro: NUNCA ignores un stack trace. La primera línea
// "at función (archivo:línea)" es casi siempre el lugar donde está el bug.