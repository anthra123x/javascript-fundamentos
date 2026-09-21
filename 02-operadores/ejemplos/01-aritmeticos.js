/**
 * EJEMPLO 01 — Operadores aritméticos
 *
 * Ejecuta con:  node 02-operadores/ejemplos/01-aritmeticos.js
 *
 * 🔮 PREDICE: antes de correr, anotá en papel qué imprime cada console.log.
 */

// Los operadores aritméticos son los más parecidos a la matemática que ya conocés.
let a = 10;
let b = 3;

// Suma
console.log('a + b =', a + b); // 10 + 3 = 13

// Resta
console.log('a - b =', a - b); // 10 - 3 = 7

// Multiplicación
console.log('a * b =', a * b); // 10 * 3 = 30

// División: siempre devuelve número (¡no hay división entera como en otros lenguajes!)
console.log('a / b =', a / b); // 10 / 3 ≈ 3.333...

// Módulo (resto de la división): muy útil para saber si un número es par
console.log('a % b =', a % b);       // 10 % 3 = 1
console.log('10 % 2 =', 10 % 2);     // 0 → es par
console.log('7 % 2 =', 7 % 2);       // 1 → es impar

// Exponenciación (potencia)
console.log('2 ** 3 =', 2 ** 3);     // 2 elevado a 3 = 8
console.log('5 ** 2 =', 5 ** 2);     // 25

// Incremento (++) y decremento (--)
let contador = 5;

// Post-incremento: primero se usa el valor viejo, después se suma 1
console.log('contador++ (usa el valor actual):', contador++); // imprime 5
console.log('valor de contador después del ++:', contador);   // ahora es 6

// Pre-incremento: primero se suma 1, después se usa el valor nuevo
console.log('++contador (suma primero):', ++contador);        // imprime 7

// Cuidado con la división entre cero (en matemáticas no existe, en JS "casi")
console.log('5 / 0 =', 5 / 0);       // Infinity (infinito)
console.log('0 / 0 =', 0 / 0);       // NaN (Not a Number)

// 💡 Tip: para saber si un número es par usá el módulo con 2.
function esPar(numero) {
  return numero % 2 === 0;
}
console.log('¿esPar(10)?', esPar(10)); // true
console.log('¿esPar(7)?', esPar(7));   // false