/**
 * EJEMPLO 07-04 — Depuración con console.log
 *
 * La forma MÁS sencilla (y muchas veces la más efectiva) de encontrar un bug
 * es imprimir valores intermedios con console.log y comparar con lo esperado.
 *
 * Vamos a depurar una función con un bug clásico de a uno: la condición
 * del for usa `<=` cuando debería usar `<`, y la suma termina sumando un
 * `undefined`.
 *
 * Corré este archivo con:
 *   node 07-errores-y-depuracion/ejemplos/04-depuracion-con-logs.js
 */

// ─────────────────────────────────────────────
// 1. La versión CON BUG (con logs de depuración)
// ─────────────────────────────────────────────
function calcularTotalConBug(precios) {
  let total = 0;

  console.log('→ Empezamos. total =', total);
  for (let i = 0; i <= precios.length; i++) {
    console.log(`  Iteración i=${i}: precios[${i}] = ${precios[i]}`);

    // 🐞 El bug: con `<=` la última iteración lee precios[3],
    // que NO existe → undefined → total se vuelve NaN.
    total = total + precios[i];

    console.log(`  total ahora = ${total}`);
  }

  return total;
}

// ─────────────────────────────────────────────
// 2. La versión ARREGLADA (misma estructura, mismo log)
// ─────────────────────────────────────────────
function calcularTotalArreglada(precios) {
  let total = 0;

  for (let i = 0; i < precios.length; i++) { // ✅ el fix: < en vez de <=
    total = total + precios[i];
  }

  return total;
}

const precios = [10, 20, 30]; // la suma esperada es 60

console.log('===== Ejecutando la versión CON BUG =====');
const resultadoBug = calcularTotalConBug(precios);
console.log('Resultado con bug:', resultadoBug, '\n');
// El log muestra claramente que en i=3 se lee `undefined`.
// ¡Ahí está el bug! La condición debería ser `i < precios.length`.

console.log('===== Ejecutando la versión ARREGLADA =====');
const resultadoArreglada = calcularTotalArreglada(precios);
console.log('Resultado arreglada:', resultadoArreglada, '(esperado: 60)');

// ─────────────────────────────────────────────
// 3. Otras herramientas de log útiles
// ─────────────────────────────────────────────
console.log('\n=== console.table (imprimir datos en tabla) ===');
const productos = [
  { nombre: 'Teclado', precio: 2500 },
  { nombre: 'Mouse', precio: 800 }
];
console.table(productos);

console.log('=== console.dir (ver objetos por dentro) ===');
const objeto = { a: 1, anidado: { b: 2, c: 3 } };
console.dir(objeto, { depth: null });

// Consejo para depurar:
//   - Logueá ANTES y DESPUÉS de la operación que falla.
//   - Imprimí el valor que NO esperás, no solo "llegó acá".
//   - Cuando el bug esté claro, BORRÁ los logs de producción.