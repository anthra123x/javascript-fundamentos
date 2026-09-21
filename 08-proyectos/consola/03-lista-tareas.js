/**
 * PROYECTO 03 — Lista de tareas en memoria
 *
 * Un gestor de tareas que corre en la consola: agregar, completar y ver.
 *
 * ── Arquitectura ─────────────────────────────────────────────────────────
 *  1) LÓGICA PURA: crearTarea / agregarTarea / completarTarea / pendientes
 *     / tareaToString. Nada de readline acá.
 *     IMPORTANTE: agregarTarea y completarTarea NO mutan la lista original:
 *     devuelven una NUEVA lista (estilo inmutable). Esto evita bugs y hace
 *     el código predecible.
 *  2) INTERFAZ CLI: menú con readline. Solo corre con require.main ===
 *     module. La variable local `lista` es la única mutable del programa.
 */

// ── Lógica pura (testeable, SIN readline) ────────────────────────────────

// Contador interno para generar ids únicos.
let siguienteId = 1;

/**
 * Crea una tarea nueva (aún no está completada).
 *
 * @param {string} descripcion - Qué hay que hacer
 * @returns {{id: number, descripcion: string, completada: boolean}} La tarea
 *
 * ➡️ Ejemplo:
 *    crearTarea('Comprar pan')  →  { id: 1, descripcion: 'Comprar pan', completada: false }
 */
function crearTarea(descripcion) {
  const tarea = { id: siguienteId, descripcion, completada: false };
  siguienteId += 1; // el próximo id será distinto
  return tarea;
}

/**
 * Devuelve UNA NUEVA lista con la tarea agregada al final.
 * La lista original NO se modifica.
 *
 * @param {Array} lista - Lista actual de tareas
 * @param {string} descripcion - Descripción de la nueva tarea
 * @returns {Array} Nueva lista con la tarea agregada
 */
function agregarTarea(lista, descripcion) {
  const nuevaLista = [...lista, crearTarea(descripcion)];
  return nuevaLista;
}

/**
 * Devuelve UNA NUEVA lista con la tarea indicada marcada como completada.
 * El objeto de la tarea original NO se modifica: creamos una copia.
 *
 * @param {Array} lista - Lista actual de tareas
 * @param {number} id - Id de la tarea a completar
 * @returns {Array} Nueva lista con la tarea completada
 */
function completarTarea(lista, id) {
  return lista.map((tarea) => {
    if (tarea.id === id) {
      // Copiamos la tarea y solo cambiamos completada (sin tocar el original).
      return { ...tarea, completada: true };
    }
    return tarea;
  });
}

/**
 * Filtra y devuelve SOLO las tareas pendientes (no completadas).
 * Devuelve una lista nueva; no muta la original.
 *
 * @param {Array} lista - Lista actual de tareas
 * @returns {Array} Tareas con completada === false
 */
function pendientes(lista) {
  return lista.filter((tarea) => !tarea.completada);
}

/**
 * Formatea una tarea para mostrarla en la consola.
 *
 * @param {{id: number, descripcion: string, completada: boolean}} tarea
 * @returns {string} '✔ hecho · <descripcion>' o '⬜ pendiente · <descripcion>'
 */
function tareaToString(tarea) {
  const estado = tarea.completada ? '✔ hecho' : '⬜ pendiente';
  return `${estado} · ${tarea.descripcion}`;
}

// ── Interfaz CLI (usa readline de Node) ──────────────────────────────────

if (require.main === module) {
  const readline = require('node:readline/promises');
  const { stdin, stdout } = require('node:process');

  const rl = readline.createInterface({ input: stdin, output: stdout });

  // Estado de la aplicación: la ÚNICA variable mutable del programa.
  let lista = [];

  function verTareas() {
    if (lista.length === 0) {
      console.log('📭 No hay tareas por ahora.');
      return;
    }
    console.log('   Tareas:');
    lista.forEach((tarea, indice) => {
      console.log(`   ${indice + 1}. ${tareaToString(tarea)}`);
    });
    // Usamos la función pura pendientes() para el resumen.
    const faltan = pendientes(lista).length;
    console.log(`   ⏳ Pendientes: ${faltan} · ✅ Hechas: ${lista.length - faltan}`);
  }

  async function pedirDescripcion() {
    while (true) {
      const descripcion = (await rl.question('Nueva tarea: ')).trim();
      if (descripcion !== '') return descripcion;
      console.log('❌ La descripción no puede estar vacía.');
    }
  }

  async function pedirIdValido() {
    while (true) {
      const entrada = (await rl.question('¿Qué número de tarea completaste? ')).trim();
      const id = Number(entrada);
      if (Number.isInteger(id) && lista.some((tarea) => tarea.id === id)) {
        return id;
      }
      console.log('❌ Ese id de tarea no existe. Mirá la lista para elegir un número válido.');
    }
  }

  async function menu() {
    let salir = false;

    while (!salir) {
      console.log('\n' + '─'.repeat(36));
      console.log('📋 LISTA DE TAREAS');
      console.log('   1. Agregar tarea');
      console.log('   2. Completar tarea');
      console.log('   3. Ver tareas');
      console.log('   4. Salir');

      const opcion = (await rl.question('Elegí una opción (1-4): ')).trim();

      if (opcion === '1') {
        const descripcion = await pedirDescripcion();
        lista = agregarTarea(lista, descripcion); // inmutable: reasignamos la variable
        console.log(`✅ Tarea agregada: ${tareaToString(lista[lista.length - 1])}`);
      } else if (opcion === '2') {
        if (lista.length === 0) {
          console.log('📭 No hay tareas para completar todavía.');
          continue;
        }
        verTareas();
        const id = await pedirIdValido();
        lista = completarTarea(lista, id); // inmutable: reasignamos la variable
        console.log('🎉 Tarea completada (¡seguí así!).');
      } else if (opcion === '3') {
        verTareas();
      } else if (opcion === '4') {
        salir = true;
        console.log('👋 ¡Hasta la próxima!');
      } else {
        console.log('❌ Opción desconocida. Escribí un número del 1 al 4.');
      }
    }
  }

  menu()
    .catch((error) => console.error('💥 Se produjo un error:', error.message))
    .finally(() => rl.close());
}

// Exportamos la lógica pura (los tests la importan sin iniciar la CLI).
module.exports = { crearTarea, agregarTarea, completarTarea, pendientes, tareaToString };