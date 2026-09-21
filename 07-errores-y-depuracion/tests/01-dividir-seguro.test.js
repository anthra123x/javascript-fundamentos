const { test } = require('node:test');
const assert = require('node:assert');
const { dividirSeguro } = require('../ejercicios/01-dividir-seguro');

test('dividirSeguro(10, 2) → 5', () => {
  const resultado = dividirSeguro(10, 2);
  const esperado = 5;
  assert.strictEqual(resultado, esperado, `Esperaba ${esperado} pero recibí: ${resultado}`);
});

test('dividirSeguro(9, 3) → 3', () => {
  const resultado = dividirSeguro(9, 3);
  const esperado = 3;
  assert.strictEqual(resultado, esperado, `Esperaba ${esperado} pero recibí: ${resultado}`);
});

test('dividirSeguro(10, 0) → "Error: división entre cero"', () => {
  const resultado = dividirSeguro(10, 0);
  const esperado = 'Error: división entre cero';
  assert.strictEqual(resultado, esperado, `Esperaba "${esperado}" pero recibí: ${resultado}`);
});

test('dividirSeguro(0, 5) → 0 (dividir cero es válido)', () => {
  const resultado = dividirSeguro(0, 5);
  const esperado = 0;
  assert.strictEqual(resultado, esperado, `Esperaba ${esperado} pero recibí: ${resultado}`);
});

test('dividirSeguro no lanza una excepción al dividir por cero', () => {
  assert.doesNotThrow(() => dividirSeguro(10, 0), 'Dividir por cero debería devolver el mensaje, no lanzar un error');
});