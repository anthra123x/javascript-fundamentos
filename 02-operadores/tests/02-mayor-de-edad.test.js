const { test } = require('node:test');
const assert = require('node:assert');
const { mayorDeEdad } = require('../ejercicios/02-mayor-de-edad');

test('mayorDeEdad(18) → true', () => {
  const resultado = mayorDeEdad(18);
  assert.strictEqual(resultado, true, `Esperaba true para 18 pero recibí: ${resultado}`);
});

test('mayorDeEdad(17) → false', () => {
  const resultado = mayorDeEdad(17);
  assert.strictEqual(resultado, false, `Esperaba false para 17 pero recibí: ${resultado}`);
});

test('mayorDeEdad(25) → true', () => {
  const resultado = mayorDeEdad(25);
  assert.strictEqual(resultado, true, `Esperaba true para 25 pero recibí: ${resultado}`);
});

test('mayorDeEdad(0) → false', () => {
  const resultado = mayorDeEdad(0);
  assert.strictEqual(resultado, false, `Esperaba false para 0 pero recibí: ${resultado}`);
});

test('mayorDeEdad(21) → true (recién cumplidos)', () => {
  const resultado = mayorDeEdad(21);
  assert.strictEqual(resultado, true, `Esperaba true para 21 pero recibí: ${resultado}`);
});