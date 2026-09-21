/**
 * EJEMPLO 01 — Declaración de funciones
 *
 * Ejecuta con:  node 04-funciones/ejemplos/01-declaracion.js
 *
 * 🔮 PREDICE: ¿qué imprime cada console.log? ¿En qué orden?
 */

console.log('=== Declaración de funciones ===');

// Declaración clásica con `function`
// Las declaraciones sufren HOISTING: la función "sube" al inicio del archivo
// y puede llamarse ANTES de su definición.
function doble(numero) {
  return numero * 2;
}

// Llamada ANTES de la definición: funciona por el hoisting de declaraciones
console.log('Resultado ANTES de la definición:', doble(4));

// Definición de la función
function sumar(a, b) {
  return a + b;
}

console.log('Suma:', sumar(3, 5));

// Función SIN return: devuelve undefined
function sinRetorno() {
  console.log('Ejecuto algo pero no retorno nada');
}

const resultadoSinRetorno = sinRetorno();
console.log('Valor devuelto por sinRetorno:', resultadoSinRetorno);

// Retornar imprime, pero también es mejor practicar: imprimir vs retornar
function mensaje() {
  return 'Hola desde el return';
}

const mensajeGuardado = mensaje();
console.log('Mensaje guardado en variable:', mensajeGuardado);