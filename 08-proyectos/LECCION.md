# Módulo 08 — Proyectos

> ⏱ Tiempo estimado: ~8 h · 🎯 Objetivos: al terminar sabrás unir TODO lo
> aprendido en proyectos reales (consola y web), separar la lógica de la
> interfaz, escribir código que se pueda testear con `node:test` y construir
> tu propio proyecto final.

---

## 1. Contexto (ELI5)

¿Escuchaste hablar del "tutorial hell"? Es esa sensación de mirar videos,
copiar ejemplos y, al cerrar el editor, no saber escribir nada por tu cuenta.
Pasa porque los ejercicios te dicen **qué escribir**. Los proyectos te obligan
a decidir **qué construir**.

Pensalo como aprender a andar en bicicleta: podés ver mil videos explicando
cómo funciona el manubrio, pero nadie aprende sin subirse a una bici. Este
módulo es la calle donde vas a pedalear: tres proyectos con código que
FUNCIONA de entrada (no es "completá los espacios en blanco": es "tomá esto
que funciona y hacelo tuyo"). Lo vas a correr, predecir qué hace, romperlo,
arreglarlo y extenderlo. Ese ciclo — predecir, investigar, modificar — es el
método PRIMM que usaste todo el curso, y es exactamente lo que separa a quien
copia de quien aprende.

---

## 2. Conceptos clave

| Concepto | Ejemplo | Explicación |
|---|---|---|
| Lógica pura | `jugarRonda('piedra', 'tijera')` | Funciones que solo reciben datos y devuelven datos: fáciles de testear |
| Separación lógica/UI | `if (require.main === module)` | La parte interactiva (consola o DOM) vive separada de la lógica |
| `readline` | `rl.question('Peso: ')` | Módulo nativo de Node para preguntar y leer texto por consola |
| `readline/promises` | `await rl.question(...)` | Versión moderna de readline que funciona con `async/await` |
| DOM | `document.getElementById('x')` | La representación de la página que JavaScript puede manipular |
| `localStorage` | `localStorage.setItem('clave', ...)` | Guardar datos en el navegador, sobreviven al cerrar la pestaña |
| Inmutabilidad | `[...lista, tarea]` | Devolver una lista NUEVA en vez de modificar la original: evita bugs |
| Estado de la app | `let tareas = []` | La variable "verdad única" que representa lo que la app recuerda |

**El patrón que repiten todos los proyectos:** primero escribís la lógica pura
(sin preguntar nada, sin tocar pantalla) y después le ponés un "traje" — una
interfaz que conversa con la persona. La lógica se testea; el traje se usa.

---

## 3. Ejemplos prácticos — metodología PRIMM

### 🔮 PREDICE

Antes de correr los proyectos, escribí en papel: ¿qué creés que hace cada uno?
¿Qué promete la primera frase que imprime? ¿Cuántas veces va a preguntar el
primero? **No corras antes de predecir.**

Corré los tres proyectos de consola:

```bash
node 08-proyectos/consola/01-piedra-papel-tijera.js
node 08-proyectos/consola/02-calculadora-imc.js
node 08-proyectos/consola/03-lista-tareas.js
```

Y abrí el proyecto web en tu navegador. Desde la terminal:

```bash
# Linux/macOS:
xdg-open 08-proyectos/web/index.html   # o: open 08-proyectos/web/index.html

# Windows:
explorer 08-proyectos\web\index.html
```

También corré los tests que ya vienen escritos (deberían pasar todos):

```bash
node --test --test-reporter=spec "08-proyectos/tests/*.test.js"
```

### 👀 INVESTIGA

Después de correr el proyecto 1 (piedra, papel o tijera):

1. Probá escribir una opción inválida, por ejemplo `martillo`. ¿Qué pasa? ¿El
   juego se cae o te vuelve a preguntar? ¿Dónde está el código que lo decide?
2. ¿Cómo sabe la función `jugarRonda` quién gana? Buscá el objeto `REGLAS` y
   explicá la línea `return REGLAS[jugador] === maquina ? 'ganaste' : 'perdiste'`.

Después de correr el proyecto 2 (IMC):

3. ¿Qué valor devuelve `calcularIMC(70, 1.75)`? Agarrá la calculadora y
   verificá: `70 / (1.75 * 1.75)`. ¿Por qué el resultado tiene solo 2 decimales?
4. ¿Qué pasa si ponés altura `0`? ¿Por qué el programa no se rompe?

Después de correr el proyecto 3 (lista de tareas):

5. Agregá dos tareas y completá la primera. Mirá el código de `completarTarea`:
   ¿modifica la lista original o devuelve una copia? ¿Cómo te das cuenta?
6. ¿Qué pasa si elegís la opción `5` o escribís letras en el menú?

Después de abrir el proyecto web:

7. Agregá una tarea y recargá la página (F5). ¿Dónde quedó guardada? Buscá en
   el código la línea `localStorage.setItem`.
8. Si cerraste la pestaña y volviste a abrir el archivo, ¿siguen las tareas?

### ✏️ MODIFICA

1. En `01-piedra-papel-tijera.js` cambiá `TOTAL_RONDAS = 5` por `3`. ¿Qué
   cambia en el juego? ¿Qué cambia en los tests? (Pista: los tests usan
   `jugarRonda`, no el número de rondas).
2. En `02-calculadora-imc.js`, agregá una categoría nueva a la clasificación
   (por ejemplo `'Peso muy bajo'` para IMC menor a 16). ¿Qué tests necesitarías
   para cubrirla? ¿Pasa `npm test` después del cambio?
3. En `03-lista-tareas.js`, agregá una opción de menú `5. Borrar tarea`. Necesitás
   una función pura nueva `borrarTarea(lista, id)` — escribila en estilo inmutable:
   `lista.filter((t) => t.id !== id)`.
4. En el proyecto web, cambiá el mensaje del contador para que diga "Te quedan
   X por hacer" en vez de "X pendientes · Y hechas". Encontrá dónde se arma ese
   texto en `app.js` (`actualizarResumen`).

---

## 4. Errores comunes 🚨

1. **El proceso se queda "colgado" esperando input**: si creaste la interfaz
   con `readline` pero nunca cerrás el flujo, la terminal queda esperando para
   siempre. Asegurate de que el `catch`/`finally` exista y que la opción
   `salir` cierre el loop. Si lo corrés con `node` y "no termina", revisá que
   tengas `rl.close()` al final.

2. **`require` dispara la parte interactiva**: si la CLI está fuera del guard
   `if (require.main === module)`, los tests se quedan esperando que escribas
   algo cuando hacen `require('../consola/...')`. Regla: toda la lectura de
   input, `console.log` de menú y `readline` va DENTRO del `if`. La lógica pura
   va siempre AFUERA y se exporta al final.

3. **Mutar los arrays en lugar de devolver una copia**: escribir
   `lista.push(tarea)` o `tarea.completada = true` directamente rompe la
   inmutabilidad. Los tests de este módulo verifican que la lista ORIGINAL no
   cambie. Acostumbrate al patrón `[...lista, tarea]` y `lista.map(...)`.

4. **Olvidar manejar la opción "salir" (o cualquier otra)**: si el menú solo
   maneja las opciones `1`, `2`, `3` y el usuario escribe `4` o cualquier otra
   cosa, un `else` que no existe puede dejar el loop girando (bucle infinito)
   o romper el programa con un error confuso. Siempre hay un
   `else { console.log('Opción desconocida...') }` por defecto y un caso
   explícito para salir.

5. **Validar números sin pensar en los casos borde**: `Number('')` es `0` y
   `Number('abc')` es `NaN`. Si tu validación solo pregunta "¿es mayor a 0?",
   un input vacío pasa de largo. Validá con `Number.isFinite()` Y `> 0`.

6. **Confundir `textContent` con `innerHTML` en el proyecto web**: si insertás
   la descripción de la tarea con `innerHTML`, un usuario podría pegar
   `<img onerror=...>` y ejecutar código. `textContent` escapa el texto y es
   la opción segura.

---

## 5. Ejercicios ✅

Corré los tests y hacé que pasen. Desde la raíz del repo:

```bash
node --test --test-reporter=spec "08-proyectos/tests/*.test.js"
```

O corré TODOS los tests del curso de una vez:

```bash
npm test
```

Los tres archivos de tests ya pasan contra las soluciones de referencia: tu
tarea NO es completar funciones vacías (este módulo viene terminado a
propósito), sino **leer** el código, entenderlo y extenderlo con los retos
"modo extra". Cada reto es una mejora que podés verificar con los tests que
escribas vos mismo.

| Proyecto | Archivo | MODO EXTRA |
|---|---|---|
| Piedra, papel o tijera | `consola/01-piedra-papel-tijera.js` | Variante "al mejor de 5": el juego termina cuando alguien llega a 3 victorias (no al llegar a la ronda 5). Guardá el historial `["piedra","papel",...]` de todas las rondas |
| Calculadora de IMC | `consola/02-calculadora-imc.js` | Historial: después de calcular, preguntá "¿querés calcular otro IMC? (s/n)" y acumulá los resultados en un array. Al final mostrá el IMC más bajo y el más alto |
| Lista de tareas | `consola/03-lista-tareas.js` | Agregá la opción `5. Borrar tarea` (con `borrarTarea(lista, id)` inmutable) y una opción `6. Estadísticas` que muestre cuántas tareas totales, hechas y pendientes hay |
| Panel web | `web/index.html` + `web/app.js` | Filtros: botones "Todas / Pendientes / Hechas" que filtren la lista mostrada (pista: creá una función `render(listaFiltrada)`) |

> 🚨 **Regla:** no borres los tests originales. Si agregás funciones nuevas,
> escribí tests nuevos en `08-proyectos/tests/` con `node:test` y mensajes en
> español — así aprendés a testear TU código, no solo el de otros.

---

## 6. Recuperación activa 🧠

Respondé SIN mirar el código (en una hoja o en tu editor):

1. ¿Qué significa "lógica pura" y por qué es más fácil de testear que un
   programa que pregunta cosas al usuario?
2. ¿Qué hace exactamente `if (require.main === module)`? ¿Qué pasaría si
   borramos esa línea de un proyecto de consola?
3. ¿Cuál es la diferencia entre `lista.push(tarea)` y
   `lista = [...lista, tarea]`? ¿Cuál modifica la lista original?
4. Escribí de memoria la firma y un ejemplo de uso de `pendientes(lista)` y
   `tareaToString(tarea)`.
5. Nombrá los 3 métodos del DOM que usamos en el panel web y qué hace cada uno
   (`getElementById`, `addEventListener`, ...).
6. ¿Para qué sirve `localStorage.setItem` + `JSON.stringify`? ¿Y
   `localStorage.getItem` + `JSON.parse`?
7. ¿Qué es la delegación de eventos y por qué es útil para una lista que
   cambia de tamaño?
8. Si un usuario escribe `NaN` como peso en la calculadora, ¿qué validación lo
   detiene? Escribí la línea de código que lo evita.

---

## 7. Proyecto 🛠

Este módulo cierra con un proyecto **a elección**: construí tu propia
aplicación desde cero. Las instrucciones y el checklist de autoevaluación
están en:

```bash
# Abrí el enunciado (desde la raíz):
less 08-proyectos/PROYECTO.md
```

Tips antes de arrancar:

- Elegí solo UNA idea. Las apps pequeñas terminadas valen más que las grandes
  a medio hacer.
- Escribí primero la lógica pura y testeala con `node:test`; después vestila
  con consola o DOM.
- Cuando funcione, preguntate: ¿qué pasa si el usuario me da datos inválidos?
  ¿Mi lista original se mantiene intacta?
- Cuando termines, corré `npm test` completo: tu proyecto nuevo no debe romper
  los tests de los módulos anteriores.

¡Felicitaciones por llegar hasta acá! 🎉 Lo que hagas ahora es exactamente lo
que hace una persona desarrolladora: ideas, lógica, interfaz y tests.