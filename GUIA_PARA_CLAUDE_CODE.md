# Guía de entrega — pegar directo en Claude Code

**El sitio ya está construido (index.html, css/style.css, js/main.js) con la
identidad Maestro Restaurador y el modelo de cinco fases / ocho frentes. Esta guía
es la segunda ronda: reestructura la landing de 11 secciones a 6, cambia el CTA
principal de WhatsApp-solo a agenda + WhatsApp, y ajusta el tono visual de elegancia
corporativa a taller de restauración. No es un build desde cero.**

Contexto para pegar al inicio de la conversación con Claude Code:

```
El sitio de restaura.do / oscargelves.com ya tiene la identidad Maestro Restaurador y
el modelo final (cinco fases, ocho frentes) aplicados, con una estructura de 11
secciones y CTA solo por WhatsApp. Vamos a simplificar la landing a 6 secciones
usando el principio de StoryBrand (storybrand.com): el visitante es el héroe de la
historia, Oscar es el guía, nunca al revés. Las 6 secciones nuevas son Hero, El
problema, El modelo en una vista, El Diagnóstico Comercial, Autoridad (Quién soy) y
CTA final. El proceso de cinco fases y los ocho frentes uno por uno ya no van como
secciones separadas del scroll: se resumen en una infografía (sección 3) y se
profundizan en la conversación de diagnóstico. El CTA principal pasa a ser un link de
agenda, con WhatsApp como canal secundario. El tono visual deja de perseguir
elegancia corporativa (navy/oro minimalista) y se mueve hacia taller de restauración:
cercano, humano, de detalle, remangado. Lee `brief_web_restauracion.md` (v6) y
`copy_landing_final.md` (v2) completos antes de tocar código.
```

## Qué cambia respecto al build anterior

Este es un cambio de estructura, no de identidad ni de modelo: la identidad Maestro
Restaurador, la paleta, el wordmark y las cinco fases / ocho frentes ya están bien y
no se tocan en su contenido. Lo que cambia es cómo se organiza y se presenta.

1. **De 11 secciones a 6.** El orden nuevo es: Hero, El problema, El modelo en una
   vista, El Diagnóstico Comercial, Autoridad, CTA final, más el footer. Las
   secciones "El Taller" (tres tarjetas de precio), "Cómo funciona" (cinco fases en
   detalle), "El Diagnóstico de Restauración" (ocho frentes en detalle),
   "Resultados", "Preguntas frecuentes" y "Manifiesto" se retiran del scroll
   principal como secciones propias. Ver el punto 2.
2. **Consolidar, no borrar contenido.** El proceso de cinco fases y los ocho frentes
   se resumen dentro de la nueva sección 3 ("El modelo en una vista"), apoyados en
   una pieza gráfica (infografía de dos pistas + cinco fases), con texto de apoyo
   breve, no en tarjetas expandidas una por una. Las tres formas de trabajar
   (Conferencia, Diagnóstico Comercial, Programa a la Medida) se reducen a una sola
   oferta visible en la landing (Diagnóstico Comercial, sección 4); Conferencia y
   Programa a la Medida se mencionan como siguiente paso dentro del mismo texto, no
   como tarjetas propias compitiendo por clic. Las dos objeciones más frecuentes del
   FAQ anterior (compromiso largo, individuo vs equipo) se resuelven dentro del copy
   de la sección 4, no en una sección de preguntas aparte.
3. **CTA principal: agenda, no solo WhatsApp.** El botón principal de Hero, sección 4
   y CTA final ahora abre un link de agenda externo (Calendly u otro), usando
   `[PENDIENTE-LINK-AGENDA]` como placeholder hasta que Oscar lo entregue. WhatsApp
   sigue existiendo como CTA secundario, de menor peso visual (link de texto o botón
   más pequeño), con el mismo patrón de siempre:
   `https://api.whatsapp.com/send?phone=[NUMERO]&text=[MENSAJE]`.
4. **Tono visual: taller antes que elegancia.** La paleta (navy, oro, naranja) y la
   tipografía no cambian, pero cualquier foto, ilustración o textura nueva que se
   agregue debe seguir la dirección de `Restaura.do — Guia de Marca (para
   Diseño).docx`: cuero, madera, luz cálida, manos trabajando, detalle artesanal, no
   fotografía de stock corporativa ni composiciones minimalistas frías.
5. **Footer suma YouTube.** Antes estaba excluido a propósito porque el canal era
   solo de fe explícita. Ahora el canal de Oscar tiene dos series, "El modelo"
   (registro empresarial) y "Principios" (registro de fe), así que sí entra al
   footer del sitio: WhatsApp, LinkedIn, YouTube, Instagram @oscargelves.
6. La identidad "Maestro Restaurador", la historia de 1969, el tratamiento de logos
   de clientes en texto plano, y el wordmark siguen exactamente como en la ronda
   anterior. No hay cambios ahí.

## Qué leer, en este orden

1. `brief_web_restauracion.md` (v6) — marca completa (paleta, tipografía, wordmark,
   tono visual de taller, voz de marca, postura narrativa StoryBrand), metodología
   final, y la estructura de las 6 secciones nuevas con instrucciones de qué va en
   cada una.
2. `copy_landing_final.md` (v2) — el texto final de cada una de las 6 secciones,
   listo para usar tal cual, más una sección explícita de "qué queda fuera del
   scroll principal y dónde vive". Los bloques `[LLENAR: ...]` son huecos que Oscar
   completa aparte, no los inventes.
3. `Restaura.do — Guia de Marca (para Diseño).docx` — si se genera o encarga
   fotografía nueva, esta es la referencia visual completa (indumentaria, escenario,
   luz, composición).
4. Este archivo, con las reglas de construcción y el stack.

## Stack

Sitio estático de una sola página (single scroll), sin CMS ni base de datos.
HTML/CSS/JS simple, o Astro si se prefiere trabajar por componentes. Deploy en
Vercel o Netlify. Sin cambios respecto al build anterior.

Captura de datos: **agenda como CTA principal, WhatsApp como secundario**, ningún
formulario propio. El link de agenda es un servicio externo (Calendly u otro), tan
simple de integrar como un link de WhatsApp, no requiere backend. Usar
`[PENDIENTE-LINK-AGENDA]` y `[PENDIENTE-WHATSAPP]` como placeholders visibles hasta
que Oscar los entregue.

## Reglas de construcción

- No inventar copy nuevo. El texto de `copy_landing_final.md` (v2) es final, úsalo
  tal cual salvo los espacios marcados `[LLENAR]`.
- No tocar la paleta ni el wordmark. Navy `#142847`/`#0D1F3C`, Oro `#C8922A`,
  naranja de acento `#E07B39`, más Marfil `#FBF8F2`, Texto secundario `#33445E` y
  Crema `#F4E9D8` para texto sobre fondo oscuro. El wordmark es **"restaura.do"**
  (minúsculas, con el punto), en Sora 700, texto real letra por letra con opacidad
  creciente. Nunca reemplazarlo por una fuente script, un SVG a mano o una imagen
  exportada.
- Sora para titulares, cifras, botones y el wordmark. Inter para cuerpo de texto.
- Seis secciones, sin excepción, en este orden: Hero, El problema, El modelo en una
  vista, El Diagnóstico Comercial, Autoridad, CTA final, más footer. No reintroducir
  las secciones retiradas (El Taller de tres tarjetas, Cómo funciona en detalle, El
  Diagnóstico de Restauración en detalle, Resultados, FAQ aparte, Manifiesto) salvo
  que Oscar lo pida explícitamente.
- La sección 3 ("El modelo en una vista") depende de una pieza gráfica real
  (infografía de las dos pistas del Diagnóstico y las cinco fases). Si no existe el
  asset todavía, dejar el espacio marcado y avisar, no inventar una versión
  simplificada sin consultar.
- Los clientes de la sección Autoridad: texto plano, tratados como piezas de
  historia, no como muro de logos, hasta confirmar permiso de marca.
- El proceso final, sin excepción, es de cinco fases: Diagnóstico, Desmontaje,
  Ensamblaje, Ajuste, Apropiación. Los ocho frentes finales son Propósito, Carácter,
  Motivación, Autoconocimiento, Energía, Relaciones, Imagen, Trayectoria, sin
  acróstico ni sigla. Siguen sin aparecer en el sitio: Orden de Trabajo, Puesta a
  Punto, Prueba de Ruta, las ocho partes de vehículo, y las palabras Rumbo,
  Encendido, Suspensión, Armazón, Unidad, Rodaje, Aceite.
- Fotografía e ilustración nueva: seguir `Restaura.do — Guia de Marca (para
  Diseño).docx`, tono de taller, no elegancia corporativa.
- Mobile-first, mucho espacio en blanco, jerarquía tipográfica clara.

## Después de esta segunda ronda

Oscar revisa sobre el sitio real, no sobre mockups. Los pendientes que solo él puede
llenar están listados al final de `copy_landing_final.md` y de
`brief_web_restauracion.md`. El link de agenda y el número de WhatsApp son los más
urgentes porque bloquean los dos CTA de todo el sitio. La infografía de la sección 3
es el segundo bloqueo real: sin ese asset, la sección más importante de la nueva
estructura queda incompleta.
