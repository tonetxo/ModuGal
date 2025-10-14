
# Guía de Módulos del Sintetizador

Este documento detalla la funcionalidad, los parámetros y las conexiones de cada módulo disponible en el sintetizador.

---

## Fuentes de Sonido (Osciladores y Generadores)

### VCO (Voltage-Controlled Oscillator)
- **Descripción:** El corazón del sintetizador. Genera las formas de onda básicas (sierra, cuadrada, senoidal, triangular) que forman el sonido inicial. Su tono se controla principalmente a través de la entrada `1v/oct`.
- **Entradas:**
  - `1v/oct`: Controla el tono principal (pitch) según el estándar de 1 voltio por octava. Conectar aquí un teclado o secuenciador.
  - `FM1` / `FM2`: Entradas de modulación de frecuencia para crear timbres complejos y metálicos (efectos tipo campana o vibrato extremo).
  - `PWM`: (Solo en onda cuadrada) Modula el ancho del pulso, cambiando el carácter del sonido de grueso a delgado.
- **Salidas:**
  - `Out`: La señal de audio principal generada por el oscilador.

### Wavetable
- **Descripción:** Un oscilador avanzado que utiliza una tabla de ondas (un sample de audio) como su forma de onda. Permite crear sonidos mucho más complejos y evolutivos que un VCO estándar. Puede funcionar como un sampler simple o como un oscilador de tabla de ondas.
- **Controles:**
  - `LOAD`: Carga un archivo de audio para usarlo como tabla de ondas.
  - `LOOP`: Activa o desactiva el modo de bucle.
  - `PITCH`: Controla el tono de la reproducción.
  - `XFADE`: Ajusta el crossfade en los puntos de bucle para suavizar la transición.
- **Entradas:**
  - `1v/oct`: Controla el tono.
  - `FM`: Modulación de frecuencia.
  - `Gate`: Dispara la reproducción de la onda (si no está en modo bucle).
- **Salidas:**
  - `Out`: La señal de audio generada.

### Noise Generator
- **Descripción:** Genera ruido de diferentes "colores" (white, pink, random). Esencial para crear sonidos de percusión (como hi-hats o snares), efectos de viento, o para añadir textura a otros sonidos.
- **Salidas:**
  - `Out`: La señal de audio de ruido.

### DrumSynth
- **Descripción:** Un completo secuenciador y sintetizador de batería de 9 canales. Permite programar patrones rítmicos y modificar el sonido de cada instrumento de percusión (bombo, caja, hi-hat, etc.).
- **Controles:**
  - Rejilla de 16 pasos por 9 canales para programar el ritmo.
  - Controles de `Tune`, `Decay`, `Punch`, `Gain`, etc., para el sonido seleccionado.
- **Entradas:**
  - `Clock In`: Sincroniza el tempo del secuenciador con una fuente de reloj externa.
- **Salidas:**
  - `Out L/R`: Salida de audio estéreo de la mezcla de batería.
  - `Gate Out`: Envía un pulso de gate en cada paso activo del canal seleccionado.

### AudioPlayer
- **Descripción:** Un reproductor de samples simple. Carga un archivo de audio y lo reproduce. Útil para incorporar loops o grabaciones externas en el patch.
- **Entradas:**
  - `Gain CV`: Controla el volumen del reproductor mediante un voltaje de control.
- **Salidas:**
  - `Out`: La señal de audio del archivo cargado.

### GranularSampler
- **Descripción:** Un potente motor de síntesis granular. Descompone un sample de audio en pequeños fragmentos (granos) y los reproduce de formas complejas. Ideal para crear texturas atmosféricas, pads evolutivos y efectos abstractos.
- **Entradas:**
  - `Pos`, `Size`, `Rate`, `Pitch`: Entradas de CV para modular los parámetros principales de la granulación.
- **Salidas:**
  - `Out L/R`: Salida de audio estéreo.

### Microphone
- **Descripción:** Utiliza la entrada de micrófono de tu ordenador como una fuente de sonido en tiempo real. Permite procesar tu voz o cualquier sonido externo con los demás módulos.
- **Salidas:**
  - `Out`: La señal de audio capturada por el micrófono.

---

## Moduladores (Control de Parámetros)

### ADSR (Attack, Decay, Sustain, Release)
- **Descripción:** Un generador de envolvente. Modela la evolución de un parámetro en el tiempo, típicamente el volumen (conectado a un VCA) o el corte de un filtro (conectado a un VCF). Se dispara con una señal de "Gate".
- **Entradas:**
  - `Gate`: Una señal que le indica cuándo empezar (gate on) y cuándo terminar (gate off) la envolvente.
- **Salidas:**
  - `CV`: La señal de control de voltaje generada por la envolvente.

### LFO (Low-Frequency Oscillator)
- **Descripción:** Un oscilador de baja frecuencia. Su salida no se escucha, sino que se usa para modular otros parámetros, creando efectos como vibrato (modulando el pitch de un VCO), trémolo (modulando un VCA) o wah-wah (modulando un VCF).
- **Entradas:**
  - `Rate CV`: Modula la velocidad del LFO.
  - `Depth CV`: Modula la intensidad (amplitud) del LFO.
  - `Gate`: Reinicia o activa el LFO.
- **Salidas:**
  - `Out`: La señal de control (CV) de baja frecuencia.

### RingModulator
- **Descripción:** Multiplica dos señales de audio (`In` y `Mod`). El resultado es un timbre metálico y disonante que contiene las sumas y diferencias de las frecuencias de las señales originales.
- **Entradas:**
  - `In`: Señal de audio principal (portadora).
  - `Mod`: Señal de audio que modulará a la portadora.
- **Salidas:**
  - `Out`: La señal de audio resultante de la modulación en anillo.

### Sample & Hold (S&H)
- **Descripción:** Un módulo clásico de la síntesis modular. "Muestrea" (captura) el valor de voltaje de la entrada `In` cada vez que recibe un pulso en la entrada `Trig`, y lo "mantiene" (sostiene) en su salida hasta el siguiente pulso. Conectado a un generador de ruido, produce las típicas secuencias aleatorias de "bleeps" y "bloops".
- **Entradas:**
  - `In`: La señal de CV que se va a muestrear.
  - `Trig`: La señal de disparo (gate o clock) que indica cuándo tomar una muestra.
- **Salidas:**
  - `Out`: La señal de CV muestreada y mantenida.

---

## Procesadores de Señal (Filtros y Efectos)

### VCF (Voltage-Controlled Filter)
- **Descripción:** Un filtro que elimina o realza ciertas frecuencias de una señal de audio. Es fundamental para esculpir el timbre del sonido (síntesis sustractiva).
- **Controles:**
  - `Cutoff`: La frecuencia a partir de la cual el filtro empieza a actuar.
  - `Resonance (Q)`: Acentúa las frecuencias en el punto de corte, creando un sonido más resonante o "silbante".
  - `Type`: Cambia entre `lowpass` (deja pasar graves), `highpass` (deja pasar agudos), `bandpass` (deja pasar una banda de medios) y `notch` (elimina una banda de medios).
- **Entradas:**
  - `In`: La señal de audio a filtrar.
  - `Freq CV`: Modula la frecuencia de corte.
  - `Q CV`: Modula la resonancia.
- **Salidas:**
  - `Out`: La señal de audio filtrada.

### VCA (Voltage-Controlled Amplifier)
- **Descripción:** Un amplificador controlado por voltaje. Su función principal es controlar el volumen de una señal de audio. Típicamente, se conecta la salida de un ADSR a su entrada `CV` para dar forma a la dinámica de una nota.
- **Entradas:**
  - `In` / `In L/R`: La señal de audio que se va a amplificar.
  - `CV1` / `CV2`: Entradas de control de voltaje que determinan el nivel de amplificación.
- **Salidas:**
  - `Out` / `Out L/R`: La señal de audio amplificada.

### Wavefolder
- **Descripción:** Un distorsionador que, en lugar de recortar la onda (clipping), la "pliega" sobre sí misma cuando supera un umbral. Añade armónicos complejos y brillantes, ideal para sonidos agresivos o metálicos.
- **Entradas:**
  - `In`: Señal de audio a procesar.
- **Salidas:**
  - `Out`: Señal de audio procesada.

### Delay
- **Descripción:** Un efecto de eco estéreo (ping-pong). Repite la señal de entrada después de un tiempo determinado.
- **Controles:**
  - `Time`: El tiempo entre cada repetición.
  - `Feedback`: La cantidad de señal que se realimenta, creando más o menos repeticiones.
  - `Mix`: La mezcla entre la señal original (seca) y la señal con efecto (húmeda).
  - `Tone`: Un filtro para oscurecer o abrillantar las repeticiones.
- **Entradas/Salidas:** Estéreo (`In L/R`, `Out L/R`).

### Reverb
- **Descripción:** Simula la reverberación de un espacio acústico, añadiendo profundidad y ambiente al sonido.
- **Controles:**
  - `Decay`: La duración de la "cola" de la reverberación.
  - `Mix`: La mezcla entre la señal seca y la húmeda.
- **Entradas/Salidas:** Estéreo (`In L/R`, `Out L/R`).

### Chorus
- **Descripción:** Engrosa el sonido duplicándolo y desafinando y retrasando ligeramente la copia. Crea un efecto de "coro" o de múltiples instrumentos sonando a la vez.
- **Entradas/Salidas:** Estéreo.

### Flanger / Phaser
- **Descripción:** Efectos de modulación que crean un característico sonido de "jet" o barrido. El Flanger lo hace con un delay muy corto y realimentación, mientras que el Phaser utiliza filtros en fase.
- **Entradas/Salidas:** Estéreo.

### Bitcrusher
- **Descripción:** Un efecto de degradación digital. Reduce la resolución de bits (`Bits`) y la frecuencia de muestreo (`Rate`), resultando en un sonido "lo-fi", robótico o de videojuego antiguo.
- **Entradas/Salidas:** Mono.

### Compressor
- **Descripción:** Reduce el rango dinámico de una señal, haciendo que las partes silenciosas sean más audibles y las partes fuertes más controladas. Aporta "pegada" y cohesión a la mezcla.
- **Entradas/Salidas:** Mono.

### AutoPan
- **Descripción:** Mueve automáticamente el sonido de izquierda a derecha en el campo estéreo, controlado por un LFO interno.
- **Entradas:** Mono.
- **Salidas:** Estéreo.

### StereoWidener
- **Descripción:** Ensancha una señal mono para crear una imagen estéreo artificial, añadiendo espacialidad.
- **Entradas:** Mono.
- **Salidas:** Estéreo.

### Vocoder
- **Descripción:** Impone las características tímbricas de una señal (el `Modulator`, típicamente una voz) sobre otra (el `Carrier`, típicamente un sintetizador). Es el efecto clásico de "voz de robot".
- **Entradas:**
  - `Modulator`: La señal que analiza (voz).
  - `Carrier`: La señal que sintetiza (sinte).
- **Salidas:**
  - `Out`: La señal vocodificada.

---

## Utilidades y Control

### Keyboard
- **Descripción:** Un teclado en pantalla que se puede tocar con el teclado del ordenador. Genera señales de `Gate` (nota pulsada/liberada) y `CV` (tono de la nota).
- **Salidas:**
  - `Gate`: Se activa al pulsar una tecla.
  - `CV`: Envía el voltaje correspondiente al tono de la nota.

### MIDItoCV
- **Descripción:** Convierte mensajes MIDI de un controlador externo en señales de CV y Gate para el sistema modular.
- **Salidas:**
  - `Gate`, `CV`, `Velocity`, `Pitch Bend`: Convierten los datos MIDI correspondientes en voltajes de control.

### Sequencer
- **Descripción:** Un secuenciador de 16 pasos para crear melodías y secuencias de control. Para cada paso, se puede definir el valor de CV, la duración del Gate y si el paso está activo, desactivado o se salta.
- **Entradas:**
  - `Clock In`: Sincroniza el tempo con un reloj externo.
- **Salidas:**
  - `CV`: El valor de voltaje del paso actual.
  - `Gate`: La señal de gate del paso actual.

### Arpeggiator
- **Descripción:** Recibe notas de un teclado (físico o virtual) y las reproduce secuencialmente como un arpegio, según el modo, tempo y octavas seleccionadas.
- **Entradas:**
  - `CV In` / `Gate In`: Para recibir notas de otro módulo secuenciador.
  - `Clock In`: Para sincronizar el tempo.
- **Salidas:**
  - `CV` / `Gate`: La secuencia de notas arpegiadas.

### Clock
- **Descripción:** Un generador de pulsos de reloj maestro. Esencial para sincronizar secuenciadores, arpegiadores y otros módulos rítmicos.
- **Salidas:**
  - `Out`: Envía una señal de gate a un tempo regular (BPM).

### Mixer
- **Descripción:** Un mezclador para combinar varias señales de audio. Cada canal tiene un fader de volumen.
- **Entradas:**
  - `In 1` a `In 4`: Entradas de audio para cada canal.
- **Salidas:**
  - `Master Out`: La mezcla final de todas las entradas.

### Math
- **Descripción:** Realiza operaciones matemáticas básicas (+, -, x, min, max) sobre dos señales de CV de entrada. Útil para combinar o alterar señales de modulación de formas complejas.
- **Entradas:** `A`, `B`.
- **Salidas:** `Out`.

### Logic
- **Descripción:** Realiza operaciones lógicas (AND, OR, XOR) sobre dos señales de Gate. Permite crear patrones rítmicos y de control complejos.
- **Entradas:** `A`, `B`.
- **Salidas:** `Out`.

### Speaker
- **Descripción:** La salida de audio final del sistema. Todo lo que se conecta aquí se escuchará a través de los altavoces del ordenador.
- **Entradas:** `In L`, `In R`.

### Recorder
- **Descripción:** Graba la señal de audio que recibe en sus entradas y permite guardarla como un archivo de audio en el ordenador.
- **Entradas:** `In L`, `In R`.

### Oscilloscope / SpectrumAnalyzer
- **Descripción:** Herramientas de visualización. El osciloscopio muestra la forma de onda de una señal en el tiempo, mientras que el analizador de espectro muestra su contenido de frecuencia. Son indispensables para entender lo que está ocuriendo con el sonido.
- **Entradas:** `In`.
