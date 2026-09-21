const { test } = require('node:test');
const assert = require('node:assert');
const { sumarTodos } = require('../ejercicios/04-sumar-todos');

test('sumarTodos: suma tres números', () => {
  const resultado = sumarTodos(1, 2, 3);
  assert.strictEqual(resultado, 6, `Esperaba 6 pero recibí: ${resultado}`);
});

test('sumarTodos: suma dos números', () => {
  const resultado = sumarTodos(10, 20);
  assert.strictEqual(resultado, 30, `Esperaba 30 pero recibí: ${resultado}`);
});

test('sumarTodos: sin argumentos devuelve 0', () => {
  const resultado = sumarTodos();
  assert.strictEqual(resultado, 0, `Esperaba 0 pero recibí: ${resultado}`);
});

test('sumarTodos: suma muchos números', () => {
  const resultado = sumarTodos(1, 2, 3, 4, 5);
  assert.strictEqual(resultado, 15, `Esperaba 15 pero recibí: ${resultado}`);
});

test('sumarTodos: acepta números negativos', () => {
  const resultado = sumarTodos(-5, 5, 2);
  assert.strictEqual(resultado, 2, `Esperaba 2 pero recibí: ${resultado}`);
});