/**
 * TESTS — 02 Calculadora de IMC
 *
 * Verifica la fórmula del IMC (redondeo a 2 decimales) y las fronteras
 * exactas de la clasificación: 18.5, 25 y 30.
 */
const { test } = require('node:test');
const assert = require('node:assert');
const { calcularIMC, clasificarIMC } = require('../consola/02-calculadora-imc');

// ── Fórmula y redondeo ──

test('calcularIMC(70, 1.75) → 22.86 (caso clásico saludable)', () => {
  const resultado = calcularIMC(70, 1.75);
  const esperado = 22.86;
  assert.strictEqual(resultado, esperado, `Esperaba ${esperado} pero recibí: ${resultado}`);
});

test('calcularIMC(60, 1.6) → 23.44 (60 / 2.56 = 23.4375 → 23.44)', () => {
  const resultado = calcularIMC(60, 1.6);
  const esperado = 23.44;
  assert.strictEqual(resultado, esperado, `Esperaba ${esperado} pero recibí: ${resultado}`);
});

test('calcularIMC(50, 1.7) → 17.3 (redondeo a 1 decimal de un borde bajo)', () => {
  const resultado = calcularIMC(50, 1.7);
  const esperado = 17.3;
  assert.strictEqual(resultado, esperado, `Esperaba ${esperado} pero recibí: ${resultado}`);
});

test('calcularIMC(100, 1.8) → 30.86 (100 / 3.24 = 30.864...)', () => {
  const resultado = calcularIMC(100, 1.8);
  const esperado = 30.86;
  assert.strictEqual(resultado, esperado, `Esperaba ${esperado} pero recibí: ${resultado}`);
});

test('calcularIMC redondea SIEMPRE a 2 decimales', () => {
  const imc = calcularIMC(80, 1.75); // 80 / 3.0625 = 26.1224...
  const decimales = imc.toString().split('.')[1] ?? '';
  assert.ok(
    decimales.length <= 2,
    `El IMC ${imc} tiene más de 2 decimales (recibí: ${decimales.length})`
  );
});

// ── Clasificación: fronteras exactas ──

test('clasificarIMC(17.3) → "Bajo peso" (menor a 18.5)', () => {
  const resultado = clasificarIMC(17.3);
  assert.strictEqual(resultado, 'Bajo peso', `Esperaba "Bajo peso" pero recibí: ${resultado}`);
});

test('clasificarIMC(18.4) → "Bajo peso" (justo antes del límite)', () => {
  const resultado = clasificarIMC(18.4);
  assert.strictEqual(resultado, 'Bajo peso', `Esperaba "Bajo peso" pero recibí: ${resultado}`);
});

test('clasificarIMC(18.5) → "Peso normal" (el límite exacto es normal)', () => {
  const resultado = clasificarIMC(18.5);
  assert.strictEqual(resultado, 'Peso normal', `Esperaba "Peso normal" pero recibí: ${resultado}`);
});

test('clasificarIMC(24.9) → "Peso normal" (justo antes de Sobrepeso)', () => {
  const resultado = clasificarIMC(24.9);
  assert.strictEqual(resultado, 'Peso normal', `Esperaba "Peso normal" pero recibí: ${resultado}`);
});

test('clasificarIMC(25) → "Sobrepeso" (desde 25 inclusive)', () => {
  const resultado = clasificarIMC(25);
  assert.strictEqual(resultado, 'Sobrepeso', `Esperaba "Sobrepeso" pero recibí: ${resultado}`);
});

test('clasificarIMC(29.9) → "Sobrepeso" (justo antes de Obesidad)', () => {
  const resultado = clasificarIMC(29.9);
  assert.strictEqual(resultado, 'Sobrepeso', `Esperaba "Sobrepeso" pero recibí: ${resultado}`);
});

test('clasificarIMC(30) → "Obesidad" (desde 30 inclusive)', () => {
  const resultado = clasificarIMC(30);
  assert.strictEqual(resultado, 'Obesidad', `Esperaba "Obesidad" pero recibí: ${resultado}`);
});

test('clasificarIMC(35) → "Obesidad" (valores altos también)', () => {
  const resultado = clasificarIMC(35);
  assert.strictEqual(resultado, 'Obesidad', `Esperaba "Obesidad" pero recibí: ${resultado}`);
});

test('calcularIMC + clasificarIMC funcionan juntos en un caso real', () => {
  const imc = calcularIMC(70, 1.75);
  const resultado = clasificarIMC(imc);
  assert.strictEqual(resultado, 'Peso normal', `IMC ${imc} debería ser "Peso normal" pero recibí: ${resultado}`);
});