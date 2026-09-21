# 🛠 Proyecto del Módulo 05 — Analizador de calificaciones

> ⏱ Tiempo estimado: ~1.5 h

## Enunciado

Creá un archivo `app.js` (en la raíz del curso o dentro de `05-arrays/`) que
reciba un array de **calificaciones** (números del 0 al 100) y calcule e
imprima:

- El **promedio** de las calificaciones
- La **máxima** calificación
- La **mínima** calificación
- La **cantidad de aprobadas** (>= 60)
- La **lista de aprobadas** (>= 60)

### Regla de oro del proyecto

El objetivo es **practicar los métodos de arrays**: usá `map`, `filter` y
`reduce`. NO uses bucles `for` ni `while` para los cálculos.

### Ejemplo

```text
Calificaciones: [85, 42, 90, 61, 33, 78]
Promedio:      64.83
Máxima:        90
Mínima:        33
Aprobadas:     4
Aprobadas:     [85, 90, 61, 78]
```

### 💡 Pistas

- El promedio = `suma / calificaciones.length`, donde la suma sale de `reduce`.
- La máxima sale de `Math.max(...calificaciones)` (spread).
- La mínima sale de `Math.min(...calificaciones)` (spread).
- Las aprobadas salen de `filter((nota) => nota >= 60)`.
- Bonus: usá `map` para construir un array con cada nota y su estado
  `'aprobada'` / `'desaprobada'`, por ejemplo:

```text
[ '85 → aprobada', '42 → desaprobada', ... ]
```

---

## ✅ Checklist de verificación

Antes de dar por terminado el proyecto, verifica:

- [ ] Creaste un array con al menos 6 calificaciones
- [ ] El **promedio** usa `reduce` (suma) y `calificaciones.length`
- [ ] La **máxima** usa `Math.max(...calificaciones)`
- [ ] La **mínima** usa `Math.min(...calificaciones)`
- [ ] Las **aprobadas** (>= 60) se obtienen con `filter`
- [ ] La **cantidad de aprobadas** sale del `.length` del array filtrado
- [ ] Usaste `map` al menos una vez (por ejemplo, para las etiquetas
      `'85 → aprobada'`)
- [ ] NO usaste bucles `for` ni `while` para los cálculos
- [ ] Verificaste a mano que los resultados impresos son correctos
- [ ] Corriste los tests del módulo y están en verde:

```bash
node --test --test-reporter=spec "05-arrays/tests/*.test.js"
```

---

## 🤔 Pensá y respondé

1. ¿Por qué `Math.max` necesita el spread `...calificaciones` en vez de recibir
   el array directo?
2. ¿Qué pasaría con tu programa si el array de calificaciones estuviera vacío?
   ¿Cómo lo harías robusto?
3. ¿En qué casos te conviene `filter` y en qué casos `map`? ¿Se pueden
   encadenar? (Mirá el ejemplo 04 de `map`/`filter`/`reduce`).

¡Felicitaciones! Con esto cerrás el **Módulo 05 — Arrays**.