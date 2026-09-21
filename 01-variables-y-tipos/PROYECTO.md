# 🛠 Proyecto — Carnet de identidad digital

> Cierra el Módulo 01 integrando variables, tipos y conversión de tipos.

## Enunciado

Creá un script `app.js` que imprima tu "tarjeta de presentación" en la
terminal, con este formato:

```text
──────────────────────────────
  NOMBRE:  Ana
  EDAD:    30
  CIUDAD:  Lima
  ¿DEV?:   true
  AÑO:     2026
──────────────────────────────
```

## Requisitos (checklist de verificación)

- [ ] Usé `const` para los datos que no cambian (año, ciudad) y `let` para los
      datos que podrían cambiar (edad, ¿dev?)
- [ ] Imprimí cada dato junto con su tipo usando `typeof` en el mismo
      `console.log` (ej: `console.log('NOMBRE:', nombre, typeof nombre)`)
- [ ] Convertí la edad de string a número de forma explícita antes de usarla
- [ ] Usé al menos un template literal (`${...}`) para construir un texto
- [ ] El script corre sin errores con `node app.js`
- [ ] Experimenté cambiar un dato de `let` a `const` y observé el error de
      reasignación (y lo dejé corregido)

## Extensión opcional (para ir más lejos)

- Convertí un booleano a string y mostralo en mayúsculas.
- Usá `Number('3.14')` para imprimir tu altura con dos decimales.
- Sumá tu edad actual + 5 y mostrá "edad en 5 años" con template literal.

> 💡 Revisá el cheatsheet (`docs/CHEATSHEET.md`) si necesitás recordar la
> sintaxis de template literals o conversión.