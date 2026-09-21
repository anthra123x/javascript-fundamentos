const { test } = require('node:test');
const assert = require('node:assert');
const { calcularPromedio } = require('../ejercicios/04-corrige-el-error');

test('calcularPromedio([10, 20, 30]) → 20', () => {
  const resultado = calcularPromedio([10, 20, 30]);
  const esperado = 20;
  assert.strictEqual(resultado, esperado, `Esperaba ${esperado} pero recibí: ${resultado}`);
});

test('calcularPromedio([1, 2, 3, 4]) → 2.5', () => {
  const resultado = calcularPromedio([1, 2, 3, 4]);
  const esperado = 2.5;
  assert.strictEqual(resultado, esperado, `Esperaba ${esperado} pero recibí: ${resultado}`);
});

test('calcularPromedio([]) → 0 (array vacío no debe dar NaN)', () => {
  const resultado = calcularPromedio([]);
  const esperado = 0;
  assert.strictEqual(resultado, esperado, `Esperaba ${esperado} pero recibí: ${resultado}`);
});

test('calcularPromedio([5]) → 5 (array de un solo elemento)', () => {
  const resultado = calcularPromedio([5]);
  const esperado = 5;
  assert.strictEqual(resultado, esperado, `Esperaba ${esperado} pero recibí: ${resultado}`);
});