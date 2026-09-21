/**
 * EJERCICIO 02 — Parseo seguro de JSON
 *
 * Escribí la función `parsearSeguro` que reciba un string `texto` y
 * devuelva el resultado de `JSON.parse(texto)`.
 *
 * 🚨 PERO: `JSON.parse` lanza un error si el texto no es JSON válido.
 * Envuelve la operación en try/catch: si falla, devolvé `null` en lugar
 * de dejar que el programa se rompa.
 *
 * ➡️ Ejemplos:
 *    parsearSeguro('{"nombre":"Ana"}')   →  { nombre: 'Ana' }
 *    parsearSeguro('{esto no es json}')  →  null
 */

// TODO: completa la función

function parsearSeguro(texto) {
  // 👇 escribí tu código aquí (try { ... } catch { return null; })

}

// No modifiques esta línea (el test la necesita):
module.exports = { parsearSeguro };