const { test } = require('node:test');
const assert = require('node:assert');
const { incluyeElemento } = require('../ejercicios/06-incluye-elemento');

test('incluyeElemento: devuelve true cuando el elemento existe', () => {
  const resultado = incluyeElemento(['a', 'b'], 'a');
  assert.strictEqual(resultado, true, `Esperaba true pero recibí: ${resultado}`);
});

test('incluyeElemento: devuelve false cuando el elemento no existe', () => {
  const resultado = incluyeElemento(['a', 'b'], 'z');
  assert.strictEqual(resultado, false, `Esperaba false pero recibí: ${resultado}`);
});

test('incluyeElemento: con array vacío devuelve false', () => {
  const resultado = incluyeElemento([], 'x');
  assert.strictEqual(resultado, false, `Esperaba false pero recibí: ${resultado}`);
});

test('incluyeElemento: funciona con números', () => {
  const resultado = incluyeElemento([1, 2, 3], 2);
  assert.strictEqual(resultado, true, `Esperaba true pero recibí: ${resultado}`);
});

test('incluyeElemento: distingue tipos (1 no es "1")', () => {
  const resultado = incluyeElemento([1, 2], '1');
  assert.strictEqual(resultado, false, `Esperaba false pero recibí: ${resultado}`);
});