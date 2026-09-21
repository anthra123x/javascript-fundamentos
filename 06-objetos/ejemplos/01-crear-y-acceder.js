/**
 * EJEMPLO 06-01 — Crear objetos y acceder a sus propiedades
 *
 * Un OBJETO es una colección de pares `clave: valor` entre llaves {}.
 * Las claves se llaman PROPIEDADES y pueden guardar cualquier valor:
 * strings, números, booleanos, arrays, funciones e incluso otros objetos.
 *
 * Corré este archivo con:
 *   node 06-objetos/ejemplos/01-crear-y-acceder.js
 */

// ─────────────────────────────────────────────
// 1. Crear un objeto literal
// ─────────────────────────────────────────────
const usuario = {
  nombre: 'Ana',
  edad: 30,
  esDev: true
};

console.log('Objeto completo:', usuario);

// ─────────────────────────────────────────────
// 2. Acceder con PUNTO (la forma más común)
// ─────────────────────────────────────────────
// El punto es como decir: "dame la propiedad X del objeto".
console.log('Nombre (punto):', usuario.nombre);
console.log('Edad (punto):', usuario.edad);

// ─────────────────────────────────────────────
// 3. Acceder con CORCHETES
// ─────────────────────────────────────────────
// Usás corchetes cuando el nombre de la propiedad:
//   - tiene espacios o caracteres especiales
//   - está guardado en una variable
const propiedad = 'edad';
console.log('Edad (corchetes):', usuario[propiedad]);

// Nombres con espacios solo pueden leerse con corchetes:
const producto = { 'nombre completo': 'Teclado mecánico', precio: 2500 };
console.log('Propiedad con espacio:', producto['nombre completo']);

// ─────────────────────────────────────────────
// 4. AGREGAR una propiedad nueva
// ─────────────────────────────────────────────
// Solo asignás un valor a una clave que aún no existía.
usuario.ciudad = 'Montevideo';
console.log('Después de agregar ciudad:', usuario);

// ─────────────────────────────────────────────
// 5. MODIFICAR una propiedad existente
// ─────────────────────────────────────────────
usuario.edad = 31;
console.log('Después de modificar edad:', usuario);

// ─────────────────────────────────────────────
// 6. ELIMINAR una propiedad con delete
// ─────────────────────────────────────────────
delete usuario.esDev;
console.log('Después de borrar esDev:', usuario);

// ─────────────────────────────────────────────
// 7. Regla importante: el objeto se guarda por REFERENCIA
// ─────────────────────────────────────────────
// Al asignar `const copia = usuario` NO se copia el objeto:
// ambas variables apuntan al MISMO objeto en memoria.
const copia = usuario;
copia.nombre = 'Cambiado';
console.log('usuario.nombre después de tocar copia:', usuario.nombre);
// → 'Cambiado' (¡porque copia y usuario son el mismo objeto!)

// Para copiar de verdad hay que usar spread (...) — lo ves en el ejemplo 04.