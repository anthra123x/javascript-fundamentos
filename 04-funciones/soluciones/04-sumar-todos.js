/**
 * SOLUCIÓN 04 — Sumar todos los números
 *
 * 👀 Mirada solo DESPUÉS de intentarlo. Reescribila de memoria en tu editor.
 *
 * Las dos versiones devuelven lo mismo: la primera usa un bucle for...of y
 * la segunda usa reduce. Elegí la que te resulte más clara.
 */

function sumarTodos(...numeros) {
  let total = 0;
  for (const numero of numeros) {
    total += numero;
  }
  return total;
}

// Alternativa con reduce:
// function sumarTodos(...numeros) {
//   return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// }

module.exports = { sumarTodos };