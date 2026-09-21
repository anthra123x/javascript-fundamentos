# Módulo 05 — Arrays

> ⏱ Tiempo estimado: ~5 h · 🎯 Objetivos: al terminar sabrás crear y acceder a
> arrays, mutarlos con `push`, `pop`, `shift`, `unshift` y `splice`, recorrerlos
> con `for`, `for...of` y `forEach`, transformarlos con `map`, `filter` y
> `reduce`, y copiarlos/combinarlos con spread y destructuring.

---

## 1. Contexto (ELI5)

Un **array** es una lista ordenada de cosas. Imaginá una fila de taquillas en
un colegio: cada taquilla tiene un número (el **índice**) y dentro puede haber
cualquier cosa (un número, un texto, otro array...). En JavaScript la primera
taquilla es la número `0` (contamos desde cero).

Los arrays son como "cajas que guardan muchas cajas": podés agregar, sacar,
reordenar, buscar y transformar elementos. Casi todo programa real termina
trabajando con listas de datos (usuarios, calificaciones, productos...), por
eso dominar los métodos de arrays es una de las habilidades más útiles del
lenguaje.

---

## 2. Conceptos clave

| Concepto | Ejemplo | Explicación |
|---|---|---|
| Crear array | `const nums = [1, 2, 3];` | Lista con corchetes `[ ]` |
| Índice | `nums[0]` → `1` | Posición del elemento (empieza en 0) |
| `length` | `nums.length` → `3` | Cantidad de elementos |
| Mutación | `nums.push(4)` | Cambiar el array (agregar al final) |
| `push` / `pop` | al final | Agregar / quitar al final |
| `unshift` / `shift` | al inicio | Agregar / quitar al inicio |
| `splice` | `arr.splice(i, n)` | Quitar/insertar en una posición |
| `forEach` | `arr.forEach(fn)` | Recorrer sin crear un array nuevo |
| `map` | `arr.map(fn)` | Crear un array nuevo transformado |
| `filter` | `arr.filter(fn)` | Crear un array nuevo filtrando |
| `reduce` | `arr.reduce(fn, inicio)` | Acumular todos los elementos en un valor |
| Spread | `[...arr]` | "Expandir" los elementos de un array |
| Destructuring | `const [a, b] = arr` | "Desempaquetar" elementos en variables |

> ⚠️ **Importante:** `map`, `filter` y `reduce` NO modifican el array original;
> devuelven un array (o valor) nuevo. `push`, `pop`, `shift`, `unshift` y
> `splice` SÍ modifican el array original.

---

## 3. Ejemplos prácticos — metodología PRIMM

### Ejemplo 1: Creación y acceso

#### 🔮 PREDICE

¿Qué imprime cada `console.log`? ¿Qué devuelve `frutas[3]`? ¿Qué pasa si
modificás `frutas[1]`? ¿Cuánto mide `arrayVacio.length`?

```bash
node 05-arrays/ejemplos/01-creacion-y-acceso.js
```

#### 👀 INVESTIGA

1. ¿Por qué el índice empieza en 0 y no en 1?
2. ¿Qué devuelve acceder a una posición que no existe (por ejemplo `frutas[9]`)?
3. ¿Un array puede guardar tipos mezclados? Mirá el ejemplo `mezclado`.

#### ✏️ MODIFICA

1. Agregá tu propia fruta en la posición 3 con asignación directa
   (`frutas[3] = 'kiwi'`).
2. Imprimí el último elemento usando `frutas[frutas.length - 1]` en vez de
   conocer el índice exacto.

---

### Ejemplo 2: Métodos de mutación

#### 🔮 PREDICE

Antes de correr, anotá el estado del array después de cada `console.log`.
¿Qué hace `push`? ¿Qué devuelve? ¿Qué hace `splice(1, 2)`?

```bash
node 05-arrays/ejemplos/02-metodos-de-mutacion.js
```

#### 👀 INVESTIGA

1. ¿Qué método agrega al principio y cuál lo quita? ¿Y al final?
2. `splice(1, 0, 'nuevo')` no borra nada: ¿qué efecto tiene?
3. Notá los logs "ANTES" y "DESPUÉS": ¿el array cambia con `push`? ¿Y con
   `map` (que verás recién más adelante)?

#### ✏️ MODIFICA

1. Creá un array con 4 números y probá `splice` para reemplazar los del medio
   por otros valores.
2. Averiguá qué devuelve `pop()` (¿el elemento quitado o el array?).

---

### Ejemplo 3: Iteración

#### 🔮 PREDICE

¿Cuántas veces se ejecuta cada bucle? ¿Qué imprime el `for` clásico?
¿Y el `for...of`? ¿En qué se diferencia el callback de `forEach`?

```bash
node 05-arrays/ejemplos/03-iteracion.js
```

#### 👀 INVESTIGA

1. En el `for` clásico, ¿para qué sirve la variable `i`?
2. `for...of` te da el elemento directamente: ¿cómo obtendrías también el
   índice?
3. ¿`forEach` modifica el array original mientras lo recorre?

#### ✏️ MODIFICA

1. Recorré el array con `for` pero en orden inverso (de `length - 1` a `0`).
2. Usá `forEach` para imprimir solo los números pares.

---

### Ejemplo 4: map, filter, reduce

#### 🔮 PREDICE

¿Qué array devuelve `map`? ¿Qué array devuelve `filter` con la condición
`numero > 2`? ¿Qué valor devuelve `reduce`? ¿Los arrays originales cambian?

```bash
node 05-arrays/ejemplos/04-map-filter-reduce.js
```

#### 👀 INVESTIGA

1. ¿Cuál es la diferencia entre `map` y `forEach`?
2. `filter` usa una condición que devuelve `true`/`false`: ¿qué pasa si la
   condición devuelve `true` siempre?
3. En `reduce`, ¿para qué sirve el segundo argumento (el `0`)?

#### ✏️ MODIFICA

1. Usá `map` para convertir temperaturas en Celsius a Fahrenheit.
2. Usá `filter` para quedarte con palabras de más de 4 letras.
3. Usá `reduce` para calcular el producto de todos los números.

---

### Ejemplo 5: Spread y destructuring

#### 🔮 PREDICE

¿Qué contiene `copia` después de `[...original]`? ¿Es la MISMA array que
`original` o una copia distinta? ¿Qué imprime el destructuring
`const [primero, segundo] = colores`? ¿Cómo se hace el swap con arrays?

```bash
node 05-arrays/ejemplos/05-spread-y-destructuring.js
```

#### 👀 INVESTIGA

1. Si `copia.push('x')`, ¿cambia `original`? Probá y explicá por qué.
2. `combinado` junta dos arrays con spread: ¿qué pasa si agregás un tercer
   array en el medio?
3. En el destructuring con `rest`, ¿qué contiene `resto`?

#### ✏️ MODIFICA

1. Creá un array nuevo que empiece con `'inicio'`, continúe con los elementos
   de otro array y termine con `'fin'`.
2. Usá destructuring para intercambiar los valores de dos variables sin array.

---

## 4. Errores comunes 🚨

1. **Empezar los índices en 1**: el primer elemento es `arr[0]`. Pedir `arr[1]`
   te da el SEGUNDO elemento. Para el último: `arr[arr.length - 1]`.
2. **Usar `=` para copiar arrays**: `const b = a` NO copia: `b` y `a` apuntan
   al MISMO array; si cambiás `b[0]`, también cambia `a[0]`. Usá `[...a]` o
   `Array.from(a)` para copiar.
3. **Olvidar que `map`/`filter`/`reduce` no mutan**: `numeros.map(x => x * 2)`
   devuelve un array nuevo; si no lo guardás en una variable, el resultado se
   pierde y el original queda igual.
4. **Usar `forEach` cuando querés un array nuevo**: `forEach` solo recorre y
   descarta el retorno del callback. Si querés transformar/filtrar, usá
   `map`/`filter`.
5. **Confundir `splice` con `slice`**: `splice` MUTA el array (borra/inserta)
   y `slice` devuelve una copia SIN mutar. Son parecidos pero opuestos.
6. **Salir del rango sin querer**: leer `arr[arr.length]` da `undefined` (no
   te tira error), y muchas veces ese `undefined` silencioso es el origen de
   bugs difíciles de encontrar.

---

## 5. Ejercicios ✅

Corré los tests y hacé que pasen. Desde la raíz del repo:

```bash
node --test --test-reporter=spec "05-arrays/tests/*.test.js"
```

O corré TODOS los tests del curso (desde la raíz):

```bash
npm test
```

Cada fallo te dice en español qué se esperaba y qué recibiste. Resuelve en este
orden:

| Ejercicio | Archivo | Qué practica |
|---|---|---|
| 01 | `ejercicios/01-primer-y-ultimo.js` | Acceder por índice y `length` |
| 02 | `ejercicios/02-agregar-al-final.js` | `push` y su valor de retorno |
| 03 | `ejercicios/03-duplicar-numeros.js` | `map` para transformar |
| 04 | `ejercicios/04-filtrar-mayores.js` | `filter` para filtrar |
| 05 | `ejercicios/05-sumar-todos.js` | `reduce` para acumular |
| 06 | `ejercicios/06-incluye-elemento.js` | `includes` para buscar |

> 🚨 **Regla:** no mires `soluciones/` antes de intentar. Si te trabás 20
> minutos, mirá la solución, entendé la causa raíz y **reescribila de memoria**
> en `app.js`.

---

## 6. Recuperación activa 🧠

Respondé SIN mirar el código (en una hoja o en tu editor):

1. ¿Cómo se obtiene el tercer elemento de un array? ¿Y el último?
2. ¿Cuál es la diferencia entre `push` y `pop`? ¿Y entre `shift` y `unshift`?
3. ¿Qué devuelve `map`? ¿Modifica el array original?
4. ¿Cuándo usarías `filter` en vez de `map`? Da un ejemplo de cada uno.
5. Escribí de memoria una llamada a `reduce` que sume un array de números.
6. ¿Por qué `const b = a` no copia un array? ¿Cómo se copia de verdad?
7. ¿Qué hace el spread `[...arr]` y en qué casos es útil?
8. ¿Cómo se intercambian dos variables usando destructuring de arrays?

---

## 7. Proyecto 🛠

**Analizador de calificaciones** — creá un script `app.js` que reciba un array
de calificaciones (números del 0 al 100) y calcule e imprima:

- El **promedio** de las calificaciones
- La **máxima** calificación
- La **mínima** calificación
- La **cantidad de aprobadas** (>= 60)
- La **lista de aprobadas** (>= 60)

Requisitos técnicos: usá `map` (o `reduce` para el promedio), `filter` para
las aprobadas y `reduce` para la suma. NO uses bucles `for` (el objetivo es
practicar los métodos de arrays).

```text
Calificaciones: [85, 42, 90, 61, 33, 78]
Promedio:      64.83
Máxima:        90
Mínima:        33
Aprobadas:     4
Aprobadas:     [85, 90, 61, 78]
```

Checklist:
- [ ] Crear un array con al menos 6 calificaciones
- [ ] Calcular el promedio usando `reduce` (suma) y `.length`
- [ ] Calcular la máxima con `Math.max(...calificaciones)`
- [ ] Calcular la mínima con `Math.min(...calificaciones)`
- [ ] Obtener las aprobadas (>= 60) con `filter`
- [ ] Obtener la cantidad de aprobadas con `.length` del array filtrado
- [ ] Convertir el array original con `map` al menos una vez (por ejemplo:
      mostrar cada nota con su estado "aprobada"/"desaprobada")
- [ ] Verificar a mano que los números de la salida son correctos

Cuando lo tengas, seguí con el siguiente módulo del curso.