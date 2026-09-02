# Brief para Claude Code — Web oscargelves.com (Maestro Restaurador)
### v6 — landing de 6 secciones, arco StoryBrand, CTA agenda + WhatsApp

**Esta versión sí está lista para entregar a Claude Code, junto con
`copy_landing_final.md` (v2) y `GUIA_PARA_CLAUDE_CODE.md`. Reemplaza la estructura de
11 secciones por una de 6, aplica el tono de taller de la sección Marca, y cambia el
CTA principal de WhatsApp-solo a agenda + WhatsApp.**

## Contexto para pegar al inicio de la conversación con Claude Code

```
El sitio de restaura.do / oscargelves.com ya está construido, pero con una estructura
de 11 secciones y CTA solo por WhatsApp. Vamos a simplificarlo a 6 secciones usando el
principio de StoryBrand (storybrand.com): el visitante es el héroe, Oscar es el guía,
nunca al revés. Las 6 secciones son Hero, El problema, El modelo en una vista, El
Diagnóstico Comercial, Autoridad (Quién soy) y CTA final. El proceso completo de cinco
fases, los ocho frentes uno por uno, y las tres formas de trabajar con Oscar
(Conferencia, Diagnóstico Comercial, Programa a la Medida) ya no van como secciones
separadas del scroll: se resumen en una sola pieza visual (sección 3) y se profundizan
en la conversación de diagnóstico, no en la landing. El CTA principal pasa a ser un
link de agenda (Calendly u otro), con WhatsApp como canal secundario. El tono visual
deja de perseguir elegancia corporativa y se mueve hacia taller de restauración:
cercano, humano, de detalle. Lee `brief_web_restauracion.md` completo, `copy_landing_final.md`
y `GUIA_PARA_CLAUDE_CODE.md` antes de tocar código.
```

## Referencias de diseño/estructura (para que Claude Code las tenga presentes)

- **storybrand.com** (Donald Miller, marco StoryBrand/SB7) — el visitante es el héroe
  de la historia, la marca es el guía. Estructura la landing entera: el visitante se
  reconoce en el problema, confirma que el guía tiene empatía y autoridad, ve el plan,
  y tiene un único llamado a la acción. Es la referencia que ordena esta versión por
  encima de las demás.
- **renatocuellar.com** — consultor solo, CTA directo sin formulario, credenciales de
  confianza. Se mantiene como referencia de tono y de badges de confianza.
- **learn.jbarrows.com** (John Barrows) — bloque de empatía "esto es lo que escucho de
  cada líder", ahora expandido con la lectura estructural (tecnología, incentivos,
  liderazgo) del reporte estratégico de mercado.
- Barra de cifras grandes (estilo Objective Management Group) se mantiene dentro de
  Autoridad, no como sección aparte.

## Stack recomendado

Sitio estático, sin CMS ni base de datos: HTML/CSS/JS simple, o Astro si Claude Code
prefiere componentes. Despliegue en Vercel o Netlify (gratis, HTTPS automático, dominio
propio). Más simple de mantener que el WordPress actual: sin plugins, sin PHP que
actualizar, sin parches de seguridad constantes.

**Captura de datos: agenda como CTA principal, WhatsApp como secundario.** El botón
principal de cada CTA (hero, sección 4, CTA final) lleva a un link de agenda (Calendly
u otro similar), no a un formulario propio. WhatsApp sigue disponible como CTA
secundario, de menor peso visual, con el mismo patrón de siempre:
`https://api.whatsapp.com/send?phone=[NUMERO]&text=[MENSAJE]`. Esto no reintroduce
formularios ni backend propio: el link de agenda es un servicio externo, igual de
simple de integrar que un link de WhatsApp. Ambos canales deben quedar identificables
por origen en el CRM (Bigin): la conversación que entra por agenda o por WhatsApp
lleva la etiqueta "web". No se necesita @oscargelves.com ni Formspree para lanzar. El
correo corporativo queda como mejora futura, no como bloqueo.

Nota técnica pendiente: al lanzar, apuntar el DNS del dominio oscargelves.com del
hosting actual hacia Vercel/Netlify (lo hace quien tenga acceso al panel del dominio).

## Marca

**Versión v2. El wordmark, la paleta y la tipografía siguen siendo los valores finales del handoff de identidad de marca (`Imagen de marca Restaura.do.zip`), sin cambios, y reemplazan cualquier propuesta anterior de wordmark, incluida la versión en Marck Script. Lo que cambia en esta versión es el tono visual y narrativo: el handoff original describe una marca elegante y corporativa; esa lectura queda descartada como prioridad. Ver "Tono visual" y "Voz de marca" abajo.**

### Paleta

| Nombre | Hex | Uso |
|---|---|---|
| Navy Profundo | `#142847` | Color primario, texto sobre claro, fondos |
| Navy Oscuro | `#0D1F3C` | Fondos oscuros, degradados |
| Oro | `#C8922A` | Acento — CTA, cierre del wordmark, subrayados |
| Naranja de Acento | `#E07B39` | Acento secundario — usar con moderación |
| Marfil (fondo claro) | `#FBF8F2` | Fondo de página en modo claro |
| Texto secundario | `#33445E` | Cuerpo de texto sobre fondo claro |
| Crema (texto sobre oscuro) | `#F4E9D8` | Texto/wordmark sobre navy |

Regla de uso: navy domina 70-80% de cualquier aplicación, oro y naranja son acentos,
nunca al mismo peso visual en una misma pieza. Esto no cambia: son los colores del
wordmark y de la interfaz (botones, encabezados, fondos), y el wordmark no se toca.
Lo que cambia es qué los rodea, ver "Tono visual".

### Tono visual: taller antes que elegancia

La primera versión de esta marca se leía como elegancia corporativa: navy y oro,
minimalismo, distancia profesional. Esa no es la prioridad. La prioridad es el taller
de restauración: remangarse, ir al detalle, conocer el oficio de cerca, un enfoque
humano y cercano, no una consultora distante con paleta bonita.

En la práctica esto se resuelve así: navy, oro y la tipografía (Sora/Inter) siguen
siendo la identidad estructural, el wordmark, los botones, los encabezados, no
cambian. Pero lo que rodea a esa estructura (fotografía, texturas, el peso relativo
de las imágenes frente al texto, el tono de la escritura) se apoya en la dirección ya
documentada en `GUIA_IMAGENES_IA.md`: cuero, madera, luz cálida de taller, manos
trabajando, herramientas de precisión, detalle artesanal. Esa guía ya conecta bien
con la paleta de marca sin verse genérica ("café cuero y cognac, azul denim/navy,
dorado y bronce en acentos"), así que no es una pieza aislada, es la expresión
sensorial de esta misma prioridad y debe tratarse como referencia principal, no como
ilustración secundaria del hero.

Regla simple para cualquier pieza nueva: si una decisión de diseño hace que la marca
se vea más pulida y distante, va en contra de la prioridad. Si la hace ver más
cercana, más de taller, más humana, va a favor, aunque sacrifique algo de pulido.

### Tipografía
- **Sora** (400-800): titulares, cifras, botones, y el propio wordmark (peso 700).
- **Inter** (400/500): cuerpo de texto, párrafos, citas.
- Import: `https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap`

### Espaciado y radios
- Border-radius de tarjetas/contenedores: `4px`-`8px`.
- Bordes sutiles: `1px solid #E4DAC7` sobre fondo claro.

### Wordmark "restaura.do"
**Es texto real, letra por letra en spans, nunca una fuente script, un SVG a mano
o una imagen exportada.**
- Tipografía: Sora, peso 700. Texto siempre en minúsculas: `restaura.do`.
- Letter-spacing: `-1px` a tamaño 44px, escalar proporcional (`-0.023 × font-size`).
- Efecto "de la oscuridad a la luz": cada letra de "restaura" sube en opacidad,
  0.2 en la "r" hasta 1 en la segunda "a". El ".do" siempre sólido en oro `#C8922A`.
- Color base de las letras con opacidad: `#F4E9D8` (crema) sobre fondo navy/oscuro,
  `#142847` (navy) sobre fondo claro.
- Sin ícono ni símbolo, el wordmark es el único elemento de marca. Para
  favicon/avatar, solo la letra **"r"**, Sora 700, oro sobre navy.
- Tamaño mínimo: 90px de ancho en digital. Espacio libre mínimo: la altura de la "d".
- Implementación de referencia (fondo oscuro):
  ```html
  <div style="font-family:Sora,sans-serif;font-weight:700;font-size:44px;letter-spacing:-1px;display:flex;align-items:baseline;">
    <span style="opacity:0.2;color:#F4E9D8;">r</span><span style="opacity:0.32;color:#F4E9D8;">e</span><span style="opacity:0.44;color:#F4E9D8;">s</span><span style="opacity:0.56;color:#F4E9D8;">t</span><span style="opacity:0.68;color:#F4E9D8;">a</span><span style="opacity:0.8;color:#F4E9D8;">u</span><span style="opacity:0.9;color:#F4E9D8;">r</span><span style="opacity:1;color:#F4E9D8;">a</span><span style="color:#C8922A;">.</span><span style="color:#C8922A;">d</span><span style="color:#C8922A;">o</span>
  </div>
  ```
  Para fondo claro, sustituir `#F4E9D8` por `#142847` en los primeros 8 spans.

### Voz de marca
Tono: profundo pero directo, y cercano antes que elegante. Alguien que se remanga y
conoce el detalle del oficio, no un estratega que diagnostica desde lejos. Valores
espirituales presentes pero nunca explícitos (ver arquitectura de dos registros en
el documento de teoría completa, sección 6.1).
Frase ancla: *"Nadie necesita reinventarse. Necesita recordar."*

Hacer: reencuadrar el síntoma como diseño perdido, no como culpa. Lenguaje directo y
universal, sin vocabulario técnico de ningún oficio (ni taller mecánico, ni
relojería). Frases cortas, un punto por idea. Escribir como quien ya se ensució las
manos con el problema, no como quien lo observa desde un informe.

Evitar: lenguaje de coaching genérico ("desbloquea tu potencial"), citas espirituales
explícitas, superlativos vacíos ("el mejor", "único en el mercado"), y tono de
consultora distante (informe, diapositiva, "solución integral").

### Postura narrativa: el cliente es el héroe, Restaura.do es el guía

Referencia: el principio central de StoryBrand (storybrand.com, Donald Miller): el
visitante debe ser el héroe de la historia, nunca la marca. Aplicado aquí, es la
misma tesis del modelo pero traducida a lenguaje de sitio web: la organización rota
es la protagonista; el Maestro Restaurador es el guía que la devuelve a su diseño
original, no el protagonista.

Consecuencias concretas para todo el copy, no solo el hero:
- El sitio no habla de Oscar. Hace que el empresario se reconozca en "equipo
  motivado pero estructuralmente roto" antes de presentar a nadie.
- Oscar aparece como guía con dos únicas credenciales que StoryBrand pide de un
  guía: empatía (ya vivió el problema, lo entiende) y autoridad (25+ años, 127
  empresas, 9 países). No como héroe de su propia historia.
- Cada sección responde, en este orden, a una pregunta del visitante: ¿me
  reconozco en este problema? (bloque de empatía) → ¿este guía entiende mi
  problema y tiene autoridad? (Quién soy) → ¿cuál es el plan? (las cinco fases) →
  ¿qué pasa si actúo, y qué pasa si no actúo? (FAQ, CTA) → llamado a la acción claro
  y único, sin competir con llamados secundarios.
- Esta postura se traduce a la estructura completa de la landing en la próxima
  ronda de trabajo (brief y copy), no se resuelve solo aquí.

### Aplicaciones documentadas
Header de sitio (fondo navy oscuro, wordmark versión fondo oscuro, CTA en oro),
tarjeta de presentación (fondo navy, wordmark pequeño arriba), perfil de redes
(avatar con la "r" en oro sobre navy), documento/PDF de diagnóstico (fondo blanco,
wordmark versión fondo claro, línea separadora de 2px en oro), favicon (solo "r").

## Metodología final (leer antes de tocar secciones 5 y 6)

No hay metáfora de un oficio específico, ni taller mecánico ni relojería. Las cinco
fases del proceso aplican igual a una persona, un equipo o una organización
completa, con lenguaje directo sobre lo que significa cada momento del proceso.

**Nota importante de alcance (3 de agosto de 2026): los ocho frentes NO son
universales entre persona y equipo/organización, aunque las cinco fases sí lo son.**
Este sitio (oscargelves.com / El Taller) vende el Diagnóstico Comercial para equipos
y organizaciones, y usa los ocho frentes Propósito, Carácter, Motivación,
Autoconocimiento, Energía, Relaciones, Imagen, Trayectoria (más la pista estructural
para equipo/organización), tal como están documentados abajo. No los cambies. Existe
un instrumento distinto, RESTAURA (acróstico: Respaldo, Energía, Sentido,
Trayectoria, Alineación, Unidad, Resiliencia, Autoridad), para evaluación de vida y
liderazgo a nivel de **persona individual**, documentado en
`RESTAURA_Resumen_Sitio_Web.md`. Es un producto/instrumento aparte, no el contenido
de este sitio ni de esta landing. No mezclar los dos conjuntos de ocho frentes ni
sus nombres.

**Identidad y marca, confirmado:**
- Identidad: **Maestro Restaurador**, reemplaza "Arquitecto de Restauración
  Comercial" en todo el sitio (título, meta description, hero-eyebrow, subtítulo).
- El wordmark "restaura.do" no cambia, ya está aprobado.
- Historia personal para "Quién soy": Oscar nació el 5 de junio de 1969, el mismo año
  del alunizaje del Apolo 11 con el Omega Speedmaster, el nacimiento del cronógrafo
  automático, y el inicio de la crisis del cuarzo que casi termina con la relojería
  mecánica. La industria sobrevivió no reinventándose, sino recordando por qué
  existía. Es la única referencia a relojería que queda en todo el sitio, vive solo
  aquí, como anécdota personal, no como metáfora del método. Texto ya redactado
  abajo, sección 3.
- Logos de clientes: se presentan como "piezas de una historia", no como muro de
  trofeos/confianza, en texto plano hasta confirmar permiso de marca.

**El proceso, cinco fases:**
1. **Diagnóstico** — reconocimiento de la señal, verificación de la causa. Evalúa
   los ocho frentes (ver abajo).
2. **Desmontaje** — cada hallazgo se clasifica en Reparación (urgente), Recambio
   (necesario), Mejora (potencia lo que ya funciona).
3. **Ensamblaje** — se ejecuta lo decidido, se reconstruye con lo aprobado.
4. **Ajuste** — se prueba, se calibra, se repite hasta que funciona con precisión.
5. **Apropiación** — el cambio se vuelve propio, se sostiene sin que el consultor
   siga presente. Ver detalle en sección 6.

**Los ocho frentes que evalúa el Diagnóstico**, mismo orden narrativo para todo
material de marca y venta (el orden de entrega en sesión real con un cliente es
distinto, empieza por Trayectoria y Autoconocimiento, ver nota abajo):

1. **Propósito** — para qué existe esto, hacia dónde va.
2. **Carácter** — la base sobre la que todo lo demás se sostiene.
3. **Motivación** — lo que lo mueve desde adentro.
4. **Autoconocimiento** — qué tan bien se conoce a sí mismo, cuál es su estado real.
   (En equipos comerciales, esto incluye salud del proceso y del pipeline: visibilidad
   real del embudo, higiene de CRM, precisión de pronóstico.)
5. **Energía** — lo que lo sostiene día a día.
6. **Relaciones** — quién depende de esto, y de quién depende esto.
7. **Imagen** — cómo se presenta, qué ven los demás.
8. **Trayectoria** — el camino recorrido hasta ahora, la evidencia acumulada.

Nota de secuencia: el orden narrativo de arriba (Propósito primero) es el que va en
la web y en materiales de venta. En una sesión real de Diagnóstico con un cliente
nuevo, Oscar abre por Trayectoria y Autoconocimiento, lo observable y verificable,
y deja Carácter y Propósito para cuando ya hay confianza construida. Esto no cambia
el copy del sitio, es una nota operativa para Oscar, no para Claude Code.

**Apropiación, cómo se sostiene:**
- Un compromiso por frente, ocho en total, concretos y verificables, no intenciones
  vagas.
- **Bitácora de Apropiación**: un documento (físico o digital) con los puntajes de
  antes y después de los ocho frentes, los ocho compromisos, y una cuadrícula de
  doce semanas para marcar cumplimiento.
- Revisión cada tres semanas, con un aliado, no necesariamente el jefe del cliente,
  un par que intercambia bitácoras y hace seguimiento. Esto es lo que permite que
  una persona sola, sin equipo ni jerarquía detrás, pueda sostener el proceso por
  su cuenta.
- Capa transversal de IA: hoy la Bitácora es manual. Bindpoint (capa de proceso tipo
  SaaS de marca blanca, en desarrollo de mediano plazo, evolución de Nexus) eventualmente
  automatiza el seguimiento y los avisos de esta fase. No es un bloqueo para lanzar
  el sitio.

## Estructura de secciones

**Copy exacto de cada sección: en `copy_landing_final.md` (v2). Aquí solo van las
instrucciones de estructura y comportamiento; el texto final se toma tal cual del
archivo de copy, salvo los espacios marcados `[LLENAR]`.**

Principio de orden (StoryBrand): cada sección responde una pregunta del visitante
antes de pasar a la siguiente. No se reordena ni se insertan secciones adicionales
sin revisar que la secuencia de preguntas siga teniendo sentido.

### 1. Hero
- Eyebrow, titular, subtítulo (la tesis) y frase ancla: texto exacto en
  `copy_landing_final.md` sección 1.
- CTA principal: botón que abre el link de agenda (`[PENDIENTE-LINK-AGENDA]` como
  placeholder visible hasta que Oscar lo entregue).
- CTA secundario: botón o link de menor peso visual que abre WhatsApp con mensaje
  pre-escrito.
- [ESPACIO PARA LLENAR: foto de Oscar en contexto de trabajo, dirección visual en
  `Restaura.do — Guia de Marca (para Diseño).docx`]

### 2. El problema
- Encabezado y cuatro frases de empatía: texto exacto en `copy_landing_final.md`
  sección 2, cada una con su reencuadre debajo.
- Línea de cierre de la sección en mayor peso tipográfico (es una de las frases
  bandera de marca, no una frase cualquiera del bloque).
- [ESPACIO PARA LLENAR: Oscar puede ajustar las cuatro frases con lenguaje real de
  clientes]

### 3. El modelo en una vista
- Pieza gráfica central: infografía de las dos pistas del Diagnóstico (frentes
  humanos + condiciones estructurales) y las cinco fases. Es el elemento principal
  de la sección, el texto de apoyo es breve (ver copy sección 3).
- [ESPACIO PARA LLENAR: producir la infografía como asset real (SVG o PNG), no como
  captura de pantalla de un chat]

### 4. El Diagnóstico Comercial
- Texto exacto en `copy_landing_final.md` sección 4, incluye las dos objeciones
  resueltas dentro del copy (compromiso largo, individuo vs equipo). No agregar una
  sección de FAQ aparte a menos que Oscar la pida de vuelta.
- CTA principal: agenda. CTA secundario: WhatsApp con mensaje pre-llenado "Quiero mi
  Diagnóstico Comercial".
- [ESPACIO PARA LLENAR: confirmar si el precio se muestra o queda "bajo consulta"]

### 5. Autoridad (Quién soy)
- Copy de apertura, cifras, credenciales, lista de empresas en texto plano, historia
  personal de 1969, y espacio de video ancla: texto exacto en `copy_landing_final.md`
  sección 5.
- Cifras grandes (estilo Objective Management Group): 127 empresas · 9 países · 142
  eventos · 11.274 asistentes.
- Empresas en texto plano, no logos, hasta confirmar permiso de marca de cada una.
- [ESPACIO PARA LLENAR: video ancla de YouTube cuando exista, serie "El modelo"]

### 6. CTA final + confianza
- Titular, CTA principal (agenda), CTA secundario (WhatsApp), badges de confianza:
  texto exacto en `copy_landing_final.md` sección 6.

### Footer
- WhatsApp, LinkedIn, YouTube, Instagram @oscargelves. YouTube sí entra ahora (antes
  estaba excluido): el canal tiene registro empresarial ("El modelo") además del de
  fe, ver arquitectura de dos registros en el documento de teoría, sección 6.1.
- [ESPACIO PARA LLENAR: número de WhatsApp Business y link de agenda]

## Sobre el correo corporativo @oscargelves.com

Ya no es necesario para lanzar. Todo el sitio captura por WhatsApp. El correo
corporativo queda como mejora futura (Google Workspace u otro), sin bloquear nada.

## Qué falta que solo Oscar puede llenar

1. Número de WhatsApp Business para todos los CTA del sitio.
2. Link del sistema de agenda (Calendly u otro) conectado al CRM (Bigin), origen "web".
3. Foto(s) profesionales o selección de fotos existentes de eventos, para el hero.
4. Ajustar o validar las cuatro frases del bloque de empatía con lenguaje real de clientes.
5. Decisión sobre mostrar o no el precio del Diagnóstico Comercial.
6. Confirmar permiso de marca antes de mostrar logos de clientes (mientras tanto, texto plano).
7. Video ancla de YouTube cuando exista (serie "El modelo").
8. Decidir si se reintroduce una sección de FAQ completa o se mantiene resuelto dentro del copy de la sección 4.
9. Acceso al panel de DNS del dominio para el día del lanzamiento.
10. Producción de la infografía de las dos pistas y las cinco fases como asset real del sitio.
