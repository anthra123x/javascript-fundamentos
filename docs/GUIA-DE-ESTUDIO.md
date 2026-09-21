# 🧠 Guía de Estudio — Cómo aprovechar este curso

> Esta guía codifica la metodología pedagógica del curso. No es relleno: es el
> **manual de instrucciones de tu cerebro**. Leela antes de empezar el Módulo 1
> y vuelve a ella cuando sientas que "no avanzas".

---

## 1. La ciencia detrás del curso

Este curso está diseñado a partir de **evidencia en ciencia del aprendizaje**,
no de intuición. Estos son los principios que sostienen cada rincón del repo:

| Principio | Qué significa | Cómo lo aplica este curso |
|---|---|---|
| **PRIMM** (Predict → Run → Investigate → Modify → Make) | Para aprender código, primero se *predice* qué hará, luego se *ejecuta*, se *investiga*, se *modifica* y por último se *crea* algo propio. | Cada lección estructura los ejemplos así: primero `🔮 PREDICE`, luego ejecuta, contesta `👀 INVESTIGA`, haz los retos `✏️ MODIFICA`. |
| **Recuperación activa** | Recordar de memoria es más poderoso que releer. El esfuerzo de recordar "graba" el conocimiento. | Cada módulo termina con `🧠 Recuperación activa`: contesta SIN mirar el código. |
| **Repetición espaciada** | Repasar a intervalos crecientes (1, 3, 7, 14 días) fija el aprendizaje a largo plazo. | La sección [4. Calendario de repaso](#4-calendario-de-repaso-espaciado) abajo te indica cuándo repasar qué. |
| **Dificultades deseables** | Sentir que algo es difícil en el momento *es* la señal de que estás aprendiendo. | Los ejercicios NO vienen resueltos: el test te dice qué falla y tú arreglas. Eso es deliberado. |
| **Práctica deliberada** | Practicar justo un nivel por encima de lo que ya dominas, con feedback inmediato. | Los ejercicios escalan en dificultad y `node --test` te da feedback al instante. |
| **Trabajo intercalado** | Mezclar temas al repasar, en vez de bloques largos de un solo tema. | Los repasos espaciados mezclan ejercicios de varios módulos. |
| **Aprendizaje basado en proyectos** | Se aprende construyendo, no consumiendo. | Cada módulo cierra con `🛠 PROYECTO.md` y el Módulo 8 son proyectos completos. |
| **Efecto Feynman** | Si no puedes explicarlo simple, no lo entendiste. | Después de cada módulo, explica los conceptos en voz alta como se lo contarías a otra persona. |

### 📐 La regla de oro: 1:2

**Por cada hora de lectura/ejemplos, dedica DOS horas a escribir código propio.**
Leer sin practicar produce la *ilusión de aprendizaje*: parece que avanzas, pero
no se fija nada. Escribir (aunque te equivoques) es donde ocurre el aprendizaje.

---

## 2. El método de estudio diario (45–60 min)

| Paso | Tiempo | Qué hacer |
|---|---|---|
| 1. Repaso espaciado | 5 min | Abre ejercicios de módulos anteriores que te toquen repasar hoy (ver calendario). Resuélvelos de memoria. |
| 2. PREDICE | 5 min | Antes de leer un ejemplo, escribe en papel qué crees que imprime. |
| 3. Lee y ejecuta | 15 min | Lee la lección, corre cada ejemplo con `node`, investiga por qué pasa lo que pasa. |
| 4. Resuelve ejercicios | 20 min | Trabaja en los ejercicios del módulo. Corre `node --test --test-reporter=spec tests/`. Si falla: leelo como error, forma una hipótesis, corrige. |
| 5. Recuperación activa | 5 min | Contesta de memoria las preguntas del bloque `🧠` del módulo. |
| 6. Cierre | 1 min | Apunta en `mi-progreso.md` (o en tu libreta) qué entendiste y qué quedó pendiente. |

---

## 3. Reglas anti-"tutorial hell"

1. **Nunca mires la solución antes de intentarlo.** La carpeta `soluciones/`
   existe solo para verificar *después* de fallar (o para desatascarte tras 20
   minutos reales de intento). Mirarla antes anula el aprendizaje.
2. **Aférrate al error.** Cuando un test falle o Node lance un error, no
   borres el mensaje: lee la primera línea, busca el número de línea, nombra el
   tipo de error, forma una hipótesis y prueba. La guía `docs/ERRORES.md` te
   enseña a leerlos.
3. **Rompe el código a propósito.** Modifica ejemplos hasta que exploten y
   observa qué cambia. Romper es investigar.
4. **Escala los proyectos hacia abajo.** "Un dado virtual esta semana" vence a
   "un marketplace este año". Termina algo pequeño; el impulso vale oro.
5. **Explica en voz alta.** Al terminar un módulo, grabate o escribí una
   explicación de 2 minutos de los conceptos clave. Si tartamudeas, ese es tu
   hueco de aprendizaje.
6. **No acumules deuda de práctica.** Si un ejercicio te costó más de 30
   minutos, déjalo, sigue adelante y vuelve mañana. El descanso también
   consolida.

---

## 4. Calendario de repaso espaciado

La repetición espaciada funciona recordando una idea **justo antes de que la
olvides**. Usa este calendario: cuando termines un módulo, marca las fechas de
repaso.

| Módulo terminado | Repaso 1 (día +1) | Repaso 2 (día +3) | Repaso 3 (día +7) | Repaso 4 (día +14) |
|---|---|---|---|---|
| 01 Variables y tipos | ✅ | ✅ | ✅ | ✅ |
| 02 Operadores | ✅ | ✅ | ✅ | ✅ |
| 03 Control de flujo | ✅ | ✅ | ✅ | ✅ |
| 04 Funciones | ✅ | ✅ | ✅ | ✅ |
| 05 Arrays | ✅ | ✅ | ✅ | ✅ |
| 06 Objetos | ✅ | ✅ | ✅ | ✅ |
| 07 Errores y depuración | ✅ | ✅ | ✅ | ✅ |

> **Forma sugerida de repasar:** sin mirar la lección, resuelve 3 ejercicios de
> ese módulo de memoria. Luego abre la lección y corrige conceptos que hayas
> recordado mal. Nada de releer pasivamente.

### 📅 Plan sugerido de 5 semanas

| Semana | Módulos | Meta de la semana |
|---|---|---|
| 1 | 00 + 01 + 02 | Escribir y predecir código con variables, tipos y operadores |
| 2 | 03 + 04 | Dominar condiciones, bucles y funciones |
| 3 | 05 + 06 | Arrays y objetos: las estructuras que usas en el mundo real |
| 4 | 07 + inicio de 08 | Leer errores con calma y arrancar proyectos |
| 5 | 08 completo | Construir y terminar todos los proyectos |

Ritmo realista: 45–60 min/día, 5 días por semana. Los fundamentos se consolidan
en 4–8 semanas a este ritmo.

---

## 5. Checklist semanal de autoevaluación

Cada viernes responde (honestamente):

- [ ] ¿Puedo explicar los conceptos de la semana sin mirar las lecciones?
- [ ] ¿Resolví los ejercicios del módulo sin mirar `soluciones/`?
- [ ] ¿Completé el `🛠 PROYECTO.md` del módulo?
- [ ] ¿Repasé los módulos anteriores según el calendario?
- [ ] ¿Pasé más tiempo escribiendo código que leyendo?

Si todas están marcadas: vas perfecto. Si no: ajusta el plan, no lo abandones.

---

## 6. Mapa mental del estudiante

```
LEER (poco) ──> PREDECIR (antes de correr) ──> CORRER (observar)
      ▲                                          │
      │                                          ▼
REPASAR (espaciado) <── EXPLICAR (Feynman) <── ESCRIBIR (aunque falle)
```