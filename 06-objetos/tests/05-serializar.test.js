const { test } = require('node:test');
const assert = require('node:assert');
const { serializar, deserializar } = require('../ejercicios/05-serializar');

test('serializar({ nombre: "Ana", edad: 30 }) → \'{"nombre":"Ana","edad":30}\'', () => {
  const resultado = serializar({ nombre: 'Ana', edad: 30 });
  const esperado = '{"nombre":"Ana","edad":30}';
  assert.strictEqual(resultado, esperado, `Esperaba ${esperado} pero recibí: ${resultado}`);
});

test('serializar devuelve un string JSON', () => {
  const resultado = serializar({ nombre: 'Ana', edad: 30 });
  assert.strictEqual(typeof resultado, 'string', `Esperaba un string pero recibí: ${typeof resultado}`);
});

test('deserializar(\'{"nombre":"Leo","edad":25}\') → objeto con nombre y edad', () => {
  const resultado = deserializar('{"nombre":"Leo","edad":25}');
  const esperado = { nombre: 'Leo', edad: 25 };
  assert.deepStrictEqual(resultado, esperado, `Esperaba ${JSON.stringify(esperado)} pero recibí: ${JSON.stringify(resultado)}`);
});

test('serializar y deserializar funcionan como ida y vuelta (round-trip)', () => {
  const original = { nombre: 'Ana', edad: 30, esDev: true };
  const recuperado = deserializar(serializar(original));
  assert.deepStrictEqual(recuperado, original, `Esperaba recuperar ${JSON.stringify(original)} pero recibí: ${JSON.stringify(recuperado)}`);
});