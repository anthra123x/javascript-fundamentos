/**
 * SOLUCIÓN 01 — Nota final
 *
 * 👀 Mirala solo DESPUÉS de intentarlo. Reescribila de memoria en tu editor.
 */

function notaFinal(calificacion) {
  if (calificacion >= 90) {
    return 'A';
  } else if (calificacion >= 80) {
    return 'B';
  } else if (calificacion >= 70) {
    return 'C';
  } else if (calificacion >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

module.exports = { notaFinal };