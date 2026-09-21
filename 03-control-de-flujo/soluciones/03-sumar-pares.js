/**
 * SOLUCIÓN 03 — Sumar pares
 *
 * 👀 Mirala solo DESPUÉS de intentarlo. Reescribila de memoria en tu editor.
 */

function sumarPares(limite) {
  let suma = 0;

  for (let i = 0; i <= limite; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }

  return suma;
}

module.exports = { sumarPares };