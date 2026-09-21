# Módulo 04 — Funciones

> ⏱ Tiempo estimado: ~4 h · 🎯 Objetivos: al terminar sabrás declarar funciones
> con `function`, crear arrow functions, usar parámetros con valores por defecto
> y `rest`, entender el scope, y pasar funciones como argumentos (callbacks).

---

## 1. Contexto (ELI5)

Una **función** es como una receta de cocina: tiene un nombre ("hacer-torta"),
recibe ingredientes (los **parámetros**), hace pasos intermedios y entrega un
resultado (el **valor de retorno**). En vez de escribir los pasos una y otra
vez, escribís la receta una sola vez y la invocás cada vez que la necesitás.

JavaScript trata a las funciones como **ciudadanos de primera clase**: se pueden
guardar en variables, pasar como argumentos a otras funciones e incluso
devolver desde otra función. Esto es lo que hace posible los *callbacks*.

---

## 2. Conceptos clave

| Concepto | Ejemplo | Explicación |
|---|---|---|
| Declaración (declaration) | `function sumar(a, b) { return a + b; }` | Forma clásica, *hoisted* |
| Expresión (expression) | `const sumar = function (a, b) { return a + b; };` | La función vive dentro de una variable |
| Arrow function | `const sumar = (a, b) => a + b;` | Sintaxis corta, no tiene `this` propio |
| Parámetro por defecto | `function saludar(nombre = 'mundo') {}` | Valor usado si no se pasa el argumento |
| `rest` | `function sumarTodos(...numeros) {}` | Junta "los demás" argumentos en un array |
| Parámetro | `a`, `b` en la definición | "Los ingredientes" que recibe la función |
| Argumento | `2`, `3` en `sumar(2, 3)` | "Los ingredientes reales" que entregás al llamar |
| Scope | Variable visible solo dentro de `{ }` | Dónde existe una variable |
| Callback | `array.forEach(fn)` | Función pasada como argumento |

> ⚠️ **Parámetro vs argumento:** el *parámetro* es el nombre declarado en la
> definición; el *argumento* es el valor real que pasás cuando llamás a la función.

---

## 3. Ejemplos prácticos — metodología PRIMM

### Ejemplo 1: Declaración de funciones

#### 🔮 PREDICE

Antes de correr, escribí en papel: ¿qué imprime cada `console.log`? ¿En qué
orden aparecen? ¿Qué pasa con `console.log('Resultado:', doble(4))` si la
llamada aparece ANTES de la declaración en el archivo?

```bash
node 04-funciones/ejemplos/01-declaracion.js
```

#### 👀 INVESTIGA

1. ¿Qué es el *hoisting* y cómo se nota en este ejemplo?
2. ¿Qué devuelve una función que no usa `return`? Mirá la función `sinRetorno`.
3. ¿Cuál es la diferencia entre "imprimir" y "retornar"?

#### ✏️ MODIFICA

1. Agregá una función `triple(numero)` que devuelva `numero * 3` y llamala.
2. Cambiá `sinRetorno` para que devuelva `'ahora sí retorno'` y observá la
   diferencia en el `console.log`.

---

### Ejemplo 2: Expresión vs Arrow function

#### 🔮 PREDICE

¿Cuál es la diferencia de sintaxis entre las tres versiones de la misma
función? ¿Todas producen el mismo resultado al llamarlas? ¿Qué imprime el
`console.log` con el array `[1, 3, 5, 7]`?

```bash
node 04-funciones/ejemplos/02-expresion-y-arrow.js
```

#### 👀 INVESTIGA

1. ¿Qué pasa si intentás llamar una *arrow function* antes de su definición?
   (Probá mover la línea de abajo hacia arriba).
2. ¿Cuándo conviene omitir las llaves `{ }` y el `return` en una arrow?
3. ¿Qué diferencia de `this` hay entre `function` y las arrows? Investigá
   brevemente (lo profundizaremos en otro módulo).

#### ✏️ MODIFICA

1. Escribí una arrow `esPar(numero)` que devuelva `numero % 2 === 0` con la
   sintaxis implícita (sin llaves ni `return`).
2. Convertí la función `doble` del ejemplo 1 a expresión y a arrow.

---

### Ejemplo 3: Parámetros

#### 🔮 PREDICE

¿Qué imprime `inventario('manzanas')`? ¿Cuándo se usa el valor por defecto
`30`? ¿Qué devuelve `sumarTodos()` sin argumentos? ¿Cómo se ve `arguments`
(dentro de la función clásica)?

```bash
node 04-funciones/ejemplos/03-parametros.js
```

#### 👀 INVESTIGA

1. ¿Cuál es la diferencia entre los parámetros `por defecto` y `undefined`?
2. `sumarTodos(...numeros)` junta los argumentos en un array: ¿qué imprime si
   pasás `1, 2, 3, 4`?
3. `arguments` solo existe en funciones clásicas (no arrow): ¿qué es
   exactamente?

#### ✏️ MODIFICA

1. Creá `potencia(base, exponente = 2)` y probala con y sin exponente.
2. Modificá `sumarTodos` para que devuelva `0` cuando no recibe argumentos.

---

### Ejemplo 4: Scope

#### 🔮 PREDICE

¿Qué valor imprime `console.log('Dentro:', mensaje)`? ¿Y el que está al final
del archivo, llamamos a `mostrarMensaje()` y luego `console.log(mensaje)`?
¿Qué es el *shadowing* y dónde ocurre?

```bash
node 04-funciones/ejemplos/04-scope.js
```

#### 👀 INVESTIGA

1. ¿Por qué `mensajeLocal` no existe fuera de la función? (Vas a ver un error).
2. ¿Qué es el *scope global* y por qué conviene evitar ensuciarlo?
3. En el ejemplo de *shadowing*, ¿por qué el valor global `PI` no cambia?

#### ✏️ MODIFICA

1. Creá una función que tenga una variable `total` local y llamala dos veces.
   ¿El valor se "acumula" entre llamadas? ¿Por qué?
2. Mové `console.log(mensaje)` dentro de la función y observá qué pasa.

---

### Ejemplo 5: Callbacks

#### 🔮 PREDICE

¿Qué imprime `aplicar(5, 2, sumar)` vs `aplicar(5, 2, restar)`? ¿Cómo cambia
el resultado si pasás una arrow inline `(a, b) => a * b`? ¿Qué hace
`forEach` con el callback?

```bash
node 04-funciones/ejemplos/05-callbacks.js
```

#### 👀 INVESTIGA

1. ¿Qué quiere decir que una función es "ciudadano de primera clase"?
2. `aplicar` recibe una `operacion` como parámetro y la invoca: ¿qué pasa si le
   pasás un valor que no es función (por ejemplo `aplicar(5, 2, 'sumar')`)?
3. ¿Por qué `forEach` es más expresivo que un `for` clásico en este caso?

#### ✏️ MODIFICA

1. Creá una función `aplicarTresVeces(valor, funcion)` que llame a `funcion`
   tres veces con el resultado anterior.
2. Modificá el ejemplo para pasarle a `aplicar` una arrow
   `(a, b) => a ** b` (potencia).

---

## 4. Errores comunes 🚨

1. **Olvidar el `return`**: `function doble(n) { n * 2; }` devuelve
   `undefined`. El cálculo sin `return` se pierde. Casi siempre: si necesitás el
   resultado, usá `return`.
2. **Confundir *imprimir* con *retornar***: `console.log` muestra en la consola
   pero no entrega un valor. `return` entrega el valor pero no imprime nada.
3. **Llamar con el orden equivocado**: `areaRectangulo(altura, base)` no es lo
   mismo que `areaRectangulo(base, altura)` aunque el resultado sea el mismo;
   en funciones con parámetros de distinto significado el orden importa.
4. **Usar `arguments` dentro de una arrow function**: no existe; tirás un
   error. Usá `...rest`.
5. **Reasignar una constante que guarda una función**: `const fn = () => {};`
   no puede reasignarse. Si necesitás cambiarla, usá `let`.
6. **Pasar la función en vez de llamarla**: `setTimeout(fn(), 1000)` ejecuta
   `fn` inmediatamente. Debería ser `setTimeout(fn, 1000)`.

---

## 5. Ejercicios ✅

Corré los tests y hacé que pasen. Desde la raíz del repo:

```bash
node --test --test-reporter=spec "04-funciones/tests/*.test.js"
```

O corré TODOS los tests del curso (desde la raíz):

```bash
npm test
```

Cada fallo te dice en español qué se esperaba y qué recibiste. Resuelve en este
orden:

| Ejercicio | Archivo | Qué practica |
|---|---|---|
| 01 | `ejercicios/01-doble.js` | Función que devuelve el doble de un número |
| 02 | `ejercicios/02-area-rectangulo.js` | Función con dos parámetros |
| 03 | `ejercicios/03-saludo-personalizado.js` | Parámetros con valor por defecto |
| 04 | `ejercicios/04-sumar-todos.js` | `rest` (`...numeros`) + acumular con `reduce` |
| 05 | `ejercicios/05-aplicar-operacion.js` | Callbacks: recibir una función como parámetro |

> 🚨 **Regla:** no mires `soluciones/` antes de intentar. Si te trabás 20
> minutos, mirá la solución, entendé la causa raíz y **reescribila de memoria**
> en `app.js`.

---

## 6. Recuperación activa 🧠

Respondé SIN mirar el código (en una hoja o en tu editor):

1. Escribí de memoria una declaración de función y una arrow function que
   sumen dos números.
2. ¿Qué devuelve una función sin `return`?
3. ¿Qué es el *hoisting* y solo aplica a qué tipo de función (declaración o
   expresión)?
4. ¿Cómo escribirías un parámetro con valor por defecto? Da un ejemplo.
5. ¿Qué hace `...numeros` en la definición de una función?
6. ¿Cuál es la diferencia entre *scope global* y *scope local*? Da un ejemplo
   de *shadowing*.
7. ¿Qué es un callback y por qué JavaScript lo permite?

---

## 7. Proyecto 🛠

**Mini calculadora con funciones** — creá un script `app.js` con funciones
separadas para sumar, restar, multiplicar y dividir, y una `calcular(operacion,
a, b)` que reciba el nombre de la operación como string y un callback.

La idea: `calcular` decide qué función ejecutar según el string y le pasa `a`
y `b` a un callback, devolviendo el resultado.

```text
calcular('suma', 10, 5)       → 15
calcular('resta', 10, 5)      → 5
calcular('multiplica', 10, 5) → 50
calcular('divide', 10, 5)     → 2
calcular('divide', 10, 0)     → 'Error: no se puede dividir por cero'
```

Checklist:
- [ ] Declarar `sumar(a, b)`, `restar(a, b)`, `multiplicar(a, b)` y
      `dividir(a, b)`
- [ ] `dividir` debe controlar la división por cero y devolver un mensaje
- [ ] Definir `calcular(operacion, a, b)` que use un `switch` (o `if`) para
      elegir el callback adecuado
- [ ] `calcular` debe invocar al callback elegido con `(a, b)` y devolver su
      resultado
- [ ] Probar todas las combinaciones con `console.log` y verificar a mano los
      resultados
- [ ] Agregar una operación extra por tu cuenta (por ejemplo: potencia `a ** b`)
      sin tocar la lógica de las operaciones básicas

Cuando lo tengas, pasá al **Módulo 05 — Arrays**.