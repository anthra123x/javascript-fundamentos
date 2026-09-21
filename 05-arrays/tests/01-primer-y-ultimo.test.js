const { test } = require('node:test');
const assert = require('node:assert');
const { primerElemento, ultimoElemento } = require('../ejercicios/01-primer-y-ultimo');

test('primerElemento: devuelve el primer elemento', () => {
  const resultado = primerElemento(['a', 'b', 'c']);
  assert.strictEqual(resultado, 'a', `Esperaba 'a' pero recibí: ${resultado}`);
});

test('primerElemento: funciona con números', () => {
  const resultado = primerElemento([10, 20, 30]);
  assert.strictEqual(resultado, 10, `Esperaba 10 pero recibí: ${resultado}`);
});

test('ultimoElemento: devuelve el último elemento', () => {
  const resultado = ultimoElemento(['a', 'b', 'c']);
  assert.strictEqual(resultado, 'c', `Esperaba 'c' pero recibí: ${resultado}`);
});

test('ultimoElemento: funciona con un solo elemento', () => {
  const resultado = ultimoElemento(['único']);
  assert.strictEqual(resultado, 'único', `Esperaba 'único' pero recibí: ${resultado}`);
});

test('ultimoElemento: con array vacío devuelve undefined', () => {
  const resultado = ultimoElemento([]);
  assert.strictEqual(resultado, undefined, `Esperaba undefined pero recibí: ${resultado}`);
});