# Proyecto final — Construí tu propia aplicación

> 🎯 Objetivo: integrar TODO lo aprendido en un programa tuyo, desde cero:
> variables, arrays, objetos, funciones, loops, control de flujo y al menos
> una integración real (consola con `readline` o navegador con DOM).

---

## Enunciado

Elegí UNA de las siguientes 4 ideas y construila completa. No hay una solución
"correcta": hay requisitos que cumplir y decisiones que tomar. Eso es lo que
hace que este proyecto sea tuyo.

### Opción A — Calculadora de propinas 💸
El usuario ingresa el total de una cuenta y el porcentaje de propina; la app
muestra la propina y el total final. **Extra:** permití dividir la cuenta entre
varias personas.

### Opción B — Juego de memoria 🧠
Una grilla de cartas (4 o más pares). Las cartas se voltean de a dos; si son
iguales, quedan destapadas. El juego termina cuando todas las parejas se
encontraron. **Extra:** contá los intentos y mostrá un mensaje final.

### Opción C — Generador de contraseñas 🔐
La persona elige la longitud (por ejemplo 8-20) y qué tipos de caracteres
incluir (minúsculas, mayúsculas, números, símbolos); la app genera una
contraseña al azar. **Extra:** una función que valide si una contraseña es
"fuerte" (8+ caracteres, con mayúscula, número y símbolo).

### Opción D — Lista de compras 🛒
Agregar, marcar como comprado, quitar y ver el total de ítems. **Extra:**
mostrar cuántos productos faltan comprar y el costo total si cada producto
tiene un precio.

---

## Formato de entrega

- **Consola:** un archivo en `08-proyectos/` (o en la raíz, como `app.js`) con
  la lógica pura separada de la CLI (guard `require.main === module`).
- **Web:** un `index.html` + `app.js` en una carpeta nueva de `08-proyectos/`
  (por ejemplo `08-proyectos/mi-proyecto/`). Sin CDN, sin frameworks, con tu
  propio CSS.

En cualquier caso: archivos en kebab-case, comentarios en español, y cero
dependencias.

---

## Checklist de requisitos (obligatorio marcarlo)

- [ ] Usé **arrays** (para guardar datos del programa, no solo para recorrer).
- [ ] Usé **objetos** (para representar una entidad: producto, carta, cuenta...).
- [ ] Usé al menos **3 funciones** propias (no solo `main`).
- [ ] Usé al menos un **loop** (`for`, `while` o `forEach`).
- [ ] Usé **control de flujo** (`if/else` o `switch`) para decisiones.
- [ ] Integré con **consola (`readline`)** o con **navegador (DOM)**.
- [ ] Manejo **errores**: la app no se rompe con entradas inválidas (vacías,
      negativas, de otro tipo). Validé las entradas antes de usarlas.
- [ ] El código corre sin errores:
  - Consola: `node mi-archivo.js`
  - Web: abrí `index.html` desde el explorador de archivos (doble clic)
- [ ] Comenté las partes importantes en español.

---

## Checklist de autoevaluación (antes de dar por terminado)

- [ ] **¿Le explico mi código a otra persona?** Si no podés explicar una
      función, significa que todavía no la entendés del todo.
- [ ] **¿Probé casos raros?** Entrada vacía, opción inválida, número negativo,
      clic en el lugar equivocado. ¿La app sobrevive?
- [ ] **¿Mi lista original se mantiene intacta?** Revisá que no estés
      mutando arrays que después necesitás (escribi una prueba).
- [ ] **¿El usuario sabe qué está pasando?** Mensajes claros: qué espera la
      app, qué hizo él, qué pasó.
- [ ] **¿Tengo tests?** Escribí al menos 3 tests con `node:test` y mensajes en
      español para la lógica pura más importante.
- [ ] **¿Corre `npm test` del curso sin romper nada?**
- [ ] **¿Está todo en español y con nombres claros?** `listaDeCompras` dice más
      que `data`.

---

## Para ir más allá (opcional)

- Agregá una segunda integración (si hiciste consola, hacé una versión web, o
  al revés). Compará: ¿qué fue más fácil?, ¿qué cambia entre una interfaz y la
  otra?
- Escribí un README corto dentro de tu proyecto: qué hace, cómo se corre y qué
  decide el usuario.
- Compartí tu proyecto con el equipo del curso (un "demo day" de 5 minutos: qué
  hace, un problema que resolviste y algo que aprendiste).