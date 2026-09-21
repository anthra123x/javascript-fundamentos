# Módulo 01 — Variables y tipos de datos

> ⏱ Tiempo estimado: ~3 h · 🎯 Objetivos: al terminar sabrás declarar variables,
> elegir entre `let` y `const`, identificar tipos primitivos, usar `typeof`,
> explicar el tipado dinámico y convertir tipos.

---

## 1. Contexto (ELI5)

Una **variable** es como una caja con una etiqueta. La etiqueta es el nombre
(`edad`) y dentro de la caja guardás un valor (`30`). JavaScript es de
**tipado dinámico**: la misma caja puede guardar un número hoy y un texto
mañana, sin avisar.

Los **tipos de datos** son las "categorías" de valores que existen:
números, textos, verdadero/falso, etc. Saber qué tipo es cada valor te dice qué
operaciones podés hacer con él.

---

## 2. Conceptos clave

| Concepto | Ejemplo | Explicación |
|---|---|---|
| Declarar variable | `let edad = 30;` | Crear una caja llamada `edad` con el valor `30` |
| Constante | `const PI = 3.14;` | Caja que no se puede reasignar |
| `typeof` | `typeof 30` | Devuelve el tipo de un valor (`'number'`) |
| Tipado dinámico | `let x = 1; x = 'uno';` | Una variable puede cambiar de tipo |
| Conversión | `Number('42')` | Cambiar un tipo a otro a propósito |

---

## 3. Ejemplos prácticos — metodología PRIMM

### 🔮 PREDICE

Antes de correr *cualquiera* de los ejemplos, escribí en papel qué creés que
imprime. **No corras antes de predecir** — predecir (aunque te equivoques)
activa tu cerebro para aprender.

```bash
node 01-variables-y-tipos/ejemplos/01-variables.js
node 01-variables-y-tipos/ejemplos/02-tipos-primitivos.js
node 01-variables-y-tipos/ejemplos/03-tipado-dinamico-y-conversion.js
```

### 👀 INVESTIGA

Después de correr el ejemplo 2, respondé:

1. ¿Qué devuelve `typeof null`? ¿Te parece lógico? (Pista: es un bug histórico)
2. ¿Qué diferencia hay entre `null` y `undefined`?

Después de correr el ejemplo 3:

3. ¿Cuál es el resultado de `'5' + 3`? ¿Y de `'5' - 3`? ¿Por qué son distintos?

### ✏️ MODIFICA

1. Creá tu propia variable con tu nombre y edad, e imprimila con un
   `console.log` descriptivo.
2. Cambiá el ejemplo de conversión para convertir `'3.14'` a un número entero.
3. Averiguá qué pasa si sumás `true + 1` (¿qué creés? ¿qué pasa?).

---

## 4. Errores comunes 🚨

1. **Usar `var`**: funciona, pero es obsoleta y trae bugs de scope. Usá `let`
   o `const`.
2. **`const` sin valor inicial**: `const x;` → `SyntaxError`. Las constantes
   se inicializan en la declaración.
3. **Reasignar una `const`**: `const PI = 3; PI = 4;` → `TypeError`. Elegí
   `let` si necesitás reasignar.
4. **Concatenar en vez de sumar**: `'5' + 3` es `'53'` (string). Convertí
   antes: `Number('5') + 3`.
5. **Pensar que `null` es "no existe"**: `null` es un valor *intencional* de
   "vacío"; `undefined` es "nunca se asignó".

---

## 5. Ejercicios ✅

Corré los tests y hacé que pasen. Desde la raíz del repo:

```bash
node --test --test-reporter=spec "01-variables-y-tipos/tests/*.test.js"
```

O corré TODOS los tests del curso de una vez (desde la raíz):

```bash
npm test
```

Cada fallo te dice en español qué se esperaba y qué recibiste. Resuelve en este
orden:

| Ejercicio | Archivo | Qué practica |
|---|---|---|
| 01 | `ejercicios/01-declara-constante.js` | Declarar constantes correctamente |
| 02 | `ejercicios/02-predice-el-tipo.js` | Usar `typeof` para identificar tipos |
| 03 | `ejercicios/03-convierte-tipos.js` | Conversión explícita con `Number`, `String`, `Boolean` |
| 04 | `ejercicios/04-plantilla-de-saludo.js` | Template literals y concatenación |

> 🚨 **Regla:** no mires `soluciones/` antes de intentar. Si te trabás 20
> minutos, mirá la solución, entendé la causa raíz y **reescribila de memoria**
> en `app.js`.

---

## 6. Recuperación activa 🧠

Respondé SIN mirar el código (en una hoja o en tu editor):

1. ¿Cuál es la diferencia entre `let` y `const`?
2. ¿Cuáles son los 7 tipos primitivos de JavaScript?
3. ¿Qué devuelve `typeof null` y por qué?
4. ¿Qué es el tipado dinámico? Da un ejemplo.
5. ¿Cómo convertirías el string `'42'` a número? ¿Y a booleano `'true'`?
6. ¿Por qué `'2' + 2` da `'22'` pero `'2' * 2` da `4`?

---

## 7. Proyecto 🛠

**Carnet de identidad digital** — Creá un script `app.js` que imprima tu
"tarjeta de presentación":

```text
──────────────────────────────
  NOMBRE:  Ana
  EDAD:    30
  CIUDAD:  Lima
  ¿DEV?:   true
  AÑO:     2026
──────────────────────────────
```

Checklist:
- [ ] Usá `const` para datos que no cambian y `let` para datos que podrían cambiar
- [ ] Imprimí cada dato con su tipo usando `typeof` en el mismo `console.log`
- [ ] Convertí la edad de string a número explícitamente
- [ ] Usá al menos un template literal (`${...}`)

Cuando lo tengas, pasá al **Módulo 02 — Operadores**.