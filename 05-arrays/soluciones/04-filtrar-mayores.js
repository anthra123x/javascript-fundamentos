/**
 * SOLUCIÓN 04 — Filtrar mayores
 *
 * 👀 Mirada solo DESPUÉS de intentarlo. Reescribila de memoria en tu editor.
 */

function filtrarMayores(numeros, minimo) {
  return numeros.filter((numero) => numero > minimo);
}

module.exports = { filtrarMayores };