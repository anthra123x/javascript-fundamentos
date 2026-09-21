/**
 * PROYECTO 01 — Piedra, Papel o Tijera contra la máquina
 *
 * Un juego por consola de 5 rondas contra la computadora.
 *
 * ── Arquitectura (importante) ─────────────────────────────────────────────
 *  1) LÓGICA PURA: funciones que solo reciben datos y devuelven datos.
 *     No preguntan nada, no usan readline. Son 100 % testeables.
 *  2) INTERFAZ CLI: usa readline de Node. Solo se ejecuta si este archivo
 *     corre directo (`node 08-proyectos/consola/01-piedra-papel-tijera.js`).
 *     Si otro archivo hace `require(...)`, la parte interactiva NO corre.
 *
 * Reglas del juego:
 *   - piedra vence a tijera 🪨 > ✂️
 *   - tijera vence a papel  ✂️ > 📄
 *   - papel vence a piedra  📄 > 🪨
 *   - opciones iguales → empate
 */

// ── Lógica pura (testeable, SIN readline) ────────────────────────────────

// Las tres opciones válidas del juego.
const OPCIONES = ['piedra', 'papel', 'tijera'];

// Reglas: qué gana contra qué.
// gana[opcion] devuelve la opción que opcion vence.
const REGLAS = {
  piedra: 'tijera',
  tijera: 'papel',
  papel: 'piedra',
};

/**
 * Decide el resultado de UNA ronda.
 *
 * @param {string} jugador - Opción elegida por la persona: 'piedra'|'papel'|'tijera'
 * @param {string} maquina - Opción elegida por la máquina: 'piedra'|'papel'|'tijera'
 * @returns {string} 'ganaste' | 'perdiste' | 'empate'
 * @throws {Error} Si alguna opción no es válida.
 *
 * ➡️ Ejemplos:
 *    jugarRonda('piedra', 'tijera')  →  'ganaste'
 *    jugarRonda('piedra', 'papel')   →  'perdiste'
 *    jugarRonda('tijera', 'tijera')  →  'empate'
 */
function jugarRonda(jugador, maquina) {
  // Validación: si cualquiera de las dos entradas no es válida, lanzamos
  // un error claro (aprendido en el módulo 07).
  if (!OPCIONES.includes(jugador)) {
    throw new Error('Entrada inválida: elige "piedra", "papel" o "tijera"');
  }
  if (!OPCIONES.includes(maquina)) {
    throw new Error('Entrada inválida: la máquina eligió una opción desconocida');
  }

  // Empate: mismas opciones.
  if (jugador === maquina) return 'empate';

  // Si la opción del jugador vence a la de la máquina → ganaste.
  // Si no → perdiste. (Empate ya está descartado arriba.)
  return REGLAS[jugador] === maquina ? 'ganaste' : 'perdiste';
}

/**
 * Elige una opción al azar para la máquina.
 * @returns {string} 'piedra' | 'papel' | 'tijera'
 */
function opcionAleatoriaMaquina() {
  const indice = Math.floor(Math.random() * OPCIONES.length);
  return OPCIONES[indice];
}

// ── Interfaz CLI (usa readline de Node) ──────────────────────────────────
// La siguiente sección SOLO se ejecuta si el archivo corre directo.

// Guardamos la referencia a rl fuera para poder cerrarla en el finally.
if (require.main === module) {
  const readline = require('node:readline/promises');
  const { stdin, stdout } = require('node:process');

  const rl = readline.createInterface({ input: stdin, output: stdout });
  const TOTAL_RONDAS = 5;

  /**
   * Pregunta hasta recibir una opción válida. Si la persona escribe algo
   * que no sea 'piedra'|'papel'|'tijera', mostramos un error y volvemos
   * a preguntar (nunca rompemos el juego por una entrada mala).
   */
  async function leerOpcionValida(mensaje) {
    while (true) {
      const entrada = (await rl.question(mensaje)).trim().toLowerCase();
      if (OPCIONES.includes(entrada)) return entrada;
      console.log('❌ Opción inválida. Escribí "piedra", "papel" o "tijera".');
    }
  }

  async function jugarPartida() {
    let ganadas = 0;
    let perdidas = 0;
    let empatadas = 0;

    console.log('🎮 Piedra, Papel o Tijera — 5 rondas contra la máquina');
    console.log('   Escribí: piedra | papel | tijera\n');

    for (let ronda = 1; ronda <= TOTAL_RONDAS; ronda += 1) {
      const jugador = await leerOpcionValida(`Ronda ${ronda}/${TOTAL_RONDAS} — tu opción: `);
      const maquina = opcionAleatoriaMaquina();
      const resultado = jugarRonda(jugador, maquina);

      console.log(`   🤖 La máquina eligió: ${maquina}`);
      const icono = resultado === 'ganaste' ? '🎉' : resultado === 'perdiste' ? '😅' : '🤝';
      console.log(`   ${icono} ${resultado === 'ganaste' ? '¡Ganaste!' : resultado === 'perdiste' ? 'Perdiste' : 'Empate'}\n`);

      if (resultado === 'ganaste') ganadas += 1;
      else if (resultado === 'perdiste') perdidas += 1;
      else empatadas += 1;
    }

    console.log('─'.repeat(36));
    console.log(`🏁 Resultado final: ${ganadas} ganadas · ${perdidas} perdidas · ${empatadas} empatadas`);
    if (ganadas > perdidas) console.log('🏆 ¡Ganaste la partida!');
    else if (perdidas > ganadas) console.log('🤖 La máquina ganó... ¡revancha!');
    else console.log('🤝 Partida empatada.');
  }

  jugarPartida()
    .catch((error) => console.error('💥 Se produjo un error:', error.message))
    .finally(() => rl.close());
}

// Exportamos SOLO la lógica pura para que los tests no ejecuten la CLI.
module.exports = { jugarRonda, opcionAleatoriaMaquina, OPCIONES, REGLAS };