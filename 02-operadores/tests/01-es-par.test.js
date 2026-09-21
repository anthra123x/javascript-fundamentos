const { test } = require('node:test');
const assert = require('node:assert');
const { esPar } = require('../ejercicios/01-es-par');

test('esPar(4) → true', () => {
  const resultado = esPar(4);
  assert.strictEqual(resultado, true, `Esperaba true para 4 pero recibí: ${resultado}`);
});

test('esPar(7) → false', () => {
  const resultado = esPar(7);
  assert.strictEqual(resultado, false, `Esperaba false para 7 pero recibí: ${resultado}`);
});

test('esPar(0) → true', () => {
  const resultado = esPar(0);
  assert.strictEqual(resultado, true, `Esperaba true para 0 pero recibí: ${resultado}`);
});

test('esPar(-3) → false', () => {
  const resultado = esPar(-3);
  assert.strictEqual(resultado, false, `Esperaba false para -3 pero recibí: ${resultado}`);
});

test('esPar(100) → true', () => {
  const resultado = esPar(100);
  assert.strictEqual(resultado, true, `Esperaba true para 100 pero recibí: ${resultado}`);
});