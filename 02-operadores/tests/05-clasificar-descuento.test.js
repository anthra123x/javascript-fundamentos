const { test } = require('node:test');
const assert = require('node:assert');
const { clasificarDescuento } = require('../ejercicios/05-clasificar-descuento');

test('clasificarDescuento(true, 150) → "20%" (miembro y monto >= 100)', () => {
  const resultado = clasificarDescuento(true, 150);
  assert.strictEqual(resultado, '20%', `Esperaba '20%' pero recibí: ${resultado}`);
});

test('clasificarDescuento(true, 100) → "20%" (el borde 100 cuenta)', () => {
  const resultado = clasificarDescuento(true, 100);
  assert.strictEqual(resultado, '20%', `Esperaba '20%' pero recibí: ${resultado}`);
});

test('clasificarDescuento(true, 50) → "10%" (miembro pero monto bajo)', () => {
  const resultado = clasificarDescuento(true, 50);
  assert.strictEqual(resultado, '10%', `Esperaba '10%' pero recibí: ${resultado}`);
});

test('clasificarDescuento(true, 99) → "10%" (miembro pero monto 99)', () => {
  const resultado = clasificarDescuento(true, 99);
  assert.strictEqual(resultado, '10%', `Esperaba '10%' pero recibí: ${resultado}`);
});

test('clasificarDescuento(false, 200) → "sin descuento" (no es miembro)', () => {
  const resultado = clasificarDescuento(false, 200);
  assert.strictEqual(resultado, 'sin descuento', `Esperaba 'sin descuento' pero recibí: ${resultado}`);
});

test('clasificarDescuento(false, 0) → "sin descuento" (no es miembro ni monto)', () => {
  const resultado = clasificarDescuento(false, 0);
  assert.strictEqual(resultado, 'sin descuento', `Esperaba 'sin descuento' pero recibí: ${resultado}`);
});