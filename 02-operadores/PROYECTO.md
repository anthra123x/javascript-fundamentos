# PROYECTO — Calculadora de descuentos

> 🛠 Mini-proyecto final del **Módulo 02 — Operadores**

## Enunciado

Una tienda online te pide una calculadora de descuentos. El cliente puede ser
**miembro** o no, y el descuento depende del monto de compra:

| Condición | Descuento |
|---|---|
| Miembro **y** monto ≥ 100 | 20 % |
| Miembro (monto < 100) | 10 % |
| No miembro | Sin descuento |

Tu programa debe:

1. Definir variables con `let`/`const`: `precio`, `esMiembro` y `montoMinimo`.
2. Calcular el descuento (idealmente reusando `clasificarDescuento` del
   ejercicio 05, o replicando la lógica con `&&` y ternarios).
3. Convertir el texto `'20%'` en el número `0.20` con `parseInt`.
4. Calcular el precio final: `precioFinal = precio - precio * porcentaje / 100`.
5. Imprimir un resumen claro en la consola.

## Ejemplo de salida

```text
Precio original:    120
Descuento aplicado: 20%
Precio final:       96.00
```

## Checklist de verificación

- [ ] Usé `const` para los valores fijos y `let` para los que cambian
- [ ] La condición del 20 % usa `&&`, la del 10 % usa ternario
- [ ] Convertí el porcentaje de string a número con `parseInt` y `/ 100`
- [ ] El precio final se calcula con los operadores de la unidad
- [ ] Redondeé el precio final con `.toFixed(2)` al imprimirlo
- [ ] Probé al menos 3 casos:
  - [ ] `precio = 150, esMiembro = true` → 20 % → precio final `120.00`
  - [ ] `precio = 50, esMiembro = true` → 10 % → precio final `45.00`
  - [ ] `precio = 200, esMiembro = false` → sin descuento → `200.00`
- [ ] Comparé siempre con `===` (nunca `==`)

## Para correr

```bash
node app.js
```

> 🚨 No mirés las soluciones antes de intentar. Si te trabás más de 30 minutos,
> repasá los ejemplos `05-falsy-y-short-circuit.js` y `06-ternario.js`.