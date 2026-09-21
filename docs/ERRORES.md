# 🚨 Cómo leer errores (y no morir en el intento)

> Los errores no son tu enemigo: son el **sistema de diagnóstico** de tu código.
> Los programadores profesionales pasan más tiempo leyendo errores que
> escribiendo código. Esta guía te enseña el protocolo.

---

## 1. El protocolo de lectura de errores

Cuando veas un error, NO lo borres. Sigue estos 5 pasos:

1. **Respira.** El error no dice "sos malo"; dice "algo no cuadra, y la
   computadora te dice exactamente dónde".
2. **Lee la primera línea.** Contiene el tipo de error y su mensaje.
3. **Busca el número de línea.** `app.js:7` significa *archivo* `app.js`,
   *línea* 7. Ahí empieza el problema (o muy cerca).
4. **Nombra el tipo de error.** ¿Es `ReferenceError`? ¿`TypeError`? Cada tipo
   tiene un diagnóstico distinto (tabla abajo).
5. **Forma una hipótesis y prueba.** "Creo que esta variable no está
   definida aquí" → corregís → corrés de nuevo.

> **Eso no es todo:** el 90% de los errores de principiantes se resuelven solo
> completando el paso 2 y 3. Leer *dónde* falla ya es medio diagnóstico.

---

## 2. Tipos de error más comunes

| Error | Qué significa | Ejemplo típico | Solución común |
|---|---|---|---|
| `SyntaxError` | El código está mal escrito, JS ni siquiera pudo leerlo | Falta `)`, llaves sin cerrar, `let let = 3` | Revisa paréntesis/llaves/comillas. El mensaje da la línea. |
| `ReferenceError` | Usaste un nombre que no existe en ese lugar | `console.log(nombre)` sin haber declarado `nombre` | Declaralo con `const`/`let` antes, o revisa el scope. |
| `TypeError` | Intentaste una operación inválida sobre un valor | `null.saluda()`, `123.split()` | Revisa el tipo (usa `typeof`). Los números no tienen métodos de string. |
| `RangeError` | Un valor quedó fuera del rango permitido | `new Array(-1)` , recursión infinita | Revisa límites de bucles/recursión. |
| `AssertionError` | Un test falló (¡esto es feedback, no un bug!) | Un ejercicio no devolvió lo esperado | Mira el mensaje del test: te dice qué se esperaba y qué recibiste. |

---

## 3. Anatomía de un stack trace (ejemplo real)

```
/home/tu/repo/01-variables-y-tipos/ejercicios/02-tipo.js:8
function nombreFuncion(no definida) {
                             ^
ReferenceError: noDefinida is not defined
    at nombreFuncion (/home/.../02-tipo.js:8:25)
    at Object.<anonymous> (/home/.../tests/02-tipo.test.js:3:15)
    at ...
```

Léelo así:

1. **Línea 1:** te muestra el código *exacto* donde falla (línea 8 de ese archivo).
2. **El `^` (caret)** apunta al carácter problemático.
3. **`ReferenceError: noDefinida is not defined`** → el diagnóstico.
4. **El stack trace** es el historial de llamadas: el error ocurrió dentro de
   `nombreFuncion`, que fue llamada desde el test. La primera línea del stack
   (arriba) es el origen real del error.

**Glosario de frases inglés→español que vas a ver:**

| Mensaje en inglés | Traducción libre |
|---|---|
| `is not defined` | no está definido (no existe esa variable) |
| `is not a function` | no es una función (trataste de llamar algo que no es función) |
| `Cannot read properties of undefined` | no podés leer propiedades de `undefined` (algo devolvió `undefined` y accediste a `.prop`) |
| `Unexpected token` | token inesperado (sintaxis rota, suele faltar un `}` o `)` antes) |
| `Expected ... but received ...` | en tests: esperaba X pero recibí Y |

---

## 4. `try / catch / throw`: controlar errores a propósito

A veces NO querés que tu programa explote: querés capturar el error y decidir
qué hacer.

```javascript
function parsearJson(texto) {
  try {
    return JSON.parse(texto);   // intenta esto
  } catch (error) {
    // si falla, este bloque corre
    console.error('JSON inválido:', error.message);
    return null;                // devolvés un valor "seguro"
  }
}

parsearJson('{no-es-json');     // → JSON inválido: Unexpected token ...
parsearJson('{"ok":true}');     // → { ok: true }
```

Además podes **lanzar** tus propios errores con `throw`:

```javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero');
  }
  return a / b;
}
```

---

## 5. Depuración = método científico

Cuando algo no funciona y no hay error (el resultado simplemente es raro):

1. **Reproduce:** encontrá las condiciones mínimas en que falla.
2. **Aísla:** reducí al caso más pequeño (`['a']`, `42`, un solo paso del bucle).
3. **Hipótesis:** "creo que el bucle se ejecuta una vez de más".
4. **Prueba UN cambio:** agregá un `console.log` en el punto clave o cambiá una
   cosa, no diez.
5. **Repetí.**

```javascript
// Ejemplo: ¿por qué imprime más de lo esperado?
for (let i = 0; i <= frutas.length; i++) {   // ← debug: filtra con logs
  console.log('iteración', i, frutas[i]);
}
```

El log de diagnóstico te mostrará `frutas[3]` = `undefined` → ahí está el bug:
`<=` debería ser `<`.

---

## 6. ¿El error te supera? Escalera de salida (en ese orden)

1. Releé el error y el **número de línea** (el 80 % se resuelve mirando la línea).
2. Buscá la palabra clave del mensaje en la lección del módulo o el cheatsheet.
3. Tomá un papel: simulá el código paso a paso *(exactamente como hace la
   computadora)*.
4. Después de 20 minutos reales de intento: mirá la solución del módulo,
   entendé la causa raíz y **reescribila de memoria** en `app.js`.
5. Solo las dudas que sigan bloqueándote van a un buscador o a alguien.

> ⚠️ Nunca copies una solución y continúes sin entender qué falló. Ese patrón
> convierte el curso en un ejercicio de copiar-pegar.