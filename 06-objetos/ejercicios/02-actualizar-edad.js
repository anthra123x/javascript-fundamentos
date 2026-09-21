/**
 * EJERCICIO 02 — Actualizar la edad SIN mutar el objeto
 *
 * Escribí la función `actualizarEdad` que reciba un objeto `usuario`
 * y una `nuevaEdad`, y devuelva un objeto NUEVO con la edad actualizada.
 *
 * 🚨 IMPORTANTE (inmutabilidad): NO modifiques el objeto que llega.
 * Usá el operador spread (...) para copiar las propiedades y recién
 * ahí pisar la edad. El objeto original debe quedar intacto.
 *
 * ➡️ Ejemplos:
 *    actualizarEdad({ nombre: 'Ana', edad: 30 }, 31)
 *      →  { nombre: 'Ana', edad: 31 }   (y el original sigue con 30)
 *
 *    actualizarEdad({ nombre: 'Leo', edad: 25 }, 26)
 *      →  { nombre: 'Leo', edad: 26 }
 */

// TODO: completa la función

function actualizarEdad(usuario, nuevaEdad) {
  // 👇 escribí tu código aquí (pista: usá { ...usuario, edad: nuevaEdad })

}

// No modifiques esta línea (el test la necesita):
module.exports = { actualizarEdad };