# Módulo 07 — Errores y depuración

> ⏱ Tiempo estimado: ~4 h · 🎯 Objetivos: al terminar sabrás identificar los
> tipos de error de JavaScript, manejar errores con `try/catch/finally`,
> lanzar tus propios errores con `throw`, leer un stack trace y depurar
> código con logs.

---

## 1. Contexto (ELI5)

Imaginá que estás siguiendo una receta de cocina y al leer el paso 3 te das
cuenta de que pusiste "2 tazas de sal" en vez de "2 cucharaditas". Si seguís
igual, la comida se arruina pero **no sabés cuál fue el problema** — solo
terminás con algo incomible.

Los errores de JavaScript funcionan al revés y mucho mejor: cuando algo sale
mal, el programa **lanza un mensaje de auxilio** (un error) que te dice *qué*
falló, *dónde* falló y en *qué línea* del archivo. Aprender a leer esos
mensajes es aprender a cocinar sin quemar la comida: el error ES la pista
principal.

Y cuando estás escribiendo código para otras personas, `throw` te permite
crear tus propios "avisos" cuando alguien usa mal tu función, y `try/catch`
te permite atrapar esos avisos antes de que rompan todo el programa.

---

## 2. Conceptos clave

| Concepto | Ejemplo | Explicación |
|---|---|---|
| Error | `throw new Error('mensaje')` | Un aviso de que algo salió mal |
| `error.name` | `'TypeError'` | El tipo o categoría del error |
| `error.message` | `'x is not a function'` | La descripción breve del problema |
| `error.stack` | `error.stack` | El stack trace: dónde y cómo se llegó al error |
| `try` | `try { ... }` | Bloque con código que puede fallar |
| `catch` | `catch (error) { ... }` | Se ejecuta SOLO si algo en `try` falló |
| `finally` | `finally { ... }` | Se ejecuta SIEMPRE, haya error o no |
| `throw` | `throw new Error('...')` | Lanzar (crear) un error a propósito |
| Depurar | `console.log(valor)` | Imprimir valores para encontrar el bug |

---

## 3. Ejemplos prácticos — metodología PRIMM

### 🔮 PREDICE

Antes de correr *cualquiera* de los ejemplos, escribí en papel qué creés que
imprime o qué error esperás. **No corras antes de predecir** — predecir
(aunque te equivoques) activa tu cerebro para aprender.

```bash
node 07-errores-y-depuracion/ejemplos/01-tipos-de-errores.js
node 07-errores-y-depuracion/ejemplos/02-try-catch.js
node 07-errores-y-depuracion/ejemplos/03-throw.js
node 07-errores-y-depuracion/ejemplos/04-depuracion-con-logs.js
node 07-errores-y-depuracion/ejemplos/05-stack-trace.js
```

### 👀 INVESTIGA

Después de correr el ejemplo 1:

1. ¿Qué diferencia hay entre `ReferenceError` y `TypeError`? ¿Podés inventar
   un caso de cada uno?
2. ¿Por qué un `SyntaxError` no se puede capturar con `try/catch`?

Después de correr el ejemplo 2:

3. ¿En qué orden se ejecutaron `try`, `catch` y `finally` en cada llamada?
   ¿Cuándo corre el `catch`?
4. ¿Qué propiedad del error te dice el tipo y cuál la descripción?

Después de correr el ejemplo 5:

5. ¿Dónde mirarías primero en un stack trace: la línea de arriba o la de
   abajo? ¿Por qué?

### ✏️ MODIFICA

1. Escribí una función `raizCuadradaSegura(numero)` que lance un `RangeError`
   si el número es negativo y devuelva `Math.sqrt(numero)` si es válido.
2. Cambiá el ejemplo de `intentarParsear` para que, en vez de devolver `null`,
   devuelva un objeto por defecto `{ error: true, mensaje: error.message }`.
3. Creá tu propio `class ErrorDeNegocio extends Error` y usalo en una función
   que valide un email.
4. En el ejemplo de depuración, rompé la función arreglada a propósito
   (por ejemplo `total = total + precios[1]`) y usá logs para encontrarlo.

---

## 4. Errores comunes 🚨

1. **Ignorar el mensaje del error**: el `error.message` casi siempre dice la
   solución. Si dice `x is not defined`, buscá dónde se escribe `x`.
2. **Leer el stack trace al revés**: la causa está en la PRIMERA línea
   (`at funcion (archivo:linea)`), no en la última.
3. **Poner try/catch alrededor de TODO**: envuelve solo la parte que puede
   fallar; un try/catch gigante esconde bugs y hace el código ilegible.
4. **Olvidar `new` al lanzar errores**: `throw Error(...)` funciona, pero lo
   correcto es `throw new Error(...)`.
5. **Confundir lanzar con capturar**: `throw` CREA el aviso y `catch` lo
   RECIBE. Si una función lanza un error y nadie lo captura, el programa se
   detiene.
6. **Creer que `null`/`undefined`/`NaN` son errores capturables**: no lanzan
   una excepción, simplemente "contaminan" el resultado. Por eso conviene
   validar las entradas (con `throw`) al principio de tus funciones.
7. **Dejar los console.log de depuración en producción**: usalos para
   encontrar el bug y borralos después (o usá `console.table` para datos
   tabulares).

---

## 5. Ejercicios ✅

Corré los tests y hacé que pasen. Desde la raíz del repo:

```bash
node --test --test-reporter=spec "07-errores-y-depuracion/tests/*.test.js"
```

O corré TODOS los tests del curso de una vez (desde la raíz):

```bash
npm test
```

Cada fallo te dice en español qué se esperaba y qué recibiste. Resuelve en este
orden:

| Ejercicio | Archivo | Qué practica |
|---|---|---|
| 01 | `ejercicios/01-dividir-seguro.js` | Programación defensiva sin `throw` |
| 02 | `ejercicios/02-parsear-seguro.js` | `try/catch` para manejar un error real |
| 03 | `ejercicios/03-validar-edad.js` | Lanzar errores con `throw new Error()` |
| 04 | `ejercicios/04-corrige-el-error.js` | Encontrar y corregir bugs (FIX-ME) |

> 🚨 **Regla:** no mires `soluciones/` antes de intentar. Si te trabás 20
> minutos, mirá la solución, entendé la causa raíz y **reescribila de memoria**
> en `app.js`.

---

## 6. Recuperación activa 🧠

Respondé SIN mirar el código (en una hoja o en tu editor):

1. Nombrá 3 tipos de error de JavaScript y un ejemplo de cada uno.
2. ¿Qué hace cada parte de `try`, `catch` y `finally`? ¿Cuál se ejecuta
   siempre?
3. ¿Cómo se lanza un error con mensaje propio? Escribí la línea exacta.
4. ¿Qué propiedades tiene un error que te sirven para depurar?
5. ¿Por qué un `SyntaxError` no se puede capturar con `try/catch`?
6. ¿Dónde se mira primero en un stack trace y qué indica esa línea?
7. ¿Qué es la programación defensiva? Da un ejemplo con división.

---

## 7. Proyecto 🛠

**Mini validador de formulario** — Creá un script `app.js` en la raíz del repo
que valide los datos de un usuario antes de "registrarlo".

Requisitos:

- Una función `registrarUsuario(usuario)` que valide `nombre`, `email` y
  `edad` lanzando errores claros:
  - Sin nombre → `throw new Error('El nombre es obligatorio')`
  - Sin email o sin `@` → `throw new Error('El email es inválido')`
  - Edad menor a 18 → `throw new Error('La edad debe ser mayor o igual a 18')`
- Si todo está bien, devolver `'Usuario registrado: {nombre}'`.
- Un arnés de prueba (test harness) con 3 objetos: uno válido, uno inválido
  y otro inválido distinto. Para cada uno, corré `registrarUsuario` DENTRO de
  un `try/catch` y mostrá en consola si se registró o el mensaje del error.

Checklist:

- [ ] `registrarUsuario` lanza los 3 errores pedidos con `throw new Error`.
- [ ] El caso válido imprime `Usuario registrado: ...`.
- [ ] Los casos inválidos se capturan con `try/catch` y el programa NO se corta.
- [ ] Probé un caso que rompa cada una de las 3 validaciones.
- [ ] Mostré el resultado en consola con formato claro.

Cuando lo tengas, cerrás el curso de fundamentos. ¡Felicitaciones! 🎉