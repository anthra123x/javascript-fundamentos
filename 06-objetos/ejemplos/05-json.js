/**
 * EJEMPLO 06-05 — JSON: el formato para intercambiar datos
 *
 * JSON (JavaScript Object Notation) es un TEXTO con un formato muy
 * parecido al objeto literal de JavaScript. Es el idioma que usan
 * las APIs para enviar y recibir datos por internet.
 *
 *  - JSON.stringify(objeto)  → convierte un objeto en TEXTO (string)
 *  - JSON.parse(texto)       → convierte un TEXTO válido en objeto
 *
 * Corré este archivo con:
 *   node 06-objetos/ejemplos/05-json.js
 */

// ─────────────────────────────────────────────
// 1. Serializar: de OBJETO a TEXTO
// ─────────────────────────────────────────────
const usuario = {
  nombre: 'Ana',
  edad: 30,
  esDev: true,
  cursos: ['objetos', 'errores']
};

const texto = JSON.stringify(usuario);
console.log('Tipo del resultado:', typeof texto); // → 'string'
console.log('Texto JSON:', texto);

// ─────────────────────────────────────────────
// 2. JSON.stringify con formato legible
// ─────────────────────────────────────────────
// El segundo argumento es un "reemplazo" (null = no filtrar).
// El tercer argumento es la cantidad de espacios de indentación.
const textoLegible = JSON.stringify(usuario, null, 2);
console.log('\nTexto JSON con indentación de 2 espacios:\n');
console.log(textoLegible);

// ─────────────────────────────────────────────
// 3. Deserializar: de TEXTO a OBJETO
// ─────────────────────────────────────────────
const textoRecibido = '{"nombre":"Leo","edad":25,"esDev":false}';
const objetoRecuperado = JSON.parse(textoRecibido);

console.log('\nTipo del resultado:', typeof objetoRecuperado);
console.log('Objeto recuperado:', objetoRecuperado);
console.log('Acceder a una propiedad:', objetoRecuperado.nombre);

// ─────────────────────────────────────────────
// 4. JSON.parse falla si el texto no es JSON válido
// ─────────────────────────────────────────────
try {
  JSON.parse('{esto no es json}');
} catch (error) {
  // El error de parseo es un SyntaxError. En el módulo 07
  // aprendés a manejar estos errores con try/catch.
  console.log('\nError al parsear:', error.message);
}

// ─────────────────────────────────────────────
// 5. 🚨 Qué se PIERDE al convertir a JSON
// ─────────────────────────────────────────────
const conCosasRaras = {
  nombre: 'Ana',
  metodo() {
    return 'soy un método';
  },
  indefinido: undefined,
  simbolo: Symbol('x')
};

const textoFiltrado = JSON.stringify(conCosasRaras);
console.log('\nLo que sobrevivió al JSON:', textoFiltrado);
// → '{"nombre":"Ana"}'
// Los MÉTODOS, los `undefined` y los `Symbol` se descartan.
// JSON solo entiende datos: strings, números, booleanos, null, arrays y objetos.

// ─────────────────────────────────────────────
// 6. Uso típico: "copia profunda" barata
// ─────────────────────────────────────────────
// Serializar y deserializar crea un objeto 100% independiente
// del original, incluso con objetos anidados (ver ejemplo 04).
const objetoOriginal = { datos: { numero: 1 } };
const clon = JSON.parse(JSON.stringify(objetoOriginal));
clon.datos.numero = 999;
console.log('\nclon.datos.numero:', clon.datos.numero);
console.log('original.datos.numero:', objetoOriginal.datos.numero); // intacto