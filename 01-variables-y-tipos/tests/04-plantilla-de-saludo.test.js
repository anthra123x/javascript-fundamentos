const { test } = require('node:test');
const assert = require('node:assert');
const { saludo } = require('../ejercicios/04-plantilla-de-saludo');

test('saludo("Ana") → ¡Hola, Ana! Estás aprendiendo JavaScript.', () => {
  const resultado = saludo('Ana');
  const esperado = '¡Hola, Ana! Estás aprendiendo JavaScript.';
  assert.strictEqual(resultado, esperado, `Esperaba "${esperado}" pero recibí: "${resultado}"`);
});

test('saludo("Leo") → ¡Hola, Leo! Estás aprendiendo JavaScript.', () => {
  const resultado = saludo('Leo');
  const esperado = '¡Hola, Leo! Estás aprendiendo JavaScript.';
  assert.strictEqual(resultado, esperado, `Esperaba "${esperado}" pero recibí: "${resultado}"`);
});

test('saludo usa template literal con ${nombre}', () => {
  const codigo = require('node:fs').readFileSync(
    require('node:path').join(__dirname, '..', 'ejercicios', '04-plantilla-de-saludo.js'),
    'utf-8'
  );
  assert.match(
    codigo,
    /`/,
    'Parece que no usaste template literals (backticks). Probá con: return `¡Hola, ${nombre}! Estás aprendiendo JavaScript.`;'
  );
});