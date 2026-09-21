/**
 * TESTS — 03 Lista de tareas
 *
 * Verifica crearTarea / agregarTarea / completarTarea / pendientes /
 * tareaToString. Enfasis especial en INMUTABILIDAD: ninguna función debe
 * modificar la lista (ni los objetos de tarea) que recibe como entrada.
 */
const { test } = require('node:test');
const assert = require('node:assert');
const {
  crearTarea,
  agregarTarea,
  completarTarea,
  pendientes,
  tareaToString,
} = require('../consola/03-lista-tareas');

// ── crearTarea ──

test('crearTarea devuelve una tarea con la forma correcta', () => {
  const tarea = crearTarea('Comprar pan');
  assert.strictEqual(tarea.descripcion, 'Comprar pan', `Esperaba "Comprar pan" pero recibí: ${tarea.descripcion}`);
  assert.strictEqual(tarea.completada, false, 'Una tarea nueva nunca está completada');
  assert.strictEqual(typeof tarea.id, 'number', 'El id debe ser un número');
});

test('crearTarea asigna ids distintos en llamadas consecutivas', () => {
  const tarea1 = crearTarea('Primera');
  const tarea2 = crearTarea('Segunda');
  assert.notStrictEqual(tarea1.id, tarea2.id, 'Dos tareas distintas no pueden compartir id');
});

// ── agregarTarea ──

test('agregarTarea devuelve una lista con un elemento más', () => {
  const lista = [crearTarea('Comprar pan')];
  const nuevaLista = agregarTarea(lista, 'Estudiar JS');
  assert.strictEqual(nuevaLista.length, 2, `Esperaba 2 elementos pero recibí: ${nuevaLista.length}`);
});

test('agregarTarea agrega la descripción recibida al final', () => {
  const lista = [crearTarea('Comprar pan')];
  const nuevaLista = agregarTarea(lista, 'Estudiar JS');
  const ultima = nuevaLista[nuevaLista.length - 1];
  assert.strictEqual(ultima.descripcion, 'Estudiar JS', `Esperaba "Estudiar JS" pero recibí: ${ultima.descripcion}`);
  assert.strictEqual(ultima.completada, false, 'La tarea nueva queda pendiente');
});

test('agregarTarea NO muta la lista original (inmutabilidad)', () => {
  const lista = [crearTarea('Comprar pan')];
  const copia = [...lista];
  agregarTarea(lista, 'Estudiar JS');
  assert.deepStrictEqual(lista, copia, 'La lista original fue modificada: debería quedar intacta');
});

// ── completarTarea ──

test('completarTarea marca la tarea indicada como completada', () => {
  const tarea = crearTarea('Estudiar JS');
  const lista = [tarea];
  const nuevaLista = completarTarea(lista, tarea.id);
  assert.strictEqual(nuevaLista[0].completada, true, 'La tarea objetivo debería quedar completada');
});

test('completarTarea NO altera las demás tareas', () => {
  const t1 = crearTarea('Estudiar JS');
  const t2 = crearTarea('Hacer ejercicio');
  const nuevaLista = completarTarea([t1, t2], t1.id);
  assert.strictEqual(nuevaLista[0].completada, true);
  assert.strictEqual(nuevaLista[1].completada, false, 'Las otras tareas no deben cambiar');
});

test('completarTarea NO muta ni la lista ni los objetos originales (inmutabilidad)', () => {
  const tarea = crearTarea('Estudiar JS');
  const lista = [tarea];
  const copiaLista = [...lista];
  const copiaTarea = { ...tarea };

  const nuevaLista = completarTarea(lista, tarea.id);

  assert.deepStrictEqual(lista, copiaLista, 'La lista original fue modificada');
  assert.strictEqual(lista[0].completada, false, 'El objeto original de la tarea fue modificado');
  assert.strictEqual(nuevaLista[0].completada, true);
});

test('completarTarea con un id inexistente no cambia nada', () => {
  const lista = [crearTarea('Comprar pan')];
  const copia = [...lista];
  const nuevaLista = completarTarea(lista, 9999);
  assert.deepStrictEqual(nuevaLista, copia, 'Si no existe el id, la lista debe quedar igual');
});

// ── pendientes ──

test('pendientes devuelve solo las tareas incompletas', () => {
  const t1 = crearTarea('Terminada');
  const t2 = crearTarea('Pendiente A');
  const t3 = crearTarea('Pendiente B');
  const lista = completarTarea([t1, t2, t3], t1.id);

  const resultado = pendientes(lista);
  assert.strictEqual(resultado.length, 2, `Esperaba 2 pendientes pero recibí: ${resultado.length}`);
  assert.ok(resultado.every((t) => !t.completada), 'Todas las devueltas deben estar pendientes');
});

test('pendientes devuelve una lista NUEVA (no la misma referencia)', () => {
  const lista = [crearTarea('Comprar pan')];
  const resultado = pendientes(lista);
  assert.notStrictEqual(resultado, lista, 'pendientes debe filtrar creando una lista nueva');
});

test('pendientes de una lista vacía → []', () => {
  const resultado = pendientes([]);
  assert.deepStrictEqual(resultado, [], 'Una lista vacía no tiene pendientes');
});

// ── tareaToString ──

test('tareaToString de una tarea pendiente → "⬜ pendiente · ..."', () => {
  const tarea = { id: 1, descripcion: 'Comprar pan', completada: false };
  const resultado = tareaToString(tarea);
  assert.strictEqual(resultado, '⬜ pendiente · Comprar pan', `Recibí: ${resultado}`);
});

test('tareaToString de una tarea completada → "✔ hecho · ..."', () => {
  const tarea = { id: 1, descripcion: 'Comprar pan', completada: true };
  const resultado = tareaToString(tarea);
  assert.strictEqual(resultado, '✔ hecho · Comprar pan', `Recibí: ${resultado}`);
});