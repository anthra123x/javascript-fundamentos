const { test } = require('node:test');
const assert = require('node:assert');
const { puedeConducir } = require('../ejercicios/03-puede-conducir');

test('puedeConducir(18, true) → true (mayor y con licencia)', () => {
  const resultado = puedeConducir(18, true);
  assert.strictEqual(resultado, true, `Esperaba true pero recibí: ${resultado}`);
});

test('puedeConducir(20, true) → true (mayor y con licencia)', () => {
  const resultado = puedeConducir(20, true);
  assert.strictEqual(resultado, true, `Esperaba true pero recibí: ${resultado}`);
});

test('puedeConducir(18, false) → false (no tiene licencia)', () => {
  const resultado = puedeConducir(18, false);
  assert.strictEqual(resultado, false, `Esperaba false pero recibí: ${resultado}`);
});

test('puedeConducir(17, true) → false (es menor de edad)', () => {
  const resultado = puedeConducir(17, true);
  assert.strictEqual(resultado, false, `Esperaba false pero recibí: ${resultado}`);
});

test('puedeConducir(15, false) → false (ninguna condición se cumple)', () => {
  const resultado = puedeConducir(15, false);
  assert.strictEqual(resultado, false, `Esperaba false pero recibí: ${resultado}`);
});