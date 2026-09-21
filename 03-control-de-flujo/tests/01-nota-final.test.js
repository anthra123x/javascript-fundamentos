const { test } = require('node:test');
const assert = require('node:assert');
const { notaFinal } = require('../ejercicios/01-nota-final');

test('notaFinal(95) → "A"', () => {
  const resultado = notaFinal(95);
  assert.strictEqual(resultado, 'A', `Esperaba 'A' pero recibí: ${resultado}`);
});

test('notaFinal(90) → "A" (el borde 90 cuenta como A)', () => {
  const resultado = notaFinal(90);
  assert.strictEqual(resultado, 'A', `Esperaba 'A' pero recibí: ${resultado}`);
});

test('notaFinal(82) → "B"', () => {
  const resultado = notaFinal(82);
  assert.strictEqual(resultado, 'B', `Esperaba 'B' pero recibí: ${resultado}`);
});

test('notaFinal(75) → "C"', () => {
  const resultado = notaFinal(75);
  assert.strictEqual(resultado, 'C', `Esperaba 'C' pero recibí: ${resultado}`);
});

test('notaFinal(60) → "D" (el borde 60 cuenta como D)', () => {
  const resultado = notaFinal(60);
  assert.strictEqual(resultado, 'D', `Esperaba 'D' pero recibí: ${resultado}`);
});

test('notaFinal(45) → "F"', () => {
  const resultado = notaFinal(45);
  assert.strictEqual(resultado, 'F', `Esperaba 'F' pero recibí: ${resultado}`);
});

test('notaFinal(0) → "F"', () => {
  const resultado = notaFinal(0);
  assert.strictEqual(resultado, 'F', `Esperaba 'F' pero recibí: ${resultado}`);
});