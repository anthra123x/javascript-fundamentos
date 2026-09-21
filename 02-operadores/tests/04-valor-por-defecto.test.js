const { test } = require('node:test');
const assert = require('node:assert');
const { valorPorDefecto } = require('../ejercicios/04-valor-por-defecto');

test('valorPorDefecto("texto") → "texto" (truthy se conserva)', () => {
  const resultado = valorPorDefecto('texto');
  assert.strictEqual(resultado, 'texto', `Esperaba 'texto' pero recibí: ${resultado}`);
});

test('valorPorDefecto(42) → 42 (número truthy se conserva)', () => {
  const resultado = valorPorDefecto(42);
  assert.strictEqual(resultado, 42, `Esperaba 42 pero recibí: ${resultado}`);
});

test('valorPorDefecto(null) → "por defecto" (null es falsy)', () => {
  const resultado = valorPorDefecto(null);
  assert.strictEqual(resultado, 'por defecto', `Esperaba 'por defecto' pero recibí: ${resultado}`);
});

test('valorPorDefecto(undefined) → "por defecto" (undefined es falsy)', () => {
  const resultado = valorPorDefecto(undefined);
  assert.strictEqual(resultado, 'por defecto', `Esperaba 'por defecto' pero recibí: ${resultado}`);
});

test('valorPorDefecto("") → "por defecto" (cadena vacía es falsy)', () => {
  const resultado = valorPorDefecto('');
  assert.strictEqual(resultado, 'por defecto', `Esperaba 'por defecto' pero recibí: ${resultado}`);
});

test('valorPorDefecto(0) → "por defecto" (cero es falsy)', () => {
  const resultado = valorPorDefecto(0);
  assert.strictEqual(resultado, 'por defecto', `Esperaba 'por defecto' pero recibí: ${resultado}`);
});

test('valorPorDefecto(false) → "por defecto" (false es falsy)', () => {
  const resultado = valorPorDefecto(false);
  assert.strictEqual(resultado, 'por defecto', `Esperaba 'por defecto' pero recibí: ${resultado}`);
});

test('valorPorDefecto(NaN) → "por defecto" (NaN es falsy)', () => {
  const resultado = valorPorDefecto(NaN);
  assert.strictEqual(resultado, 'por defecto', `Esperaba 'por defecto' pero recibí: ${resultado}`);
});