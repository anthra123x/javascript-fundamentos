/**
 * EJEMPLO 02 — switch
 *
 * Ejecuta con:  node 03-control-de-flujo/ejemplos/02-switch.js
 *
 * 🔮 PREDICE: ¿qué imprime cada llamada?
 */

// switch compara UNA expresión contra varios "case" posibles.
// Es ideal cuando tenés muchas ramas que dependen del MISMO valor.

function nombreDelDia(numero) {
  switch (numero) {
    case 1:
      return 'Lunes';
    case 2:
      return 'Martes';
    case 3:
      return 'Miércoles';
    case 4:
      return 'Jueves';
    case 5:
      return 'Viernes';
    case 6:
      return 'Sábado';
    case 7:
      return 'Domingo';
    default:
      return 'Día inválido';
  }
}

console.log(nombreDelDia(1));  // Lunes
console.log(nombreDelDia(4));  // Jueves
console.log(nombreDelDia(7));  // Domingo
console.log(nombreDelDia(9));  // Día inválido (cae en default)
console.log(nombreDelDia('3')); // Día inválido: el switch usa ===

// 👀 OJO: el switch compara con IGUALDAD ESTRICTA (===).
// Por eso '3' (string) NO coincide con case 3 (número).

// Sin return, cada case necesita la palabra break para no "caerse" al siguiente.
function estacion(mes) {
  let resultado = '';
  switch (mes) {
    case 12:
    case 1:
    case 2:
      resultado = 'Verano';
      break; // sin break, seguiría ejecutando el próximo case
    case 3:
    case 4:
    case 5:
      resultado = 'Otoño';
      break;
    default:
      resultado = 'Mes inválido';
  }
  return resultado;
}

console.log(estacion(12)); // Verano (12, 1 y 2 comparten case)
console.log(estacion(4));  // Otoño
console.log(estacion(13)); // Mes inválido