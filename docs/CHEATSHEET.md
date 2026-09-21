# ⚡ Cheatsheet — Referencia rápida de JavaScript

> Hoja de referencia para consultar mientras practicas. No la leas como lección:
> úsala cuando estés atascado.

---

## Variables

```javascript
let nombre = 'Ana';        // mutable: puede cambiar
const PI = 3.14;           // inmutable: no puede reasignarse
var viejo = 'evítalo';     // obsoleto: usa let/const
```

**Convenciones:** `camelCase` para variables y funciones · `UpperCamelCase` para clases · constantes en `MAYÚSCULAS`.

## Tipos primitivos

```javascript
typeof 42             // 'number'
typeof 'hola'         // 'string'
typeof true           // 'boolean'
typeof null           // 'object' ← curiosidad histórica (bug)
typeof undefined      // 'undefined'
typeof 10n            // 'bigint'
typeof Symbol('id')   // 'symbol'
```

## Conversión de tipos

```javascript
Number('42')          // 42
String(42)            // '42'
Boolean(0)            // false
+'42'                 // 42 (atajo)
`${42}`               // '42' (atajo con template literal)
```

## Operadores

| Operador | Uso | Ejemplo |
|---|---|---|
| Aritméticos | `+ - * / % **` | `7 % 2` → `1` |
| Asignación compuesta | `+= -= *= /=` | `x += 3` |
| Comparación estricta | `=== !==` | `'5' === 5` → `false` |
| Comparación laxa | `== !=` | `'5' == 5` → `true` (evítalo) |
| Lógicos | `&& \|\| !` | `true && false` → `false` |
| Ternario | `cond ? a : b` | `edad >= 18 ? 'mayor' : 'menor'` |

## Valores falsy (todo lo demás es truthy)

```javascript
false, 0, -0, 0n, '', "", ``, null, undefined, NaN
```

**Short-circuit:** `nombre || 'por defecto'` → devuelve `nombre` si es truthy, si no `'por defecto'`.

## Control de flujo

```javascript
// if / else
if (edad >= 18) {
  // ...
} else if (edad > 13) {
  // ...
} else {
  // ...
}

// switch
switch (dia) {
  case 1:
    console.log('Lunes');
    break;              // ¡no olvides el break!
  default:
    console.log('Otro día');
}

// while
let i = 0;
while (i < 5) { i++; }

// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// break / continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;  // salta el 3
  if (i === 5) break;     // corta en el 5
}
```

## Funciones

```javascript
// Declaración
function suma(a, b) { return a + b; }

// Expresión
const suma2 = function (a, b) { return a + b; };

// Arrow
const suma3 = (a, b) => a + b;

// Parámetros por defecto + rest
const saluda = (nombre = 'amigo', ...otros) => `Hola ${nombre}`;

// Callback: pasar funciones como argumentos
[1, 2, 3].map((n) => n * 2);
```

## Arrays

```javascript
const frutas = ['manzana', 'pera'];

frutas.push('uva');        // agrega al final
frutas.pop();              // quita del final
frutas.shift();            // quita del inicio
frutas.unshift('kiwi');    // agrega al inicio
frutas[0];                 // accede
frutas.length;             // cantidad

// Iteración
for (const fruta of frutas) { console.log(fruta); }
frutas.forEach((f) => console.log(f));

// Métodos funcionales
frutas.map((f) => f.toUpperCase());   // transforma
frutas.filter((f) => f.length > 4);   // filtra
[1, 2, 3].reduce((acc, n) => acc + n, 0); // acumula → 6
frutas.find((f) => f === 'pera');     // encuentra el 1º que cumpla
['a', 'b'].includes('a');             // true
[5, 6, 7].some((n) => n > 6);         // true
[5, 6, 7].every((n) => n > 0);        // true

// Spread y copia
const copia = [...frutas];
const combinado = [...frutas, 'mango'];
```

## Objetos

```javascript
const persona = { nombre: 'Ana', edad: 30 };

persona.nombre;            // acceso por punto
persona['nombre'];         // acceso por corchetes
persona.ciudad = 'Lima';   // agregar
delete persona.ciudad;     // eliminar
persona.saluda = () => `Hola, soy ${persona.nombre}`;

// Destructuring
const { nombre, edad } = persona;
const [primero, segundo] = frutas;

// JSON
JSON.stringify(persona);   // '{"nombre":"Ana","edad":30}'
JSON.parse('{"nombre":"Ana"}'); // { nombre: 'Ana' }
```

## Errores y depuración

```javascript
try {
  JSON.parse('no-json');
} catch (error) {
  console.error('Algo salió mal:', error.message);
} finally {
  console.log('Siempre se ejecuta');
}

throw new Error('Error personalizado');
```

## Motivos comunes de bugs

1. `=` (asignar) vs `==`/`===` (comparar)
2. Fuera por uno en bucles (`<=` vs `<`)
3. Modificar un array mientras lo recorres
4. Olvidar `break` en `switch`
5. Confundir `null` y `undefined`
6. Pensar que `==` compara valores cuando primero *convierte* tipos

---

> 💡 **Atajo:** podes probar cualquier fragmento directo en la terminal con:
> `node -e "console.log('prueba')"`