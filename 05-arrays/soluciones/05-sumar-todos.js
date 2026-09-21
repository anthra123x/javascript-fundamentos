/**
 * SOLUCIÓN 05 — Sumar todos los números
 *
 * 👀 Mirada solo DESPUÉS de intentarlo. Reescribila de memoria en tu editor.
 */

function sumarTodos(numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

module.exports = { sumarTodos };