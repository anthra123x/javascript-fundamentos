# Proyecto del Módulo 06 — Registro de estudiantes

> 🎯 Objetivo: integrar objetos, métodos, destructuring y arrays en un mini
> sistema que administra estudiantes.

## Enunciado

Creá un script `app.js` en la raíz del repo (o, si preferís, un archivo
`registro.js` en esta carpeta) que gestione un listado de estudiantes.

Empezá con este esqueleto:

```js
// Registro de estudiantes
const estudiantes = [];

function agregarEstudiante(nombre, edad, curso) {
  // 1. Creá un objeto { nombre, edad, curso } usando shorthand
  // 2. Agregalo al array con .push()
  // 3. Devolvé el array actualizado (o el objeto creado, como prefieras)
}

function listarEstudiantes() {
  // Imprimí cada estudiante con: - {nombre}, {edad} años, curso: {curso}
  // Pista: usá for...of o forEach
}

function buscarPorNombre(nombre) {
  // Devolvé el primer estudiante cuyo nombre coincida (usa .find())
  // Si no existe, devolvé null
}
```

### Flujo de ejemplo

```js
agregarEstudiante('Ana', 30, 'Objetos');
agregarEstudiante('Leo', 25, 'Errores');
agregarEstudiante('Paz', 22, 'Objetos');

listarEstudiantes();
// →  - Ana, 30 años, curso: Objetos
//     - Leo, 25 años, curso: Errores
//     - Paz, 22 años, curso: Objetos

console.log(buscarPorNombre('Leo'));
// →  { nombre: 'Leo', edad: 25, curso: 'Errores' }

console.log(buscarPorNombre('Nadie'));
// →  null
```

## Checklist de verificación

Antes de dar el proyecto por terminado, marcá cada ítem:

- [ ] `agregarEstudiante` crea un objeto NUEVO con las 3 propiedades usando
      shorthand (no `{ nombre: nombre }` repetido).
- [ ] Se pueden agregar varios estudiantes y el array los conserva todos.
- [ ] `listarEstudiantes` imprime exactamente el formato
      `- {nombre}, {edad} años, curso: {curso}`.
- [ ] `buscarPorNombre` devuelve el objeto del primer estudiante que coincide.
- [ ] `buscarPorNombre('AlgoInexistente')` devuelve `null` (no `undefined`).
- [ ] El código corre sin errores con `node app.js`.
- [ ] Probá agregar estudiantes con distintos cursos y verificar la lista.

## Para ir más allá (opcional)

- Agregá `buscarPorCurso(curso)` que devuelva TODOS los estudiantes de un
  curso (pista: usá `filter` en vez de `find`).
- Agregá `sumarEdades()` que devuelva la suma de las edades de todos los
  estudiantes (pista: usá `reduce` o un acumulador con `for...of`).