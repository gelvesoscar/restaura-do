const { Button, IconButton, Icon, Badge, Card, Tabs, Input, Select, Checkbox, Dialog, Toast } = window.ComounluloDesignSystem_63fbf1;

const SKU={
  nombre:'Botella inteligente Comounlulo',
  variante:'600 ml · acero inoxidable',
  precio:189000,
  colores:['Cáscara (naranja)','Pulpa (verde)','Tinta (verde oscuro)'],
  bullets:['Tapa con recordatorio de toma: se ilumina cuando llevas mucho tiempo sin tomar agua.','Registra cuánto tomas en el día y lo muestra en el aro de la tapa.','Doble pared: mantiene fría el agua o el jugo de lulo unas 12 horas.','Se carga por USB-C; la batería dura cerca de un mes.'],
};
const money=n=>'$'+n.toLocaleString('es-CO');

function Tienda({add}){
  const [color,setColor]=React.useState(SKU.colores[0]);
  const [cant,setCant]=React.useState(1);
  return (
    <section id="tienda" style={{maxWidth:'var(--max-content)',margin:'0 auto',padding:'var(--section-y) var(--gutter-page)'}}>
      <SectionHead eyebrow="Tienda" title="Empezamos con una sola botella, la que ya podemos entregar."
        lead="Preferimos vender lo que tenemos confirmado con proveedor antes que mostrar un catálogo que no podemos cumplir. Las demás gamas entran cuando estén listas." />
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-16)',alignItems:'start'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          <Photo label="Botella inteligente de pie, tapa con aro de luz, fondo crema" ratio="1 / 1" tone="flat" />
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-3)'}}>
            <Photo label="Detalle de la tapa" ratio="1 / 1" tone="flat" radius="var(--radius-md)" />
            <Photo label="En la mano" ratio="1 / 1" radius="var(--radius-md)" />
            <Photo label="Con jugo de lulo" ratio="1 / 1" tone="pulpa" radius="var(--radius-md)" />
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
          <div style={{display:'flex',gap:'var(--space-2)'}}><Badge tone="pulpa">Único SKU disponible</Badge><Badge tone="neutral">Envío 2–4 días</Badge></div>
          <h3 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-display-m)',margin:0,lineHeight:'var(--lh-heading)'}}>{SKU.nombre}</h3>
          <span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',color:'var(--text-muted)'}}>{SKU.variante}</span>
          <p style={{fontSize:'var(--fs-body)',lineHeight:'var(--lh-body)',color:'var(--text-body)',maxWidth:'46ch',margin:0}}>
            La botella es el objeto más honesto que podíamos hacer primero: no promete nada por dentro de ti, solo te recuerda tomar agua. Restaurar no es un evento; es acordarse todos los días. Esto es un recordatorio que cabe en la mano.
          </p>
          <ul style={{margin:0,paddingLeft:'1.1em',display:'flex',flexDirection:'column',gap:'var(--space-2)',fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',color:'var(--text-body)',lineHeight:'var(--lh-body)'}}>
            {SKU.bullets.map(b=>(<li key={b}>{b}</li>))}
          </ul>
          <Card elevation="sm" style={{gap:'var(--space-4)'}}>
            <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between'}}>
              <span style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-title)',color:'var(--text-strong)'}}>{money(SKU.precio)}</span>
              <span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',color:'var(--text-muted)'}}>IVA incluido · envío gratis</span>
            </div>
            <Select label="Color" options={SKU.colores} value={color} onChange={e=>setColor(e.target.value)} />
            <div style={{display:'flex',alignItems:'center',gap:'var(--space-4)'}}>
              <div style={{display:'flex',alignItems:'center',gap:'var(--space-3)'}}>
                <IconButton icon="minus" label="Quitar uno" size="sm" onClick={()=>setCant(Math.max(1,cant-1))} />
                <span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body)',minWidth:16,textAlign:'center'}}>{cant}</span>
                <IconButton icon="plus" label="Agregar uno" size="sm" onClick={()=>setCant(cant+1)} />
              </div>
              <Button size="lg" fullWidth onClick={()=>add({nombre:SKU.nombre,color,cant,precio:SKU.precio})}>Agregar a la bolsa</Button>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'var(--space-2)',color:'var(--text-muted)',fontSize:'var(--fs-caption)'}}>
              <Icon name="truck" size="sm" /> Llega en 2–4 días hábiles a las principales ciudades del país
            </div>
          </Card>
          <Card tone="pulpa" eyebrow="Lo que viene" title="Las demás gamas, cuando estén confirmadas">
            <p style={{fontSize:'var(--fs-body-sm)',lineHeight:'var(--lh-body)',margin:0}}>
              Estamos cerrando proveedor para dos referencias más. Cuando la producción esté asegurada, aparecen aquí — no antes.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Bolsa({abierta,items,cerrar,confirmar}){
  const total=items.reduce((s,i)=>s+i.precio*i.cant,0);
  if(!abierta) return null;
  return (
    <div style={{position:'fixed',inset:0,zIndex:50}}>
    <Dialog title="Tu bolsa" description={items.length?'Revisa antes de confirmar. Puedes seguir viendo el sitio.':'Todavía no has agregado nada.'} onClose={cerrar} width={520}
      footer={items.length?<><Button variant="outline" size="sm" onClick={cerrar}>Seguir viendo</Button><Button size="sm" onClick={confirmar}>Confirmar pedido</Button></>:<Button size="sm" onClick={cerrar}>Entendido</Button>}>
      {items.length>0&&<div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
        {items.map((i,n)=>(
          <div key={n} style={{display:'flex',gap:'var(--space-4)',alignItems:'center'}}>
            <Photo label="Botella" ratio="1 / 1" tone="flat" radius="var(--radius-md)" style={{width:60,flex:'none'}} />
            <div style={{display:'flex',flexDirection:'column',gap:2,flex:1}}>
              <span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',fontWeight:'var(--fw-medium)',color:'var(--text-strong)'}}>{i.nombre}</span>
              <span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',color:'var(--text-muted)'}}>{i.color} · {i.cant} {i.cant>1?'unidades':'unidad'}</span>
            </div>
            <span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',color:'var(--text-strong)'}}>{money(i.precio*i.cant)}</span>
          </div>
        ))}
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)',paddingTop:'var(--space-4)',borderTop:'1px solid var(--border-hairline)'}}>
          <Input label="Correo" type="email" placeholder="tu@correo.co" hint="Ahí llega la confirmación y el seguimiento." />
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-3)'}}>
            <Select label="Ciudad" options={['Bogotá','Medellín','Cali','Barranquilla','Bucaramanga']} />
            <Input label="Dirección" placeholder="Cra 7 # 71-21" />
          </div>
          <Checkbox label="Quiero recibir los tips y recetas nuevas" description="Un correo al mes, sin ruido." defaultChecked />
          <div style={{display:'flex',justifyContent:'space-between',fontFamily:'var(--font-body)',fontSize:'var(--fs-body)',fontWeight:'var(--fw-medium)',color:'var(--text-strong)'}}>
            <span>Total</span><span>{money(total)}</span>
          </div>
        </div>
      </div>}
    </Dialog>
    </div>
  );
}
Object.assign(window,{Tienda,Bolsa,SKU});
