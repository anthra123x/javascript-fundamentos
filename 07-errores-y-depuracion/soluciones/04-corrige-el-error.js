/**
 * SOLUCIÓN — EJERCICIO 04: Corregí el error (FIX-ME)
 *
 * Bug 1: la condición del for usaba `i <= numeros.length`, lo que hacía
 *        que en la última iteración se leyera numeros[i] = undefined
 *        (fuera del array) y la suma se volviera NaN.
 *
 * Bug 2: faltaba manejar el array vacío: 0 / 0 = NaN. Hay que devolver 0.
 */

function calcularPromedio(numeros) {
  if (numeros.length === 0) {
    return 0;
  }

  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  return suma / numeros.length;
}

module.exports = { calcularPromedio };