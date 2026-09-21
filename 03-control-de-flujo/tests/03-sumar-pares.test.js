const { test } = require('node:test');
const assert = require('node:assert');
const { sumarPares } = require('../ejercicios/03-sumar-pares');

test('sumarPares(10) → 30 (2 + 4 + 6 + 8 + 10)', () => {
  const resultado = sumarPares(10);
  assert.strictEqual(resultado, 30, `Esperaba 30 pero recibí: ${resultado}`);
});

test('sumarPares(7) → 12 (2 + 4 + 6)', () => {
  const resultado = sumarPares(7);
  assert.strictEqual(resultado, 12, `Esperaba 12 pero recibí: ${resultado}`);
});

test('sumarPares(5) → 6 (2 + 4)', () => {
  const resultado = sumarPares(5);
  assert.strictEqual(resultado, 6, `Esperaba 6 pero recibí: ${resultado}`);
});

test('sumarPares(0) → 0', () => {
  const resultado = sumarPares(0);
  assert.strictEqual(resultado, 0, `Esperaba 0 pero recibí: ${resultado}`);
});

test('sumarPares(2) → 2', () => {
  const resultado = sumarPares(2);
  assert.strictEqual(resultado, 2, `Esperaba 2 pero recibí: ${resultado}`);
});

test('sumarPares(20) → 110 (suma de pares hasta 20)', () => {
  const resultado = sumarPares(20);
  assert.strictEqual(resultado, 110, `Esperaba 110 pero recibí: ${resultado}`);
});