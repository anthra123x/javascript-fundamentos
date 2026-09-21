/**
 * EJEMPLO 05 — Valores falsy y patrón de valor por defecto (short-circuit)
 *
 * Ejecuta con:  node 02-operadores/ejemplos/05-falsy-y-short-circuit.js
 *
 * 🔮 PREDICE: ¿cuáles de estos valores son "falsy" en JavaScript?
 *   false, 0, '', null, undefined, NaN
 */

// En condiciones (if, &&, ||...), JavaScript convierte cada valor a booleano.
// Un valor que se convierte en false se llama "falsy".

// Lista completa de valores falsy:
const falsy = [false, 0, -0, 0n, '', null, undefined, NaN];
falsy.forEach((valor) => {
  const nombre = String(valor);
  console.log(`¿${nombre || 'cadena vacía'} es falsy?`, !valor);
});

// TODO lo demás es "truthy" (se convierte en true):
console.log("'0' es truthy?", Boolean('0'));       // true (¡la cadena '0' NO es falsy!)
console.log('[] es truthy?', Boolean([]));         // true (¡un array vacío es truthy!)
console.log('{} es truthy?', Boolean({}));         // true (¡un objeto vacío es truthy!)

// 💡 PATRÓN CLÁSICO: dar un valor por defecto con ||
// Si la variable es falsy, se usa la alternativa; si es truthy, se usa la variable.

function saludar(nombre) {
  const nombreFinal = nombre || 'invisible';
  return `¡Hola, ${nombreFinal}!`;
}

console.log(saludar('Ana'));   // ¡Hola, Ana!      → 'Ana' es truthy, se usa
console.log(saludar(''));      // ¡Hola, invisible! → '' es falsy, se usa el default
console.log(saludar(null));    // ¡Hola, invisible! → null es falsy, se usa el default
console.log(saludar(undefined)); // ¡Hola, invisible! → undefined es falsy

// ⚠️ Advertencia: || reemplaza TAMBIÉN los valores falsy útiles.
// Por ejemplo 0 es falsy, así que esto está mal para cantidades:
function esCantidadValida(cantidad) {
  return cantidad || 'cantidad inválida';
}
console.log(esCantidadValida(5));  // 5
console.log(esCantidadValida(0));  // 'cantidad inválida' ← quizás querías aceptar el 0

// ✅ Para casos así, mejor revisar null/undefined explícitamente:
function cantidadCorrecta(cantidad) {
  return cantidad ?? 'cantidad inválida'; // el operador ?? solo reemplaza null/undefined
}
console.log(cantidadCorrecta(0));  // 0   ← se conserva el cero
console.log(cantidadCorrecta(null)); // 'cantidad inválida'