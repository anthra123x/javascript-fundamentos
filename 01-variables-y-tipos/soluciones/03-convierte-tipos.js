/**
 * SOLUCIÓN 03 — Convierte tipos
 *
 * 👀 Mirada solo DESPUÉS de intentarlo. Reescribila de memoria en tu editor.
 */

function aNumero(texto) {
  return Number(texto);
}

function aTexto(valor) {
  return String(valor);
}

function aBooleano(valor) {
  return Boolean(valor);
}

module.exports = { aNumero, aTexto, aBooleano };