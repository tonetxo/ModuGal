---
title: Módulos (GL)
---
# Guía de Módulos do Sintetizador

Este documento detalla a funcionalidade, os parámetros e as conexións de cada módulo dispoñible no sintetizador.

---

## Fontes de Son (Osciladores e Xeradores)

### VCO (Voltage-Controlled Oscillator)
- **Descripción:** O corazón do sintetizador. Xera as formas de onda básicas (serra, cadrada, senoidal, triangular) que forman o son inicial. O seu ton contrólase principalmente a través da entrada `1v/oct`.
- **Entradas:**
  - `1v/oct`: Controla o ton principal (pitch) segundo o estándar de 1 voltio por oitava. Conectar aquí un teclado ou secuenciador.
  - `FM1` / `FM2`: Entradas de modulación de frecuencia para crear timbres complexos e metálicos (efectos tipo campá ou vibrato extremo).
  - `PWM`: (Só en onda cadrada) Modula o ancho do pulso, cambiando o carácter do son de groso a delgado.
- **Saídas:**
  - `Out`: O sinal de audio principal xerado polo oscilador.

### Wavetable
- **Descripción:** Un oscilador avanzado que utiliza unha táboa de ondas (un sample de audio) como a súa forma de onda. Permite crear sons moito máis complexos e evolutivos que un VCO estándar. Pode funcionar como un sampler simple ou como un oscilador de táboa de ondas.
- **Controis:**
  - `LOAD`: Carga un arquivo de audio para usalo como táboa de ondas.
  - `LOOP`: Activa ou desactiva o modo de bucle.
  - `PITCH`: Controla o ton da reprodución.
  - `XFADE`: Axusta o crossfade nos puntos de bucle para suavizar a transición.
- **Entradas:**
  - `1v/oct`: Controla o ton.
  - `FM`: Modulación de frecuencia.
  - `Gate`: Dispara a reprodución da onda (se non está en modo bucle).
- **Saídas:**
  - `Out`: O sinal de audio xerado.

### Noise Generator
- **Descripción:** Xera ruído de diferentes "cores" (white, pink, random). Esencial para crear sons de percusión (como hi-hats ou snares), efectos de vento, ou para engadir textura a outros sons.
- **Saídas:**
  - `Out`: O sinal de audio de ruído.

### DrumSynth
- **Descripción:** Un completo secuenciador e sintetizador de batería de 9 canles. Permite programar patróns rítmicos e modificar o son de cada instrumento de percusión (bombo, caixa, hi-hat, etc.).
- **Controis:**
  - Grade de 16 pasos por 9 canles para programar o ritmo.
  - Controis de `Tune`, `Decay`, `Punch`, `Gain`, etc., para o son seleccionado.
- **Entradas:**
  - `Clock In`: Sincroniza o tempo do secuenciador cunha fonte de reloxo externa.
- **Saídas:**
  - `Out L/R`: Saída de audio estéreo da mestura de batería.
  - `Gate Out`: Envía un pulso de gate en cada paso activo do canl seleccionado.

### AudioPlayer
- **Descripción:** Un reprodutor de samples simple. Carga un arquivo de audio e o reproduce. Útil para incorporar loops ou gravacións externas no patch.
- **Entradas:**
  - `Gain CV`: Controla o volume do reprodutor mediante un voltaxe de control.
- **Saídas:**
  - `Out`: O sinal de audio do arquivo cargado.

### GranularSampler
- **Descripción:** Un potente motor de síntese granular. Descompón un sample de audio en pequenos fragmentos (granos) e os reproduce de formas complexas. Ideal para crear texturas atmosféricas, pads evolutivos e efectos abstractos.
- **Entradas:**
  - `Pos`, `Size`, `Rate`, `Pitch`: Entradas de CV para modular os parámetros principais da granulación.
- **Saídas:**
  - `Out L/R`: Saída de audio estéreo.

### Microphone
- **Descripción:** Utiliza a entrada de micrófono do teu ordenador como unha fonte de son en tempo real. Permite procesar a túa voz ou calquera son externo cos demais módulos.
- **Saídas:**
  - `Out`: O sinal de audio capturado polo micrófono.

---

## Moduladores (Control de Parámetros)

### ADSR (Attack, Decay, Sustain, Release)
- **Descripción:** Un xerador de envolvente. Modela a evolución dun parámetro no tempo, típicamente o volume (conectado a un VCA) ou o corte dun filtro (conectado a un VCF). Disparase cun sinal de "Gate".
- **Entradas:**
  - `Gate`: Un sinal que lle indica cando comezar (gate on) e cando rematar (gate off) a envolvente.
- **Saídas:**
  - `CV`: O sinal de control de voltaxe xerado pola envolvente.

### LFO (Low-Frequency Oscillator)
- **Descripción:** Un oscilador de baixa frecuencia. A súa saída non se escoita, senón que se usa para modular outros parámetros, creando efectos como vibrato (modulando o pitch dun VCO), trémolo (modulando un VCA) ou wah-wah (modulando un VCF).
- **Entradas:**
  - `Rate CV`: Modula a velocidade do LFO.
  - `Depth CV`: Modula a intensidade (amplitude) do LFO.
  - `Gate`: Reinicia ou activa o LFO.
- **Saídas:**
  - `Out`: O sinal de control (CV) de baixa frecuencia.

### RingModulator
- **Descripción:** Multiplica dous sinais de audio (`In` e `Mod`). O resultado é un timbre metálico e disonante que contén as sumas e diferenzas das frecuencias dos sinais orixinais.
- **Entradas:**
  - `In`: Sinal de audio principal (portadora).
  - `Mod`: Sinal de audio que modulará á portadora.
- **Saídas:**
  - `Out`: O sinal de audio resultante da modulación en anel.

### Sample & Hold (S&H)
- **Descripción:** Un módulo clásico da síntese modular. "Mostra" (captura) o valor de voltaxe da entrada `In` cada vez que recibe un pulso na entrada `Trig`, e o "mantén" (sostén) na súa saída ata o seguinte pulso. Conectado a un xerador de ruído, produce as típicas secuencias aleatorias de "bleeps" e "bloops".
- **Entradas:**
  - `In`: O sinal de CV que se vai mostrar.
  - `Trig`: O sinal de disparo (gate ou clock) que indica cando tomar unha mostra.
- **Saídas:**
  - `Out`: O sinal de CV mostrado e mantido.

---

## Procesadores de Sinal (Filtros e Efectos)

### VCF (Voltage-Controlled Filter)
- **Descripción:** Un filtro que elimina ou realza certas frecuencias dun sinal de audio. É fundamental para esculpir o timbre do son (síntese substractiva).
- **Controis:**
  - `Cutoff`: A frecuencia a partir da cal o filtro comeza a actuar.
  - `Resonance (Q)`: Acentúa as frecuencias no punto de corte, creando un son máis resoante ou "silbante".
  - `Type`: Cambia entre `lowpass` (deixa pasar graves), `highpass` (deixa pasar agudos), `bandpass` (deixa pasar unha banda de medios) e `notch` (elimina unha banda de medios).
- **Entradas:**
  - `In`: O sinal de audio a filtrar.
  - `Freq CV`: Modula a frecuencia de corte.
  - `Q CV`: Modula a resonancia.
- **Saídas:**
  - `Out`: O sinal de audio filtrado.

### VCA (Voltage-Controlled Amplifier)
- **Descripción:** Un amplificador controlado por voltaxe. A súa función principal é controlar o volume dun sinal de audio. Típicamente, conéctase a saída dun ADSR á súa entrada `CV` para dar forma á dinámica dunha nota.
- **Entradas:**
  - `In` / `In L/R`: O sinal de audio que se vai amplificar.
  - `CV1` / `CV2`: Entradas de control de voltaxe que determinan o nivel de amplificación.
- **Saídas:**
  - `Out` / `Out L/R`: O sinal de audio amplificado.

### Wavefolder
- **Descripción:** Un distorsionador que, en lugar de recortar a onda (clipping), a "dobra" sobre si mesma cando supera un limiar. Engade harmónicos complexos e brillantes, ideal para sons agresivos ou metálicos.
- **Entradas:**
  - `In`: Sinal de audio a procesar.
- **Saídas:**
  - `Out`: Sinal de audio procesado.

### Delay
- **Descripción:** Un efecto de eco estéreo (ping-pong). Repite o sinal de entrada despois dun tempo determinado.
- **Controis:**
  - `Time`: O tempo entre cada repetición.
  - `Feedback`: A cantidade de sinal que se realimenta, creando máis ou menos repeticións.
  - `Mix`: A mestura entre o sinal orixinal (seco) e o sinal co efecto (húmido).
  - `Tone`: Un filtro para escurecer ou abrillandar as repeticións.
- **Entradas/Saídas:** Estéreo (`In L/R`, `Out L/R`).

### Reverb
- **Descripción:** Simula a reverberación dun espazo acústico, engadindo profundidade e ambiente ao son.
- **Controis:**
  - `Decay`: A duración da "cola" da reverberación.
  - `Mix`: A mestura entre o sinal seco e o húmido.
- **Entradas/Saídas:** Estéreo (`In L/R`, `Out L/R`).

### Chorus
- **Descripción:** Engroxa o son duplicándoo e desafinando e retrasando lixeiramente a copia. Crea un efecto de "coro" ou de múltiples instrumentos sonando á vez.
- **Entradas/Saídas:** Estéreo.

### Flanger / Phaser
- **Descripción:** Efectos de modulación que crean un característico son de "xet" ou varrido. O Flanger faino cun delay moi curto e realimentación, mentres que o Phaser utiliza filtros en fase.
- **Entradas/Saídas:** Estéreo.

### Bitcrusher
- **Descripción:** Un efecto de degradación dixital. Reduce a resolución de bits (`Bits`) e a frecuencia de mostraxe (`Rate`), resultando nun son "lo-fi", robótico ou de videoxogo antigo.
- **Entradas/Saídas:** Mono.

### Compressor
- **Descripción:** Reduce o rango dinámico dun sinal, facendo que as partes silenciosas sexan máis audibles e as partes fortes máis controladas. Aporta "pegada" e cohesión á mestura.
- **Entradas/Saídas:** Mono.

### AutoPan
- **Descripción:** Mobe automaticamente o son de esquerda a dereita no campo estéreo, controlado por un LFO interno.
- **Entradas:** Mono.
- **Saídas:** Estéreo.

### StereoWidener
- **Descripción:** Ensancha un sinal mono para crear unha imaxe estéreo artificial, engadindo espacialidade.
- **Entradas:** Mono.
- **Saídas:** Estéreo.

### Vocoder
- **Descripción:** Impón as características tímbricas dun sinal (o `Modulator`, típicamente unha voz) sobre outro (o `Carrier`, típicamente un sintetizador). É o efecto clásico de "voz de robot".
- **Entradas:**
  - `Modulator`: O sinal que analiza (voz).
  - `Carrier`: O sinal que sintetiza (sinte).
- **Saídas:**
  - `Out`: O sinal vocodificado.

---

## Utilidades e Control

### Keyboard
- **Descripción:** Un teclado en pantalla que se pode tocar co teclado do ordenador. Xera sinais de `Gate` (nota pulsada/liberada) e `CV` (ton da nota).
- **Saídas:**
  - `Gate`: Actívase ao pulsar unha tecla.
  - `CV`: Envía o voltaxe correspondente ao ton da nota.

### MIDItoCV
- **Descripción:** Converte mensaxes MIDI dun controlador externo en sinais de CV e Gate para o sistema modular.
- **Saídas:**
  - `Gate`, `CV`, `Velocity`, `Pitch Bend`: Converten os datos MIDI correspondentes en voltaxes de control.

### Sequencer
- **Descripción:** Un secuenciador de 16 pasos para crear melodías e secuencias de control. Para cada paso, pódese definir o valor de CV, a duración do Gate e se o paso está activo, desactivado ou se salta.
- **Entradas:**
  - `Clock In`: Sincroniza o tempo cun reloxo externo.
- **Saídas:**
  - `CV`: O valor de voltaxe do paso actual.
  - `Gate`: O sinal de gate do paso actual.

### Arpeggiator
- **Descripción:** Recibe notas dun teclado (físico ou virtual) e as reproduce secuencialmente como un arpegio, segundo o modo, tempo e oitavas seleccionadas.
- **Entradas:**
  - `CV In` / `Gate In`: Para recibir notas doutro módulo secuenciador.
  - `Clock In`: Para sincronizar o tempo.
- **Saídas:**
  - `CV` / `Gate`: A secuencia de notas arpegiadas.

### Clock
- **Descripción:** Un xerador de pulsos de reloxo mestre. Esencial para sincronizar secuenciadores, arpegiadores e outros módulos rítmicos.
- **Saídas:**
  - `Out`: Envía un sinal de gate a un tempo regular (BPM).

### Mixer
- **Descripción:** Un mesturador para combinar varias sinais de audio. Cada canl ten un fader de volume.
- **Entradas:**
  - `In 1` a `In 4`: Entradas de audio para cada canl.
- **Saídas:**
  - `Master Out`: A mestura final de todas as entradas.

### Math
- **Descripción:** Realiza operacións matemáticas básicas (+, -, x, min, max) sobre dous sinais de CV de entrada. Útil para combinar ou alterar sinais de modulación de formas complexas.
- **Entradas:** `A`, `B`.
- **Saídas:** `Out`.

### Logic
- **Descripción:** Realiza operacións lóxicas (AND, OR, XOR) sobre dous sinais de Gate. Permite crear patróns rítmicos e de control complexos.
- **Entradas:** `A`, `B`.
- **Saídas:** `Out`.

### Speaker
- **Descripción:** A saída de audio final do sistema. Todo o que se conecta aquí escoitarase a través dos altofalantes do ordenador.
- **Entradas:** `In L`, `In R`.

### Recorder
- **Descripción:** Graba o sinal de audio que recibe nas súas entradas e permite gardalo como un arquivo de audio no ordenador.
- **Entradas:** `In L`, `In R`.

### Oscilloscope / SpectrumAnalyzer
- **Descripción:** Ferramentas de visualización. O osciloscopio mostra a forma de onda dun sinal no tempo, mentres que o analizador de espectro mostra o seu contido de frecuencia. Son indispensables para entender o que está a ocorrer co son.
- **Entradas:** `In`.