/**
 * SOLUCIÓN — EJERCICIO 04: Extraer datos con destructuring
 */

function extraerDatos(persona) {
  // Destructuring con valor por defecto en `ciudad`.
  const { nombre, edad, ciudad = 'Desconocida' } = persona;

  // La variable `edad` no se usa en el texto, pero destructuring
  // sirve igual para "desarmar" el objeto de forma clara.
  return `${nombre} vive en ${ciudad}`;
}

module.exports = { extraerDatos };