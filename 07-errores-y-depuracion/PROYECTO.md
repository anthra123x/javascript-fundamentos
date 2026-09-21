# Proyecto del Módulo 07 — Mini validador de formulario

> 🎯 Objetivo: integrar `throw` y `try/catch` en un validador realista que
> protege a una función de recibir datos incorrectos.

## Enunciado

Creá un script `app.js` en la raíz del repo (o, si preferís, un archivo
`validador.js` en esta carpeta) que valide los datos de un usuario antes de
"registrarlo".

Empezá con este esqueleto:

```js
// Mini validador de formulario
function registrarUsuario(usuario) {
  // 1. Sin nombre → throw new Error('El nombre es obligatorio')
  // 2. Sin email o sin @ → throw new Error('El email es inválido')
  // 3. Edad menor a 18 → throw new Error('La edad debe ser mayor o igual a 18')
  // 4. Si todo está bien → devolver `Usuario registrado: ${usuario.nombre}`
}
```

### Arnés de prueba (test harness)

```js
const casos = [
  { nombre: 'Ana', email: 'ana@mail.com', edad: 25 },   // ✅ válido
  { nombre: '', email: 'ana@mail.com', edad: 25 },      // ❌ falta nombre
  { nombre: 'Leo', email: 'leo-sin-arroba', edad: 30 }, // ❌ email inválido
  { nombre: 'Paz', email: 'paz@mail.com', edad: 15 }    // ❌ menor de edad
];

for (const caso of casos) {
  try {
    const resultado = registrarUsuario(caso);
    console.log('✅', resultado);
  } catch (error) {
    console.log('❌', error.message);
  }
}
```

### Salida esperada

```text
✅ Usuario registrado: Ana
❌ El nombre es obligatorio
❌ El email es inválido
❌ La edad debe ser mayor o igual a 18
```

## Checklist de verificación

Antes de dar el proyecto por terminado, marcá cada ítem:

- [ ] `registrarUsuario` usa `throw new Error(...)` con los 3 mensajes pedidos.
- [ ] La validación de email se hace contra el string (usá `usuario.email`
      y `includes('@')`).
- [ ] La edad se valida con `if (usuario.edad < 18)`.
- [ ] El caso válido devuelve exactamente `Usuario registrado: {nombre}`.
- [ ] El arnés de prueba recorre los 4 casos y el programa NO se corta
      (porque todos los errores van dentro de `try/catch`).
- [ ] El código corre sin errores con `node app.js`.
- [ ] Si agregás un caso nuevo inválido, se captura igual sin romper nada.

## Para ir más allá (opcional)

- Agregá una validación de contraseña: mínimo 6 caracteres, con su propio
  `throw new Error('La contraseña debe tener al menos 6 caracteres')`.
- En el `catch`, además de imprimir `error.message`, imprimí `error.name` y
  las primeras 2 líneas de `error.stack` para practicar a leer stack traces.