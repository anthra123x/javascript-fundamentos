/**
 * EJEMPLO 03 — while y do...while
 *
 * Ejecuta con:  node 03-control-de-flujo/ejemplos/03-while.js
 *
 * 🔮 PREDICE: ¿cuántas veces se repite cada bucle? ¿qué imprime?
 */

// while repite un bloque MIENTRAS la condición sea true.
// El peligro clásico: si la condición nunca cambia, el bucle es infinito.

// Imprimir los números pares entre 0 y 10 con while.
let numero = 0;

console.log('Pares del 0 al 10:');
while (numero <= 10) {
  if (numero % 2 === 0) {
    console.log('  ', numero);
  }
  numero++; // ¡IMPORTANTE! sin esto, el bucle nunca termina.
}

// Estructura de un while:
//   1. Se evalúa la condición (antes de cada vuelta).
//   2. Si es true, se ejecuta el bloque.
//   3. Se vuelve al paso 1.
//   4. Si es false, se sale del bucle.

// while también sirve para "consumir" datos hasta que se acaben.
let azucarEnGramos = 30;

console.log('Preparando café...');
while (azucarEnGramos >= 5) {
  console.log(`  Quedan ${azucarEnGramos} g de azúcar.`);
  azucarEnGramos -= 5; // se consume de a 5 gramos
}
console.log('Se acabó el azúcar.');

// 💡 do...while: ejecuta el bloque al menos UNA vez aunque la condición sea false.
let intentos = 0;

do {
  console.log(`Intento número ${intentos + 1} (do...while).`);
  intentos++;
} while (intentos < 3);

// Diferencia clave con while: en do...while el chequeo va DESPUÉS del bloque.
let yaEsDeNoche = false;

do {
  console.log('El do...while se ejecuta aunque yaEsDeNoche sea false.');
} while (yaEsDeNoche);