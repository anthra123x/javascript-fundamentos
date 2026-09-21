const { test } = require('node:test');
const assert = require('node:assert');
const { areaRectangulo } = require('../ejercicios/02-area-rectangulo');

test('areaRectangulo: calcula base por altura', () => {
  const resultado = areaRectangulo(4, 3);
  assert.strictEqual(resultado, 12, `Esperaba 12 pero recibí: ${resultado}`);
});

test('areaRectangulo: cuadrado (base y altura iguales)', () => {
  const resultado = areaRectangulo(5, 5);
  assert.strictEqual(resultado, 25, `Esperaba 25 pero recibí: ${resultado}`);
});

test('areaRectangulo: con altura cero el área es cero', () => {
  const resultado = areaRectangulo(2, 0);
  assert.strictEqual(resultado, 0, `Esperaba 0 pero recibí: ${resultado}`);
});

test('areaRectangulo: respeta el orden de los parámetros', () => {
  const resultado = areaRectangulo(2, 10);
  assert.strictEqual(resultado, 20, `Esperaba 20 pero recibí: ${resultado}`);
});