const { test } = require('node:test');
const assert = require('node:assert');
const { filtrarMayores } = require('../ejercicios/04-filtrar-mayores');

test('filtrarMayores: devuelve solo los mayores que el mínimo', () => {
  const resultado = filtrarMayores([1, 5, 8, 2], 3);
  assert.deepStrictEqual(resultado, [5, 8], `Esperaba [5, 8] pero recibí: ${resultado}`);
});

test('filtrarMayores: con el mínimo igual a un elemento, ese elemento NO pasa', () => {
  const resultado = filtrarMayores([10, 4, 7], 4);
  assert.deepStrictEqual(resultado, [10, 7], `Esperaba [10, 7] pero recibí: ${resultado}`);
});

test('filtrarMayores: con array vacío devuelve array vacío', () => {
  const resultado = filtrarMayores([], 0);
  assert.deepStrictEqual(resultado, [], `Esperaba [] pero recibí: ${resultado}`);
});

test('filtrarMayores: NO modifica el array original', () => {
  const original = [1, 5, 8];
  filtrarMayores(original, 3);
  assert.deepStrictEqual(original, [1, 5, 8], `El array original no debe cambiar pero quedó: ${original}`);
});

test('filtrarMayores: acepta negativos como mínimo', () => {
  const resultado = filtrarMayores([-5, 0, 3], -1);
  assert.deepStrictEqual(resultado, [0, 3], `Esperaba [0, 3] pero recibí: ${resultado}`);
});