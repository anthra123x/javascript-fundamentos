# ⚡ Neon JS — Curso de Fundamentos de JavaScript

![JavaScript](https://img.shields.io/badge/lang-JavaScript-yellow?style=for-the-badge&logo=javascript)
![Node](https://img.shields.io/badge/node-%3E%3D18-green?style=for-the-badge&logo=node.js)
![Dependencies](https://img.shields.io/badge/dependencies-0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

> **Cloná, estudiá, practicá.** Un curso completo de fundamentos de JavaScript
> diseñado con metodologías de aprendizaje basadas en evidencia: PRIMM,
> recuperación activa, repetición espaciada y aprendizaje por proyectos.
> **Cero dependencias** — solo necesitás Node.js.

---

## 🚀 Inicio rápido (5 pasos)

```bash
# 1. Cloná el repositorio
git clone https://github.com/tu-usuario/javascript-fundamentos.git
cd javascript-fundamentos

# 2. Verificá que tenés Node.js (versión 18 o superior)
node --version

# 3. Probá tu primer script
node app.js

# 4. Abrí el panel de estudio en tu navegador
#    (hacé doble clic en index.html, o servilo con un servidor simple)
python -m http.server 8000   # luego abrí http://localhost:8000

# 5. Corré los tests del curso (¡todos los ejercicios automáticamente!)
npm test
```

¡Eso es todo! No hay `npm install`, no hay build, no hay configuración.
Podés empezar a estudiar hoy mismo.

---

## 📚 Tabla de contenidos

- [¿Qué es este curso?](#-qué-es-este-curso)
- [Metodología de aprendizaje](#-metodología-de-aprendizaje)
- [Estructura del repositorio](#-estructura-del-repositorio)
- [Cómo estudiar](#-cómo-estudiar)
- [Módulos del curso](#-módulos-del-curso)
- [Documentación](#-documentación)
- [Cómo contribuir](#-cómo-contribuir)
- [Licencia](#-licencia)

---

## 💡 ¿Qué es este curso?

Es un **cuaderno de aprendizaje práctico** de JavaScript para principiantes
hispanohablantes. Cada módulo combina:

- **📖 Lecciones** en markdown con teoría simple (analogías ELI5) y ejemplos comentados.
- **🧪 Ejercicios con tests automáticos** (`node:test`): escribís tu solución y
  `npm test` te dice al instante si funciona, con mensajes de error en español.
- **🛠 Mini-proyectos** que integran lo aprendido en cada módulo.
- **🧠 Bloques de recuperación activa**: preguntas para contestar de memoria.

El objetivo no es que "mires" código: es que **escribas** código. La carpeta
`soluciones/` existe solo para verificar después de intentar.

---

## 🧠 Metodología de aprendizaje

Este curso se construye sobre **ciencia del aprendizaje**, no intuición:

| Principio | En la práctica |
|---|---|
| **PRIMM** | *Predice* qué imprime el código → *corre* → *investiga* → *modifica* → *crea*. Cada lección sigue este flujo. |
| **Recuperación activa** | Los bloques `🧠` te obligan a recordar de memoria, no a releer. |
| **Repetición espaciada** | El calendario de repaso (días +1, +3, +7, +14) fija el aprendizaje a largo plazo. |
| **Dificultades deseables** | Los tests fallan a propósito mientras aprendés: el esfuerzo es la señal de que estás aprendiendo. |
| **Proyectos** | Construir algo real luego de cada módulo, con la regla 1:2 (1 h de lectura → 2 h de código). |

> 📖 Leé la **[Guía de Estudio](docs/GUIA-DE-ESTUDIO.md)** antes de empezar:
> contiene el método diario de 45–60 min, el calendario de repaso espaciado, el
> plan de 5 semanas y las reglas anti-"tutorial hell".

---

## 📁 Estructura del repositorio

```
javascript-fundamentos/
├── README.md                     ← estás aquí
├── index.html                    ← panel de estudio (mapa + progreso)
├── app.js                        ← tu zona de práctica libre
├── package.json                  ← scripts: npm test, npm start
├── docs/
│   ├── GUIA-DE-ESTUDIO.md        ← metodología, calendario, plan de 5 semanas
│   ├── SYLLABUS.md               ← mapa del curso y objetivos por módulo
│   ├── CHEATSHEET.md             ← referencia rápida de sintaxis
│   └── ERRORES.md                ← cómo leer errores de Node
│
├── 00-como-empezar/              ← setup, terminal, primer script
├── 01-variables-y-tipos/         ← let/const, primitivos, typeof, conversión
├── 02-operadores/                ← aritméticos, comparación, lógicos, ternario
├── 03-control-de-flujo/          ← if/else, switch, while, for
├── 04-funciones/                 ← declaraciones, arrows, scope, callbacks
├── 05-arrays/                    ← métodos, iteración, map/filter/reduce
├── 06-objetos/                   ← objetos, métodos, destructuring, JSON
├── 07-errores-y-depuracion/      ← leer errores, try/catch/throw
└── 08-proyectos/                 ← proyectos integradores (consola + web)
```

**Estructura interna de cada módulo** (ejemplo con `01-variables-y-tipos/`):

```
01-variables-y-tipos/
├── LECCION.md          ← teoría + ejemplos con metodología PRIMM
├── ejemplos/           ← scripts ejecutables y comentados
├── ejercicios/         ← acá escribís TU solución (con TODO)
├── soluciones/         ← solo mirar después de intentar
├── tests/              ← tests automáticos (node:test, mensajes en español)
└── PROYECTO.md         ← mini-proyecto que cierra el módulo
```

---

## 🧭 Cómo estudiar

### El flujo diario (45–60 min)

1. **Repaso espaciado (5')**: resolvé ejercicios de módulos anteriores según el calendario.
2. **PREDECÍ (5')**: antes de correr un ejemplo, escribí qué creés que imprime.
3. **Leé y ejecutá (15')**: cada ejemplo con `node ruta/ejemplo.js`.
4. **Resolvé ejercicios (20')**: corré los tests y hacé que pasen.
5. **Recuperación activa (5')**: contestá de memoria las preguntas del bloque `🧠`.

### Correr ejemplos

```bash
node 01-variables-y-tipos/ejemplos/01-variables.js
```

### Correr los tests de un módulo

```bash
node --test --test-reporter=spec "01-variables-y-tipos/tests/*.test.js"
```

### Correr TODOS los tests del curso

```bash
npm test
```

### Tu espacio de práctica

`app.js` es tu lienzo: experimentá, rompé código, reescribí soluciones de
memoria. Ejecutalo con `node app.js` o `npm start`.

---

## 🗂 Módulos del curso

| # | Módulo | Qué aprenderás |
|---|---|---|
| 00 | [Cómo empezar](00-como-empezar/LECCION.md) | Terminal, Node.js, tu primer script |
| 01 | [Variables y tipos de datos](01-variables-y-tipos/LECCION.md) | `let`/`const`, primitivos, tipado dinámico, conversión |
| 02 | [Operadores](02-operadores/LECCION.md) | Aritméticos, asignación, comparación, lógicos, falsy, ternario |
| 03 | [Control de flujo](03-control-de-flujo/LECCION.md) | `if/else`, `switch`, `while`, `for`, `break`/`continue` |
| 04 | [Funciones](04-funciones/LECCION.md) | Declaraciones, arrows, parámetros, scope, callbacks |
| 05 | [Arrays](05-arrays/LECCION.md) | Creación, mutación, iteración, `map`/`filter`/`reduce`, spread |
| 06 | [Objetos](06-objetos/LECCION.md) | Objetos, métodos, destructuring, JSON |
| 07 | [Errores y depuración](07-errores-y-depuracion/LECCION.md) | Leer errores, `try/catch`, depurar |
| 08 | [Proyectos](08-proyectos/LECCION.md) | Proyectos integradores de consola y web |

Ruta estimada: **5 semanas** a 45–60 min/día (25–30 h totales). El detalle
completo de objetivos está en el [Syllabus](docs/SYLLABUS.md).

---

## 📖 Documentación

| Documento | Para qué sirve |
|---|---|
| [Guía de Estudio](docs/GUIA-DE-ESTUDIO.md) | Metodología, método diario, calendario de repaso, plan de 5 semanas |
| [Syllabus](docs/SYLLABUS.md) | Mapa del curso, objetivos por módulo, progreso semanal |
| [Cheatsheet](docs/CHEATSHEET.md) | Referencia rápida de sintaxis de JavaScript |
| [Errores](docs/ERRORES.md) | Cómo leer errores de Node y protocolo de depuración |

---

## 🤝 Cómo contribuir

El curso mejora con tu feedback. Ideas de contribución:

1. **Hacé fork** del proyecto.
2. Creá una rama con tu mejora: `git checkout -b feat/nuevo-ejercicio`.
3. Mantené el estilo del template canónico (mismo formato de lección, tests en
   español, cero dependencias).
4. Hacé commits claros y descriptivos (conventional commits).
5. Abrí un Pull Request explicando los cambios.

¿Detectaste un error en un ejemplo o en un test? Abrí un issue y lo revisamos.

---

## 📜 Licencia

MIT — uso libre para estudiar, enseñar y adaptar. Ver [LICENSE](LICENSE).

---

## 📌 Por qué este repo usa cero dependencias

- **Clonar y listo**: no hay `npm install` ni `package-lock.json` que rompa.
- **Node ≥ 18** incluye el runner de tests (`node:test`) y el módulo `assert`
  de fábrica.
- Aprendés el flujo real de un desarrollador: escribir archivos, correr
  scripts, leer errores y dejar que los tests verifiquen tu código.

---

> ⚡ *El secreto no es mirar más código: es escribir más código. ¡A estudiar!*