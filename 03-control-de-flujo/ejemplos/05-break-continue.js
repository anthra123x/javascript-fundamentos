/**
 * EJEMPLO 05 — break y continue
 *
 * Ejecuta con:  node 03-control-de-flujo/ejemplos/05-break-continue.js
 *
 * 🔮 PREDICE: ¿qué números se imprimen? ¿cuál se saltea y dónde se corta?
 */

// break: corta el bucle COMPLETO de inmediato.
console.log('break: detengo el bucle en 5.');

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // salimos del bucle; ya no se ejecutan las vueltas 6..10
  }
  console.log('  ', i);
}
console.log('Fin del bucle con break.');

// continue: salta SOLO la vuelta actual y sigue con la siguiente.
console.log('continue: salteo el número 5.');

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // nos saltamos el console.log de abajo para esta vuelta
  }
  console.log('  ', i);
}
console.log('Fin del bucle con continue.');

// Uso típico: filtrar valores inválidos (continue) y detectar un "buscado" (break).
const numeros = [10, 20, 0, 30, 40, -5, 50];
let primerNegativoEncontrado = null;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 0) {
    continue; // ignoramos los ceros, seguimos buscando
  }
  if (numeros[i] < 0) {
    primerNegativoEncontrado = numeros[i];
    break; // encontramos lo que buscábamos: no hace falta seguir
  }
  console.log(`Procesando ${numeros[i]}...`);
}

if (primerNegativoEncontrado !== null) {
  console.log(`Se encontró un negativo: ${primerNegativoEncontrado}`);
} else {
  console.log('No se encontró ningún negativo.');
}

// 👀 break también corta bucles anidados SOLO el más interno:
console.log('Bucle anidado con break interno:');

for (let fila = 1; fila <= 3; fila++) {
  for (let columna = 1; columna <= 5; columna++) {
    if (columna === 3) {
      break; // solo corta el bucle de columnas, NO el de filas
    }
    console.log(`  fila ${fila}, columna ${columna}`);
  }
}