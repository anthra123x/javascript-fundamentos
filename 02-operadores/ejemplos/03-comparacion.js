/**
 * EJEMPLO 03 — Operadores de comparación
 *
 * Ejecuta con:  node 02-operadores/ejemplos/03-comparacion.js
 *
 * 🔮 PREDICE: antes de correr, anotá en papel qué imprime cada console.log.
 */

// Los operadores de comparación SIEMPRE devuelven true o false.

let edad = 20;
let edadMinima = 18;

console.log('edad > edadMinima:', edad > edadMinima);     // true
console.log('edad >= edadMinima:', edad >= edadMinima);   // true
console.log('edad < edadMinima:', edad < edadMinima);     // false
console.log('edad <= edadMinima:', edad <= edadMinima);   // false

// 👀 ATENCIÓN: existen DOS tipos de igualdad.

// ==  (igualdad débil): compara valores y CONVIERTE tipos en silencio.
console.log("5 == '5' →", 5 == '5');       // true  (el string se convierte en número)
console.log("0 == false →", 0 == false);   // true  (false se convierte en 0)
console.log("null == undefined →", null == undefined); // true  (caso especial)

// === (igualdad estricta): compara valor Y tipo. Es la que debés usar SIEMPRE.
console.log("5 === '5' →", 5 === '5');     // false (número vs string)
console.log("0 === false →", 0 === false); // false (número vs booleano)
console.log("null === undefined →", null === undefined); // false

// Lo mismo pasa con la desigualdad: != (débil) y !== (estricta)
console.log("5 != '5' →", 5 != '5');       // false (para JS son iguales con coerción)
console.log("5 !== '5' →", 5 !== '5');     // true  (son distintos de verdad)

// Regla de oro:
// ✅ Usá SIEMPRE === y !==   (comparación estricta)
// ❌ Evitá == y !=            (traen bugs silenciosos por conversión automática)

console.log('¿coinciden tipo y valor?', typeof 5 === typeof '5'); // false

// Comparaciones entre strings: se comparan letra por letra (orden alfabético)
console.log("'ana' < 'luis' →", 'ana' < 'luis');   // true  (a va antes que l)
console.log("'20' > '100' →", '20' > '100');       // true  ¡OJO! compara caracteres, no números