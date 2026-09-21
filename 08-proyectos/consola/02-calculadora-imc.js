/**
 * PROYECTO 02 — Calculadora de IMC (Índice de Masa Corporal)
 *
 * La persona ingresa su peso (kg) y su altura (m) por consola y el
 * programa le muestra el IMC con su clasificación.
 *
 * ── Arquitectura ─────────────────────────────────────────────────────────
 *  1) LÓGICA PURA: calcularIMC() y clasificarIMC() no preguntan nada,
 *     solo reciben números y devuelven números/strings. Testeables.
 *  2) INTERFAZ CLI: valida y pregunta con readline. Solo corre si se
 *     ejecuta el archivo directo (require.main === module).
 *
 * Fórmula:  IMC = peso / (altura * altura)
 * Clasificación:
 *   - menor a 18.5            → 'Bajo peso'
 *   - desde 18.5 hasta < 25   → 'Peso normal'
 *   - desde 25 hasta < 30     → 'Sobrepeso'
 *   - 30 o más                → 'Obesidad'
 */

// ── Lógica pura (testeable, SIN readline) ────────────────────────────────

/**
 * Calcula el IMC dado un peso en kilogramos y una altura en metros.
 * Se devuelve redondeado a 2 decimales.
 *
 * @param {number} pesoKg  - Peso en kilogramos (mayor a 0)
 * @param {number} alturaM - Altura en metros (mayor a 0)
 * @returns {number} IMC redondeado a 2 decimales
 *
 * ➡️ Ejemplo:
 *    calcularIMC(70, 1.75)  →  22.86   (70 / 1.75**2 = 22.857...)
 */
function calcularIMC(pesoKg, alturaM) {
  const imc = pesoKg / (alturaM ** 2);
  return Math.round(imc * 100) / 100;
}

/**
 * Clasifica un valor de IMC en una categoría de salud.
 *
 * @param {number} imc - Valor del IMC (puede venir de calcularIMC)
 * @returns {string} 'Bajo peso' | 'Peso normal' | 'Sobrepeso' | 'Obesidad'
 *
 * ➡️ Ejemplos:
 *    clasificarIMC(17.3)  →  'Bajo peso'
 *    clasificarIMC(22.86) →  'Peso normal'
 *    clasificarIMC(27)    →  'Sobrepeso'
 *    clasificarIMC(31)    →  'Obesidad'
 */
function clasificarIMC(imc) {
  if (imc < 18.5) return 'Bajo peso';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Sobrepeso';
  return 'Obesidad';
}

// ── Interfaz CLI (usa readline de Node) ──────────────────────────────────

if (require.main === module) {
  const readline = require('node:readline/promises');
  const { stdin, stdout } = require('node:process');

  const rl = readline.createInterface({ input: stdin, output: stdout });

  /**
   * Pregunta hasta recibir un número mayor que 0.
   * La validación evita pesos/alturas inválidas (0, negativos, texto).
   */
  async function preguntarNumero(mensaje, etiqueta) {
    while (true) {
      const entrada = (await rl.question(mensaje)).trim();
      const numero = Number(entrada);
      if (Number.isFinite(numero) && numero > 0) return numero;
      console.log(`❌ ${etiqueta} debe ser un número mayor que 0.`);
    }
  }

  async function ejecutar() {
    console.log('⚖️  Calculadora de IMC');
    console.log('   Ingresá el peso en kilogramos y la altura en metros.\n');

    const peso = await preguntarNumero('Peso (kg, por ejemplo 70): ', 'El peso');
    const altura = await preguntarNumero('Altura (m, por ejemplo 1.75): ', 'La altura');

    const imc = calcularIMC(peso, altura);
    const clasificacion = clasificarIMC(imc);

    console.log('\n' + '─'.repeat(36));
    console.log(`📊 Tu IMC es ${imc}`);
    console.log(`🏷 Clasificación: ${clasificacion}`);

    // Un tip breve según la categoría.
    const consejos = {
      'Bajo peso': 'suele indicar que falta masa corporal. Consultá a un profesional de la salud.',
      'Peso normal': '¡seguí así! Mantené una alimentación equilibrada y actividad física.',
      'Sobrepeso': 'una consulta con un profesional te puede ayudar a planificar cambios.',
      'Obesidad': 'es importante acompañarse de un profesional de la salud para un plan seguro.',
    };
    console.log(`💡 El IMC es una referencia, ${consejos[clasificacion]}`);
  }

  ejecutar()
    .catch((error) => console.error('💥 Se produjo un error:', error.message))
    .finally(() => rl.close());
}

// Exportamos la lógica pura (los tests la importan sin iniciar la CLI).
module.exports = { calcularIMC, clasificarIMC };