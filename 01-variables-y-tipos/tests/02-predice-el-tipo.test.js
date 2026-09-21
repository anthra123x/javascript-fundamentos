const { test } = require('node:test');
const assert = require('node:assert');
const { tipoDeValor } = require('../ejercicios/02-predice-el-tipo');

test('tipoDeValor(42) → number', () => {
  const resultado = tipoDeValor(42);
  assert.strictEqual(resultado, 'number', `Esperaba 'number' pero recibí: ${resultado}`);
});

test('tipoDeValor("hola") → string', () => {
  const resultado = tipoDeValor('hola');
  assert.strictEqual(resultado, 'string', `Esperaba 'string' pero recibí: ${resultado}`);
});

test('tipoDeValor(true) → boolean', () => {
  const resultado = tipoDeValor(true);
  assert.strictEqual(resultado, 'boolean', `Esperaba 'boolean' pero recibí: ${resultado}`);
});

test('tipoDeValor(undefined) → undefined', () => {
  const resultado = tipoDeValor(undefined);
  assert.strictEqual(resultado, 'undefined', `Esperaba 'undefined' pero recibí: ${resultado}`);
});

test('tipoDeValor([1, 2]) → object (los arrays son objetos)', () => {
  const resultado = tipoDeValor([1, 2]);
  assert.strictEqual(resultado, 'object', `Esperaba 'object' pero recibí: ${resultado}`);
});