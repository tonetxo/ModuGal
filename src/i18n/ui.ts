export const languages = {
  gl: "GA",
  es: "ES",
  en: "EN",
};

export const defaultLang = "gl";

export const ui = {
  gl: {
    "knob.menu": "Menú",
    "page.title": "ModuGal - Sintetizador Modular Virtual",
    "page.description":
      "O obradoiro do inventor sónico. Esculpe as túas paisaxes sonoras cunha precisión doutra era.",
    "header.subtitle": "Sintetizador Modular Virtual",
    tagline:
      "O obradoiro do inventor sónico. Esculpe as túas paisaxes sonoras cunha precisión doutra era.",
    "button.buy": "Comprar Versión Completa",
    "button.demo": "Descargar Demo",
    "nav.home": "Inicio",
    "nav.modules": "Módulos",
    "nav.demos": "Demos",
    "nav.support": "Soporte",
    "footer.rights": "Todos os dereitos reservados.",
    "module_group.audio_and_control_modulators":
      "Moduladores de Audio e Control",
    "modules_menu.title": "Categorías de Módulos",
    "mechanics.title": "Mecánica e Modo de Uso do Sintetizador",
    "mechanics.intro":
      "Aquí atoparás unha explicación detallada de como interactuar co sintetizador modular, dende o cableado ata as funcións avanzadas.",
    "mechanics.wiring_title": "Cableado de Módulos",
    "mechanics.wiring_description":
      "Para conectar dous módulos, fai clic e arrastra dende un porto de saída (dereita do módulo) ata un porto de entrada (esquerda do módulo). Unha liña indicará a conexión. Para desconectar, fai clic nun cable existente e arrástrao fóra de calquera porto.",
    "mechanics.context_menu_title": "Menú Contextual (Botón Dereito)",
    "mechanics.context_menu_description":
      "Fai clic co botón dereito do rato nun espazo baleiro do canvas para abrir o menú contextual. Dende aquí, podes seleccionar e crear novos módulos. Cada módulo aparecerá na posición do rato.",
    "mechanics.module_interaction_title": "Interacción con Módulos",
    "mechanics.module_interaction_description":
      "Os módulos pódense arrastrar polo canvas facendo clic e arrastrando a súa área principal. Os controis (deslizadores, botóns) dentro de cada módulo pódense manipular directamente. Fai clic e arrastra os deslizadores para cambiar os valores, e fai clic nos botóns para activar funcións ou cambiar modos (por exemplo, formas de onda).",
    "mechanics.app_menu_title": "Menú da Aplicación (Electron)",
    "mechanics.app_menu_description":
      "A barra de menú superior da aplicación ofrece funcións globais:",
    "mechanics.app_menu.file_save_load":
      "<strong>Arquivo > Gardar/Cargar Patch:</strong> Permite gardar o estado actual do teu sintetizador (todos os módulos e conexións) e cargar configuracións gardadas previamente.",
    "mechanics.app_menu.edit_undo_redo":
      "<strong>Editar > Desfacer/Refacer:</strong> Desfai ou refai as últimas accións realizadas no sintetizador.",
    "mechanics.app_menu.view_visualizer":
      "<strong>Ver > Alternar Visualizador:</strong> Abre ou pecha unha xanela separada que mostra unha visualización en tempo real da saída de audio.",
    "mechanics.app_menu.themes":
      "<strong>Temas:</strong> Cambia o tema visual da interface do sintetizador.",
    "mechanics.app_menu.midi":
      "<strong>MIDI:</strong> Selecciona un dispositivo de entrada MIDI para controlar o sintetizador con hardware externo.",
    "mechanics.app_menu.license":
      "<strong>Activar Licenza:</strong> Introduce a túa clave de licenza para desbloquear todas as funcións da aplicación.",
    "mechanics.module_specific_actions_title": "Accións Específicas de Módulo",
    "mechanics.module_specific_actions_description":
      "Algúns módulos poden ter accións adicionais accesibles a través de interaccións directas ou menús contextuais específicos do módulo (por exemplo, bypass, duplicar). Estas accións detallaranse nas descricións de cada módulo.",
    "vco.subtitle": "Oscilador Controlado por Voltaxe",
    "vco.description":
      "O VCO é a fonte de son principal nun sintetizador modular. Xera un sinal de audio periódico (unha onda) cuxa frecuencia (ton) pode ser controlada por unha voltaxe externa, como a dun teclado ou un secuenciador. É o bloque de construción fundamental para crear calquera son.",
    "vco.waveforms_title": "Formas de Onda",
    "vco.parameters_title": "Parámetros e Controis",
    "vco.inputs_title": "Entradas (CV)",
    "vco.outputs_title": "Saídas (Audio)",
    "keyboard.subtitle": "Controlador de Teclado",
    "keyboard.description":
      "O módulo Keyboard converte as pulsacións das teclas do teu ordenador nos sinais estándar que o sintetizador pode entender. É a forma máis directa de tocar melodías e controlar outros módulos. Non produce son por si mesmo, senón que actúa como o cerebro da operación melódica.",
    "keyboard.parameters_title": "Parámetros e Controis",
    "keyboard.outputs_title": "Saídas (Control)",
    "vco.waveforms.sine":
      "Un ton puro e suave, sen harmónicos. Ideal para sons limpios e baixos profundos.",
    "vco.waveforms.square":
      "Un son brillante e oco, rico en harmónicos impares. Perfecto para sons de tipo clarinete ou leads potentes.",
    "vco.waveforms.sawtooth":
      "Un son agudo, brillante e enérxico, con todos os harmónicos. É a base para cordas, metais e baixos agresivos.",
    "vco.waveforms.triangle":
      "Similar á sinusoidal pero con máis harmónicos, o que lle dá un carácter un pouco máis brillante e metálico.",
    "vco.parameters.freq":
      "Axusta o ton principal do oscilador nun rango moi amplo (20Hz a 5000Hz).",
    "vco.parameters.fine":
      "Permite un axuste preciso do ton (+/- 100 céntimas), ideal para desafinar lixeiramente ou para unha afinación perfecta.",
    "vco.parameters.pw":
      "Dispoñible só para a onda cadrada, modifica o timbre da onda, dende un son fino e nasal a un cheo e oco.",
    "vco.parameters.wave":
      "Un botón para cambiar entre as catro formas de onda dispoñibles.",
    "vco.inputs.voct":
      "Entrada principal para controlar o ton melodicamente dende un teclado.",
    "vco.inputs.fm":
      "Entradas de Modulación de Frecuencia para crear sons complexos, metálicos ou de tipo campá.",
    "vco.inputs.pwm":
      'Entrada para modular o ancho de pulso (só en onda cadrada), creando o clásico son "PWM".',
    "vco.outputs.out": "A saída de audio principal do oscilador.",
    "keyboard.parameters.octave":
      "Sobe ou baixa o rexistro do teclado en oitavas completas, permitíndoche acceder a un rango de notas máis amplo, dende baixos profundos a agudos cristalinos.",
    "keyboard.parameters.glide":
      'Controla o tempo que tarda unha nota en deslizarse ata a seguinte. Con valores baixos, as notas cambian instantaneamente. Con valores altos, créase un efecto de "portamento" ou "glissando" moi característico.',
    "keyboard.outputs.cv":
      'Envía a información da altura da nota (o ton). Conéctase á entrada "1V/OCT" dun oscilador (VCO) para que toque a nota correcta.',
    "keyboard.outputs.gate":
      'Envía un sinal que se mantén "aberto" mentres unha tecla está pulsada e se "pecha" ao soltala. É esencial para disparar xeradores de envolvente (ADSR), que á súa vez modelan o volume ou o filtro dun son.',
    "vca.subtitle": "Amplificador Controlado por Voltaxe",
    "vca.description":
      "O VCA actúa como unha porta de volume automática. Recibe un sinal de audio e controla o seu nivel baseándose nunha voltaxe de control (CV) externa, xeralmente dun xerador de envolvente (ADSR). É fundamental para dar forma á dinámica dun son, definindo como o seu volume evoluciona no tempo.",
    "vca.parameters_title": "Parámetros e Controis",
    "vca.inputs_title": "Entradas",
    "vca.outputs_title": "Saídas",
    "vca.parameters.cv1_level":
      "É un atenuador para a entrada de control CV1. Define canta influencia terá o sinal de control (como un ADSR) sobre o volume do sinal de audio. A maior nivel, máis drástico será o cambio de volume.",
    "vca.parameters.mode":
      "Permite cambiar o VCA entre o procesamento dun sinal de audio único (Mono) ou un par estéreo (Esquerda e Dereita).",
    "vca.inputs.in": "A entrada de audio principal que se vai procesar.",
    "vca.inputs.cv":
      "Entradas para a voltaxe de control que modulará o volume. Aquí é onde se conecta a saída dun ADSR ou un LFO.",
    "vca.outputs.out":
      "A saída de audio, con seu volume xa modulado polos sinais de control.",
    "adsr.subtitle": "Xerador de Envolvente",
    "adsr.description":
      'O módulo ADSR é un xerador de envolvente fundamental para dar forma dinámica ao son. Recibe unha sinal de "Gate" (comporta) e produce unha sinal de "CV" (Control de Voltaxe) que modula parámetros doutros módulos ao longo do tempo. Permite controlar catro fases clave:',
    "adsr.phases_title": "Fases da Envolvente",
    "adsr.phases.attack":
      "Define o tempo que tarda o son en alcanzar o seu nivel máximo.",
    "adsr.phases.decay":
      "Establece o tempo que o son tarda en descender dende o pico do Attack ata o nivel de Sustain.",
    "adsr.phases.sustain":
      "Determina o nivel ao que o son se mantén mentres a sinal de Gate está activa.",
    "adsr.phases.release":
      "Controla o tempo que tarda o son en desvanecerse a cero unha vez que a sinal de Gate se desactiva.",
    "adsr.parameters_title": "Parámetros e Controis",
    "adsr.parameters.attack": "Axusta o tempo de Attack (0.001s a 2s).",
    "adsr.parameters.decay": "Axusta o tempo de Decay (0.001s a 2s).",
    "adsr.parameters.sustain": "Axusta o nivel de Sustain (0 a 1).",
    "adsr.parameters.release": "Axusta o tempo de Release (0.001s a 5s).",
    "adsr.inputs_title": "Entradas",
    "adsr.inputs.gate":
      "Entrada de sinal de comporta para disparar a envolvente.",
    "adsr.outputs_title": "Saídas",
    "adsr.outputs.cv":
      "Saída de Control de Voltaxe que representa a envolvente xerada.",
    "vcf.subtitle": "Filtro Controlado por Voltaxe",
    "vcf.description":
      "O módulo VCF (Voltage-Controlled Filter) é esencial para esculpir o timbre do son. Permite eliminar ou realzar certas frecuencias, transformando radicalmente o carácter dun son. Recibe unha sinal de audio e voltaxes de control para a súa frecuencia de corte e resonancia.",
    "vcf.types_title": "Tipos de Filtro",
    "vcf.types.lowpass":
      "Permite o paso das frecuencias por debaixo da frecuencia de corte e atenúa as superiores. Ideal para suavizar sons ou crear baixos profundos.",
    "vcf.types.highpass":
      "Permite o paso das frecuencias por riba da frecuencia de corte e atenúa as inferiores. Útil para eliminar graves non desexados ou facer que os sons soen máis finos.",
    "vcf.types.bandpass":
      "Permite o paso dunha banda específica de frecuencias arredor da frecuencia de corte, atenuando as que están fóra desa banda. Crea sons máis enfocados e resonantes.",
    "vcf.types.notch":
      'Atenúa unha banda estreita de frecuencias arredor da frecuencia de corte, deixando pasar o resto. Útil para eliminar zumbidos ou crear efectos de "wah" invertidos.',
    "vcf.parameters_title": "Parámetros e Controis",
    "vcf.parameters.cutoff":
      "Axusta a frecuencia de corte do filtro (20Hz a 20000Hz).",
    "vcf.parameters.q":
      'Controla a resonancia do filtro (0.1 a 30). Valores altos realzan as frecuencias arredor do punto de corte, creando un son máis "chillón" ou "metálico".',
    "vcf.inputs_title": "Entradas",
    "vcf.inputs.in": "Entrada de audio principal a filtrar.",
    "vcf.inputs.freq_cv":
      "Entrada de Control de Voltaxe para modular a frecuencia de corte.",
    "vcf.inputs.freq_cv2":
      "Segunda entrada de Control de Voltaxe para modular a frecuencia de corte.",
    "vcf.inputs.q_cv":
      "Entrada de Control de Voltaxe para modular a resonancia (Q).",
    "vcf.outputs_title": "Saídas",
    "vcf.outputs.out": "Saída de audio co son xa filtrado.",
    "lfo.subtitle": "Oscilador de Baixa Frecuencia",
    "lfo.description":
      'O módulo LFO (Low-Frequency Oscillator) xera sinais cíclicas que operan por debaixo do rango de audio, ideais para engadir movemento e modulación a outros parámetros do sintetizador. Non produce son por si mesmo, senón que crea "movemento" que pode controlar o ton, o volume, o filtro, etc.',
    "lfo.waveforms_title": "Formas de Onda",
    "lfo.waveforms.sine":
      "Unha onda suave e fluída, ideal para modulacións sutís como vibrato ou tremolo.",
    "lfo.waveforms.square":
      'Unha onda con cambios abruptos, perfecta para efectos de "trémolo" rítmicos ou modulacións de filtro "step-like".',
    "lfo.waveforms.sawtooth":
      'Unha onda ascendente ou descendente constante, útil para "barridos" de filtro ou modulacións de ton que suben ou baixan gradualmente.',
    "lfo.waveforms.triangle":
      "Similar á sinusoidal pero con picos máis pronunciados, ofrece unha modulación máis directa e menos suave que a sine.",
    "lfo.parameters_title": "Parámetros e Controis",
    "lfo.parameters.rate":
      "Axusta a velocidade do LFO (0.01Hz a 50Hz). Controla a rapidez coa que se repite a modulación.",
    "lfo.parameters.depth":
      "Controla a intensidade da modulación do LFO (0 a 1). Determina canto afectará o LFO ao parámetro ao que está conectado.",
    "lfo.parameters.attack":
      "Define o tempo que tarda o LFO en alcanzar a súa profundidade máxima despois de recibir unha sinal de Gate.",
    "lfo.inputs_title": "Entradas",
    "lfo.inputs.rate_cv":
      "Entrada de Control de Voltaxe para modular a velocidade do LFO.",
    "lfo.inputs.depth_cv":
      "Entrada de Control de Voltaxe para modular a profundidade do LFO.",
    "lfo.inputs.gate":
      "Entrada de sinal de compuerta para disparar a envolvente de ataque do LFO.",
    "lfo.outputs_title": "Saídas",
    "lfo.outputs.out":
      "Saída de Control de Voltaxe que xera a forma de onda do LFO.",
    "ringmod.subtitle": "Modulador en Anel",
    "ringmod.description":
      "O módulo Modulador en Anel realiza unha modulación de amplitude, multiplicando dous sinais de audio de entrada. Este proceso crea novas frecuencias (suma e diferenza das frecuencias de entrada) que non están relacionadas harmonicamente cos sinais orixinais, resultando nun son metálico, tipo campá ou disonante.",
    "ringmod.inputs_title": "Entradas",
    "ringmod.inputs.in": "O sinal de audio de entrada principal.",
    "ringmod.inputs.mod": "O sinal de audio de entrada do modulador.",
    "ringmod.outputs_title": "Saídas",
    "ringmod.outputs.out": "A saída de audio modulada en anel.",
    "samplehold.subtitle": "Mostra e Retén (Sample & Hold)",
    "samplehold.description":
      'O módulo Sample & Hold (S&H) captura (mostra) a voltaxe presente na súa entrada nun momento específico e despois mantén esa voltaxe ata que chega un novo sinal de disparo. Isto crea cambios de voltaxe graduados e cuantificados, a miúdo utilizados para xerar secuencias aleatorias, modulacións en escaleira ou para "conxelar" unha voltaxe de control.',
    "samplehold.inputs_title": "Entradas",
    "samplehold.inputs.in": "A voltaxe de entrada (CV) a ser mostrada.",
    "samplehold.inputs.trig":
      "Un sinal de disparo ou comporta que indica ao módulo cando mostrar a entrada.",
    "samplehold.outputs_title": "Saídas",
    "samplehold.outputs.out": "A voltaxe retida (CV) de saída.",
    "module_group.initial_base_modules": "Módulos Base Iniciais",
    "output.subtitle": "Saída de Audio (Altofalantes)",
    "output.description":
      "O módulo de Saída de Audio representa os altofalantes do teu sistema. É o destino final de todos os sinais de audio xerados no sintetizador modular, convertendo as sinais eléctricas en son audible. Sen este módulo, non escoitarías nada!",
    "output.inputs_title": "Entradas",
    "output.inputs.in":
      "A entrada de audio principal para conectar o son final do sintetizador.",
  },
  es: {
    "knob.menu": "Menú",
    "page.title": "ModuGal - Sintetizador Modular Virtual",
    "page.description":
      "El taller del inventor sónico. Esculpe tus paisajes sonoros con una precisión de otra era.",
    "header.subtitle": "Sintetizador Modular Virtual",
    tagline:
      "El taller del inventor sónico. Esculpe tus paisajes sonoros con una precisión de otra era.",
    "button.buy": "Comprar Versión Completa",
    "button.demo": "Descargar Demo",
    "nav.home": "Inicio",
    "nav.modules": "Módulos",
    "nav.demos": "Demos",
    "nav.support": "Soporte",
    "footer.rights": "Todos los derechos reservados.",
    "module_group.audio_and_control_modulators":
      "Moduladores de Audio y Control",
    "modules_menu.title": "Categorías de Módulos",
    "mechanics.title": "Mecánica y Modo de Uso del Sintetizador",
    "mechanics.intro":
      "Aquí encontrarás una explicación detallada de cómo interactuar con el sintetizador modular, desde el cableado hasta las funciones avanzadas.",
    "mechanics.wiring_title": "Cableado de Módulos",
    "mechanics.wiring_description":
      "Para conectar dos módulos, haz clic y arrastra desde un puerto de salida (derecha del módulo) hasta un puerto de entrada (izquierda del módulo). Una línea indicará la conexión. Para desconectar, haz clic en un cable existente y arrástralo fuera de cualquier puerto.",
    "mechanics.context_menu_title": "Menú Contextual (Botón Derecho)",
    "mechanics.context_menu_description":
      "Haz clic con el botón derecho del ratón en un espacio vacío del canvas para abrir el menú contextual. Desde aquí, puedes seleccionar y crear nuevos módulos. Cada módulo aparecerá en la posición del ratón.",
    "mechanics.module_interaction_title": "Interacción con Módulos",
    "mechanics.module_interaction_description":
      "Los módulos se pueden arrastrar por el canvas haciendo clic y arrastrando su área principal. Los controles (deslizadores, botones) dentro de cada módulo se pueden manipular directamente. Haz clic y arrastra los deslizadores para cambiar los valores, y haz clic en los botones para activar funciones o cambiar modos (por ejemplo, formas de onda).",
    "mechanics.app_menu_title": "Menú de la Aplicación (Electron)",
    "mechanics.app_menu_description":
      "La barra de menú superior de la aplicación ofrece funciones globales:",
    "mechanics.app_menu.file_save_load":
      "Archivo > Guardar/Cargar Patch: Permite guardar el estado actual de tu sintetizador (todos los módulos y conexiones) y cargar configuraciones guardadas previamente.",
    "mechanics.app_menu.edit_undo_redo":
      "Editar > Deshacer/Rehacer: Deshace o rehace las últimas acciones realizadas en el sintetizador.",
    "mechanics.app_menu.view_visualizer":
      "<strong>Ver > Alternar Visualizador:</strong> Abre o cierra una ventana separada que muestra una visualización en tiempo real de la salida de audio.",
    "mechanics.app_menu.themes":
      "<strong>Temas:</strong> Cambia el tema visual de la interfaz del sintetizador.",
    "mechanics.app_menu.midi":
      "<strong>MIDI:</strong> Selecciona un dispositivo de entrada MIDI para controlar el sintetizador con hardware externo.",
    "mechanics.app_menu.license":
      "<strong>Activar Licencia:</strong> Introduce tu clave de licenza para desbloquear todas las funciones de la aplicación.",
    "mechanics.module_specific_actions_title": "Acciones Específicas de Módulo",
    "mechanics.module_specific_actions_description":
      "Algunos módulos pueden tener acciones adicionales accesibles a través de interacciones directas o menús contextuales específicos del módulo (por ejemplo, bypass, duplicar). Estas acciones se detallarán en las descripciones de cada módulo.",
    "vco.subtitle": "Oscilador Controlado por Voltaje",
    "vco.description":
      "El VCO es la fuente de sonido principal en un sintetizador modular. Genera una señal de audio periódica (una onda) cuya frecuencia (tono) puede ser controlada por un voltaje externo, como el de un teclado o un secuenciador. Es el bloque de construcción fundamental para crear cualquier sonido.",
    "vco.waveforms_title": "Formas de Onda",
    "vco.parameters_title": "Parámetros y Controles",
    "vco.inputs_title": "Entradas (CV)",
    "vco.outputs_title": "Salidas (Audio)",
    "keyboard.subtitle": "Controlador de Teclado",
    "keyboard.description":
      "El módulo Keyboard convierte las pulsaciones de las teclas de tu ordenador en las señales estándar que el sintetizador puede entender. Es la forma más directa de tocar melodías y controlar otros módulos. No produce sonido por sí mismo, sino que actúa como el cerebro de la operación melódica.",
    "keyboard.parameters_title": "Parámetros y Controles",
    "keyboard.outputs_title": "Salidas (Control)",
    "vco.waveforms.sine":
      "Un tono puro y suave, sin armónicos. Ideal para sonidos limpios y bajos profundos.",
    "vco.waveforms.square":
      "Un sonido brillante y hueco, rico en armónicos impares. Perfecto para sonidos de tipo clarinete o leads potentes.",
    "vco.waveforms.sawtooth":
      "Un sonido agudo, brillante y enérgico, con todos los armónicos. Es la base para cuerdas, metales y bajos agresivos.",
    "vco.waveforms.triangle":
      "Similar a la sinusoidal pero con más armónicos, lo que le da un carácter un poco más brillante y metálico.",
    "vco.parameters.freq":
      "Ajusta el tono principal del oscilador en un rango muy amplio (20Hz a 5000Hz).",
    "vco.parameters.fine":
      "Permite un ajuste preciso del tono (+/- 100 céntimas), ideal para desafinar ligeramente o para una afinación perfecta.",
    "vco.parameters.pw":
      "Disponible solo para la onda cuadrada, modifica el timbre de la onda, desde un sonido fino y nasal a uno lleno y hueco.",
    "vco.parameters.wave":
      "Un botón para cambiar entre las cuatro formas de onda disponibles.",
    "vco.inputs.voct":
      "Entrada principal para controlar el tono melódicamente desde un teclado.",
    "vco.inputs.fm":
      "Entradas de Modulación de Frecuencia para crear sonidos complejos, metálicos o de tipo campana.",
    "vco.inputs.pwm":
      'Entrada para modular el ancho de pulso (solo en onda cuadrada), creando el clásico sonido "PWM".',
    "vco.outputs.out": "La salida de audio principal del oscilador.",
    "keyboard.parameters.octave":
      "Sube o baja el registro del teclado en octavas completas, permitíéndote acceder a un rango de notas más amplio, desde bajos profundos a agudos cristalinos.",
    "keyboard.parameters.glide":
      'Controla el tiempo que tarda una nota en deslizarse hasta la siguiente. Con valores bajos, las notas cambian instantáneamente. Con valores altos, se crea un efecto de "portamento" o "glissando" muy característico.',
    "keyboard.outputs.cv":
      'Envía la información de la altura de la nota (el tono). Se conecta a la entrada "1V/OCT" de un oscilador (VCO) para que toque la nota correcta.',
    "keyboard.outputs.gate":
      'Envía una señal que se mantiene "abierta" mientras una tecla está pulsada y se "cierra" al soltarla. Es esencial para disparar generadores de envolvente (ADSR), que a su vez modelan el volumen o el filtro de un sonido.',
    "vca.subtitle": "Amplificador Controlado por Voltaje",
    "vca.description":
      "El VCA actúa como una puerta de volumen automática. Recibe una señal de audio y controla su nivel basándose en un voltaje de control (CV) externo, generalmente de un generador de envolvente (ADSR). Es fundamental para dar forma a la dinámica de un sonido, definiendo cómo su volumen evoluciona en el tiempo.",
    "vca.parameters_title": "Parámetros y Controles",
    "vca.inputs_title": "Entradas",
    "vca.outputs_title": "Salidas",
    "vca.parameters.cv1_level":
      "Es un atenuador para la entrada de control CV1. Define cuánta influencia tendrá la señal de control (como un ADSR) sobre el volumen de la señal de audio. A mayor nivel, más drástico será el cambio de volumen.",
    "vca.parameters.mode":
      "Permite cambiar el VCA entre el procesamiento de una señal de audio única (Mono) o un par estéreo (Izquierda y Derecha).",
    "vca.inputs.in": "La entrada de audio principal que se va a procesar.",
    "vca.inputs.cv":
      "Entradas para el voltaje de control que modulará el volumen. Aquí es donde se conecta la salida de un ADSR o un LFO.",
    "vca.outputs.out":
      "La salida de audio, con su volumen ya modulado por los señales de control.",
    "adsr.subtitle": "Generador de Envolvente",
    "adsr.description":
      'El módulo ADSR es un generador de envolvente fundamental para dar forma dinámica al sonido. Recibe una señal de "Gate" (compuerta) y produce una señal de "CV" (Control de Voltaje) que modula parámetros de otros módulos a lo largo del tiempo. Permite controlar cuatro fases clave:',
    "adsr.phases_title": "Fases de la Envolvente",
    "adsr.phases.attack":
      "Define el tiempo que tarda el sonido en alcanzar su nivel máximo.",
    "adsr.phases.decay":
      "Establece el tiempo que el sonido tarda en descender desde el pico del Attack hasta el nivel de Sustain.",
    "adsr.phases.sustain":
      "Determina el nivel al que el sonido se mantiene mientras la señal de Gate está activa.",
    "adsr.phases.release":
      "Controla el tiempo que tarda el sonido en desvanecerse a cero una vez que la señal de Gate se desactiva.",
    "adsr.parameters_title": "Parámetros y Controles",
    "adsr.parameters.attack": "Ajusta el tiempo de Attack (0.001s a 2s).",
    "adsr.parameters.decay": "Ajusta el tiempo de Decay (0.001s a 2s).",
    "adsr.parameters.sustain": "Ajusta el nivel de Sustain (0 a 1).",
    "adsr.parameters.release": "Ajusta el tiempo de Release (0.001s a 5s).",
    "adsr.inputs_title": "Entradas",
    "adsr.inputs.gate":
      "Entrada de señal de compuerta para disparar la envolvente.",
    "adsr.outputs_title": "Salidas",
    "adsr.outputs.cv":
      "Salida de Control de Voltaje que representa la envolvente generada.",
    "vcf.subtitle": "Filtro Controlado por Voltaje",
    "vcf.description":
      "El módulo VCF (Voltage-Controlled Filter) es esencial para esculpir el timbre del sonido. Permite eliminar o realzar ciertas frecuencias, transformando radicalmente el carácter de un sonido. Recibe una señal de audio y voltajes de control para su frecuencia de corte y resonancia.",
    "vcf.types_title": "Tipos de Filtro",
    "vcf.types.lowpass":
      "Permite el paso de las frecuencias por debajo de la frecuencia de corte y atenúa las superiores. Ideal para suavizar sonidos o crear bajos profundos.",
    "vcf.types.highpass":
      "Permite el paso de las frecuencias por encima de la frecuencia de corte y atenúa las inferiores. Útil para eliminar graves no deseados o hacer que los sonidos suenen más finos.",
    "vcf.types.bandpass":
      "Permite el paso de una banda específica de frecuencias alrededor de la frecuencia de corte, atenuando las que están fuera de esa banda. Crea sonidos más enfocados y resonantes.",
    "vcf.types.notch":
      'Atenúa una banda estrecha de frecuencias alrededor de la frecuencia de corte, dejando pasar el resto. Útil para eliminar zumbidos o crear efectos de "wah" invertidos.',
    "vcf.parameters_title": "Parámetros y Controles",
    "vcf.parameters.cutoff":
      "Ajusta la frecuencia de corte del filtro (20Hz a 20000Hz).",
    "vcf.parameters.q":
      'Controla la resonancia del filtro (0.1 a 30). Valores altos realzan las frecuencias alrededor del punto de corte, creando un sonido más "chillón" o "metálico".',
    "vcf.inputs_title": "Entradas",
    "vcf.inputs.in": "Entrada de audio principal a filtrar.",
    "vcf.inputs.freq_cv":
      "Entrada de Control de Voltaje para modular la frecuencia de corte.",
    "vcf.inputs.freq_cv2":
      "Segunda entrada de Control de Voltaje para modular la frecuencia de corte.",
    "vcf.inputs.q_cv":
      "Entrada de Control de Voltaje para modular la resonancia (Q).",
    "vcf.outputs_title": "Salidas",
    "vcf.outputs.out": "Salida de audio con el sonido ya filtrado.",
    "lfo.subtitle": "Oscilador de Baja Frecuencia",
    "lfo.description":
      'El módulo LFO (Low-Frequency Oscillator) genera señales cíclicas que operan por debajo del rango de audio, ideales para añadir movimiento y modulación a otros parámetros del sintetizador. No produce sonido por sí mismo, sino que crea "movimiento" que puede controlar el tono, el volumen, el filtro, etc.',
    "lfo.waveforms_title": "Formas de Onda",
    "lfo.waveforms.sine":
      "Una onda suave y fluida, ideal para modulaciones sutiles como vibrato o trémolo.",
    "lfo.waveforms.square":
      'Una onda con cambios abruptos, perfecta para efectos de "trémolo" rítmicos o modulaciones de filtro "step-like".',
    "lfo.waveforms.sawtooth":
      'Una onda ascendente o descendente constante, útil para "barridos" de filtro o modulaciones de tono que suben o bajan gradualmente.',
    "lfo.waveforms.triangle":
      "Similar a la onda sinusoidal pero con picos más pronunciados, ofrece una modulación más directa y menos suave que la sine.",
    "lfo.parameters_title": "Parámetros y Controles",
    "lfo.parameters.rate":
      "Ajusta la velocidad del LFO (0.01Hz a 50Hz). Controla la rapidez con la que se repite la modulación.",
    "lfo.parameters.depth":
      "Controla la intensidad de la modulación del LFO (0 a 1). Determina cuánto afectará el LFO al parámetro al que está conectado.",
    "lfo.parameters.attack":
      "Define el tiempo que tarda el LFO en alcanzar su profundidad máxima después de recibir una señal de Gate.",
    "lfo.inputs_title": "Entradas",
    "lfo.inputs.rate_cv":
      "Entrada de Control de Voltaje para modular la velocidad del LFO.",
    "lfo.inputs.depth_cv":
      "Entrada de Control de Voltaje para modular la profundidad del LFO.",
    "lfo.inputs.gate":
      "Entrada de señal de compuerta para disparar la envolvente de ataque del LFO.",
    "lfo.outputs_title": "Salidas",
    "lfo.outputs.out":
      "Salida de Control de Voltaje que genera la forma de onda del LFO.",
    "ringmod.subtitle": "Modulador en Anillo",
    "ringmod.description":
      "El módulo Modulador en Anillo realiza una modulación de amplitud, multiplicando dos señales de audio de entrada. Este proceso crea nuevas frecuencias (suma y diferencia de las frecuencias de entrada) que no están relacionadas armónicamente con las señales originales, resultando en un sonido metálico, tipo campana o disonante.",
    "ringmod.inputs_title": "Entradas",
    "ringmod.inputs.in": "La señal de audio de entrada principal.",
    "ringmod.inputs.mod": "La señal de audio de entrada del modulador.",
    "ringmod.outputs_title": "Salidas",
    "ringmod.outputs.out": "La salida de audio modulada en anillo.",
    "samplehold.subtitle": "Muestra y Retén (Sample & Hold)",
    "samplehold.description":
      'El módulo Sample & Hold (S&H) captura (muestra) el voltaje presente en su entrada en un momento específico y luego mantiene ese voltaje hasta que llega una nueva señal de disparo. Esto crea cambios de voltaje escalonados y cuantificados, a menudo utilizados para generar secuencias aleatorias, modulaciones en escalera o para "congelar" un voltaje de control.',
    "samplehold.inputs_title": "Entradas",
    "samplehold.inputs.in": "El voltaje de entrada (CV) a ser muestreado.",
    "samplehold.inputs.trig":
      "Una señal de disparo o compuerta que indica al módulo cuándo muestrear la entrada.",
    "samplehold.outputs_title": "Salidas",
    "samplehold.outputs.out": "El voltaje retenido (CV) de salida.",
    "module_group.initial_base_modules": "Módulos Base Iniciales",
    "output.subtitle": "Salida de Audio (Altavoces)",
    "output.description":
      "El módulo de Salida de Audio representa los altavoces de tu sistema. Es el destino final de todas las señales de audio generadas en el sintetizador modular, convirtiendo las señales eléctricas en sonido audible. ¡Sin este módulo, no escucharías nada!",
    "output.inputs_title": "Entradas",
    "output.inputs.in":
      "La entrada de audio principal para conectar el sonido final del sintetizador.",
  },
  en: {
    "knob.menu": "Menu",
    "page.title": "ModuGal - Virtual Modular Synthesizer",
    "page.description":
      "The sonic inventor's workshop. Sculpt your soundscapes with the precision of another era.",
    "header.subtitle": "Virtual Modular Synthesizer",
    tagline:
      "The sonic inventor's workshop. Sculpt your soundscapes with the precision of another era.",
    "button.buy": "Buy Full Version",
    "button.demo": "Download Demo",
    "nav.home": "Home",
    "nav.modules": "Modules",
    "nav.demos": "Demos",
    "nav.support": "Support",
    "footer.rights": "All Rights Reserved.",
    "module_group.audio_and_control_modulators": "Audio and Control Modulators",
    "modules_menu.title": "Module Categories",
    "mechanics.title": "Synthesizer Mechanics and Usage",
    "mechanics.intro":
      "Here you will find a detailed explanation of how to interact with the modular synthesizer, from wiring to advanced functions.",
    "mechanics.wiring_title": "Module Wiring",
    "mechanics.wiring_description":
      "To connect two modules, click and drag from an output port (right side of the module) to an input port (left side of the module). A line will indicate the connection. To disconnect, click on an existing cable and drag it away from any port.",
    "mechanics.context_menu_title": "Context Menu (Right-Click)",
    "mechanics.context_menu_description":
      "Right-click on an empty space on the canvas to open the context menu. From here, you can select and create new modules. Each module will appear at the mouse position.",
    "mechanics.module_interaction_title": "Module Interaction",
    "mechanics.module_interaction_description":
      "Modules can be dragged around the canvas by clicking and dragging their main area. Controls (sliders, buttons) within each module can be manipulated directly. Click and drag sliders to change values, and click buttons to activate functions or change modes (e.g., waveforms).",
    "mechanics.app_menu_title": "Application Menu (Electron)",
    "mechanics.app_menu_description":
      "The application's top menu bar offers global functions:",
    "mechanics.app_menu.file_save_load":
      "<strong>File > Save/Load Patch:</strong> Allows you to save the current state of your synthesizer (all modules and connections) and load previously saved configurations.",
    "mechanics.app_menu.edit_undo_redo":
      "<strong>Edit > Undo/Redo:</strong> Undoes or redoes the last actions performed in the synthesizer.",
    "mechanics.app_menu.view_visualizer":
      "<strong>View > Toggle Visualizer:</strong> Opens or closes a separate window that displays a real-time visualization of the audio output.",
    "mechanics.app_menu.themes":
      "<strong>Themes:</strong> Changes the visual theme of the synthesizer interface.",
    "mechanics.app_menu.midi":
      "<strong>MIDI:</strong> Select a MIDI input device to control the synthesizer with external hardware.",
    "mechanics.app_menu.license":
      "<strong>Activate License:</strong> Enter your license key to unlock all application features.",
    "mechanics.module_specific_actions_title": "Module-Specific Actions",
    "mechanics.module_specific_actions_description":
      "Some modules may have additional actions accessible via direct interactions or module-specific context menus (e.g., bypass, duplicate). These actions will be detailed in each module's description.",
    "vco.subtitle": "Voltage-Controlled Oscillator",
    "vco.description":
      "The VCO is the primary sound source in a modular synthesizer. It generates a periodic audio signal (a wave) whose frequency (pitch) can be controlled by an external voltage, such as from a keyboard or a sequencer. It is the fundamental building block for creating any sound.",
    "vco.waveforms_title": "Waveforms",
    "vco.parameters_title": "Parameters & Controls",
    "vco.inputs_title": "Inputs (CV)",
    "vco.outputs_title": "Outputs (Audio)",
    "keyboard.subtitle": "Keyboard Controller",
    "keyboard.description":
      "The Keyboard module translates your computer keyboard presses into the standard signals the synthesizer can understand. It is the most direct way to play melodies and control other modules. It does not produce sound by itself but acts as the brain of the melodic operation.",
    "keyboard.parameters_title": "Parameters & Controls",
    "keyboard.outputs_title": "Outputs (Control)",
    "vco.waveforms.sine":
      "A pure, smooth tone with no harmonics. Ideal for clean sounds and deep basses.",
    "vco.waveforms.square":
      "A bright, hollow sound, rich in odd harmonics. Perfect for clarinet-like sounds or powerful leads.",
    "vco.waveforms.sawtooth":
      "A sharp, bright, and energetic sound, containing all harmonics. It is the basis for strings, brass, and aggressive basses.",
    "vco.waveforms.triangle":
      "Similar to sine but with more harmonics, giving it a slightly brighter and more metallic character.",
    "vco.parameters.freq":
      "Adjusts the main pitch of the oscillator over a very wide range (20Hz to 5000Hz).",
    "vco.parameters.fine":
      "Allows for precise pitch adjustment (+/- 100 cents), ideal for slight detuning or perfect tuning.",
    "vco.parameters.pw":
      "Available only for the square wave, it modifies the timbre of the wave, from a thin, nasal sound to a full, hollow one.",
    "vco.parameters.wave":
      "A button to switch between the four available waveforms.",
    "vco.inputs.voct":
      "Main input to control the pitch melodically from a keyboard.",
    "vco.inputs.fm":
      "Frequency Modulation inputs to create complex, metallic, or bell-like sounds.",
    "vco.inputs.pwm":
      'Input to modulate the pulse width (square wave only), creating the classic "PWM" sound.',
    "vco.outputs.out": "The main audio output of the oscillator.",
    "keyboard.parameters.octave":
      "Raises or lowers the keyboard's register in full octaves, allowing you to access a wider range of notes, from deep basses to crystalline highs.",
    "keyboard.parameters.glide":
      'Controls the time it takes for one note to slide to the next. With low values, notes change instantly. With high values, a very characteristic "portamento" or "glissando" effect is created.',
    "keyboard.outputs.cv":
      'Sends the note\'s pitch information. It connects to the "1V/OCT" input of an oscillator (VCO) to play the correct note.',
    "keyboard.outputs.gate":
      'Sends a signal that stays "open" while a key is pressed and "closes" when released. It is essential for triggering envelope generators (ADSRs), which in turn shape the volume or filter of a sound.',
    "vca.subtitle": "Voltage-Controlled Amplifier",
    "vca.description":
      "The VCA acts as an automatic volume gate. It receives an audio signal and controls its level based on an external control voltage (CV), usually from an envelope generator (ADSR). It is fundamental for shaping the dynamics of a sound, defining how its volume evolves over time.",
    "vca.parameters_title": "Parameters & Controls",
    "vca.inputs_title": "Inputs",
    "vca.outputs_title": "Outputs",
    "vca.parameters.cv1_level":
      "This is an attenuator for the CV1 control input. It defines how much influence the control signal (like an ADSR) will have on the audio signal's volume. The higher the level, the more drastic the volume change will be.",
    "vca.parameters.mode":
      "Allows switching the VCA between processing a single audio signal (Mono) or a stereo pair (Left and Right).",
    "vca.inputs.in": "The main audio input to be processed.",
    "vca.inputs.cv":
      "Inputs for the control voltage that will modulate the volume. This is where the output of an ADSR or an LFO is connected.",
    "vca.outputs.out":
      "The audio output, with its volume already modulated by the control signals.",
    "adsr.subtitle": "Envelope Generator",
    "adsr.description":
      'The ADSR module is a fundamental envelope generator used to dynamically shape sound. It receives a "Gate" signal and produces a "CV" (Control Voltage) signal that modulates parameters of other modules over time. It allows control over four key phases:',
    "adsr.phases_title": "Envelope Phases",
    "adsr.phases.attack":
      "Defines the time it takes for the sound to reach its maximum level.",
    "adsr.phases.decay":
      "Sets the time it takes for the sound to fall from the Attack peak to the Sustain level.",
    "adsr.phases.sustain":
      "Determines the level at which the sound is held while the Gate signal is active.",
    "adsr.phases.release":
      "Controls the time it takes for the sound to fade to zero once the Gate signal is deactivated.",
    "adsr.parameters_title": "Parameters & Controls",
    "adsr.parameters.attack": "Adjusts the Attack time (0.001s to 2s).",
    "adsr.parameters.decay": "Adjusts the Decay time (0.001s to 2s).",
    "adsr.parameters.sustain": "Adjusts the Sustain level (0 to 1).",
    "adsr.parameters.release": "Adjusts the Release time (0.001s to 5s).",
    "adsr.inputs_title": "Inputs",
    "adsr.inputs.gate": "Gate signal input to trigger the envelope.",
    "adsr.outputs_title": "Outputs",
    "adsr.outputs.cv":
      "Control Voltage output representing the generated envelope.",
    "vcf.subtitle": "Voltage-Controlled Filter",
    "vcf.description":
      "The VCF (Voltage-Controlled Filter) module is essential for sculpting the timbre of sound. It allows you to remove or enhance certain frequencies, radically transforming the character of a sound. It receives an audio signal and control voltages for its cutoff frequency and resonance.",
    "vcf.types_title": "Filter Types",
    "vcf.types.lowpass":
      "Allows frequencies below the cutoff frequency to pass and attenuates higher ones. Ideal for smoothing sounds or creating deep basses.",
    "vcf.types.highpass":
      "Allows frequencies above the cutoff frequency to pass and attenuates lower ones. Useful for removing unwanted bass or making sounds thinner.",
    "vcf.types.bandpass":
      "Allows a specific band of frequencies around the cutoff frequency to pass, attenuating those outside that band. Creates more focused and resonant sounds.",
    "vcf.types.notch":
      'Attenuates a narrow band of frequencies around the cutoff frequency, letting the rest pass. Useful for removing hums or creating inverted "wah" effects.',
    "vcf.parameters_title": "Parameters & Controls",
    "vcf.parameters.cutoff":
      "Adjusts the filter's cutoff frequency (20Hz to 20000Hz).",
    "vcf.parameters.q":
      'Controls the filter\'s resonance (0.1 to 30). High values boost frequencies around the cutoff point, creating a more "screaming" or "metallic" sound.',
    "vcf.inputs_title": "Inputs",
    "vcf.inputs.in": "Main audio input to be filtered.",
    "vcf.inputs.freq_cv":
      "Control Voltage input to modulate the cutoff frequency.",
    "vcf.inputs.freq_cv2":
      "Second Control Voltage input to modulate the cutoff frequency.",
    "vcf.inputs.q_cv": "Control Voltage input to modulate the resonance (Q).",
    "vcf.outputs_title": "Outputs",
    "vcf.outputs.out": "Audio output with the filtered sound.",
    "lfo.subtitle": "Low-Frequency Oscillator",
    "lfo.description":
      'The LFO (Low-Frequency Oscillator) module generates cyclic signals that operate below the audio range, ideal for adding movement and modulation to other synthesizer parameters. It does not produce sound itself, but creates "movement" that can control pitch, volume, filter, etc.',
    "lfo.waveforms_title": "Waveforms",
    "lfo.waveforms.sine":
      "A smooth and fluid wave, ideal for subtle modulations like vibrato or tremolo.",
    "lfo.waveforms.square":
      'A wave with abrupt changes, perfect for rhythmic "tremolo" effects or "step-like" filter modulations.',
    "lfo.waveforms.sawtooth":
      'A constantly rising or falling wave, useful for filter "sweeps" or pitch modulations that gradually go up or down.',
    "lfo.waveforms.triangle":
      "Similar to the sine wave but with more pronounced peaks, offering a more direct and less smooth modulation than sine.",
    "lfo.parameters_title": "Parameters & Controls",
    "lfo.parameters.rate":
      "Adjusts the LFO speed (0.01Hz to 50Hz). Controls how quickly the modulation repeats.",
    "lfo.parameters.depth":
      "Controls the intensity of the LFO modulation (0 to 1). Determines how much the LFO will affect the parameter it is connected to.",
    "lfo.parameters.attack":
      "Defines the time it takes for the LFO to reach its maximum depth after receiving a Gate signal.",
    "lfo.inputs_title": "Inputs",
    "lfo.inputs.rate_cv": "Control Voltage input to modulate the LFO rate.",
    "lfo.inputs.depth_cv": "Control Voltage input to modulate the LFO depth.",
    "lfo.inputs.gate":
      "Gate signal input to trigger the LFO's attack envelope.",
    "lfo.outputs_title": "Outputs",
    "lfo.outputs.out":
      "Control Voltage output that generates the LFO waveform.",
    "ringmod.subtitle": "Ring Modulator",
    "ringmod.description":
      "The Ring Modulator module performs amplitude modulation by multiplying two input audio signals. This process creates new frequencies (sum and difference of the input frequencies) that are not harmonically related to the original signals, resulting in a metallic, bell-like, or dissonant sound.",
    "ringmod.inputs_title": "Inputs",
    "ringmod.inputs.in": "The main input audio signal.",
    "ringmod.inputs.mod": "The modulator input audio signal.",
    "ringmod.outputs_title": "Outputs",
    "ringmod.outputs.out": "The ring-modulated audio output.",
    "samplehold.subtitle": "Sample & Hold",
    "samplehold.description":
      'The Sample & Hold (S&H) module captures (samples) the voltage present at its input at a specific moment and then holds that voltage until a new trigger signal arrives. This creates stepped and quantized voltage changes, often used to generate random sequences, staircase modulations, or to "freeze" a control voltage.',
    "samplehold.inputs_title": "Inputs",
    "samplehold.inputs.in": "The input voltage (CV) to be sampled.",
    "samplehold.inputs.trig":
      "A trigger or gate signal that tells the module when to sample the input.",
    "samplehold.outputs_title": "Outputs",
    "samplehold.outputs.out": "The held output voltage (CV).",
    "output.subtitle": "Audio Output (Speakers)",
    "output.description":
      "The Audio Output module represents your system's speakers. It is the final destination for all audio signals generated in the modular synthesizer, converting electrical signals into audible sound. Without this module, you wouldn't hear anything!",
    "output.inputs_title": "Inputs",
    "output.inputs.in":
      "The main audio input to connect the final synthesizer sound.",
  },
} as const;
