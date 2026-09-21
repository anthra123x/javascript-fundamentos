/**
 * EJEMPLO 03 — Parámetros: valores por defecto, rest y arguments
 *
 * Ejecuta con:  node 04-funciones/ejemplos/03-parametros.js
 *
 * 🔮 PREDICE: ¿qué imprime cada console.log? ¿Cuándo se usa el valor por
 * defecto? ¿Qué contiene `arguments`?
 */

console.log('=== Parámetros ===');

// 1) Parámetro con valor por defecto.
// Si no se pasa el argumento, se usa 'mundo'.
function saludar(nombre = 'mundo') {
  return `Hola, ${nombre}!`;
}

console.log(saludar('Ana')); // usa el argumento
console.log(saludar()); // usa el valor por defecto
console.log(saludar(undefined)); // undefined también activa el valor por defecto

// 2) Parámetro por defecto que depende de otro parámetro
function inventario(producto, cantidad = 30) {
  return `Hay ${cantidad} unidades de ${producto}`;
}

console.log(inventario('manzanas')); // usa el 30 por defecto
console.log(inventario('peras', 12)); // usa el 12 explícito

// 3) Rest (...numeros): junta TODOS los argumentos extra en un array
function sumarTodos(...numeros) {
  let total = 0;
  for (const numero of numeros) {
    total += numero;
  }
  return total;
}

console.log('sumarTodos():', sumarTodos()); // sin argumentos → 0
console.log('sumarTodos(1, 2):', sumarTodos(1, 2));
console.log('sumarTodos(1, 2, 3, 4):', sumarTodos(1, 2, 3, 4));

// 4) `arguments`: objeto con TODOS los argumentos (solo en function clásica)
function primerosArgumentos() {
  console.log('arguments dentro de la función:', arguments);
  return `Recibí ${arguments.length} argumento(s)`;
}

console.log(primerosArgumentos('a', 'b', 'c'));

// 5) Rest y argumentos normales combinados
function registrar(nombre, ...intereses) {
  return `${nombre} le interesa: ${intereses.join(', ')}`;
}

console.log(registrar('Luis', 'JS', 'Node', 'Bases de datos'));