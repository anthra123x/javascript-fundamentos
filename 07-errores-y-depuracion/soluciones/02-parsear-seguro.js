/**
 * SOLUCIÓN — EJERCICIO 02: Parseo seguro de JSON
 */

function parsearSeguro(texto) {
  try {
    return JSON.parse(texto);
  } catch {
    // Si el texto no es JSON válido, devolvemos null
    // en vez de dejar que el error rompa el programa.
    return null;
  }
}

module.exports = { parsearSeguro };