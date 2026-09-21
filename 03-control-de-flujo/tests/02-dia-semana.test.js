const { test } = require('node:test');
const assert = require('node:assert');
const { diaSemana } = require('../ejercicios/02-dia-semana');

test('diaSemana(1) → "Lunes"', () => {
  const resultado = diaSemana(1);
  assert.strictEqual(resultado, 'Lunes', `Esperaba 'Lunes' pero recibí: ${resultado}`);
});

test('diaSemana(2) → "Martes"', () => {
  const resultado = diaSemana(2);
  assert.strictEqual(resultado, 'Martes', `Esperaba 'Martes' pero recibí: ${resultado}`);
});

test('diaSemana(3) → "Miércoles"', () => {
  const resultado = diaSemana(3);
  assert.strictEqual(resultado, 'Miércoles', `Esperaba 'Miércoles' pero recibí: ${resultado}`);
});

test('diaSemana(5) → "Viernes"', () => {
  const resultado = diaSemana(5);
  assert.strictEqual(resultado, 'Viernes', `Esperaba 'Viernes' pero recibí: ${resultado}`);
});

test('diaSemana(6) → "Sábado"', () => {
  const resultado = diaSemana(6);
  assert.strictEqual(resultado, 'Sábado', `Esperaba 'Sábado' pero recibí: ${resultado}`);
});

test('diaSemana(7) → "Domingo"', () => {
  const resultado = diaSemana(7);
  assert.strictEqual(resultado, 'Domingo', `Esperaba 'Domingo' pero recibí: ${resultado}`);
});

test('diaSemana(0) → "Día inválido"', () => {
  const resultado = diaSemana(0);
  assert.strictEqual(resultado, 'Día inválido', `Esperaba 'Día inválido' pero recibí: ${resultado}`);
});

test('diaSemana(9) → "Día inválido"', () => {
  const resultado = diaSemana(9);
  assert.strictEqual(resultado, 'Día inválido', `Esperaba 'Día inválido' pero recibí: ${resultado}`);
});

test('diaSemana("3") → "Día inválido" (switch compara con ===)', () => {
  const resultado = diaSemana('3');
  assert.strictEqual(resultado, 'Día inválido', `Esperaba 'Día inválido' pero recibí: ${resultado}`);
});