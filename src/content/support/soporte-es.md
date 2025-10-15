---
title: "Soporte"
description: "Guía de inicio, preguntas frecuentes, solución de problemas y cómo contactarnos."
---

## Bienvenido a ModuGal: Tu Universo Sonoro Modular

ModuGal es un sintetizador modular virtual inspirado en los sistemas hardware clásicos, pero con la flexibilidad y potencia del software moderno. Te ofrece un lienzo en blanco para que puedas diseñar, experimentar y esculpir sonidos de una manera intuitiva y visual. Desde simples melodías hasta complejas texturas sonoras y sistemas generativos, el único límite es tu imaginación.

### El Lienzo Principal: Tu Espacio Creativo

Al abrir la aplicación, te encuentras con los módulos **Teclado** y **Altavoces** ya precargados para que puedas empezar a experimentar de inmediato. Este es tu lienzo. Aquí es donde añadirás y conectarás módulos para construir tus propios instrumentos y sistemas de audio.

### Interacción y Control

La interacción con el sintetizador está diseñada para ser rápida y fluida:

*   **Añadir Módulos:** Haz **clic derecho** en cualquier espacio vacío del lienzo para abrir el menú de selección. Navega por las categorías (Osciladores, Filtros, Efectos, etc.) y haz clic en el módulo que desees añadir.
*   **Conectar Módulos:** Haz **clic izquierdo** en una salida (output) de un módulo y arrastra el cable virtual hasta una entrada (input) de otro. Las entradas y salidas compatibles se resaltarán para guiarte. Para desconectar un cable, puedes hacer clic en su punto de conexión de entrada o directamente sobre el propio cable.
*   **Navegación en el Lienzo:**
    *   *Zoom:* Utiliza la **rueda del ratón** para acercar o alejar la vista, permitiéndote tener una visión general de tu patch o centrarte en detalles específicos.
    *   *Pan (Desplazamiento):* Mantén presionado el **botón izquierdo del ratón** en cualquier parte vacía del lienzo y arrastra para desplazarte.
*   **Interactuar con los Módulos:** Haz **clic izquierdo** y arrastra los potenciómetros, faders o switches para modificar los parámetros de cada módulo en tiempo real. Observa y escucha cómo tus cambios afectan al sonido.
*   **Menú del Módulo:** Haz **clic derecho** en la cabecera de cualquier módulo para acceder a opciones adicionales, como duplicarlo, eliminarlo o ver información específica.

### Entendiendo el Flujo de Señal

En un sintetizador modular, todo se basa en cómo fluye la señal. Hay dos tipos principales de señales, diferenciadas por su color: **Audio** (cables azules), que es el sonido que escuchas, y **CV (Control Voltage)** (cables naranjas), que son señales de control usadas para modular parámetros. Por convención, las salidas están en el lado derecho de los módulos y las entradas en el izquierdo. El objetivo es guiar la señal de audio desde una fuente (como un VCO) a través de varios procesadores (como un VCF o VCA) hasta llegar a una salida final (como el módulo Speaker).

### Exploración sin Límites

La verdadera magia de un sintetizador modular reside en la experimentación. No hay una forma "correcta" de hacer las cosas. Conecta salidas a entradas inesperadas, modula parámetros de forma extrema y descubre nuevas paletas sonoras. ¡Disfruta del viaje!

---

## Preguntas Frecuentes (FAQ)

**P: ¿En qué plataformas está disponible ModuGal?**

R: Actualmente, ModuGal está disponible como aplicación de escritorio para **Windows** (instalador auto-ejecutable) y **Linux** (formato AppImage). Estamos trabajando para ofrecer una versión para macOS en el futuro.

**P: ¿Necesito conocimientos previos de síntesis para usar ModuGal?**

R: No necesariamente. ModuGal está diseñado para ser intuitivo tanto para principiantes como para expertos. La interfaz visual facilita la comprensión del flujo de la señal. Sin embargo, tener conceptos básicos de síntesis te ayudará a sacarle el máximo partido.

**P: ¿Puedo usar mis propios samples en el módulo Wavetable?**

R: ¡Sí! El módulo Wavetable te permite cargar tus propios archivos de audio en formato WAV para usarlos como osciladores.

---

## Solución de Problemas

**Problema: La aplicación no produce sonido.**

1.  **Revisa la conexión de audio:** Asegúrate de que los módulos están correctamente conectados desde una fuente de sonido (como un VCO) hasta la salida principal.
2.  **Comprueba el ADSR:** Verifica que la envolvente ADSR esté siendo disparada por un secuenciador o un teclado MIDI y que su salida de ganancia esté conectada al VCA.
3.  **Verifica el volumen:** Asegúrate de que el control de volumen principal no esté a cero.

**Problema: La aplicación se cierra inesperadamente.**

R: Por favor, ayúdanos a mejorar ModuGal. Si experimentas un cierre inesperado, envíanos un correo a `support@modugal.com` con los pasos que realizaste antes del cierre y, si es posible, adjunta el archivo de log que se encuentra en `~/.config/ModuGal/logs/main.log`.

---

## Contacto

¿Tienes más preguntas, sugerencias o necesitas ayuda personalizada?

No dudes en escribirnos a [tonetxo@proton.me](mailto:support@modugal.com). ¡Estamos aquí para ayudarte!