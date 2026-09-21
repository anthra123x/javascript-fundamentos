/**
 * EJEMPLO 04 — Operadores lógicos (&&, ||, !)
 *
 * Ejecuta con:  node 02-operadores/ejemplos/04-logicos.js
 *
 * 🔮 PREDICE: antes de correr, completá la tabla de verdad en papel:
 *   true  && true   = ?
 *   true  && false  = ?
 *   false && true   = ?
 *   false && false  = ?
 *   true  || true   = ?   ... y así sucesivamente
 */

// Tabla de verdad de &&
console.log('true  && true  →', true && true);   // true
console.log('true  && false →', true && false);  // false
console.log('false && true  →', false && true);  // false
console.log('false && false →', false && false); // false

// Tabla de verdad de ||
console.log('true  || true  →', true || true);   // true
console.log('true  || false →', true || false);  // true
console.log('false || true  →', false || true);  // true
console.log('false || false →', false || false); // false

// Negación !
console.log('!true  →', !true);   // false
console.log('!false →', !false);  // true

// Uso realista: controlar si una persona es adulta Y tiene entrada
let esAdulto = true;
let tieneEntrada = false;
console.log('puede entrar (ambas):', esAdulto && tieneEntrada); // false

// O si una condición alternativa alcanza
let esJubilado = true;
console.log('tiene precio especial (adulto o jubilado):', esAdulto || esJubilado); // true

// 👀 INVESTIGA: && y || NO siempre devuelven true/false.
// Devuelven el VALOR que decidió el resultado (cortocircuito).

// En &&, si el primero es falso, se corta y devuelve el primero:
console.log('0 && "hola" →', 0 && 'hola');       // 0  (no llega a mirar "hola")
console.log('1 && "hola" →', 1 && 'hola');       // "hola" (los dos son verdaderos, devuelve el último)

// En ||, si el primero es verdadero, se corta y devuelve el primero:
console.log('"hola" || 0 →', 'hola' || 0);       // "hola"
console.log('0 || "hola" →', 0 || 'hola');       // "hola"

// El operador ! se puede combinar: !!dato  convierte a booleano "de verdad"
console.log('!!"texto" →', !!"texto"); // true
console.log('!!0 →', !!0);            // false