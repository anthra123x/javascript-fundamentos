/**
 * SOLUCIÓN — EJERCICIO 03: Validar edad lanzando errores
 */

function validarEdad(edad) {
  if (typeof edad !== 'number') {
    throw new Error('La edad debe ser un número');
  }
  if (edad < 0) {
    throw new Error('La edad no puede ser negativa');
  }
  return `Edad válida: ${edad}`;
}

module.exports = { validarEdad };