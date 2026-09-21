const { test } = require('node:test');
const assert = require('node:assert');
const { parsearSeguro } = require('../ejercicios/02-parsear-seguro');

test('parsearSeguro(\'{"nombre":"Ana"}\') → { nombre: "Ana" }', () => {
  const resultado = parsearSeguro('{"nombre":"Ana"}');
  const esperado = { nombre: 'Ana' };
  assert.deepStrictEqual(resultado, esperado, `Esperaba ${JSON.stringify(esperado)} pero recibí: ${JSON.stringify(resultado)}`);
});

test('parsearSeguro(\'[1, 2, 3]\') → [1, 2, 3]', () => {
  const resultado = parsearSeguro('[1, 2, 3]');
  const esperado = [1, 2, 3];
  assert.deepStrictEqual(resultado, esperado, `Esperaba ${JSON.stringify(esperado)} pero recibí: ${JSON.stringify(resultado)}`);
});

test('parsearSeguro(\'{esto no es json}\') → null (no rompe el programa)', () => {
  const resultado = parsearSeguro('{esto no es json}');
  assert.strictEqual(resultado, null, `Esperaba null pero recibí: ${resultado}`);
});

test('parsearSeguro(\'\') → null (string vacío no es JSON válido)', () => {
  const resultado = parsearSeguro('');
  assert.strictEqual(resultado, null, `Esperaba null pero recibí: ${resultado}`);
});

test('parsearSeguro no lanza excepciones con texto inválido', () => {
  assert.doesNotThrow(
    () => parsearSeguro('texto totalmente inválido'),
    'parsearSeguro debería devolver null, no lanzar un error'
  );
});