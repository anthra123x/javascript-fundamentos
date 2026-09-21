/**
 * TESTS — 01 Piedra, Papel o Tijera
 *
 * Cubre las 9 combinaciones posibles de ronda + manejo de entradas inválidas.
 * Importa la lógica pura desde ../consola/01-piedra-papel-tijera.js
 * (al requerir el archivo, la parte interactiva NO corre gracias al guard
 * `require.main === module`).
 */
const { test } = require('node:test');
const assert = require('node:assert');
const { jugarRonda, OPCIONES } = require('../consola/01-piedra-papel-tijera');

// ── Las 9 combinaciones ──

test('jugarRonda("piedra", "piedra") → "empate" (opciones iguales)', () => {
  const resultado = jugarRonda('piedra', 'piedra');
  assert.strictEqual(resultado, 'empate', `Esperaba "empate" pero recibí: ${resultado}`);
});

test('jugarRonda("papel", "papel") → "empate" (opciones iguales)', () => {
  const resultado = jugarRonda('papel', 'papel');
  assert.strictEqual(resultado, 'empate', `Esperaba "empate" pero recibí: ${resultado}`);
});

test('jugarRonda("tijera", "tijera") → "empate" (opciones iguales)', () => {
  const resultado = jugarRonda('tijera', 'tijera');
  assert.strictEqual(resultado, 'empate', `Esperaba "empate" pero recibí: ${resultado}`);
});

test('jugarRonda("piedra", "tijera") → "ganaste" (piedra vence a tijera)', () => {
  const resultado = jugarRonda('piedra', 'tijera');
  assert.strictEqual(resultado, 'ganaste', `Esperaba "ganaste" pero recibí: ${resultado}`);
});

test('jugarRonda("piedra", "papel") → "perdiste" (papel vence a piedra)', () => {
  const resultado = jugarRonda('piedra', 'papel');
  assert.strictEqual(resultado, 'perdiste', `Esperaba "perdiste" pero recibí: ${resultado}`);
});

test('jugarRonda("tijera", "papel") → "ganaste" (tijera vence a papel)', () => {
  const resultado = jugarRonda('tijera', 'papel');
  assert.strictEqual(resultado, 'ganaste', `Esperaba "ganaste" pero recibí: ${resultado}`);
});

test('jugarRonda("tijera", "piedra") → "perdiste" (piedra vence a tijera)', () => {
  const resultado = jugarRonda('tijera', 'piedra');
  assert.strictEqual(resultado, 'perdiste', `Esperaba "perdiste" pero recibí: ${resultado}`);
});

test('jugarRonda("papel", "piedra") → "ganaste" (papel vence a piedra)', () => {
  const resultado = jugarRonda('papel', 'piedra');
  assert.strictEqual(resultado, 'ganaste', `Esperaba "ganaste" pero recibí: ${resultado}`);
});

test('jugarRonda("papel", "tijera") → "perdiste" (tijera vence a papel)', () => {
  const resultado = jugarRonda('papel', 'tijera');
  assert.strictEqual(resultado, 'perdiste', `Esperaba "perdiste" pero recibí: ${resultado}`);
});

// ── Manejo de entradas inválidas ──

test('jugarRonda con opción desconocida lanza un Error', () => {
  assert.throws(
    () => jugarRonda('lagarto', 'piedra'),
    Error,
    'Una opción fuera de "piedra"|"papel"|"tijera" debería lanzar un error'
  );
});

test('jugarRonda("PIEDRA", "piedra") lanza un Error (es sensible a mayúsculas)', () => {
  assert.throws(
    () => jugarRonda('PIEDRA', 'piedra'),
    Error,
    'Solo se aceptan minúsculas exactas: "piedra", "papel", "tijera"'
  );
});

test('jugarRonda("piedra", "") lanza un Error (opción de máquina vacía)', () => {
  assert.throws(
    () => jugarRonda('piedra', ''),
    Error,
    'La opción de la máquina también debe ser válida'
  );
});

test('jugarRonda valida entradas de la máquina además de las del jugador', () => {
  assert.throws(
    () => jugarRonda('piedra', 'spock'),
    Error,
    'Si la máquina elige algo inválido, debe lanzar un error igual'
  );
});

// ── Propiedades auxiliares ──

test('OPCIONES expone exactamente las 3 jugadas válidas', () => {
  assert.deepStrictEqual(
    OPCIONES,
    ['piedra', 'papel', 'tijera'],
    `Esperaba ['piedra', 'papel', 'tijera'] pero recibí: ${JSON.stringify(OPCIONES)}`
  );
});

test('ninguna combinación válida devuelve un resultado inesperado', () => {
  const resultadosValidos = new Set(['ganaste', 'perdiste', 'empate']);
  for (const jugador of OPCIONES) {
    for (const maquina of OPCIONES) {
      const resultado = jugarRonda(jugador, maquina);
      assert.ok(
        resultadosValidos.has(resultado),
        `jugarRonda(${jugador}, ${maquina}) devolvió: ${resultado}`
      );
    }
  }
});