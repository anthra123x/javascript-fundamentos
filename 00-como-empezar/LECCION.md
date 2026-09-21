# Módulo 00 — Cómo empezar

> ⏱ Tiempo estimado: ~30 min · 🎯 Objetivos: correr tu primer script con Node.js y
> entender el flujo diario del curso.

---

## 1. Contexto (ELI5)

Imaginá que JavaScript es un idioma, y **Node.js** es el "traductor" que corre en
tu computadora. Sin Node (o sin un navegador), tus archivos `.js` son solo texto
que nadie ejecuta. Con Node, un archivo como `app.js` se convierte en un
programa que produce resultados.

En este curso vas a ejecutar todo desde una **terminal** (esa ventana de texto
donde escribís comandos). No es miedo: son solo cuatro comandos.

---

## 2. Conceptos clave

| Concepto | Qué es |
|---|---|
| **Terminal / consola** | Ventana donde escribís comandos de texto en vez de clicks |
| **Node.js** | El runtime que ejecuta JavaScript en tu máquina (fuera del navegador) |
| **Script** | Un archivo de texto con código JavaScript (`.js`) |
| **`node archivo.js`** | El comando que ejecuta un script |
| **Editor de texto** | Programa para escribir código (VS Code, Neovim, etc.) |

---

## 3. Ejemplos prácticos — metodología PRIMM

### 🔮 PREDICE

Antes de correr el ejemplo, respondé en tu cabeza: **¿qué va a imprimir este
script?**

```bash
node 00-como-empezar/ejemplos/01-hola-mundo.js
```

### 👀 INVESTIGA

Después de correrlo, respondé:

1. ¿Cuál es la salida del comando? ¿Cómo se llama la función que imprime?
2. ¿Qué pasaría si el archivo no tuviera la extensión `.js`?

---

## 4. Comandos de terminal que vas a usar todos los días

```bash
# Ver en qué carpeta estás
pwd

# Ver los archivos de la carpeta actual
ls

# Entrar a una carpeta
cd nombre-de-carpeta

# Volver a la carpeta anterior
cd ..

# Ejecutar un script de JavaScript (desde la raíz del repo)
node app.js
node 01-variables-y-tipos/ejemplos/01-variables.js
```

> 💡 **Recomendación:** desde la raíz del repo, ejecutá siempre los ejemplos con
> la ruta completa (`node 00-como-empezar/ejemplos/01-hola-mundo.js`), no entres
> a la carpeta y corras `node 01-hola-mundo.js`. Así el `require` del archivo
> siempre encuentra los módulos correctos.

---

## 5. Preparar tu espacio de trabajo

1. **Instalá Node.js** (versión 18 o superior) desde [nodejs.org](https://nodejs.org).
   Verificá que quedó bien:
   ```bash
   node --version
   ```
   Deberías ver algo como `v22.x.x`.
2. **Instalá un editor** — VS Code es la opción más amigable para empezar.
3. **Cloná o abrí esta carpeta** en tu editor.
4. **Probá tu primera ejecución:**
   ```bash
   node app.js
   ```
5. ¡Listo! Ya estás en condiciones de estudiar el Módulo 1.

---

## 6. Errores comunes 🚨

| Error | Causa | Solución |
|---|---|---|
| `node: command not found` | Node no está instalado o no está en el PATH | Instalalo desde nodejs.org y reiniciá la terminal |
| `SyntaxError: Unexpected token` | Faltó un paréntesis/llave | Revisá la línea que indica el error |
| `Cannot find module` | La ruta del archivo no existe | Verificá con `ls` el nombre exacto de la carpeta |

---

## 7. Recuperación activa 🧠

Respondé SIN mirar la lección:

1. ¿Cuál es el comando para ejecutar `app.js`?
2. ¿Qué hace `cd ..`?
3. ¿Cómo verificás tu versión de Node?
4. ¿JavaScript en este curso se ejecuta en el navegador o en Node.js?

---

## 8. Proyecto 🛠

Este módulo no tiene proyecto de código, pero sí una **tarea de entorno**:

- [ ] Instalé Node.js y verifico `node --version`
- [ ] Ejecuté `app.js` y vi la salida
- [ ] Ejecuté el ejemplo `01-hola-mundo.js` y jugué a cambiar el mensaje
- [ ] Puedo explicar la diferencia entre un editor y una terminal

Cuando marques todo, ¡avanza al Módulo 1! 🚀