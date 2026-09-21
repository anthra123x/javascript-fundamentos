# Módulo 02 — Operadores

> ⏱ Tiempo estimado: ~4 h · 🎯 Objetivos: al terminar sabrás usar operadores
> aritméticos, de asignación, comparación y lógicos; distinguir `==` de `===`;
> explicar qué es un valor falsy; dar valores por defecto y escribir ternarios.

---

## 1. Contexto (ELI5)

Los **operadores** son los "verbos" de JavaScript: cada operación que hacés con
valores (sumar, comparar, decidir) usa un operador. Son las primeras herramientas
"de verdad": las variables guardan datos (módulo 1) y los operadores los
**transforman** y los **comparan** para tomar decisiones.

Pensalo como una calculadora que además puede "preguntar": `10 > 5` es una
pregunta que responde `true` o `false`. Ese par de respuestas booleano es la
base de todo lo que vas a hacer con `if`, bucles y control de flujo (módulo 3).

---

## 2. Conceptos clave

| Concepto | Ejemplo | Explicación |
|---|---|---|
| Aritméticos | `7 % 2` | Sumar, restar, multiplicar, dividir, módulo y potencia |
| Módulo | `10 % 3` | Resto de la división: da 1. Sirve para par/impar |
| Asignación compuesta | `total += 5` | "Sumá 5 y guardalo en total" |
| Comparación | `edad >= 18` | Devuelve `true` o `false` |
| Igualdad estricta | `5 === '5'` | Compara valor Y tipo. La que debés usar siempre |
| Igualdad débil | `5 == '5'` | Compara valor y convierte tipos en silencio (evitala) |
| Lógicos | `a && b` | `&&` (y), `||` (o), `!` (negación) |
| Falsy | `0`, `''`, `null`, `undefined`, `NaN` | Valores que se convierten en `false` |
| Short-circuit | `nombre \|\| 'invitado'` | `||` devuelve el primer valor truthy |
| Ternario | `edad >= 18 ? 'adulto' : 'menor'` | `if/else` compacto en una línea |

---

## 3. Ejemplos prácticos — metodología PRIMM

Los seis ejemplos de la carpeta `ejemplos/` se hacen en orden. Recordá la regla
de oro: **PRIMERO predicción, DESPUÉS ejecución**. Nunca corras sin predecir.

### Ejemplo 01 — Aritméticos

#### 🔮 PREDICE

Antes de correr, escribí en papel qué imprime cada `console.log` del archivo.

```bash
node 02-operadores/ejemplos/01-aritmeticos.js
```

#### 👀 INVESTIGA

1. ¿Por qué `10 / 3` da `3.3333333333333335` y no exactamente 3.333...?
2. ¿Cuál es la diferencia entre `contador++` y `++contador`?
3. ¿Qué resultados "raros" da la división por cero? ¿Qué significa `Infinity`?

#### ✏️ MODIFICA

1. Cambiá los valores `a` y `b` por otros y verificá tus predicciones.
2. Calculá si `15` es divisible por `5` con un módulo (debe dar `0`).

### Ejemplo 02 — Asignación

#### 🔮 PREDICE

Anotá en papel el valor de `puntaje` después de cada línea.

```bash
node 02-operadores/ejemplos/02-asignacion.js
```

#### 👀 INVESTIGA

1. ¿Qué hace exactamente `+=`? ¿A qué expresión larga equivale?
2. ¿Cuál es la diferencia entre `=` y `===` en el ejemplo?
3. ¿Por qué `puntaje %= 4` conserva el resto como entero?

#### ✏️ MODIFICA

1. Agregá una línea `puntaje *= 3` después del `/= 4` y recalculá el resultado.
2. Creá una variable `monedero = 50` y restá `12` con `-=`, imprimí el resultado.

### Ejemplo 03 — Comparación

#### 🔮 PREDICE

Escribí `true` o `false` para cada línea ANTES de correr.

```bash
node 02-operadores/ejemplos/03-comparacion.js
```

#### 👀 INVESTIGA

1. ¿Por qué `5 == '5'` es `true` pero `5 === '5'` es `false`?
2. ¿Qué pasaría si usaras `==` para validar si el usuario es adulto? ¿Qué bugs
   silenciosos podrían aparecer?
3. ¿Por qué `'20' > '100'` da `true`? (acordate: son strings, no números)

#### ✏️ MODIFICA

1. Probá `'10' === 10` y `'10' == 10` en el archivo y anotá los resultados.
2. Cambiá una comparación para usar `!==` en vez de `!=` y confirmá que el
   resultado es opuesto a `5 != '5'`.

### Ejemplo 04 — Lógicos

#### 🔮 PREDICE

Completá la tabla de verdad de `&&` y `||` en papel, luego corré.

```bash
node 02-operadores/ejemplos/04-logicos.js
```

#### 👀 INVESTIGA

1. ¿Cómo se llama el fenómeno por el cual `0 && 'hola'` devuelve `0`?
2. ¿Por qué `||` devuelve el PRIMER valor truthy y `&&` el ÚLTIMO?
3. ¿Qué hace `!!` sobre un valor cualquiera?

#### ✏️ MODIFICA

1. Agregá el caso `esAdulto && tieneEntrada` con ambas variables `true` y
   verificá que cambie el resultado.
2. Inventá una condición con las tres operaciones, por ejemplo
   `!(esAdulto && !tieneEntrada)`, y explicá en un comentario qué significa.

### Ejemplo 05 — Falsy y short-circuit

#### 🔮 PREDICE

Escribí cuáles valores son falsy y cuáles no (ojo con los "truchos").

```bash
node 02-operadores/ejemplos/05-falsy-y-short-circuit.js
```

#### 👀 INVESTIGA

1. ¿Por qué `'0'` es truthy si `0` es falsy?
2. ¿Por qué `[]` y `{}` vacíos son truthy?
3. ¿Qué problema tiene el patrón `cantidad || 'inválido'` cuando la cantidad
   válida es `0`? ¿Qué operador lo resuelve?

#### ✏️ MODIFICA

1. Escribí una función que `|| 'desconocido'` cuando el valor es `null` o
   `undefined`, pero que conserve el `0`.
2. Probá `saludar(0)` y `saludar(false)` y explicá el resultado.

### Ejemplo 06 — Ternario

#### 🔮 PREDICE

Anotá qué imprime cada línea (todo es ternario, pero algunos anidados).

```bash
node 02-operadores/ejemplos/06-ternario.js
```

#### 👀 INVESTIGA

1. ¿Cuál es la sintaxis exacta de un ternario?
2. ¿Por qué los ternarios anidados son difíciles de leer?
3. ¿El ternario devuelve un valor o ejecuta código? Verificá cómo se usa como
   argumento de `console.log`.

#### ✏️ MODIFICA

1. Escribí un ternario que devuelva `'par'` o `'impar'` según `numero % 2`.
2. Reescribí el ejemplo de la nota con `else if` normal y compará la legibilidad.

---

## 4. Errores comunes 🚨

1. **Usar `==` y `!=` en vez de `===` y `!==`**: `0 == false` es `true` porque
   se convierten tipos en silencio. Si validás un ID con `==`, el string
   `"0"` te va a pasar igual. Regla: solo usá comparación estricta.
2. **Olvidar la precedencia de operadores**: `edad * 2 + 1` no es lo mismo que
   `edad * (2 + 1)`. Si dudás, poné paréntesis. Los operadores lógicos también
   tienen precedencia: `a || b && c` se lee como `a || (b && c)`.
3. **Pensar que el módulo `%` es "porcentaje"**: `%` es el RESTO de la
   división. `10 % 3` es `1`, no "10 por ciento". El porcentaje se calcula
   multiplicando por `0.xx`.
4. **Confundir asignación con comparación**: `=` asigna, `==`/`===` comparan.
   El clásico bug `if (edad = 18)` asigna 18 en vez de comparar, y la condición
   siempre es verdadera.
5. **Usar `||` para valores por defecto que pueden ser `0`**: `cantidad || 10`
   reemplaza el `0` legítimo por `10`. Para recién llegados es aceptable, pero
   cuando quieras conservar el `0`, usá `??` o un chequeo explícito.
6. **Confundir `Array.length` con índice**: no es del módulo, pero se ve mucho.
   Si `numeros.length` es 5, los índices van de 0 a 4.

---

## 5. Ejercicios ✅

Corré los tests y hacé que pasen. Desde la raíz del repo:

```bash
node --test --test-reporter=spec "02-operadores/tests/*.test.js"
```

O corré TODOS los tests del curso de una vez (desde la raíz):

```bash
npm test
```

Cada fallo te dice en español qué se esperaba y qué recibiste. Resolvé en este
orden:

| Ejercicio | Archivo | Qué practica |
|---|---|---|
| 01 | `ejercicios/01-es-par.js` | Módulo `%` para detectar pares |
| 02 | `ejercicios/02-mayor-de-edad.js` | Comparación `>=` |
| 03 | `ejercicios/03-puede-conducir.js` | Operador lógico `&&` |
| 04 | `ejercicios/04-valor-por-defecto.js` | Valores falsy y `\|\|` para default |
| 05 | `ejercicios/05-clasificar-descuento.js` | Ternario anidado y lógica combinada |

> 🚨 **Regla:** no mires `soluciones/` antes de intentar. Si te trabás 20
> minutos, mirá la solución, entendé la causa raíz y **reescribila de memoria**
> en tu editor.

---

## 6. Recuperación activa 🧠

Respondé SIN mirar el código (en una hoja o en tu editor):

1. ¿Cuál es la diferencia entre `==` y `===`? ¿Cuál conviene usar y por qué?
2. Escribí de memoria la lista completa de valores falsy (son 7 en total).
3. ¿Qué devuelve `0 || 'hola'`? ¿Y `1 && 'hola'`? ¿Por qué?
4. ¿Qué hace el operador `%`? Da un ejemplo de uso real.
5. ¿Cómo se escribe un ternario? Convertí este `if` a ternario:
   `if (edad >= 18) tipo = 'adulto'; else tipo = 'menor';`
6. ¿Por qué `20 > '100'` es `false` pero `'20' > '100'` es `true`?
7. ¿Qué hace `+=`? ¿A qué asignación larga equivale `puntaje += 4`?

---

## 7. Proyecto 🛠

**Calculadora de descuentos** — En `app.js` (o en un archivo nuevo del módulo)
escribí un programa que calcule el precio final de un producto según el
descuento del cliente:

1. Defené variables: `precio = 120`, `esMiembro = true`, `montoMinimo = 100`.
2. Calculá el descuento con `clasificarDescuento(esMiembro, precio)` del
   ejercicio 05 (o replicá la lógica con `===` y ternario).
3. Convertí el string `'20%'` en el número `0.20` con `parseInt` y división.
4. Calculá `precioFinal = precio - (precio * porcentaje/100)`.
5. Imprimí un resumen claro:

```text
Precio original:    120
Descuento aplicado: 20%
Precio final:       96
```

Checklist:
- [ ] Usás `===` en todas las comparaciones (nunca `==`)
- [ ] El descuento sale de un ternario con `esMiembro` y `monto >= 100`
- [ ] Calculás el porcentaje como número (no como texto)
- [ ] El precio final queda como número y se imprime redondeado con `toFixed(2)`
- [ ] Probá con: miembro y precio 150 (20 %), miembro y precio 50 (10 %) y no
      miembro (sin descuento)

Cuando lo tengas, pasá al **Módulo 03 — Control de flujo**.