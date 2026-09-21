const { test } = require('node:test');
const assert = require('node:assert');
const { aNumero, aTexto, aBooleano } = require('../ejercicios/03-convierte-tipos');

test('aNumero("42") → 42', () => {
  const resultado = aNumero('42');
  assert.strictEqual(resultado, 42, `Esperaba 42 pero recibí: ${resultado}`);
});

test('aNumero("3.14") → 3.14', () => {
  const resultado = aNumero('3.14');
  assert.strictEqual(resultado, 3.14, `Esperaba 3.14 pero recibí: ${resultado}`);
});

test('aTexto(42) → "42"', () => {
  const resultado = aTexto(42);
  assert.strictEqual(resultado, '42', `Esperaba '42' pero recibí: ${resultado}`);
});

test('aTexto(true) → "true"', () => {
  const resultado = aTexto(true);
  assert.strictEqual(resultado, 'true', `Esperaba 'true' pero recibí: ${resultado}`);
});

test('aBooleano(0) → false', () => {
  const resultado = aBooleano(0);
  assert.strictEqual(resultado, false, `Esperaba false pero recibí: ${resultado}`);
});

test('aBooleano(1) → true', () => {
  const resultado = aBooleano(1);
  assert.strictEqual(resultado, true, `Esperaba true pero recibí: ${resultado}`);
});