/**
 * SOLUCIÓN 05 — Primeros múltiplos
 *
 * 👀 Mirala solo DESPUÉS de intentarlo. Reescribila de memoria en tu editor.
 */

function primerosMultiplos(numero, cantidad) {
  const multiplos = [];

  for (let i = 1; i <= cantidad; i++) {
    multiplos.push(numero * i);
  }

  return multiplos;
}

module.exports = { primerosMultiplos };