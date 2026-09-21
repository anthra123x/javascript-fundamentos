/**
 * EJEMPLO 04 — for
 *
 * Ejecuta con:  node 03-control-de-flujo/ejemplos/04-for.js
 *
 * 🔮 PREDICE: ¿qué imprime el programa? ¿cuál es el valor final de suma?
 */

// El bucle for condensa en una línea las tres partes del control:
//   for (inicialización; condición; actualización)
//     1. inicialización   → se corre UNA vez al empezar (let i = 1)
//     2. condición        → se evalúa antes de cada vuelta (i <= 10)
//     3. actualización    → se corre al final de cada vuelta (i++)

// Sumar los números del 1 al 10:
let suma = 0;

for (let i = 1; i <= 10; i++) {
  suma += i; // acumular con +=
}
console.log('Suma del 1 al 10:', suma); // 55

// Tabla de multiplicar del 7 (sin anidar):
const numero = 7;
console.log(`Tabla del ${numero}:`);

for (let i = 1; i <= 10; i++) {
  console.log(`  ${numero} x ${i} = ${numero * i}`);
}

// Bucles anidados: uno dentro de otro. Por cada vuelta del de afuera,
// el de adentro corre COMPLETO.
console.log('Tablas de multiplicar del 1 al 3:');

for (let tabla = 1; tabla <= 3; tabla++) {
  console.log(`Tabla del ${tabla}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`  ${tabla} x ${i} = ${tabla * i}`);
  }
}

// Recorrer un array con for (usando la longitud):
const frutas = ['manzana', 'banana', 'naranja'];

console.log('Frutas:');
for (let i = 0; i < frutas.length; i++) {
  console.log(`  ${i + 1}. ${frutas[i]}`);
}