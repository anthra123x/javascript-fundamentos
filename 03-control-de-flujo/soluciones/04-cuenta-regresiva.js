/**
 * SOLUCIÓN 04 — Cuenta regresiva
 *
 * 👀 Mirala solo DESPUÉS de intentarlo. Reescribila de memoria en tu editor.
 */

function cuentaRegresiva(inicio) {
  let resultado = '';
  let numero = inicio;

  while (numero >= 0) {
    if (resultado.length > 0) {
      resultado += ',';
    }
    resultado += numero;
    numero--;
  }

  return resultado;
}

module.exports = { cuentaRegresiva };