/**
 * EJERCICIO 04 — Extraer datos con destructuring
 *
 * Escribí la función `extraerDatos` que reciba un objeto `persona`
 * y use DESTRUCTURING para obtener:
 *
 *   - `nombre`
 *   - `edad`
 *   - `ciudad`  con valor por defecto 'Desconocida' (por si no viene)
 *
 * Luego debe devolver el texto:
 *
 *    "{nombre} vive en {ciudad}"
 *
 * ➡️ Ejemplos:
 *    extraerDatos({ nombre: 'Ana', edad: 30, ciudad: 'Lima' })
 *      →  'Ana vive en Lima'
 *
 *    extraerDatos({ nombre: 'Leo', edad: 25 })
 *      →  'Leo vive en Desconocida'   (usa el default porque no hay ciudad)
 */

// TODO: completa la función

function extraerDatos(persona) {
  // 👇 escribí tu código aquí (pista: const { nombre, edad, ciudad = 'Desconocida' } = persona;)

}

// No modifiques esta línea (el test la necesita):
module.exports = { extraerDatos };