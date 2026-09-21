const { test } = require('node:test');
const assert = require('node:assert');
const { cuentaRegresiva } = require('../ejercicios/04-cuenta-regresiva');

test('cuentaRegresiva(3) → "3,2,1,0"', () => {
  const resultado = cuentaRegresiva(3);
  assert.strictEqual(resultado, '3,2,1,0', `Esperaba '3,2,1,0' pero recibí: ${resultado}`);
});

test('cuentaRegresiva(5) → "5,4,3,2,1,0"', () => {
  const resultado = cuentaRegresiva(5);
  assert.strictEqual(resultado, '5,4,3,2,1,0', `Esperaba '5,4,3,2,1,0' pero recibí: ${resultado}`);
});

test('cuentaRegresiva(1) → "1,0"', () => {
  const resultado = cuentaRegresiva(1);
  assert.strictEqual(resultado, '1,0', `Esperaba '1,0' pero recibí: ${resultado}`);
});

test('cuentaRegresiva(0) → "0"', () => {
  const resultado = cuentaRegresiva(0);
  assert.strictEqual(resultado, '0', `Esperaba '0' pero recibí: ${resultado}`);
});

test('cuentaRegresiva(2) → "2,1,0" (sin coma final)', () => {
  const resultado = cuentaRegresiva(2);
  assert.strictEqual(resultado, '2,1,0', `Esperaba '2,1,0' pero recibí: ${resultado}`);
});