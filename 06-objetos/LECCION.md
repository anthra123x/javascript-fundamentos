# Módulo 06 — Objetos

> ⏱ Tiempo estimado: ~4 h · 🎯 Objetivos: al terminar sabrás crear objetos,
> acceder y modificar sus propiedades, definir métodos, usar destructuring,
> copiar y combinar objetos con spread, y trabajar con JSON.

---

## 1. Contexto (ELI5)

Imaginá un **formulario de registro**: tiene varios campos con etiquetas
(`nombre`, `edad`, `email`) y cada campo guarda un valor. Un **objeto** en
JavaScript es exactamente eso: una colección de etiquetas (`clave`) con sus
valores.

Si tuvieras que guardar la info de 3 personas, ¿crearías 9 variables sueltas
(`nombreAna`, `edadAna`, `nombreLeo`...)? Sería un caos. Con objetos agrupás
todo lo que pertenece a una misma "cosa" en un solo bloque, igual que una
ficha de datos:

```js
const ana = { nombre: 'Ana', edad: 30, ciudad: 'Lima' };
const leo = { nombre: 'Leo', edad: 25, ciudad: 'Buenos Aires' };
```

Casi todo en JavaScript es un objeto: los arrays, las fechas, las funciones…
Aprender objetos es aprender el "idioma" con el que el lenguaje organiza la
información.

---

## 2. Conceptos clave

| Concepto | Ejemplo | Explicación |
|---|---|---|
| Propiedad | `usuario.edad` | Un par `clave: valor` dentro del objeto |
| Acceso con punto | `usuario.nombre` | La forma más común de leer una propiedad |
| Acceso con corchetes | `usuario['edad']` | Necesario con nombres especiales o variables |
| Método | `usuario.saludar()` | Una función que vive dentro de un objeto |
| `this` | `this.edad` | La palabra que dentro del método apunta al objeto |
| Destructuring | `const { edad } = usuario` | Sacar propiedades a variables en una línea |
| Spread | `{ ...usuario }` | Copiar propiedades de un objeto a otro |
| `JSON.stringify` | `JSON.stringify(obj)` | Objeto → texto JSON |
| `JSON.parse` | `JSON.parse(texto)` | Texto JSON → objeto |

---

## 3. Ejemplos prácticos — metodología PRIMM

### 🔮 PREDICE

Antes de correr *cualquiera* de los ejemplos, escribí en papel qué creés que
imprime cada `console.log`. **No corras antes de predecir** — predecir (aunque
te equivoques) activa tu cerebro para aprender.

```bash
node 06-objetos/ejemplos/01-crear-y-acceder.js
node 06-objetos/ejemplos/02-metodos.js
node 06-objetos/ejemplos/03-destructuring.js
node 06-objetos/ejemplos/04-spread.js
node 06-objetos/ejemplos/05-json.js
```

### 👀 INVESTIGA

Después de correr el ejemplo 1:

1. ¿Por qué `producto['nombre completo']` funciona y `producto.nombre completo`
   daría un error?
2. ¿Qué pasó cuando asignaste `const copia = usuario` y modificaste `copia`?
   ¿Por qué cambió también `usuario`?

Después de correr el ejemplo 2:

3. ¿Qué devolvió `saludarFlecha()`? ¿Por qué `this` dentro de una arrow
   function no apunta al objeto?

Después de correr el ejemplo 4:

4. ¿Qué diferencia hay entre `{ ...perfilCompleto, edad: 31 }` y
   `{ edad: 99, ...perfilCompleto }`? ¿Por qué dan resultados distintos?

### ✏️ MODIFICA

1. Creá tu propio objeto `pelicula` con `titulo`, `anio` y `genero`; agregale
   una propiedad `director` y después borrale el `genero`.
2. Agregale al objeto `persona` un método `esMayorDeEdad()` que devuelva
   `true` si la persona tiene 18 o más años.
3. En el ejemplo de destructuring, desestructurá un objeto `producto` con
   `{ nombre, precio = 100 }` y probá qué pasa si no viene el precio.
4. Usá spread para combinar dos objetos de mascotas en uno solo.

---

## 4. Errores comunes 🚨

1. **Confundir `=` con comparar**: `usuario.edad = 31` *modifica*, mientras
   que `usuario.edad === 31` *compara*. Muchos bugs vienen de escribir un solo
   `=` cuando querían comparar.
2. **Pensar que `const copia = objeto` copia el objeto**: no, `copia` apunta
   al MISMO objeto. Modificar uno modifica el otro. Usá spread
   (`{ ...objeto }`) para copiar de verdad.
3. **Usar arrow functions como métodos**: `saludar: () => { this.nombre }`
   no funciona porque las flechas no tienen `this` propio. Usá la sintaxis
   normal de método (`saludar() { ... }`).
4. **Confundir igualdad entre objetos**: `{a:1} === {a:1}` es `false` porque
   se comparan por referencia, no por contenido. Usá `assert.deepStrictEqual`
   (o `JSON.stringify`) para comparar el contenido.
5. **Olvidar que JSON no guarda métodos**: `JSON.stringify` descarta funciones,
   `undefined` y `Symbol`. Si después del round-trip te falta una propiedad,
   es porque JSON no la entiende.
6. **Asumir que spread copia en profundidad**: `{ ...obj }` copia solo el
   primer nivel. Si hay objetos anidados, se comparten (copia superficial).

---

## 5. Ejercicios ✅

Corré los tests y hacé que pasen. Desde la raíz del repo:

```bash
node --test --test-reporter=spec "06-objetos/tests/*.test.js"
```

O corré TODOS los tests del curso de una vez (desde la raíz):

```bash
npm test
```

Cada fallo te dice en español qué se esperaba y qué recibiste. Resuelve en este
orden:

| Ejercicio | Archivo | Qué practica |
|---|---|---|
| 01 | `ejercicios/01-crear-usuario.js` | Crear un objeto con shorthand |
| 02 | `ejercicios/02-actualizar-edad.js` | Spread e inmutabilidad |
| 03 | `ejercicios/03-presentarse.js` | Leer propiedades y template literals |
| 04 | `ejercicios/04-extraer-datos.js` | Destructuring con valor por defecto |
| 05 | `ejercicios/05-serializar.js` | `JSON.stringify` y `JSON.parse` |

> 🚨 **Regla:** no mires `soluciones/` antes de intentar. Si te trabás 20
> minutos, mirá la solución, entendé la causa raíz y **reescribila de memoria**
> en `app.js`.

---

## 6. Recuperación activa 🧠

Respondé SIN mirar el código (en una hoja o en tu editor):

1. ¿Cómo se crea un objeto con tres propiedades? ¿Y cómo se lee una propiedad
   que tiene un espacio en el nombre?
2. ¿Qué es un método? ¿Para qué sirve `this` dentro de uno?
3. ¿Por qué `const b = a; b.x = 2` modifica también el objeto `a`?
4. ¿Cómo se hace una copia de un objeto con spread? ¿Qué "trampa" tiene esa
   copia con objetos anidados?
5. Escribí un destructuring que saque `nombre` y `edad` de un objeto y le ponga
   un default de `'Sin ciudad'` a una propiedad que puede faltar.
6. ¿Qué devuelve `JSON.stringify({ a: 1, fn() {} })` y por qué faltó `fn`?
7. ¿Cómo convertirías un objeto a texto y luego de vuelta a objeto?

---

## 7. Proyecto 🛠

**Registro de estudiantes** — Creá un script `app.js` en la raíz del repo que
gestione un listado de estudiantes usando objetos y arrays.

Requisitos:

- Un array `estudiantes` que arranca vacío.
- Una función `agregarEstudiante(nombre, edad, curso)` que cree un objeto
  `{ nombre, edad, curso }` (usando shorthand) y lo agregue al array.
- Una función `listarEstudiantes()` que imprima cada estudiante con el
  formato: `- Ana, 30 años, curso: Objetos`.
- Una función `buscarPorNombre(nombre)` que devuelva el primer estudiante que
  coincida (o `null` si no existe). Pista: usá `find`.
- Al final, validá con `console.log` que el array contiene lo esperado.

Checklist:

- [ ] Usé shorthand de propiedades al crear los objetos de estudiantes.
- [ ] `agregarEstudiante` funciona llamándola varias veces.
- [ ] `listarEstudiantes` imprime todos los estudiantes con el formato pedido.
- [ ] `buscarPorNombre` encuentra a un estudiante existente y devuelve `null`
      para uno que no existe.
- [ ] Probé el flujo completo: agregar 3 estudiantes, listarlos y buscar uno.

Cuando lo tengas, pasá al **Módulo 07 — Errores y depuración**.