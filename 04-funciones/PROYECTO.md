# 🛠 Proyecto del Módulo 04 — Mini calculadora con funciones

> ⏱ Tiempo estimado: ~1 h

## Enunciado

Creá un archivo `app.js` (en la raíz del curso o dentro de
`04-funciones/`) que funcione como una **calculadora de línea de comandos**.

El programa debe:

1. Definir **cuatro funciones de operación**:
   - `sumar(a, b)` → `a + b`
   - `restar(a, b)` → `a - b`
   - `multiplicar(a, b)` → `a * b`
   - `dividir(a, b)` → controla la división por cero y devuelve el mensaje
     `'Error: no se puede dividir por cero'`
2. Definir la función **despachadora** `calcular(operacion, a, b)` que recibe
   el nombre de la operación como string (`'suma'`, `'resta'`, `'multiplica'`,
   `'divide'`), elige la función correspondiente con un `switch` (o `if`), y
   la invoca con `(a, b)`. Debe devolver el resultado de la operación (o el
   mensaje de error en la división por cero).
3. Probar **todas las combinaciones** con `console.log` y verificar a mano que
   los resultados son correctos.

### Ejemplo de salida esperada

```text
calcular('suma', 10, 5)       → 15
calcular('resta', 10, 5)      → 5
calcular('multiplica', 10, 5) → 50
calcular('divide', 10, 5)     → 2
calcular('divide', 10, 0)     → 'Error: no se puede dividir por cero'
```

### 💡 Idea de estructura sugerida

```javascript
function sumar(a, b) { ... }
function restar(a, b) { ... }
function multiplicar(a, b) { ... }
function dividir(a, b) { ... }

function calcular(operacion, a, b) {
  // Usá un switch para elegir entre las funciones anteriores
}

// Probá cada caso:
console.log('suma:', calcular('suma', 10, 5));
// ... completá el resto
```

---

## ✅ Checklist de verificación

Antes de dar por terminado el proyecto, verifica:

- [ ] Existen las 4 funciones de operación (`sumar`, `restar`, `multiplicar`, `dividir`)
- [ ] `dividir` devuelve `'Error: no se puede dividir por cero'` cuando `b === 0`
- [ ] `calcular` usa un `switch` (o `if`) para elegir la función correcta
- [ ] `calcular` invoca a la función elegida con `(a, b)` y **devuelve** su resultado
- [ ] `calcular` no repite la lógica de las operaciones (SOLO delega en las funciones)
- [ ] Probaste los 5 casos del ejemplo con `console.log` y verifcaste el resultado a mano
- [ ] Agregaste una operación extra (ej: `potencia` → `a ** b`) sin tocar las otras
- [ ] Usaste al menos un **callback** o una **arrow function** en alguna parte del proyecto
- [ ] Corriste los tests del módulo y están en verde:

```bash
node --test --test-reporter=spec "04-funciones/tests/*.test.js"
```

---

## 🤔 Pensá y respondé

1. ¿Qué pasa si `calcular` recibe una operación que no existe (ej: `'modulo'`)?
   ¿Cómo lo resolverías? (Pista: agregá un `default` en el `switch`).
2. ¿Por qué conviene que `calcular` **delegue** en funciones separadas en vez
   de repetir los cálculos adentro?

¡Felicitaciones! Con esto cerrás el **Módulo 04 — Funciones**. Pasá al
**Módulo 05 — Arrays**.