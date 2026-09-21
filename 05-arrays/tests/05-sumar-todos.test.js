const { test } = require('node:test');
const assert = require('node:assert');
const { sumarTodos } = require('../ejercicios/05-sumar-todos');

test('sumarTodos: suma todos los números', () => {
  const resultado = sumarTodos([1, 2, 3]);
  assert.strictEqual(resultado, 6, `Esperaba 6 pero recibí: ${resultado}`);
});

test('sumarTodos: con array vacío devuelve 0', () => {
  const resultado = sumarTodos([]);
  assert.strictEqual(resultado, 0, `Esperaba 0 pero recibí: ${resultado}`);
});

test('sumarTodos: funciona con un solo elemento', () => {
  const resultado = sumarTodos([42]);
  assert.strictEqual(resultado, 42, `Esperaba 42 pero recibí: ${resultado}`);
});

test('sumarTodos: maneja números negativos', () => {
  const resultado = sumarTodos([-5, 5, 2]);
  assert.strictEqual(resultado, 2, `Esperaba 2 pero recibí: ${resultado}`);
});

test('sumarTodos: devuelve un número (reduce)', () => {
  const resultado = sumarTodos([10, 20]);
  assert.strictEqual(typeof resultado, 'number', `La función debe devolver un número, se recibió: ${typeof resultado}`);
});