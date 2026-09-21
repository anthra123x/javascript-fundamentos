/**
 * EJEMPLO 04 — map, filter y reduce
 *
 * Ejecuta con:  node 05-arrays/ejemplos/04-map-filter-reduce.js
 *
 * 🔮 PREDICE: ¿qué array devuelve map? ¿Qué devuelve filter? ¿Qué valor
 * devuelve reduce? ¿Los originales cambian?
 */

console.log('=== map: transformar (crea un array NUEVO) ===');
const numeros = [1, 2, 3, 4];
const duplicados = numeros.map((numero) => numero * 2);
console.log('Original:', numeros);
console.log('Duplicados (map):', duplicados);

const etiquetas = numeros.map((numero) => `Nº ${numero}`);
console.log('Etiquetas (map):', etiquetas);

console.log('\n=== filter: filtrar (crea un array NUEVO) ===');
const mayores = numeros.filter((numero) => numero > 2);
console.log('Mayores que 2 (filter):', mayores);

const pares = numeros.filter((numero) => numero % 2 === 0);
console.log('Pares (filter):', pares);

console.log('\n=== reduce: acumular (devuelve UN valor) ===');
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log('Suma total (reduce, inicia en 0):', suma);

const producto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log('Producto total (reduce, inicia en 1):', producto);

console.log('\n=== Los originales siguen igual ===');
console.log('numeros:', numeros);

console.log('\n=== Combinando métodos ===');
const resultado = numeros
  .filter((numero) => numero % 2 === 0) // [2, 4]
  .map((numero) => numero * 10) // [20, 40]
  .reduce((acum, numero) => acum + numero, 0); // 60
console.log('Pares * 10 sumados:', resultado);