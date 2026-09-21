/**
 * EJERCICIO 03 — Validar edad lanzando errores
 *
 * Escribí la función `validarEdad` que reciba una `edad` y valide:
 *
 *   1. Si `edad` NO es un número  →  throw new Error('La edad debe ser un número')
 *   2. Si `edad` es menor a 0     →  throw new Error('La edad no puede ser negativa')
 *   3. Si pasó las dos validaciones →  devolvé el string:
 *        `Edad válida: ${edad}`
 *
 * Usá la palabra reservada `throw`. Los tests van a verificar tanto los
 * casos exitosos como los errores (con assert.throws).
 *
 * ➡️ Ejemplos:
 *    validarEdad(25)                →  'Edad válida: 25'
 *    validarEdad(-1)                →  lanza Error('La edad no puede ser negativa')
 *    validarEdad('cinco')           →  lanza Error('La edad debe ser un número')
 */

// TODO: completa la función

function validarEdad(edad) {
  // 👇 escribí tu código aquí (pista: usá throw new Error('...'))

}

// No modifiques esta línea (el test la necesita):
module.exports = { validarEdad };