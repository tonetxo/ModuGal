export const moduleData = {
  gl: {
    categories: [
      {
        id: "sound-sources",
        title: "Fontes de Son (Osciladores e Xeradores)",
        modules: [
          {
            id: "vco",
            title: "VCO (Voltage-Controlled Oscillator)",
            description: "O corazón do sintetizador. Xera as formas de onda básicas (serra, cadrada, senoidal, triangular) que forman o son inicial. O seu ton contrólase principalmente a través da entrada `1v/oct`.",
            inputs: [
              {name: "`1v/oct`", description: "Controla o ton principal (pitch) segundo o estándar de 1 voltio por oitava. Conectar aquí un teclado ou secuenciador."},
              {name: "`FM1` / `FM2`", description: "Entradas de modulación de frecuencia para crear timbres complexos e metálicos (efectos tipo campá ou vibrato extremo)."},
              {name: "`PWM`", description: "(Só en onda cadrada) Modula o ancho do pulso, cambiando o carácter do son de groso a delgado."}
            ],
            outputs: [
              {name: "`Out`", description: "O sinal de audio principal xerado polo oscilador."}
            ],
            controls: []
          },
          {
            id: "keyboard",
            title: "Keyboard",
            description: "O módulo Keyboard converte as pulsacións das teclas do teu ordenador nos sinais estándar que o sintetizador pode entender. É a forma máis directa de tocar melodías e controlar outros módulos. Non produce son por si mesmo, senón que actúa como o cerebro da operación melódica.",
            inputs: [],
            outputs: [
              {name: "`CV`", description: "Envía a información da altura da nota (o ton). Conéctase á entrada \"1V/OCT\" dun oscilador (VCO) para que toque a nota correcta."},
              {name: "`Gate`", description: "Envía un sinal que se mantén \"aberto\" mentres unha tecla está pulsada e se \"pecha\" ao soltala. É esencial para disparar xeradores de envolvente (ADSR), que á súa vez modelan o volume ou o filtro dun son."}
            ],
            controls: [
              {name: "`Octave`", description: "Sobe ou baixa o rexistro do teclado en oitavas completas, permitíndoche acceder a un rango de notas máis amplo, dende baixos profundos a agudos cristalinos."},
              {name: "`Glide`", description: "Controla o tempo que tarda unha nota en deslizarse ata a seguinte. Con valores baixos, as notas cambian instantaneamente. Con valores altos, créase un efecto de 'portamento' ou 'glissando' moi característico."}
            ]
          }
          // More modules would be added here...
        ]
      },
      {
        id: "modulators",
        title: "Moduladores (Control de Parámetros)",
        modules: [
          {
            id: "adsr",
            title: "ADSR (Attack, Decay, Sustain, Release)",
            description: "O módulo ADSR é un xerador de envolvente fundamental para dar forma dinámica ao son. Recibe unha sinal de \"Gate\" (comporta) e produce unha sinal de \"CV\" (Control de Voltaxe) que modula parámetros doutros módulos ao longo do tempo. Permite controlar catro fases clave:",
            inputs: [
              {name: "`Gate`", description: "Entrada de sinal de comporta para disparar a envolvente."}
            ],
            outputs: [
              {name: "`CV`", description: "Saída de Control de Voltaxe que representa a envolvente xerada."}
            ],
            controls: []
          },
          {
            id: "lfo",
            title: "LFO (Low-Frequency Oscillator)",
            description: "O módulo LFO (Low-Frequency Oscillator) xera sinais cíclicas que operan por debaixo do rango de audio, ideais para engadir movemento e modulación a outros parámetros do sintetizador. Non produce son por si mesmo, senón que crea 'movemento' que pode controlar o ton, o volume, o filtro, etc.",
            inputs: [
              {name: "`Rate CV`", description: "Entrada de Control de Voltaxe para modular a velocidade do LFO."},
              {name: "`Depth CV`", description: "Entrada de Control de Voltaxe para modular a profundidade do LFO."},
              {name: "`Gate`", description: "Entrada de sinal de compuerta para disparar a envolvente de ataque do LFO."}
            ],
            outputs: [
              {name: "`Out`", description: "Saída de Control de Voltaxe que xera a forma de onda do LFO."}
            ],
            controls: []
          }
        ]
      }
      // More categories would be added here...
    ]
  },
  es: {
    categories: [
      {
        id: "sound-sources",
        title: "Fuentes de Sonido (Osciladores y Generadores)",
        modules: [
          {
            id: "vco",
            title: "VCO (Voltage-Controlled Oscillator)",
            description: "El corazón del sintetizador. Genera las formas de onda básicas (sierra, cuadrada, senoidal, triangular) que forman el sonido inicial. Su tono se controla principalmente a través de la entrada `1v/oct`.",
            inputs: [
              {name: "`1v/oct`", description: "Controla el tono principal (pitch) según el estándar de 1 voltio por octava. Conectar aquí un teclado o secuenciador."},
              {name: "`FM1` / `FM2`", description: "Entradas de modulación de frecuencia para crear timbres complejos y metálicos (efectos tipo campana o vibrato extremo)."},
              {name: "`PWM`", description: "(Solo en onda cuadrada) Modula el ancho del pulso, cambiando el carácter del sonido de grueso a delgado."}
            ],
            outputs: [
              {name: "`Out`", description: "La señal de audio principal generada por el oscilador."}
            ],
            controls: []
          },
          {
            id: "keyboard",
            title: "Keyboard",
            description: "El módulo Keyboard convierte las pulsaciones de las teclas de tu ordenador en las señales estándar que el sintetizador puede entender. Es la forma más directa de tocar melodías y controlar otros módulos. No produce sonido por sí mismo, sino que actúa como el cerebro de la operación melódica.",
            inputs: [],
            outputs: [
              {name: "`CV`", description: "Envía la información de la altura de la nota (el tono). Se conecta a la entrada \"1V/OCT\" de un oscilador (VCO) para que toque la nota correcta."},
              {name: "`Gate`", description: "Envía una señal que se mantiene \"abierta\" mientras una tecla está pulsada y se \"cierra\" al soltarla. Es esencial para disparar generadores de envolvente (ADSR), que a su vez modelan el volumen o el filtro de un sonido."}
            ],
            controls: [
              {name: "`Octave`", description: "Sube o baja el registro del teclado en octavas completas, permitiéndote acceder a un rango de notas más amplio, desde bajos profundos a agudos cristalinos."},
              {name: "`Glide`", description: "Controla el tiempo que tarda una nota en deslizarse hasta la siguiente. Con valores bajos, las notas cambian instantáneamente. Con valores altos, se crea un efecto de 'portamento' o 'glissando' muy característico."}
            ]
          }
        ]
      },
      {
        id: "modulators",
        title: "Moduladores (Control de Parámetros)",
        modules: [
          {
            id: "adsr",
            title: "ADSR (Attack, Decay, Sustain, Release)",
            description: "El módulo ADSR es un generador de envolvente fundamental para dar forma dinámica al sonido. Recibe una señal de \"Gate\" (compuerta) y produce una señal de \"CV\" (Control de Voltaje) que modula parámetros de otros módulos a lo largo del tiempo. Permite controlar cuatro fases clave:",
            inputs: [
              {name: "`Gate`", description: "Entrada de señal de compuerta para disparar la envolvente."}
            ],
            outputs: [
              {name: "`CV`", description: "Salida de Control de Voltaje que representa la envolvente generada."}
            ],
            controls: []
          },
          {
            id: "lfo",
            title: "LFO (Low-Frequency Oscillator)",
            description: "El módulo LFO (Low-Frequency Oscillator) genera señales cíclicas que operan por debajo del rango de audio, ideales para añadir movimiento y modulación a otros parámetros del sintetizador. No produce sonido por sí mismo, sino que crea \"movimiento\" que puede controlar el tono, el volumen, el filtro, etc.",
            inputs: [
              {name: "`Rate CV`", description: "Entrada de Control de Voltaje para modular la velocidad del LFO."},
              {name: "`Depth CV`", description: "Entrada de Control de Voltaje para modular la profundidad del LFO."},
              {name: "`Gate`", description: "Entrada de señal de compuerta para disparar la envolvente de ataque del LFO."}
            ],
            outputs: [
              {name: "`Out`", description: "Salida de Control de Voltaje que genera la forma de onda del LFO."}
            ],
            controls: []
          }
        ]
      }
    ]
  },
  en: {
    categories: [
      {
        id: "sound-sources",
        title: "Sound Sources (Oscillators and Generators)",
        modules: [
          {
            id: "vco",
            title: "VCO (Voltage-Controlled Oscillator)",
            description: "The heart of the synthesizer. It generates the basic waveforms (sawtooth, square, sine, triangle) that form the initial sound. Its pitch is mainly controlled through the `1v/oct` input.",
            inputs: [
              {name: "`1v/oct`", description: "Controls the main pitch according to the 1 volt per octave standard. Connect a keyboard or sequencer here."},
              {name: "`FM1` / `FM2`", description: "Frequency modulation inputs to create complex and metallic timbres (bell-like effects or extreme vibrato)."},
              {name: "`PWM`", description: "(Square wave only) Modulates the pulse width, changing the character of the sound from thick to thin."}
            ],
            outputs: [
              {name: "`Out`", description: "The main audio signal generated by the oscillator."}
            ],
            controls: []
          },
          {
            id: "keyboard",
            title: "Keyboard",
            description: "The Keyboard module translates your computer keyboard presses into the standard signals the synthesizer can understand. It is the most direct way to play melodies and control other modules. It does not produce sound by itself but acts as the brain of the melodic operation.",
            inputs: [],
            outputs: [
              {name: "`CV`", description: "Sends the note's pitch information. It connects to the \"1V/OCT\" input of an oscillator (VCO) to play the correct note."},
              {name: "`Gate`", description: "Sends a signal that stays \"open\" while a key is pressed and \"closes\" when released. It is essential for triggering envelope generators (ADSRs), which in turn shape the volume or filter of a sound."}
            ],
            controls: [
              {name: "`Octave`", description: "Raises or lowers the keyboard's register in full octaves, allowing you to access a wider range of notes, from deep basses to crystalline highs."},
              {name: "`Glide`", description: "Controls the time it takes for one note to slide to the next. With low values, notes change instantly. With high values, a very characteristic \"portamento\" or \"glissando\" effect is created."}
            ]
          }
        ]
      },
      {
        id: "modulators",
        title: "Modulators (Parameter Control)",
        modules: [
          {
            id: "adsr",
            title: "ADSR (Attack, Decay, Sustain, Release)",
            description: "The ADSR module is a fundamental envelope generator used to dynamically shape sound. It receives a \"Gate\" signal and produces a \"CV\" (Control Voltage) signal that modulates parameters of other modules over time. It allows control over four key phases:",
            inputs: [
              {name: "`Gate`", description: "Gate signal input to trigger the envelope."}
            ],
            outputs: [
              {name: "`CV`", description: "Control Voltage output representing the generated envelope."}
            ],
            controls: []
          },
          {
            id: "lfo",
            title: "LFO (Low-Frequency Oscillator)",
            description: "The LFO (Low-Frequency Oscillator) module generates cyclic signals that operate below the audio range, ideal for adding movement and modulación to other synthesizer parameters. It does not produce sound itself, but creates \"movement\" that can control pitch, volume, filter, etc.",
            inputs: [
              {name: "`Rate CV`", description: "Control Voltage input to modulate the LFO rate."},
              {name: "`Depth CV`", description: "Control Voltage input to modulate the LFO depth."},
              {name: "`Gate`", description: "Gate signal input to trigger the LFO's attack envelope."}
            ],
            outputs: [
              {name: "`Out`", description: "Control Voltage output that generates the LFO waveform."}
            ],
            controls: []
          }
        ]
      }
    ]
  }
};