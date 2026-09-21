const { test } = require('node:test');
const assert = require('node:assert');
const { validarEdad } = require('../ejercicios/03-validar-edad');

test('validarEdad(25) → "Edad válida: 25"', () => {
  const resultado = validarEdad(25);
  const esperado = 'Edad válida: 25';
  assert.strictEqual(resultado, esperado, `Esperaba "${esperado}" pero recibí: "${resultado}"`);
});

test('validarEdad(0) → "Edad válida: 0" (cero es válido)', () => {
  const resultado = validarEdad(0);
  const esperado = 'Edad válida: 0';
  assert.strictEqual(resultado, esperado, `Esperaba "${esperado}" pero recibí: "${resultado}"`);
});

test('validarEdad(-1) lanza Error con mensaje "La edad no puede ser negativa"', () => {
  assert.throws(
    () => validarEdad(-1),
    /La edad no puede ser negativa/,
    'Se esperaba que el error dijera "La edad no puede ser negativa"'
  );
});

test('validarEdad("cinco") lanza Error con mensaje "La edad debe ser un número"', () => {
  assert.throws(
    () => validarEdad('cinco'),
    /La edad debe ser un número/,
    'Se esperaba que el error dijera "La edad debe ser un número"'
  );
});

test('validarEdad(null) lanza Error (null tampoco es un número)', () => {
  assert.throws(
    () => validarEdad(null),
    /La edad debe ser un número/,
    'null no es un número y debería lanzar "La edad debe ser un número"'
  );
});