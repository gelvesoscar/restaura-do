const { Button, Icon, Badge, Card } = window.ComounluloDesignSystem_63fbf1;

function Inicio(){
  return (
    <section id="inicio" style={{maxWidth:'var(--max-content)',margin:'0 auto',padding:'var(--section-y) var(--gutter-page)',
      display:'grid',gridTemplateColumns:'1.05fr .95fr',gap:'var(--space-16)',alignItems:'center'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-6)'}}>
        <span className="eyebrow">Adentro hacia afuera</span>
        <h1 style={{fontSize:'var(--fs-display-xl)',lineHeight:'var(--lh-tight)',letterSpacing:'var(--ls-display)',maxWidth:'20ch'}}>
          Vitalidad que se nota por fuera, porque se cuida por dentro.
        </h1>
        <p style={{fontSize:'var(--fs-lead)',lineHeight:'var(--lh-body)',color:'var(--text-body)',maxWidth:'44ch'}}>
          Tomamos el nombre de una fruta colombiana: naranja por fuera, verde intenso por dentro. La usamos como recordatorio de que lo que se ve empieza donde no se ve.
        </p>
        <div style={{display:'flex',gap:'var(--space-3)',alignItems:'center',flexWrap:'wrap'}}>
          <Button size="lg" as="a" href="#tienda">Ir a la tienda</Button>
          <Button variant="ghost" size="lg" as="a" href="#manifiesto">Por qué nos llamamos así <Icon name="arrow-right" size="sm" /></Button>
        </div>
        <div style={{display:'flex',gap:'var(--space-2)',flexWrap:'wrap',marginTop:'var(--space-2)'}}>
          <Badge tone="pulpa">Hecho en Colombia</Badge><Badge tone="neutral">Envíos nacionales</Badge><Badge tone="neutral">Hábitos, no promesas</Badge>
        </div>
      </div>
      <Photo label="Foto principal: lulo partido a la mitad, cáscara naranja y pulpa verde, luz natural sobre madera" ratio="1 / 1" />
    </section>
  );
}

function PorQueLulo(){
  const datos=[
    ['sprout','Del piedemonte andino','Se cultiva en las laderas templadas de Colombia y Ecuador. En los mercados se vende por docenas, todavía con el polvillo de la cáscara.'],
    ['droplet','Pulpa ácida y verde','Su jugo es el estándar de la mesa colombiana: en agua, en leche, en el almuerzo de todos los días.'],
    ['leaf','Fruta con vitamina C y antioxidantes','Como muchas frutas frescas, aporta vitamina C y compuestos antioxidantes propios de la fruta entera.'],
    ['sun','Símbolo de frescura','En la cultura popular “como un lulo” significa estar fresco, entero, en forma. No lo inventamos nosotros: lo heredamos.'],
  ];
  return (
    <section id="lulo" style={{background:'var(--surface-card)',borderTop:'1px solid var(--border-hairline)',borderBottom:'1px solid var(--border-hairline)'}}>
      <div style={{maxWidth:'var(--max-content)',margin:'0 auto',padding:'var(--section-y) var(--gutter-page)'}}>
        <SectionHead eyebrow="Por qué el lulo" title="Una fruta que ya era un dicho antes de ser una marca."
          lead="Esta sección es cultural y botánica, no médica: de dónde viene el lulo, cómo se toma y por qué su nombre ya cargaba la idea de estar bien." />
        <div style={{display:'grid',gridTemplateColumns:'.85fr 1.15fr',gap:'var(--space-12)',alignItems:'center'}}>
          <Photo label="Canastos de lulo en mercado campesino: naranja apilado, textura de cáscara" ratio="4 / 5" />
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-4)'}}>
            {datos.map(([ic,t,d])=>(
              <Card key={t} elevation="none" style={{background:'var(--surface-page)',border:'1px solid var(--border-hairline)',gap:'var(--space-3)'}}>
                <span style={{width:40,height:40,borderRadius:'var(--radius-pill)',background:'var(--accent-soft)',display:'grid',placeItems:'center',color:'var(--green-700)'}}>
                  <Icon name={ic} size="md" />
                </span>
                <h4 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-subtitle)',margin:0,lineHeight:'var(--lh-heading)'}}>{t}</h4>
                <p style={{fontSize:'var(--fs-body-sm)',lineHeight:'var(--lh-body)',color:'var(--text-body)',margin:0}}>{d}</p>
              </Card>
            ))}
          </div>
        </div>
        <p style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',color:'var(--text-faint)',marginTop:'var(--space-8)',maxWidth:'70ch'}}>
          Información general sobre la fruta y su lugar en la cocina colombiana. No constituye una afirmación de salud ni una recomendación de tratamiento.
        </p>
      </div>
    </section>
  );
}

function Manifiesto(){
  return (
    <section id="manifiesto" style={{background:'var(--gradient-lulo)',padding:'var(--section-y) var(--gutter-page)'}}>
      <div style={{maxWidth:'var(--max-prose)',margin:'0 auto',color:'#fff',display:'flex',flexDirection:'column',gap:'var(--space-6)'}}>
        <span className="eyebrow" style={{color:'rgba(255,255,255,.85)'}}>Verse como un lulo</span>
        <h2 style={{fontSize:'var(--fs-display-l)',lineHeight:'var(--lh-display)',color:'#fff',maxWidth:'26ch'}}>
          No me reinventé. Me acordé de cómo era.
        </h2>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)',fontSize:'var(--fs-lead)',lineHeight:1.68}}>
          <p>Cuando era niño, en mi casa decían que alguien estaba “como un lulo” cuando estaba entero: despierto, con color, con ganas. Nadie hablaba de dietas ni de rendimiento. Hablaban de estar bien.</p>
          <p>Un lulo no cambia de forma para verse mejor. Por fuera es la misma fruta naranja de siempre. Lo que tiene adentro —la pulpa verde, el ácido, el agua— es lo que hace que se note por fuera.</p>
          <p>Esta marca nace de ahí. Nadie necesita reinventarse: necesita <b style={{fontWeight:500}}>recordar</b>. La forma queda intacta. Lo que se restaura es la vitalidad.</p>
          <p style={{fontStyle:'italic',fontSize:'var(--fs-body)',opacity:.92}}>“Nadie necesita reinventarse. Necesita recordar.”</p>
          <p style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-display-m)',lineHeight:'var(--lh-display)'}}>
            La transformación pasa por dentro antes de notarse por fuera.
          </p>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'var(--space-3)',marginTop:'var(--space-2)'}}>
          <span style={{width:40,height:1,background:'rgba(255,255,255,.6)'}} />
          <span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase'}}>Quien fundó Comounlulo</span>
        </div>
      </div>
    </section>
  );
}
Object.assign(window,{Inicio,PorQueLulo,Manifiesto});
