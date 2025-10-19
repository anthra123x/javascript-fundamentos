# 🚀 Neon JS — Fundamentos de JavaScript

![JavaScript](https://img.shields.io/badge/lang-JavaScript-yellow?style=for-the-badge&logo=javascript)
![Status](https://img.shields.io/badge/status-learning-blueviolet?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

✨ Bienvenido/a a este repositorio de estudio centrado en los fundamentos de JavaScript. Aquí encontrarás ejercicios y ejemplos organizados por temas (tipos, operadores, estructuras, funciones, objetos y más). El estilo del README está pensado para verse moderno y "futurista" con iconos y secciones claras.

---

## 📚 Tabla de contenidos

- [Descripción del proyecto](#-descripción-del-proyecto)
- [Estructura del repositorio](#-estructura-del-repositorio)
- [Descripción de archivos y carpetas](#-descripción-de-archivos-y-carpetas)
- [Cómo usar / Ejecutar](#-cómo-usar--ejecutar)
- [Temas y qué aprenderás](#-temas-y-qué-aprenderás)
- [Roadmap / Próximos pasos](#-roadmap--próximos-pasos)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 💡 Descripción del proyecto

Este proyecto es un cuaderno de aprendizaje práctico de JavaScript pensado para consolidar los fundamentos. Contiene ejemplos sencillos, ejercicios y pequeñas demos que puedes abrir en el navegador o ejecutar con Node.js.

El objetivo es que después de recorrer los archivos puedas: entender tipos primitivos, manipular arrays y objetos, escribir funciones, y comprender operadores y control de flujo.

---

## 📁 Estructura del repositorio

Raíz:

```
app.js
index.html
readme.md
operadores/
	aritmeticos.js
	asignacion.js
	comparacion.js
	falsy.js
	logicos.js
	terniario.js
tipos/
	constantes.js
	argumentos.js
	arrays.js
	funciones.js
	objetos.js
	primitivos.js
	tipado-dinamico.js
	variables.js
```

---

## 🔎 Descripción de archivos y carpetas

- `app.js` — archivo principal de ejemplo (si existe) para pruebas rápidas con Node.js.
- `index.html` — entrada para abrir ejemplos en el navegador.
- `operadores/` — archivos que muestran el uso de operadores:
  - `aritmeticos.js` — suma, resta, multiplicación, división, módulo, exponentes.
  - `asignacion.js` — operadores de asignación y atajos (+=, -=, etc.).
  - `comparacion.js` — operadores de comparación (==, ===, >, <, >=, <=).
  - `falsy.js` — valores falsy y truthy en JS.
  - `logicos.js` — &&, ||, ! y patrones comunes.
  - `terniario.js` — uso del operador ternario.
- `tipos/` — fundamentos y prácticas:
  - `constantes.js` — `const` y reglas de inmutabilidad vs mutabilidad.
  - `argumentos.js` — manejo de argumentos en funciones, rest/spread.
  - `arrays.js` — creación, métodos comunes (`map`, `filter`, `reduce`, etc.).
  - `funciones.js` — declaraciones, expresiones, arrow functions, scope.
  - `objetos.js` — creación de objetos, propiedades, métodos, destructuring.
  - `primitivos.js` — números, strings, booleanos, null, undefined, symbol.
  - `tipado-dinamico.js` — conversión implícita/ explícita de tipos.
  - `variables.js` — `var`, `let`, `const` y hoisting.

Cada archivo contiene ejemplos comentados y ejercicios sugeridos para practicar.

---

## ▶️ Cómo usar / Ejecutar

Puedes abrir `index.html` en tu navegador o servir el proyecto localmente. Aquí van unas opciones rápidas:

- Abrir en el navegador: doble clic en `index.html` o usar la vista de tu editor.

- Servir con un servidor simple (recomendado para módulos o fetch):

```bash
# usando Python 3 (desde la raíz del proyecto)
python -m http.server 8000

# luego abre http://localhost:8000
```

- Ejecutar `app.js` con Node.js (si quieres probar scripts):

```bash
# en la raíz del proyecto
node app.js
```

---

## 🧭 Temas y qué aprenderás (mapa rápido)

- Variables y scope: `tipos/variables.js`
- Tipos primitivos y conversión: `tipos/primitivos.js`, `tipos/tipado-dinamico.js`
- Declarar constantes: `tipos/constantes.js`
- Arrays y métodos funcionales: `tipos/arrays.js`
- Funciones, argumentos y flechas: `tipos/funciones.js`, `tipos/argumentos.js`
- Objetos y destructuring: `tipos/objetos.js`
- Operadores aritméticos, lógicos y de comparación: `operadores/*.js`
- Valores falsy/truthy y control de flujo: `operadores/falsy.js`

Consejo: abre los archivos y ejecuta fragmentos en la consola del navegador o con Node para experimentar.

---

## ✨ Ejemplos rápidos

Pequeño snippet para probar en la consola del navegador:

```javascript
// probar en consola
const saludo = (nombre = 'Dev') => `¡Hola, ${nombre}! ✨`;
console.log(saludo('Mundo'));
```

---

## 🛠 Roadmap / Próximos pasos

- [ ] Añadir tests automatizados (Jest) para los ejercicios.
- [ ] Documentar con comentarios más detallados y ejemplos resueltos.
- [ ] Subir ejemplos visuales / demo a GitHub Pages.
- [ ] Agregar badges de CI (GitHub Actions) y cobertura.
- [ ] Convertir a TypeScript (opcional) para practicar tipado estático.

---

## 🤝 Cómo contribuir

1. Haz fork del proyecto.
2. Crea una rama con tu mejora: `git checkout -b feat/ejemplo`.
3. Haz commits claros y descriptivos.
4. Abre un Pull Request explicando los cambios.

Si encuentras errores o tienes dudas, abre un issue y lo revisamos.

---

## 📜 Licencia

Este proyecto usa la licencia MIT. Agrega un archivo `LICENSE` si quieres publicar legalmente.

---

## ✉️ Contacto

Si quieres feedback o colaborar, abre un issue o PR. También puedes dejar aquí tu usuario de GitHub y lo enlazo.

---

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
✨  Listo — README actualizado con estilo futurista. ¡A seguir codificando! ⚡️
`