const { test } = require('node:test');
const assert = require('node:assert');
const { actualizarEdad } = require('../ejercicios/02-actualizar-edad');

test('actualizarEdad({ nombre: "Ana", edad: 30 }, 31) → { nombre: "Ana", edad: 31 }', () => {
  const resultado = actualizarEdad({ nombre: 'Ana', edad: 30 }, 31);
  const esperado = { nombre: 'Ana', edad: 31 };
  assert.deepStrictEqual(resultado, esperado, `Esperaba ${JSON.stringify(esperado)} pero recibí: ${JSON.stringify(resultado)}`);
});

test('actualizarEdad NO muta el objeto original', () => {
  const usuarioOriginal = { nombre: 'Ana', edad: 30 };
  actualizarEdad(usuarioOriginal, 40);
  const esperado = { nombre: 'Ana', edad: 30 };
  assert.deepStrictEqual(
    usuarioOriginal,
    esperado,
    `El objeto original fue modificado. Debería seguir siendo ${JSON.stringify(esperado)} pero quedó: ${JSON.stringify(usuarioOriginal)}`
  );
});

test('actualizarEdad devuelve un objeto NUEVO (no la misma referencia)', () => {
  const usuario = { nombre: 'Ana', edad: 30 };
  const resultado = actualizarEdad(usuario, 31);
  assert.notStrictEqual(resultado, usuario, 'Devolvió la misma referencia: mutaste y reutilizaste el objeto original');
});