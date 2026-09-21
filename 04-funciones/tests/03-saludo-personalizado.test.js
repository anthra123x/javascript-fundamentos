const { test } = require('node:test');
const assert = require('node:assert');
const { saludoPersonalizado } = require('../ejercicios/03-saludo-personalizado');

test('saludoPersonalizado: usa el prefijo por defecto "Hola"', () => {
  const resultado = saludoPersonalizado('Ana');
  assert.strictEqual(resultado, 'Hola, Ana!', `Esperaba 'Hola, Ana!' pero recibí: ${resultado}`);
});

test('saludoPersonalizado: usa el prefijo personalizado', () => {
  const resultado = saludoPersonalizado('Luis', 'Buenas');
  assert.strictEqual(resultado, 'Buenas, Luis!', `Esperaba 'Buenas, Luis!' pero recibí: ${resultado}`);
});

test('saludoPersonalizado: funciona con un segundo prefijo distinto', () => {
  const resultado = saludoPersonalizado('María', 'Hola');
  assert.strictEqual(resultado, 'Hola, María!', `Esperaba 'Hola, María!' pero recibí: ${resultado}`);
});

test('saludoPersonalizado: devuelve un string', () => {
  const resultado = saludoPersonalizado('Ana');
  assert.strictEqual(typeof resultado, 'string', `La función debe devolver un string, se recibió: ${typeof resultado}`);
});