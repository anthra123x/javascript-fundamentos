const { test } = require('node:test');
const assert = require('node:assert');
const { presentarse } = require('../ejercicios/03-presentarse');

test('presentarse({ nombre: "Ana", edad: 30 }) → "Hola, soy Ana y tengo 30 años."', () => {
  const resultado = presentarse({ nombre: 'Ana', edad: 30 });
  const esperado = 'Hola, soy Ana y tengo 30 años.';
  assert.strictEqual(resultado, esperado, `Esperaba "${esperado}" pero recibí: "${resultado}"`);
});

test('presentarse({ nombre: "Leo", edad: 25 }) → "Hola, soy Leo y tengo 25 años."', () => {
  const resultado = presentarse({ nombre: 'Leo', edad: 25 });
  const esperado = 'Hola, soy Leo y tengo 25 años.';
  assert.strictEqual(resultado, esperado, `Esperaba "${esperado}" pero recibí: "${resultado}"`);
});

test('presentarse devuelve un string', () => {
  const resultado = presentarse({ nombre: 'Ana', edad: 30 });
  assert.strictEqual(typeof resultado, 'string', `Esperaba un string pero recibí: ${typeof resultado}`);
});