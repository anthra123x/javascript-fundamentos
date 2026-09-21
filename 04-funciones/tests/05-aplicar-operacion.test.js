const { test } = require('node:test');
const assert = require('node:assert');
const { aplicarOperacion } = require('../ejercicios/05-aplicar-operacion');

test('aplicarOperacion: suma con arrow function', () => {
  const resultado = aplicarOperacion(4, 3, (a, b) => a + b);
  assert.strictEqual(resultado, 7, `Esperaba 7 pero recibí: ${resultado}`);
});

test('aplicarOperacion: multiplica con arrow function', () => {
  const resultado = aplicarOperacion(4, 3, (a, b) => a * b);
  assert.strictEqual(resultado, 12, `Esperaba 12 pero recibí: ${resultado}`);
});

test('aplicarOperacion: divide con arrow function', () => {
  const resultado = aplicarOperacion(10, 2, (a, b) => a / b);
  assert.strictEqual(resultado, 5, `Esperaba 5 pero recibí: ${resultado}`);
});

test('aplicarOperacion: resta con arrow function', () => {
  const resultado = aplicarOperacion(10, 4, (a, b) => a - b);
  assert.strictEqual(resultado, 6, `Esperaba 6 pero recibí: ${resultado}`);
});

test('aplicarOperacion: invoca la función recibida con (a, b)', () => {
  let llamados = [];
  const funcionFalsa = (x, y) => {
    llamados = [x, y];
    return 'ok';
  };
  const resultado = aplicarOperacion(7, 9, funcionFalsa);
  assert.deepStrictEqual(llamados, [7, 9], `Esperaba que operacion recibiera (7, 9) pero recibió: ${llamados}`);
  assert.strictEqual(resultado, 'ok', `Esperaba 'ok' pero recibí: ${resultado}`);
});