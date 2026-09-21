const { test } = require('node:test');
const assert = require('node:assert');
const { PI, GRAVEDAD } = require('../ejercicios/01-declara-constante');

test('PI debe ser 3.14159', () => {
  assert.strictEqual(
    PI,
    3.14159,
    `Esperaba PI = 3.14159 pero recibí: ${PI}. Reemplazá null en la línea de PI.`
  );
});

test('GRAVEDAD debe ser 9.8', () => {
  assert.strictEqual(
    GRAVEDAD,
    9.8,
    `Esperaba GRAVEDAD = 9.8 pero recibí: ${GRAVEDAD}. Reemplazá null en la línea de GRAVEDAD.`
  );
});

test('PI y GRAVEDAD deben declararse con const (una pista para revisar)', () => {
  // Este test solo guía: si tus constantes están bien, pasa.
  assert.notStrictEqual(PI, null, 'PI sigue siendo null. Declará `const PI = 3.14159;`');
  assert.notStrictEqual(GRAVEDAD, null, 'GRAVEDAD sigue siendo null. Declará `const GRAVEDAD = 9.8;`');
});