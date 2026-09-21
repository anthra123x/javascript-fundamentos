/**
 * SOLUCIÓN 05 — Clasificar descuento
 *
 * 👀 Mirala solo DESPUÉS de intentarlo. Reescribila de memoria en tu editor.
 */

function clasificarDescuento(esMiembro, monto) {
  return esMiembro && monto >= 100 ? '20%' : esMiembro ? '10%' : 'sin descuento';
}

module.exports = { clasificarDescuento };