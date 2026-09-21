const { test } = require('node:test');
const assert = require('node:assert');
const { duplicarNumeros } = require('../ejercicios/03-duplicar-numeros');

test('duplicarNumeros: duplica todos los números', () => {
  const resultado = duplicarNumeros([1, 2, 3]);
  assert.deepStrictEqual(resultado, [2, 4, 6], `Esperaba [2, 4, 6] pero recibí: ${resultado}`);
});

test('duplicarNumeros: con array vacío devuelve array vacío', () => {
  const resultado = duplicarNumeros([]);
  assert.deepStrictEqual(resultado, [], `Esperaba [] pero recibí: ${resultado}`);
});

test('duplicarNumeros: maneja negativos y cero', () => {
  const resultado = duplicarNumeros([-1, 0, 5]);
  assert.deepStrictEqual(resultado, [-2, 0, 10], `Esperaba [-2, 0, 10] pero recibí: ${resultado}`);
});

test('duplicarNumeros: NO modifica el array original', () => {
  const original = [1, 2, 3];
  duplicarNumeros(original);
  assert.deepStrictEqual(original, [1, 2, 3], `El array original no debe cambiar pero quedó: ${original}`);
});