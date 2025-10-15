
---
title: "Soporte"
description: "Guía de inicio, preguntas frecuentes, solución de problemas e como contactarnos."
---

## Benvingido a ModuGal: O Teu Universo Sonoro Modular

ModuGal é un sintetizador modular virtual inspirado nos sistemas hardware clásicos, pero coa flexibilidade e potencia do software moderno. Ofréceche un lenzo en branco para que poidas deseñar, experimentar e esculpir sons dunha maneira intuitiva e visual. Dende simples melodías ata complexas texturas sonoras e sistemas xerativos, o único límite é a túa imaxinación.

### O Lenzo Principal: O Teu Espazo Creativo

Ao abrir a aplicación, atopas os módulos **Teclado** e **Altofalantes** xa precargados para que poidas comezar a experimentar de inmediato. Este é o teu lenzo. Aquí é onde engadirás e conectarás módulos para construír os teus propios instrumentos e sistemas de son.

### Interacción e Control

A interacción co sintetizador está deseñada para ser rápida e fluída:

*   **Engadir Módulos:** Fai **clic dereito** en calquera espazo baleiro do lenzo para abrir o menú de selección. Navega polas categorías (Osciladores, Filtros, Efectos, etc.) e fai clic no módulo que desexes engadir.
*   **Conectar Módulos:** Fai **clic esquerdo** nunha saída (output) dun módulo e arrastra o cable virtual ata unha entrada (input) doutro. As entradas e saídas compatibles resaltaranse para guiarte. Para desconectar un cable, podes facer clic no seu punto de conexión de entrada ou directamente sobre o propio cable.
*   **Navegación no Lenzo:**
    *   *Zoom:* Utiliza a **roda do rato** para achegar ou afastar a vista, permitíndoche ter unha visión xeral do teu patch ou centrarte en detalles específicos.
    *   *Pan (Desprazamento):* Mantén presionado o **botón esquerdo do rato** en calquera parte baleira do lenzo e arrastra para desprazarte.
*   **Interactuar cos Módulos:** Fai **clic esquerdo** e arrastra os potenciómetros, faders ou switches para modificar os parámetros de cada módulo en tempo real. Observa e escoita como os teus cambios afectan ao son.
*   **Menú do Módulo:** Fai **clic dereito** na cabeceira de calquera módulo para acceder a opcións adicionais, como duplicalo, eliminalo ou ver información específica.

### Entendendo o Fluxo de Sinal

Nun sintetizador modular, todo se basea en como flúe o sinal. Hai dous tipos principais de sinais, diferenciadas pola súa cor: **Audio** (cables azuis), que é o son que escoitas, e **CV (Control Voltage)** (cables laranxas), que son sinais de control usadas para modular parámetros. Por convención, as saídas están no lado dereito dos módulos e as entradas no esquerdo. O obxectivo é guiar o sinal de son dende unha fonte (como un VCO) a través de varios procesadores (como un VCF ou VCA) ata chegar a unha saída final (como o módulo Speaker).

### Exploración sen Límites

A verdadeira maxia dun sintetizador modular reside na experimentación. Non hai unha forma "correcta" de facer as cousas. Conecta saídas a entradas inesperadas, modula parámetros de forma extrema e descobre novas paletas sonoras. Goza da viaxe!

---

## Preguntas Frecuentes (FAQ)

**P: En que plataformas está dispoñible ModuGal?**

R: Actualmente, ModuGal está dispoñible como aplicación de escritorio para **Windows** (instalador auto-executábel) e **Linux** (formato AppImage). Estamos a traballar para ofrecer unha versión para macOS no futuro.

**P: Necesito coñecementos previos de síntese para usar ModuGal?**

R: Non necesariamente. ModuGal está deseñado para ser intuitivo tanto para principiantes como para expertos. A interface visual facilita a comprensión do fluxo do sinal. Non obstante, ter conceptos básicos de síntese axudarache a sacarlle o máximo partido.

**P: Podo usar os meus propios samples no módulo Wavetable?**

R: Si! O módulo Wavetable permíteche cargar os teus propios ficheiros de son en formato WAV para usalos como osciladores.

---

## Solución de Problemas

**Problema: A aplicación non produce son.**

1.  **Revisa a conexión de son:** Asegúrate de que os módulos están correctamente conectados dende unha fonte de son (como un VCO) ata a saída principal.
2.  **Comproba o ADSR:** Verifica que a envolvente ADSR estea a ser disparada por un secuenciador ou un teclado MIDI e que a súa saída de ganancia estea conectada ao VCA.
3.  **Verifica o volume:** Asegúrate de que o control de volume principal non estea a cero.

**Problema: A aplicación péchase inesperadamente.**

R: Por favor, axúdanos a mellorar ModuGal. Se experimentas un peche inesperado, envíanos un correo a `tonetxo@proton.me` cos pasos que realizaches antes do peche e, se é posible, adxunta o ficheiro de log que se atopa en `~/.config/ModuGal/logs/main.log`.

---

## Contacto

Tes máis preguntas, suxestións ou necesitas axuda personalizada?

Non dubides en escribirnos a [**tonetxo@proton.me**](mailto:tonetxo@proton.me). Estamos aquí para axudarche!
