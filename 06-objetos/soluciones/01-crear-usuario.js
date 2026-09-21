/**
 * SOLUCIÓN — EJERCICIO 01: Crear un usuario
 */

function crearUsuario(nombre, edad) {
  // Shorthand: como la propiedad se llama igual que la variable,
  // alcanza con escribir el nombre una sola vez.
  return { nombre, edad };
}

module.exports = { crearUsuario };