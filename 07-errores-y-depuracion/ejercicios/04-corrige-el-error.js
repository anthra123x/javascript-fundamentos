/**
 * EJERCICIO 04 — Corregí el error (FIX-ME)
 *
 * La función `calcularPromedio` de abajo está MAL escrita a propósito.
 * Tu trabajo es encontrar y corregir los errores para que pase los tests.
 *
 * Se espera que:
 *   - calcularPromedio([10, 20, 30])  →  20
 *   - calcularPromedio([1, 2, 3, 4])  →  2.5
 *   - calcularPromedio([])            →  0   (array vacío)
 *
 * Consejos de depuración:
 *   1. Corré los tests y leé el mensaje de error en español.
 *   2. Imprimí valores intermedios con console.log si te trabás.
 *   3. Revisá la condición del for y qué pasa con el array vacío.
 *
 * 🐞 La función tiene DOS bugs. ¡Encontrá ambos!
 */

function calcularPromedio(numeros) {
  let suma = 0;
  for (let i = 0; i <= numeros.length; i++) {
    suma = suma + numeros[i];
  }
  return suma / numeros.length;
}

module.exports = { calcularPromedio };