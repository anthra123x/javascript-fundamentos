const { test } = require('node:test');
const assert = require('node:assert');
const { primerosMultiplos } = require('../ejercicios/05-primeros-multiplos');

test('primerosMultiplos(3, 4) → [3, 6, 9, 12]', () => {
  const resultado = primerosMultiplos(3, 4);
  assert.deepStrictEqual(resultado, [3, 6, 9, 12], `Esperaba [3, 6, 9, 12] pero recibí: ${JSON.stringify(resultado)}`);
});

test('primerosMultiplos(5, 3) → [5, 10, 15]', () => {
  const resultado = primerosMultiplos(5, 3);
  assert.deepStrictEqual(resultado, [5, 10, 15], `Esperaba [5, 10, 15] pero recibí: ${JSON.stringify(resultado)}`);
});

test('primerosMultiplos(7, 1) → [7]', () => {
  const resultado = primerosMultiplos(7, 1);
  assert.deepStrictEqual(resultado, [7], `Esperaba [7] pero recibí: ${JSON.stringify(resultado)}`);
});

test('primerosMultiplos(2, 5) → [2, 4, 6, 8, 10]', () => {
  const resultado = primerosMultiplos(2, 5);
  assert.deepStrictEqual(resultado, [2, 4, 6, 8, 10], `Esperaba [2, 4, 6, 8, 10] pero recibí: ${JSON.stringify(resultado)}`);
});

test('primerosMultiplos(11, 2) → [11, 22]', () => {
  const resultado = primerosMultiplos(11, 2);
  assert.deepStrictEqual(resultado, [11, 22], `Esperaba [11, 22] pero recibí: ${JSON.stringify(resultado)}`);
});