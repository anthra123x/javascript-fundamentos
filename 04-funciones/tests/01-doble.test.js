const { test } = require('node:test');
const assert = require('node:assert');
const { doble } = require('../ejercicios/01-doble');

test('doble: devuelve el doble de un número positivo', () => {
  const resultado = doble(2);
  assert.strictEqual(resultado, 4, `Esperaba 4 pero recibí: ${resultado}`);
});

test('doble: devuelve el doble de cero', () => {
  const resultado = doble(0);
  assert.strictEqual(resultado, 0, `Esperaba 0 pero recibí: ${resultado}`);
});

test('doble: funciona con números negativos', () => {
  const resultado = doble(-3);
  assert.strictEqual(resultado, -6, `Esperaba -6 pero recibí: ${resultado}`);
});

test('doble: funciona con decimales', () => {
  const resultado = doble(1.5);
  assert.strictEqual(resultado, 3, `Esperaba 3 pero recibí: ${resultado}`);
});

test('doble: devuelve un número y no imprime en consola', () => {
  const resultado = doble(5);
  assert.strictEqual(typeof resultado, 'number', `La función debe devolver un número, se recibió: ${typeof resultado}`);
});