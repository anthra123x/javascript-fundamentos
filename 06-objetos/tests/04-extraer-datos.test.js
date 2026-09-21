const { test } = require('node:test');
const assert = require('node:assert');
const { extraerDatos } = require('../ejercicios/04-extraer-datos');

test('extraerDatos({ nombre: "Ana", edad: 30, ciudad: "Lima" }) → "Ana vive en Lima"', () => {
  const resultado = extraerDatos({ nombre: 'Ana', edad: 30, ciudad: 'Lima' });
  const esperado = 'Ana vive en Lima';
  assert.strictEqual(resultado, esperado, `Esperaba "${esperado}" pero recibí: "${resultado}"`);
});

test('extraerDatos usa el default "Desconocida" cuando no hay ciudad', () => {
  const resultado = extraerDatos({ nombre: 'Leo', edad: 25 });
  const esperado = 'Leo vive en Desconocida';
  assert.strictEqual(resultado, esperado, `Esperaba "${esperado}" pero recibí: "${resultado}"`);
});

test('extraerDatos usa destructuring (debe contener = "Desconocida" en el código)', () => {
  const codigo = require('node:fs').readFileSync(
    require('node:path').join(__dirname, '..', 'ejercicios', '04-extraer-datos.js'),
    'utf-8'
  );
  assert.match(
    codigo,
    /ciudad\s*=\s*['"]Desconocida['"]/,
    'No encontré un valor por defecto para ciudad. Probá con: const { nombre, edad, ciudad = "Desconocida" } = persona;'
  );
});