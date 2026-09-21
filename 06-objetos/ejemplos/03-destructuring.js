/**
 * EJEMPLO 06-03 — Destructuring (desestructuración)
 *
 * El destructuring es una "taquigrafía" para sacar valores de un objeto
 * (o de un array) y guardarlos en variables en una sola línea.
 *
 * Corré este archivo con:
 *   node 06-objetos/ejemplos/03-destructuring.js
 */

// ─────────────────────────────────────────────
// 1. Destructuring de OBJETOS
// ─────────────────────────────────────────────
const usuario = {
  nombre: 'Ana',
  edad: 30,
  ciudad: 'Lima'
};

// Antes (sin destructuring) había que escribir 3 líneas:
// const nombre = usuario.nombre;
// const edad = usuario.edad;

// Ahora, en una sola línea:
const { nombre, edad } = usuario;
console.log('nombre:', nombre);
console.log('edad:', edad);

// ─────────────────────────────────────────────
// 2. Renombrar variables al desestructurar
// ─────────────────────────────────────────────
const { nombre: apodo, ciudad: lugarDeOrigen } = usuario;
console.log('apodo:', apodo);
console.log('lugarDeOrigen:', lugarDeOrigen);

// ─────────────────────────────────────────────
// 3. Valores por defecto
// ─────────────────────────────────────────────
// Si la propiedad NO existe, se usa el valor que escribís después del =.
const { email = 'sin-email@ejemplo.com' } = usuario;
console.log('email (con default):', email);

// ─────────────────────────────────────────────
// 4. Destructuring de ARRAYS
// ─────────────────────────────────────────────
// La posición determina la variable: el primero va a la primera variable, etc.
const colores = ['rojo', 'verde', 'azul'];

const [primero, segundo] = colores;
console.log('primero:', primero);
console.log('segundo:', segundo);

// ─────────────────────────────────────────────
// 5. Saltar elementos y tomar el resto
// ─────────────────────────────────────────────
const [rojo, , azul] = colores; // la coma vacía saltea 'verde'
console.log('rojo:', rojo, '| azul:', azul);

const [cabeza, ...resto] = colores; // ...resto junta lo que sobra
console.log('cabeza:', cabeza, '| resto:', resto);

// ─────────────────────────────────────────────
// 6. Defaults en arrays (para datos que pueden faltar)
// ─────────────────────────────────────────────
const coordenadas = [10]; // falta la Y
const [x = 0, y = 0] = coordenadas;
console.log('x:', x, '| y (con default):', y);

// ─────────────────────────────────────────────
// 7. Uso típico: destructuring en parámetros de funciones
// ─────────────────────────────────────────────
function mostrarDatos({ nombre, edad, ciudad = 'Desconocida' }) {
  console.log(`${nombre} tiene ${edad} años y vive en ${ciudad}`);
}

mostrarDatos(usuario);
mostrarDatos({ nombre: 'Paz', edad: 22 }); // 'ciudad' toma el default