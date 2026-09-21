/**
 * SOLUCIÓN — EJERCICIO 02: Actualizar la edad SIN mutar el objeto
 */

function actualizarEdad(usuario, nuevaEdad) {
  // Spread copia todas las propiedades del usuario en un objeto nuevo,
  // y `edad: nuevaEdad` (escrita al final) pisa el valor de la edad.
  // El objeto original NO se toca.
  return { ...usuario, edad: nuevaEdad };
}

module.exports = { actualizarEdad };