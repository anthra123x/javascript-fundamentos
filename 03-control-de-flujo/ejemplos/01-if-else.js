/**
 * EJEMPLO 01 — if / else if / else
 *
 * Ejecuta con:  node 03-control-de-flujo/ejemplos/01-if-else.js
 *
 * 🔮 PREDICE: antes de correr, anotá qué mensajes imprime el programa.
 */

// if/else permite ejecutar código SOLO cuando una condición es verdadera.
// La condición se escribe entre paréntesis y SIEMPRE se convierte en true/false.

// Ejemplo con edad:
const edad = 17;

if (edad >= 18) {
  console.log('Sos mayor de edad.');
} else {
  console.log('Todavía sos menor de edad.');
}

// Cadena de condiciones con else if (se evalúa en orden):
const nota = 85;

if (nota >= 90) {
  console.log('Calificación: A');
} else if (nota >= 80) {
  console.log('Calificación: B');
} else if (nota >= 70) {
  console.log('Calificación: C');
} else {
  console.log('Calificación: F');
}

// Detalle importante: la primera condición que se cumple "gana".
// Si nota fuera 95, solo imprimiría 'A' y nunca llegaría a las demás.
// Por eso el orden de las condiciones importa: van de la más exigente a la menor.

// Los valores falsy también "apagan" el if:
const nombre = '';
if (nombre) {
  console.log(`Hola, ${nombre}.`); // no se ejecuta porque '' es falsy
} else {
  console.log('Hola, persona sin nombre.'); // sí se ejecuta
}

// También se pueden combinar condiciones con operadores lógicos:
const tieneEntrada = true;
if (edad >= 18 && tieneEntrada) {
  console.log('Podés entrar al evento.');
} else {
  console.log('No podés entrar al evento.');
}