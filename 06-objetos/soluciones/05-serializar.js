/**
 * SOLUCIÓN — EJERCICIO 05: Serializar y deserializar
 */

function serializar(objeto) {
  return JSON.stringify(objeto);
}

function deserializar(texto) {
  return JSON.parse(texto);
}

module.exports = { serializar, deserializar };