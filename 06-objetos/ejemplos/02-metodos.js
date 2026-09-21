/**
 * EJEMPLO 06-02 — Métodos: funciones dentro de objetos
 *
 * Un MÉTODO es una función que vive dentro de un objeto.
 * Sirve para que el objeto sepa "hacer cosas" con sus propios datos.
 *
 * Dentro de un método, la palabra clave `this` hace referencia
 * al objeto que contiene al método.
 *
 * Corré este archivo con:
 *   node 06-objetos/ejemplos/02-metodos.js
 */

// ─────────────────────────────────────────────
// 1. Objeto con métodos
// ─────────────────────────────────────────────
const persona = {
  nombre: 'Leo',
  edad: 25,

  // Forma moderna de definir un método: sin la palabra "function"
  saludar() {
    // `this` es el objeto `persona`
    console.log(`Hola, soy ${this.nombre}`);
  },

  // También podés usar la sintaxis clásica:
  presentarse: function () {
    console.log(`Tengo ${this.edad} años`);
  },

  cumplirAnios() {
    // Los métodos pueden MODIFICAR los datos del objeto con this
    this.edad = this.edad + 1;
    console.log(`¡Feliz cumpleaños! Ahora tengo ${this.edad}`);
  },

  esMayorDeEdad() {
    // Los métodos pueden DEVOLVER un valor calculado
    return this.edad >= 18;
  }
};

persona.saludar();
persona.presentarse();
console.log('¿Es mayor de edad?', persona.esMayorDeEdad());
persona.cumplirAnios();
persona.cumplirAnios();

// ─────────────────────────────────────────────
// 2. Métodos con parámetros
// ─────────────────────────────────────────────
const calculadora = {
  sumar(a, b) {
    return a + b;
  },
  restar(a, b) {
    return a - b;
  }
};

console.log('calculadora.sumar(5, 3):', calculadora.sumar(5, 3));
console.log('calculadora.restar(5, 3):', calculadora.restar(5, 3));

// ─────────────────────────────────────────────
// 3. OJO con las funciones flecha (arrow functions) 🚨
// ─────────────────────────────────────────────
const conFlecha = {
  nombre: 'Riesgo',
  saludarFlecha: () => {
    // Las arrow functions NO tienen `this` propio:
    // `this` aquí NO es `conFlecha`, sino el contexto exterior.
    console.log('Hola, soy', this.nombre); // → undefined (o lo que haya afuera)
  },
  saludarNormal() {
    console.log('Hola, soy', this.nombre); // → 'Riesgo' ✅
  }
};

conFlecha.saludarFlecha();
conFlecha.saludarNormal();

// Regla: para métodos que usan `this`, usá la sintaxis normal
// (saludar() { ... }) y NO la flecha.