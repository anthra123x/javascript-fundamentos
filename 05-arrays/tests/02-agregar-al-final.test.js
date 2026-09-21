const { test } = require('node:test');
const assert = require('node:assert');
const { agregarAlFinal } = require('../ejercicios/02-agregar-al-final');

test('agregarAlFinal: devuelve el nuevo largo del array', () => {
  const resultado = agregarAlFinal([1, 2], 3);
  assert.strictEqual(resultado, 3, `Esperaba 3 pero recibí: ${resultado}`);
});

test('agregarAlFinal: agrega a un array vacío', () => {
  const resultado = agregarAlFinal([], 'hola');
  assert.strictEqual(resultado, 1, `Esperaba 1 pero recibí: ${resultado}`);
});

test('agregarAlFinal: muta el array recibido (push)', () => {
  const arr = [1];
  const resultado = agregarAlFinal(arr, 9);
  assert.deepStrictEqual(arr, [1, 9], `El array original debe quedar [1, 9] pero quedó: ${arr}`);
  assert.strictEqual(resultado, 2, `Esperaba 2 pero recibí: ${resultado}`);
});