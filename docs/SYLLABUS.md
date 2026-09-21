# 🗺 Syllabus — Mapa del curso "Fundamentos de JavaScript"

> Ruta completa de aprendizaje. Cada módulo depende del anterior: respeta el
> orden la primera vez que estudias. Los repasos pueden saltar entre módulos.

## Resumen del curso

- **Nivel:** principiante absoluto (no necesitas saber programar)
- **Duración:** 5 semanas a 45–60 min/día (o 25–30 h en total)
- **Requisitos:** Node.js 18+ instalado y un editor de texto (recomendado VS Code)
- **Formato:** lecciones markdown + ejemplos ejecutables + ejercicios con tests automáticos + proyectos

---

## Módulos

| # | Módulo | Qué aprenderás | Sección del repo |
|---|---|---|---|
| 00 | Cómo empezar | Terminal, Node.js, correr un script | `00-como-empezar/` |
| 01 | Variables y tipos de datos | `let`/`const`, primitivos, tipado dinámico, conversión | `01-variables-y-tipos/` |
| 02 | Operadores | Aritméticos, asignación, comparación, lógicos, falsy, ternario | `02-operadores/` |
| 03 | Control de flujo | `if/else`, `switch`, `while`, `for`, `break`/`continue` | `03-control-de-flujo/` |
| 04 | Funciones | Declaraciones, arrow, parámetros, scope, callbacks | `04-funciones/` |
| 05 | Arrays | Creación, mutación, iteración, `map`/`filter`/`reduce`, spread | `05-arrays/` |
| 06 | Objetos | Objetos, métodos, destructuring, JSON | `06-objetos/` |
| 07 | Errores y depuración | Leer errores, `try/catch`, depurar | `07-errores-y-depuracion/` |
| 08 | Proyectos | Proyectos integradores de consola + web | `08-proyectos/` |

---

## Objetivos por módulo

Al terminar cada módulo sabrás:

### 00 — Cómo empezar
- Explicar qué es Node.js y por qué lo usamos
- Navegar una carpeta con `cd` y `ls`
- Ejecutar `node archivo.js` y leer la salida
- Crear tu primer archivo de JavaScript

### 01 — Variables y tipos de datos
- Declarar variables con `let` y `const` y saber cuándo usar cada una
- Nombrar variables con buenas convenciones (`camelCase`)
- Identificar los tipos primitivos: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- Usar `typeof` y explicar el tipado dinámico
- Convertir entre tipos (implícita y explícitamente)

### 02 — Operadores
- Aplicar operadores aritméticos (`+ - * / % **`)
- Usar asignación compuesta (`+=`, `-=`, ...)
- Diferenciar `==` vs `===` (y por qué casi siempre usamos `===`)
- Combinar condiciones con `&&`, `||`, `!`
- Explicar falsy/truthy y aplicar short-circuit
- Usar el operador ternario para decisiones simples

### 03 — Control de flujo
- Tomar decisiones con `if` / `else if` / `else`
- Elegir `switch` para múltiples valores concretos
- Repetir con `while`, `do...while` y `for`
- Controlar bucles con `break` y `continue`
- Evitar los errores de bucle típicos (off-by-one, infinitos)

### 04 — Funciones
- Declarar funciones de tres formas: declaración, expresión, arrow
- Escribir parámetros, argumentos, valores por defecto y `rest`
- Devolver valores con `return` (y saber cuándo no)
- Explicar scope (global vs local)
- Pasar funciones como argumentos (callbacks)

### 05 — Arrays
- Crear y acceder a arrays (`arr[0]`, `.length`)
- Mutar arrays (`push`, `pop`, `shift`, `unshift`, `splice`)
- Iterar con `for...of` y `forEach`
- Transformar con `map`, filtrar con `filter`, reducir con `reduce`
- Buscar con `find`, `some`, `every`, `includes`
- Copiar y combinar con spread (`...`)

### 06 — Objetos
- Crear objetos y acceder/agregar/modificar/eliminar propiedades
- Escribir métodos
- Desestructurar objetos y arrays
- Entender qué es JSON y convertir con `JSON.stringify` / `JSON.parse`

### 07 — Errores y depuración
- Leer un stack trace y ubicar el error por línea
- Reconocer errores comunes (`ReferenceError`, `TypeError`, `SyntaxError`, ...)
- Manejar errores con `try` / `catch` / `throw`
- Depurar con `console.log` y con el flujo reproduce → aísla → hipótesis → prueba

### 08 — Proyectos
- Integrar TODO lo aprendido en proyectos terminados de consola
- Hacer juegos interactivos en terminal con `readline`
- Llevar JavaScript al navegador con el DOM (proyecto final web)

---

## Progreso recomendado en una semana tipo

| Día | Actividad |
|---|---|
| Lun | Estudio del módulo nuevo + ejercicios |
| Mar | Continuar ejercicios + proyecto del módulo |
| Mié | Módulo nuevo + repaso espaciado (días +1) |
| Jue | Ejercicios + proyecto |
| Vie | Cierre, checklist semanal, repaso libre |
| Sáb/Dom | Proyecto libre o descanso (el descanso consolida) |

---

## Después del curso (siguiente paso)

Con los fundamentos claros, el siguiente paso natural es:

1. **DOM y eventos** a fondo (interfaces web reales)
2. **Async**: `fetch`, promesas, `async/await`
3. **Node.js** para backend (rutas, archivos, APIs)
4. **Un framework** (React/Vue) y `npm` con herramientas reales

Este repo se enfoca en fundamentos sólidos: la base que hace todo lo demás
más rápido de aprender.