/**
 * EJEMPLO 03 — Tipado dinámico y conversión de tipos
 *
 * Ejecuta con:  node 01-variables-y-tipos/ejemplos/03-tipado-dinamico-y-conversion.js
 *
 * 🔮 PREDICE: ¿qué imprime cada console.log? (¡los resultados sorprenden!)
 */

// ── Tipado dinámico: una variable puede cambiar de tipo ──
let dato = 42;
console.log('1) dato es:', typeof dato);       // number
dato = 'ahora soy texto';
console.log('2) dato es:', typeof dato);       // string
dato = true;
console.log('3) dato es:', typeof dato);       // boolean

// ── Conversión implícita: JavaScript convierte SOLO para ciertas operaciones ──
console.log('4) "5" + 3   =', '5' + 3);        // '53' (concatena strings)
console.log('5) "5" - 3   =', '5' - 3);        // 2  (con - * / convierte a número)
console.log('6) "5" * "2" =', '5' * '2');      // 10 (convierte ambos)
console.log('7) true + 1  =', true + 1);       // 2  (true se convierte a 1)

// ── Conversión explícita: la haces tú con Number, String, Boolean ──
console.log('8) Number("42")  =', Number('42'), typeof Number('42'));
console.log('9) String(42)    =', String(42), typeof String(42));
console.log('10) Boolean(0)   =', Boolean(0), typeof Boolean(0));
console.log('11) Boolean(1)   =', Boolean(1));
console.log('12) Number("abc")=', Number('abc')); // NaN: no es un número válido

// Éstos son los atajos más usados:
console.log('13) +"42"         =', +'42');      // atajo de Number()
console.log('14) `${42}`       =', `${42}`);    // atajo de String()