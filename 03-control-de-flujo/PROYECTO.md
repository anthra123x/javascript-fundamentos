# PROYECTO — Tabla de multiplicar

> 🛠 Mini-proyecto final del **Módulo 03 — Control de flujo**

## Enunciado

Escribí un programa que imprima en la consola la tabla de multiplicar del 1 al
10 de un número elegido, usando un bucle.

El programa debe:

1. Definir una variable `numero` con el número a trabajar (ej: `7`).
2. Validar con `if` que `numero` sea un número válido y positivo.
3. Recorrer con un bucle `for` (o `while`) los multiplicadores del 1 al 10.
4. Imprimir cada línea con un template literal: `7 x 1 = 7`, `7 x 2 = 14`, ...

## Ejemplo de salida

```text
Tabla del 7
7 x 1  = 7
7 x 2  = 14
7 x 3  = 21
...
7 x 10 = 70
```

## Checklist de verificación

- [ ] Usé un `if` que rechaza números inválidos (`NaN`, negativos o cero)
- [ ] El bucle empieza en `1` y termina en `10` (`i <= 10`)
- [ ] El paso del bucle suma de a uno (`i++`)
- [ ] El resultado de la multiplicación se calcula y se imprime
- [ ] Usé template literal (`${...}`) para armar la línea
- [ ] Probé la tabla del `7` y verifiqué a mano 3 resultados
- [ ] Probé con `numero = 3` y comparé con la tabla conocida
- [ ] Probé con un valor inválido (ej: `'hola'`) y el programa no se rompe

## Para correr

```bash
node app.js
```

> 🚨 No mirés las soluciones antes de intentar. Si te trabás más de 30 minutos,
> repasá los ejemplos `04-for.js` y `05-break-continue.js`.