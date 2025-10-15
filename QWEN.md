# GEMINI.md - Guía de Desarrollo para el Proyecto "Sintetizador Modular Web"

Este documento resume las recomendaciones clave y la hoja de ruta para el desarrollo y la implementación del sitio web del sintetizador modular, con un enfoque en la eficiencia, seguridad y escalabilidad.

---

## 1. Visión General del Proyecto

El objetivo es desarrollar la página principal de un sitio estático para un sintetizador modular, con una estética que fusione minimalismo, vintage y steampunk. La plataforma de comercio electrónico se gestionará a través de un Merchant of Record (MoR) para simplificar la gestión fiscal.

---

## 2. Recomendación Estratégica Clave

La arquitectura recomendada es la **Opción 1: Sitio Estático (construido con Astro o SvelteKit) + Alojamiento en Cloudflare Pages + E-commerce gestionado por Paddle (MoR)**.

**Justificación:**

*   **Minimización del Mantenimiento:** Elimina la carga de gestión de infraestructura (servidores, bases de datos, plugins).
*   **Minimización del Riesgo Legal y Fiscal:** Paddle (MoR) asume la complejidad de la gestión de impuestos sobre las ventas a nivel mundial.
*   **Maximización del Rendimiento y la Seguridad:** Sitio estático desplegado en una CDN global para máxima velocidad y mínima superficie de ataque.
*   **Alineación de Habilidades:** Aprovecha habilidades en JavaScript/TypeScript con un flujo de trabajo moderno basado en Git.

---

## 3. Guía de Desarrollo (Fase 2: Desarrollo del Sitio Web)

Esta fase se centra en la construcción del sitio web, aplicando las directrices de diseño.

### 3.1. Inicializar el Proyecto con Astro

*   **Descripción:** Astro es el generador de sitios estáticos recomendado por su "arquitectura de islas", que optimiza el rendimiento al enviar JavaScript solo para componentes interactivos.
*   **Instrucciones:**
    1.  Abre tu terminal.
    2.  Navega al directorio deseado para tu proyecto.
    3.  Ejecuta: `npm create astro@latest`
    4.  Sigue el asistente de Astro (puedes elegir una plantilla "Empty" para empezar desde cero).

### 3.2. Desarrollar las Páginas del Sitio

Implementa las siguientes páginas, adhiriéndote estrictamente a las directrices de diseño de la Sección 2 del informe.

*   **Página de Inicio (El Taller del Inventor):**
    *   Presentación impactante del sintetizador ("hero shot").
    *   Breve descripción evocadora.
    *   Demo de audio destacada.
    *   Llamada a la acción clara (ej. "Comprar Versión Completa", "Descargar Demo").
*   **Módulos (El Esquema Técnico):**
    *   Sección dedicada a cada módulo del sintetizador.
    *   Cada módulo en su propia "tarjeta" con captura de pantalla, descripción técnica y demo de audio aislada.
*   **Demos (La Sala de Conciertos):**
    *   Galería de pistas de audio y/o vídeos.
*   **Compra (La Tienda):**
    *   Página de producto con precio y requisitos del sistema.
    *   Botón que iniciará el proceso de pago.
*   **Soporte/FAQ (El Manual de Operaciones):**
    *   Preguntas frecuentes, información de contacto y documentación.

### 3.3. Directrices de Diseño (Resumen de la Sección 2)

*   **Estética General:** Minimalismo como base estructural, con capas de vintage (paleta de colores, tipografía, texturas) y steampunk (iconos, bordes, animaciones sutiles).
*   **Paleta de Colores:**
    *   **Base:** Sepia, crema, beige, marrones oscuros (madera envejecida, papel antiguo).
    *   **Acento:** Metálicos envejecidos (cobre `b87333`, bronce `cd7f32`, latón `e1c16e`).
    *   **Contraste:** Negro o gris muy oscuro para texto principal (hierro forjado).
    *   **Texturas:** Sutiles como papel pergamino, metal cepillado, veta de madera oscura.
*   **Tipografía:**
    *   **Títulos/Encabezados:** Fuentes victorianas o industriales (ej. **Smythe**, **Playfair Display**, **Special Elite** de Google Fonts).
    *   **Cuerpo de Texto:** Fuentes sans-serif limpias y modernas para legibilidad (ej. **Source Sans Pro**, **Karla**).
*   **Elementos de Interfaz:**
    *   **Iconografía:** Personalizada (engranajes, manómetros, tubos de vacío, brújulas).
    *   **Botones/CTAs:** Simular placas de metal remachadas o interruptores de palanca antiguos, con sutiles brillos.
    *   **Animaciones:** Sutiles (engranajes girando, efecto de vapor).
    *   **Contenedores/Marcos:** Bordes que imiten filigranas victorianas o marcos de metal con remaches.

### 3.4. Control de Versiones con GitHub

*   **Descripción:** GitHub es esencial para alojar el código y habilitar el despliegue continuo con Cloudflare Pages.
*   **Instrucciones:**
    1.  Crea una cuenta gratuita en GitHub.
    2.  Crea un nuevo repositorio para tu proyecto (ej. `sintetizador-modular-web`).
    3.  En la raíz de tu proyecto local, inicializa Git: `git init`
    4.  Añade tus archivos: `git add .`
    5.  Realiza tu primer commit: `git commit -m "Initial project setup with Astro and basic page structure"`
    6.  Conecta tu repositorio local con el de GitHub y sube el código (sigue las instrucciones de GitHub para "push an existing repository").

---

## 4. Asistente de Código Recomendado

Para la fase de desarrollo activo, se recomienda **Gemini Code Assist (con su CLI y la integración en IDE)**.

*   **Beneficios:** Asistencia en tiempo real, sugerencias de código mientras escribes, generación de funciones, interacción con IA para preguntas de codificación, y comprensión contextual de tu código local.
*   **Consideración a futuro:** Jules es potente para la automatización de tareas asíncronas (pruebas, construcción de características) y podría integrarse en etapas posteriores del proyecto.

---

## 5. Hoja de Ruta de Implementación (Fases Restantes)

Una vez completada la Fase 2, seguirás con:

*   **Fase 3: Configuración del Alojamiento (Cloudflare Pages)**
    *   Crear cuenta gratuita en Cloudflare Pages.
    *   Conectar a tu repositorio de GitHub para despliegue automático.
*   **Fase 4: Configuración del E-commerce (Paddle)**
    *   Crear cuenta en Paddle.
    *   Configurar el sintetizador como producto digital.
    *   Personalizar el checkout y obtener el código del widget de "botón de compra".
*   **Fase 5: Integración y Lanzamiento**
    *   Integrar el widget de Paddle en tu sitio.
    *   Configurar el correo electrónico de entrega en Paddle (enlace de descarga y contraseña de desbloqueo).
    *   Realizar compras de prueba.
    *   Configurar el dominio personalizado en Cloudflare Pages.
    *   Anunciar el lanzamiento.

---

## 6. Consideraciones a Futuro

La arquitectura recomendada es escalable. Funcionalidades más complejas (ej. base de datos de presets de usuario) pueden implementarse con funciones sin servidor (Cloudflare Workers) que se integran con el sitio estático, manteniendo los beneficios de rendimiento y bajo mantenimiento.

