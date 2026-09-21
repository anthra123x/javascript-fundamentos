const { test } = require('node:test');
const assert = require('node:assert');
const { crearUsuario } = require('../ejercicios/01-crear-usuario');

test('crearUsuario("Ana", 30) → { nombre: "Ana", edad: 30 }', () => {
  const resultado = crearUsuario('Ana', 30);
  const esperado = { nombre: 'Ana', edad: 30 };
  assert.deepStrictEqual(resultado, esperado, `Esperaba ${JSON.stringify(esperado)} pero recibí: ${JSON.stringify(resultado)}`);
});

test('crearUsuario("Leo", 25) → { nombre: "Leo", edad: 25 }', () => {
  const resultado = crearUsuario('Leo', 25);
  const esperado = { nombre: 'Leo', edad: 25 };
  assert.deepStrictEqual(resultado, esperado, `Esperaba ${JSON.stringify(esperado)} pero recibí: ${JSON.stringify(resultado)}`);
});

test('crearUsuario devuelve un OBJETO real', () => {
  const resultado = crearUsuario('Ana', 30);
  assert.strictEqual(typeof resultado, 'object', `Esperaba un objeto pero recibí: ${typeof resultado}`);
  assert.strictEqual(Array.isArray(resultado), false, 'Devuelve un array, pero se esperaba un objeto');
  assert.notStrictEqual(resultado, null, 'Devuelve null, pero se esperaba un objeto');
});