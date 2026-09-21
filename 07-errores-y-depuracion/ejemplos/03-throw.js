/**
 * EJEMPLO 07-03 — throw: lanzar tus propios errores
 *
 * `throw` es la forma de decir "esto está mal y quiero que el programa
 * se entere". Podés lanzar errores nuevos con `new Error('mensaje')`,
 * o usar tipos más específicos: TypeError, RangeError, etc.
 *
 * La idea: VALIDAR la entrada al principio de la función y lanzar un error
 * claro si no cumple las reglas, ANTES de seguir con la lógica.
 *
 * Corré este archivo con:
 *   node 07-errores-y-depuracion/ejemplos/03-throw.js
 */

// ─────────────────────────────────────────────
// 1. Validar entrada lanzando errores con TIPO específico
// ─────────────────────────────────────────────
function validarEdad(edad) {
  if (typeof edad !== 'number') {
    // TypeError: el tipo del valor no es el esperado
    throw new TypeError('La edad debe ser un número');
  }
  if (edad < 0) {
    // RangeError: el valor está fuera del rango permitido
    throw new RangeError('La edad no puede ser negativa');
  }
  if (edad < 18) {
    // Error genérico para una regla de negocio
    throw new Error('Debes ser mayor de edad');
  }
  return `Edad válida: ${edad}`;
}

// Probamos con valores buenos y malos:
console.log('Caso válido:');
console.log(' ', validarEdad(25));

console.log('\nCaso inválido (string):');
try {
  validarEdad('veinticinco');
} catch (error) {
  console.log(' ', error.name, '→', error.message);
}

console.log('\nCaso inválido (negativo):');
try {
  validarEdad(-3);
} catch (error) {
  console.log(' ', error.name, '→', error.message);
}

console.log('\nCaso inválido (menor de edad):');
try {
  validarEdad(15);
} catch (error) {
  console.log(' ', error.name, '→', error.message);
}

// ─────────────────────────────────────────────
// 2. Crear un tipo de error PERSONALIZADO
// ─────────────────────────────────────────────
// Al extender Error podemos distinguir nuestros errores de los del sistema.
class ErrorDeValidacion extends Error {
  constructor(mensaje, campo) {
    super(mensaje); // Error se encarga del mensaje
    this.name = 'ErrorDeValidacion';
    this.campo = campo; // información extra que nos sirve
  }
}

function registrarUsuario(usuario) {
  if (!usuario.nombre) {
    throw new ErrorDeValidacion('El nombre es obligatorio', 'nombre');
  }
  if (!usuario.email) {
    throw new ErrorDeValidacion('El email es obligatorio', 'email');
  }
  return 'Usuario registrado correctamente';
}

// Capturamos y detectamos qué campo falló:
try {
  registrarUsuario({ nombre: '', email: 'ana@mail.com' });
} catch (error) {
  if (error instanceof ErrorDeValidacion) {
    console.log('\nError propio detectado:');
    console.log('  name:', error.name);
    console.log('  mensaje:', error.message);
    console.log('  campo con problema:', error.campo);
  } else {
    console.log('Error no esperado:', error);
  }
}

// Funciona correctamente:
console.log('\nRegistro válido:', registrarUsuario({ nombre: 'Ana', email: 'ana@mail.com' }));