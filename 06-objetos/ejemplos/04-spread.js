/**
 * EJEMPLO 06-04 — Spread (...) para copiar y combinar objetos
 *
 * El operador spread (...) "expande" las propiedades de un objeto
 * dentro de otro. Es la forma más simple de copiar y combinar.
 *
 * 🚨 IMPORTANTE: el spread hace una copia SUPERFICIAL (shallow copy).
 * Los objetos anidados SÍ se comparten entre el original y la copia.
 *
 * Corré este archivo con:
 *   node 06-objetos/ejemplos/04-spread.js
 */

// ─────────────────────────────────────────────
// 1. Copiar un objeto (sin compartir referencia)
// ─────────────────────────────────────────────
const original = { nombre: 'Ana', edad: 30 };

// Sin spread, `copia = original` comparte el mismo objeto en memoria.
// Con spread creamos un objeto NUEVO con las mismas propiedades:
const copia = { ...original };

copia.nombre = 'Otra persona';
console.log('original.nombre:', original.nombre); // → 'Ana' (intacto ✅)
console.log('copia.nombre:', copia.nombre);       // → 'Otra persona'

// ─────────────────────────────────────────────
// 2. Combinar (fusionar) dos objetos
// ─────────────────────────────────────────────
const datosBásicos = { nombre: 'Ana', edad: 30 };
const datosExtra = { ciudad: 'Lima', esDev: true };

const perfilCompleto = { ...datosBásicos, ...datosExtra };
console.log('Perfil completo:', perfilCompleto);

// ─────────────────────────────────────────────
// 3. Orden de escritura: las últimas propiedades GANAN
// ─────────────────────────────────────────────
const conEdadNueva = { ...perfilCompleto, edad: 31 };
console.log('Con edad nueva:', conEdadNueva); // → edad: 31, el resto igual

// Si ponemos el spread al final, las propiedades que ya existían
// vuelven a pisarse con los valores del spread:
const otraVezVieja = { edad: 99, ...perfilCompleto };
console.log('El spread al final pisó edad:', otraVezVieja); // → edad: 30

// ─────────────────────────────────────────────
// 4. 🚨 La trampa de la copia superficial (shallow copy)
// ─────────────────────────────────────────────
const conObjetoAnidado = {
  nombre: 'Ana',
  direccion: { ciudad: 'Lima', pais: 'Perú' } // ← objeto DENTRO de objeto
};

const copiaSuperficial = { ...conObjetoAnidado };

// La copia tiene su propio `nombre`...
copiaSuperficial.nombre = 'Paz';

// ...pero `direccion` SIGUE SIENDO EL MISMO objeto que el original:
copiaSuperficial.direccion.ciudad = 'Arequipa';
console.log('copiaSuperficial.direccion.ciudad:', copiaSuperficial.direccion.ciudad);
console.log('original.direccion.ciudad:', conObjetoAnidado.direccion.ciudad);
// → ambos dicen 'Arequipa' 😱 porque comparten el objeto anidado

// Para copiar TODO en profundidad harías falta copiar también los
// objetos anidados, por ejemplo con JSON (lo ves en el ejemplo 05):
const copiaProfunda = JSON.parse(JSON.stringify(conObjetoAnidado));
copiaProfunda.direccion.ciudad = 'Bogotá';
console.log('copiaProfunda.direccion.ciudad:', copiaProfunda.direccion.ciudad);
console.log('original.direccion.ciudad (no cambió a Bogotá):', conObjetoAnidado.direccion.ciudad);