/**
 * Mini panel de tareas — app.js
 *
 * Proyecto web del módulo 08. JavaScript puro, cero dependencias.
 * Las tareas se persisten en localStorage (data del navegador), así que
 * sobreviven aunque cierres la pestaña.
 *
 * Flujo central de la app:
 *   1. El usuario escribe una tarea y hace submit del formulario.
 *   2. Se crea un objeto tarea → se agrega a la lista → se guarda → se re-renderiza.
 *   3. Cada tarea tiene un checkbox (completar/descompletar) y un botón para borrar.
 */

// ── Datos persistentes ───────────────────────────────────────────────────

// Nombre de la "caja" donde el navegador guarda nuestras tareas.
const CLAVE = 'neonjs-panel-tareas';

/** Lee las tareas guardadas. Si no hay nada, devuelve una lista vacía. */
function leerTareas() {
  try {
    const crudo = localStorage.getItem(CLAVE);
    return crudo ? JSON.parse(crudo) : [];
  } catch (error) {
    // Si el JSON guardado está corrupto, mejor empezar de cero.
    console.warn('No se pudieron leer las tareas guardadas:', error.message);
    return [];
  }
}

/** Guarda la lista completa en localStorage (JSON.stringify la convierte en texto). */
function guardarTareas(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista));
}

/** Crea un id único sin depender de librerías (fecha + número al azar). */
function generarId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/**
 * Crea una tarea nueva.
 * @param {string} descripcion - Qué hay que hacer
 * @returns {{id: string, descripcion: string, completada: boolean}}
 */
function crearTarea(descripcion) {
  return { id: generarId(), descripcion, completada: false };
}

// ── Referencias al DOM (los elementos de la página) ─────────────────────

const formulario = document.getElementById('formulario');
const entrada = document.getElementById('entrada');
const listaElemento = document.getElementById('lista-tareas');
const vacio = document.getElementById('vacio');
const resumenTexto = document.getElementById('resumen-texto');
const mensaje = document.getElementById('mensaje');
const botonVaciar = document.getElementById('vaciar');

// Estado de la aplicación: la lista de tareas actual.
let tareas = leerTareas();

// ── Renderizado ──────────────────────────────────────────────────────────

/**
 * Pinta TODA la lista de tareas en el HTML.
 * Se llama después de cada cambio (agregar, completar, borrar).
 */
function render() {
  listaElemento.innerHTML = ''; // limpiamos el <ul> y lo reconstruimos

  tareas.forEach((tarea) => {
    // Cada tarea es un <li> con checkbox + texto + botón borrar.
    const item = document.createElement('li');
    if (tarea.completada) item.classList.add('completada');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarea.completada;
    checkbox.setAttribute('aria-label', `Marcar ${tarea.descripcion} como ${tarea.completada ? 'pendiente' : 'completada'}`);

    const texto = document.createElement('span');
    texto.className = 'texto';
    texto.textContent = tarea.descripcion; // textContent evita inyección de HTML

    const borrar = document.createElement('button');
    borrar.type = 'button';
    borrar.className = 'borrar';
    borrar.textContent = '✕';
    borrar.setAttribute('aria-label', `Eliminar tarea: ${tarea.descripcion}`);

    item.append(checkbox, texto, borrar);
    listaElemento.appendChild(item);
  });

  actualizarResumen();
}

/** Actualiza el contador y muestra/oculta el mensaje de "no hay tareas". */
function actualizarResumen() {
  const pendientes = tareas.filter((t) => !t.completada).length;
  const hechas = tareas.length - pendientes;
  resumenTexto.textContent = `${pendientes} pendientes · ${hechas} hechas`;
  vacio.style.display = tareas.length === 0 ? 'block' : 'none';
}

/** Muestra un aviso breve (accesible con aria-live) y lo borra a los 3s. */
function anunciar(texto) {
  mensaje.textContent = texto;
  setTimeout(() => { mensaje.textContent = ''; }, 3000);
}

// ── Eventos (la interacción de la app) ──────────────────────────────────

// 1) Agregar tarea: submit del formulario (Enter o clic en "Agregar").
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // evitamos que la página se recargue

  const descripcion = entrada.value.trim();
  if (descripcion === '') {
    anunciar('⚠️ Escribí una descripción antes de agregar.');
    entrada.focus();
    return;
  }

  tareas.push(crearTarea(descripcion)); // agregamos al estado
  guardarTareas(tareas);                // persistimos
  render();                             // repintamos

  entrada.value = '';                   // limpiamos el campo
  entrada.focus();                      // volvemos al input, listos para la próxima
  anunciar(`✅ Tarea agregada: ${descripcion}`);
});

// 2) Completar / descompletar: delegamos el evento "change" al <ul>.
listaElemento.addEventListener('change', (evento) => {
  const checkbox = evento.target;
  if (!checkbox.matches('input[type="checkbox"]')) return;

  const item = checkbox.closest('li');
  const indice = [...listaElemento.children].indexOf(item);
  // Alternamos: si estaba true pasa a false y viceversa.
  tareas[indice].completada = checkbox.checked;

  guardarTareas(tareas);
  render();
  anunciar(checkbox.checked ? '🎉 ¡Tarea completada!' : '↩️ Tarea marcada como pendiente.');
});

// 3) Borrar tarea: delegamos el evento "click" al <ul> y buscamos el botón.
listaElemento.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button.borrar');
  if (!boton) return;

  const item = boton.closest('li');
  const indice = [...listaElemento.children].indexOf(item);
  const eliminada = tareas[indice];

  tareas.splice(indice, 1); // quitamos la tarea del estado
  guardarTareas(tareas);
  render();
  anunciar(`🗑️ Tarea eliminada: ${eliminada.descripcion}`);
  entrada.focus(); // devolvemos el foco al campo de texto
});

// 4) Vaciar lista completa (con confirmación para no borrar por accidente).
botonVaciar.addEventListener('click', () => {
  if (tareas.length > 0 && confirm('¿Vaciar toda la lista? Esta acción no se puede deshacer.')) {
    tareas = [];
    guardarTareas(tareas);
    render();
    anunciar('🧹 Lista vaciada.');
    entrada.focus();
  }
});

// ── Arranque ─────────────────────────────────────────────────────────────
render(); // al abrir la página, dibujamos lo que ya estaba guardado