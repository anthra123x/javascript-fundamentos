# Módulo 03 — Control de flujo

> ⏱ Tiempo estimado: ~4 h · 🎯 Objetivos: al terminar sabrás tomar decisiones
> con `if/else if/else` y `switch`, repetir código con `while` y `for`, y
> controlar los bucles con `break` y `continue`.

---

## 1. Contexto (ELI5)

Con las variables (módulo 1) guardás datos; con los operadores (módulo 2) los
comparás. Ahora falta lo más importante: **decidir y repetir**. Eso es el
control de flujo.

Pensalo como las instrucciones de una receta:
- **Si el horno está precalentado**, poné la bandeja (eso es un `if`).
- **Mientras queden ingredientes**, seguí mezclando (eso es un `while`).
- **Para cada vuelta** de la batidora, revisá si la masa sube (eso es un `for`).

Todo programa real usa estas estructuras: son las que convierten la
"calculadora" de los módulos anteriores en una máquina capaz de reaccionar.

---

## 2. Conceptos clave

| Concepto | Ejemplo | Explicación |
|---|---|---|
| `if / else` | `if (edad >= 18) {...} else {...}` | Ejecuta un bloque si la condición es `true` |
| `else if` | `if (n >= 90) {...} else if (n >= 80) {...}` | Encadenar condiciones en orden |
| `switch` | `switch (numero) { case 1: ... }` | Varias ramas según el MISMO valor |
| `default` | `default:` | Rama que se ejecuta si ningún `case` coincide |
| `while` | `while (i <= 10) {...}` | Repite MIENTRAS la condición sea `true` |
| `do...while` | `do {...} while (cond)` | Repite al menos una vez, chequea después |
| `for` | `for (let i = 1; i <= 10; i++)` | Repetición con inicio, condición y paso |
| `break` | `if (i === 5) break;` | Corta el bucle entero de inmediato |
| `continue` | `if (i === 5) continue;` | Salta solo la vuelta actual |
| Bucle infinito | `while (true) {...}` | Nunca termina: ojo con las condiciones que no cambian |

---

## 3. Ejemplos prácticos — metodología PRIMM

Los cinco ejemplos de la carpeta `ejemplos/` se hacen en orden. Recordá la regla
de oro: **PRIMERO predicción, DESPUÉS ejecución**. Nunca corras sin predecir.

### Ejemplo 01 — if/else

#### 🔮 PREDICE

Anotá en papel qué mensajes imprime el programa y cuáles NO.

```bash
node 03-control-de-flujo/ejemplos/01-if-else.js
```

#### 👀 INVESTIGA

1. ¿Por qué con `nota = 85` imprime solo la letra `B` y no las siguientes?
2. ¿Qué pasa si ponés `nota >= 80` ANTES de `nota >= 90`? ¿Fallaría algo?
3. ¿Por qué el bloque con `nombre = ''` cae en el `else`?

#### ✏️ MODIFICA

1. Cambiá `nota` a `95` y verificá cuál rama se ejecuta.
2. Escribí una condición que diga "podés entrar" solo si `edad >= 18 &&
   tieneEntrada`, y probá las cuatro combinaciones posibles.

### Ejemplo 02 — switch

#### 🔮 PREDICE

Anotá qué devuelve cada llamada a `nombreDelDia`.

```bash
node 03-control-de-flujo/ejemplos/02-switch.js
```

#### 👀 INVESTIGA

1. ¿Por qué `nombreDelDia('3')` devuelve `'Día inválido'`?
2. ¿Qué pasa si te olvidás de un `break` en el segundo `switch`?
3. ¿En qué casos conviene `switch` en vez de muchos `else if`?

#### ✏️ MODIFICA

1. Agregá un `case 4` que devuelva el nombre de TU mes favorito en el ejemplo.
2. Borrá el `break` del `case 12` y observá qué cambia en la salida.

### Ejemplo 03 — while / do...while

#### 🔮 PREDICE

¿Cuántas vueltas da cada bucle? ¿Cuál es el último número impreso?

```bash
node 03-control-de-flujo/ejemplos/03-while.js
```

#### 👀 INVESTIGA

1. ¿Qué pasaría si falta el `numero++` dentro del primer `while`?
2. ¿Cuál es la diferencia clave entre `while` y `do...while`?
3. ¿Por qué el `do...while` se ejecuta aunque `yaEsDeNoche` sea `false`?

#### ✏️ MODIFICA

1. Cambiá el paso de la azúcar a `10` gramos y recalculá cuántas vueltas da.
2. Escribí un `while` que imprima los números impares del 1 al 9.

### Ejemplo 04 — for

#### 🔮 PREDICE

Anotá en papel el valor de `suma` al final y la primera y última línea de la tabla.

```bash
node 03-control-de-flujo/ejemplos/04-for.js
```

#### 👀 INVESTIGA

1. ¿Cuáles son las TRES partes entre paréntesis del `for`? ¿Cuándo se ejecuta cada una?
2. ¿Por qué `i <= 10` genera 10 vueltas con `i = 1` inicial?
3. En los bucles anidados, ¿cuántas veces se imprime el bloque interno en total?

#### ✏️ MODIFICA

1. Cambiá el bucle para sumar del 1 al 100 (verificá: debería dar 5050).
2. Hacé que la tabla del `for` anidado imprima del 1 al 5 en vez del 1 al 10.

### Ejemplo 05 — break / continue

#### 🔮 PREDICE

Anotá qué números imprime el primero y el segundo bucle.

```bash
node 03-control-de-flujo/ejemplos/05-break-continue.js
```

#### 👀 INVESTIGA

1. ¿Cuál es la diferencia entre `break` y `continue`?
2. En el bucle anidado, ¿por qué al cortar la columna el bucle de filas sigue?
3. ¿Por qué el código busca el negativo y usa `break` al encontrarlo?

#### ✏️ MODIFICA

1. Cambiá `continue` por `break` en el segundo bucle y compará con la salida.
2. Escribí un bucle que recorra `[1, 2, 3, 4, 5]`, saltee el 3 y se detenga al llegar al 5.

---

## 4. Errores comunes 🚨

1. **Bucle infinito**: si la condición nunca cambia, el programa corre para
   siempre: `while (i <= 10) { console.log(i); }` sin `i++` es un bucle sin
   fin. Si tu programa "se cuelga", revisá si la variable que controla la
   condición se actualiza en cada vuelta.
2. **Olvidar `break` en `switch`**: sin `break`, el `switch` sigue ejecutando
   los `case` siguientes ("fall-through"). Si te faltan resultados extraños,
   revisá los `break`.
3. **Confundir `=` con `===` en la condición**: `if (edad = 18)` ASIGNA 18 y
   la condición siempre es verdadera. Compará con `===`.
4. **Usar `else if` en desorden**: si preguntás `n >= 60` antes de `n >= 90`,
   la rama del 90 nunca se alcanza. Las condiciones van de la más estricta a la
   más general.
5. **Condición invertida en el `for`**: `for (let i = 10; i >= 0; i++)` nunca
   termina bien; si vas en descenso, el paso también debe restar (`i--`).
6. **Modificar el array mientras lo recorrés**: agregar o borrar elementos con
   `push`/`splice` dentro del bucle cambia la longitud y saltea elementos.

---

## 5. Ejercicios ✅

Corré los tests y hacé que pasen. Desde la raíz del repo:

```bash
node --test --test-reporter=spec "03-control-de-flujo/tests/*.test.js"
```

O corré TODOS los tests del curso de una vez (desde la raíz):

```bash
npm test
```

Cada fallo te dice en español qué se esperaba y qué recibiste. Resolvé en este
orden:

| Ejercicio | Archivo | Qué practica |
|---|---|---|
| 01 | `ejercicios/01-nota-final.js` | Cadena de `if/else if/else` |
| 02 | `ejercicios/02-dia-semana.js` | `switch` con `default` |
| 03 | `ejercicios/03-sumar-pares.js` | Bucle `for` y acumulación con `+=` |
| 04 | `ejercicios/04-cuenta-regresiva.js` | Bucle `while` y control de separador |
| 05 | `ejercicios/05-primeros-multiplos.js` | Bucle y armado de un array con `push` |

> 🚨 **Regla:** no mires `soluciones/` antes de intentar. Si te trabás 20
> minutos, mirá la solución, entendé la causa raíz y **reescribila de memoria**
> en tu editor.

---

## 6. Recuperación activa 🧠

Respondé SIN mirar el código (en una hoja o en tu editor):

1. Escribí de memoria la sintaxis de un `for` completo (las tres partes).
2. ¿Cuál es la diferencia entre `break` y `continue`?
3. ¿Cuántas veces se ejecuta `console.log(i)` en `for (let i = 0; i < 5; i++)`?
   ¿Cuál es el último valor de `i`?
4. ¿Qué hace `default` en un `switch`? ¿Es obligatorio?
5. ¿Cuándo conviene `while` en vez de `for`?
6. ¿Por qué `if (x = 5)` es un bug peligroso?
7. En un `do...while`, ¿cuántas veces se ejecuta el bloque como mínimo?

---

## 7. Proyecto 🛠

**Tabla de multiplicar** — En `app.js` (o en un archivo nuevo del módulo)
escribí un programa que imprima la tabla de multiplicar del 1 al 10 de un
número elegido:

1. Defené una variable `numero = 7` (después cambiá el valor para probar).
2. Validá que sea un número válido con un `if`.
3. Usá un bucle `for` (o `while`) del 1 al 10.
4. Imprimí `7 x 1 = 7`, `7 x 2 = 14`, ... hasta `7 x 10 = 70`.

```text
Tabla del 7
7 x 1  = 7
7 x 2  = 14
...
7 x 10 = 70
```

Checklist:
- [ ] Hay un `if` que rechaza números inválidos (`NaN`, negativos)
- [ ] El bucle usa `for` y va de 1 a 10 inclusive
- [ ] La multiplicación se calcula y se imprime en un template literal
- [ ] Probé con `numero = 7` y verifiqué a mano 3 resultados
- [ ] Probé con `numero = 3` y con un valor inválido (`'hola'`)

Cuando lo tengas, pasá al **siguiente módulo del curso**.