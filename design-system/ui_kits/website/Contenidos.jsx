const { Button, Icon, Badge, Card, Tag, Tabs } = window.ComounluloDesignSystem_63fbf1;

const TIPS=[
  {t:'Empieza el día con agua, no con pantalla',c:'Un vaso antes del café. Es el hábito más fácil de sostener y el que más rápido se siente.',cat:'Hidratación',ic:'droplet',min:'2 min'},
  {t:'Camina veinte minutos después de comer',c:'No es entrenamiento, es movimiento. Sirve igual si es alrededor de la cuadra o en el pasillo de la oficina.',cat:'Movimiento',ic:'activity',min:'20 min'},
  {t:'Apaga la luz grande dos horas antes de dormir',c:'Bajar la intensidad de la casa le avisa al cuerpo que el día se está cerrando.',cat:'Descanso',ic:'moon',min:'Rutina'},
  {t:'Come fruta entera, no solo jugo',c:'La fruta completa trae fibra además del sabor. El jugo es un gusto; la fruta es el hábito.',cat:'Alimentación',ic:'leaf',min:'Diario'},
  {t:'Ten la botella a la vista',c:'La hidratación no falla por falta de ganas, falla por falta de recordatorio. Lo que se ve, se toma.',cat:'Hidratación',ic:'sun',min:'Todo el día'},
  {t:'Una cosa a la vez, treinta días',c:'Cambiar cinco hábitos a la vez es cambiar ninguno. Elige uno y déjalo correr un mes.',cat:'Constancia',ic:'shield-check',min:'30 días'},
];
const CATS=['Todos','Hidratación','Movimiento','Descanso','Alimentación','Constancia'];

function Tips(){
  const [cat,setCat]=React.useState('Todos');
  const lista=cat==='Todos'?TIPS:TIPS.filter(t=>t.cat===cat);
  return (
    <section id="tips" style={{maxWidth:'var(--max-content)',margin:'0 auto',padding:'var(--section-y) var(--gutter-page)'}}>
      <SectionHead eyebrow="Tips de salud" title="Hábitos simples, del tamaño de un día."
        lead="Sentido común aplicado, no consejo clínico. Cosas que se pueden empezar hoy y sostener el mes entero." />
      <div style={{display:'flex',gap:'var(--space-2)',flexWrap:'wrap',marginBottom:'var(--space-6)'}}>
        {CATS.map(c=>(<Tag key={c} selected={cat===c} onClick={()=>setCat(c)}>{c}</Tag>))}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)'}}>
        {lista.map(t=>(
          <Card key={t.t} interactive elevation="xs" style={{gap:'var(--space-3)'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <span style={{width:38,height:38,borderRadius:'var(--radius-pill)',background:'var(--brand-tint)',display:'grid',placeItems:'center',color:'var(--orange-700)'}}>
                <Icon name={t.ic} size="md" />
              </span>
              <Badge tone="neutral">{t.min}</Badge>
            </div>
            <h4 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-subtitle)',margin:0,lineHeight:'var(--lh-heading)'}}>{t.t}</h4>
            <p style={{fontSize:'var(--fs-body-sm)',lineHeight:'var(--lh-body)',color:'var(--text-body)',margin:0}}>{t.c}</p>
            <span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',color:'var(--text-link)',display:'flex',alignItems:'center',gap:6,marginTop:'auto'}}>
              Leer la nota <Icon name="arrow-right" size={13} />
            </span>
          </Card>
        ))}
      </div>
      <p style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',color:'var(--text-faint)',marginTop:'var(--space-8)',maxWidth:'70ch'}}>
        Estas notas describen hábitos cotidianos. No diagnostican, no tratan ni curan condiciones, y no sustituyen la orientación de un profesional de la salud.
      </p>
    </section>
  );
}

const RECETAS=[
  {t:'Jugo de lulo en agua',min:'5 min',porc:'2 vasos',foto:'Vaso de jugo de lulo, verde pálido, sobre mesa de madera',
   ing:['3 lulos maduros','2 vasos de agua fría','Hielo','Endulzante al gusto (opcional)'],
   paso:'Parte los lulos, saca la pulpa con una cuchara, licúa con el agua treinta segundos y cuela. Sirve de una: el color se apaga si espera.',
   nota:'La fruta entera aporta vitamina C y antioxidantes propios del lulo.'},
  {t:'Lulada con hierbabuena',min:'10 min',porc:'4 vasos',foto:'Jarra de lulada con hojas de hierbabuena y hielo picado',
   ing:['5 lulos','4 vasos de agua','Un puñado de hierbabuena','Hielo picado'],
   paso:'Machaca la pulpa con la hierbabuena en el fondo de la jarra, agrega agua y hielo, revuelve sin licuar. Queda con pulpa, como en el Valle.',
   nota:'Bebida fría de fruta fresca; la hierbabuena es aromática, no medicinal.'},
  {t:'Batido de lulo y avena',min:'7 min',porc:'1 vaso grande',foto:'Batido cremoso claro con topping de avena en vaso alto',
   ing:['2 lulos','1/2 taza de avena en hojuelas','1 vaso de leche o bebida vegetal','Canela'],
   paso:'Licúa todo hasta que la avena desaparezca. Si lo dejas reposar cinco minutos, espesa solo.',
   nota:'La avena aporta fibra; el lulo, vitamina C y sabor ácido.'},
];

function Recetas(){
  const [abierta,setAbierta]=React.useState(RECETAS[0].t);
  return (
    <section id="recetas" style={{background:'var(--surface-card)',borderTop:'1px solid var(--border-hairline)',borderBottom:'1px solid var(--border-hairline)'}}>
      <div style={{maxWidth:'var(--max-content)',margin:'0 auto',padding:'var(--section-y) var(--gutter-page)'}}>
        <SectionHead eyebrow="Recetas con lulo" title="Cómo se toma el lulo en las casas de aquí."
          lead="Tres formas tradicionales, con medidas de cocina y sin promesas. Toca una tarjeta para ver los ingredientes." />
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)'}}>
          {RECETAS.map(r=>{const on=abierta===r.t;return (
            <Card key={r.t} interactive elevation={on?'md':'xs'} padding="0" onClick={()=>setAbierta(r.t)} style={{overflow:'hidden',gap:0}}>
              <Photo label={r.foto} ratio="16 / 10" radius="0" tone={on?'pulpa':'flat'} />
              <div style={{padding:'var(--space-5)',display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
                <div style={{display:'flex',gap:'var(--space-2)'}}><Badge tone="neutral">{r.min}</Badge><Badge tone="neutral">{r.porc}</Badge></div>
                <h4 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-subtitle)',margin:0}}>{r.t}</h4>
                {on&&<>
                  <ul style={{margin:0,paddingLeft:'1.1em',display:'flex',flexDirection:'column',gap:4,fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',color:'var(--text-body)'}}>
                    {r.ing.map(i=>(<li key={i}>{i}</li>))}
                  </ul>
                  <p style={{fontSize:'var(--fs-body-sm)',lineHeight:'var(--lh-body)',color:'var(--text-body)',margin:0}}>{r.paso}</p>
                  <p style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',color:'var(--green-600)',margin:0,display:'flex',gap:6,alignItems:'flex-start'}}>
                    <Icon name="leaf" size={13} color="var(--green-600)" />{r.nota}
                  </p>
                </>}
                {!on&&<span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',color:'var(--text-link)'}}>Ver ingredientes</span>}
              </div>
            </Card>
          );})}
        </div>
      </div>
    </section>
  );
}
Object.assign(window,{Tips,Recetas,TIPS,RECETAS});
