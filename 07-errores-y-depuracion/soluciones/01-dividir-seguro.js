/**
 * SOLUCIÓN — EJERCICIO 01: División segura
 */

function dividirSeguro(a, b) {
  if (b === 0) {
    return 'Error: división entre cero';
  }
  return a / b;
}

module.exports = { dividirSeguro };