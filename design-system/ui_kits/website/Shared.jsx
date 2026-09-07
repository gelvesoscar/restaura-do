const { Button, IconButton, Icon, Badge, Card, Tag, Tabs, Input, Select, Checkbox, Radio, Switch, Toast, Tooltip, Dialog } = window.ComounluloDesignSystem_63fbf1;

const SECCIONES=[['inicio','Inicio'],['lulo','Por qué el lulo'],['manifiesto','Verse como un lulo'],['tips','Tips de salud'],['recetas','Recetas'],['tienda','Tienda']];

/* Hueco de foto que el usuario llena arrastrando su imagen (persiste entre recargas).
   Mientras esté vacío muestra, en el color de la marca, la toma que hace falta. */
function Photo({label,id,ratio='4 / 3',tone='lulo',radius='var(--radius-xl)',style}){
  const bg=tone==='pulpa'?'var(--gradient-pulpa)':tone==='flat'?'var(--cream-200)':'var(--gradient-lulo)';
  const slotId=id||('foto-'+label.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g,'-').slice(0,42));
  const r=radius==='0'?0:radius;
  return (
    <div style={{position:'relative',aspectRatio:ratio,background:bg,borderRadius:r,
      border:'1px solid var(--border-hairline)',overflow:'hidden',...style}}>
      <image-slot id={slotId} shape="rect" placeholder={label}></image-slot>
    </div>
  );
}

/* Firma de marca: símbolo aparte del nombre, a 1.6 × la altura de mayúscula */
function Wordmark({size=20,inverse=false,markOnly=false}){
  const src=inverse?'../../assets/logo-lulo-cream.svg':'../../assets/logo-lulo.svg';
  if(markOnly) return <img src={src} alt="Comounlulo.co" style={{width:size*1.6,height:size*1.6,display:'block'}} />;
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:size*0.45,whiteSpace:'nowrap'}}>
      <img src={src} alt="" style={{width:size*1.6,height:size*1.6,display:'block'}} />
      <span className="wordmark" style={{fontSize:size,color:inverse?'var(--cream-50)':'var(--ink-900)'}}>
        comounlulo<em style={{fontStyle:'normal',color:inverse?'var(--orange-300)':'var(--brand)'}}>.co</em>
      </span>
    </span>
  );
}

function SectionHead({eyebrow,title,lead,align='left',maxWidth='34ch'}){
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)',alignItems:align==='center'?'center':'flex-start',
      textAlign:align==='center'?'center':'left',marginBottom:'var(--space-10)'}}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 style={{maxWidth,margin:0}}>{title}</h2>
      {lead&&<p style={{fontSize:'var(--fs-lead)',lineHeight:'var(--lh-body)',color:'var(--text-muted)',maxWidth:'52ch'}}>{lead}</p>}
    </div>
  );
}

function Nav({activa,bag,openBag}){
  const [w,setW]=React.useState(typeof window!=='undefined'?window.innerWidth:1280);
  React.useEffect(()=>{const on=()=>setW(window.innerWidth);window.addEventListener('resize',on);return ()=>window.removeEventListener('resize',on);},[]);
  const compacto=w<1120;      /* firma reducida al símbolo */
  const sinCta=w<1040;        /* la sección Tienda ya está en el menú */
  return (
    <header style={{position:'sticky',top:0,zIndex:30,background:'var(--veil)',backdropFilter:'var(--blur-veil)',
      WebkitBackdropFilter:'var(--blur-veil)',borderBottom:'1px solid var(--border-hairline)'}}>
      <div style={{maxWidth:'var(--max-content)',margin:'0 auto',padding:'12px var(--gutter-page)',display:'flex',alignItems:'center',gap:compacto?'var(--space-4)':'var(--space-6)'}}>
        <a href="#inicio" style={{borderBottom:'none',display:'flex',flex:'none'}}><Wordmark size={22} markOnly={compacto} /></a>
        <nav style={{display:'flex',gap:compacto?'var(--space-4)':'var(--space-5)',marginLeft:'auto',flexWrap:'nowrap',minWidth:0}}>
          {SECCIONES.slice(1).map(([id,l])=>(
            <a key={id} href={'#'+id} style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',borderBottom:'2px solid '+(activa===id?'var(--brand)':'transparent'),
              color:activa===id?'var(--text-strong)':'var(--text-muted)',paddingBottom:2,textDecoration:'none',whiteSpace:'nowrap'}}>{l}</a>
          ))}
        </nav>
        <div style={{display:'flex',alignItems:'center',gap:'var(--space-3)'}}>
          <Tooltip label="Tu bolsa">
            <span style={{position:'relative',display:'inline-flex'}}>
              <IconButton icon="shopping-bag" label="Bolsa" onClick={openBag} />
              {bag>0&&<span style={{position:'absolute',top:-2,right:-2,minWidth:18,height:18,borderRadius:'var(--radius-pill)',
                background:'var(--brand)',color:'#fff',fontFamily:'var(--font-body)',fontSize:10,display:'grid',placeItems:'center',padding:'0 5px'}}>{bag}</span>}
            </span>
          </Tooltip>
          {!sinCta&&<Button size="sm" as="a" href="#tienda" style={{whiteSpace:'nowrap'}}>Ver la tienda</Button>}
        </div>
      </div>
    </header>
  );
}

function Footer(){
  return (
    <footer style={{background:'var(--surface-inverse)',color:'var(--cream-300)',padding:'var(--space-16) var(--gutter-page) var(--space-10)'}}>
      <div style={{maxWidth:'var(--max-content)',margin:'0 auto',display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr',gap:'var(--space-10)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)',maxWidth:'34ch'}}>
          <Wordmark size={24} inverse />
          <p style={{fontSize:'var(--fs-body-sm)',lineHeight:'var(--lh-body)'}}>Vitalidad que se nota por fuera, porque se cuida por dentro. Desde Colombia, con la fruta que nos enseñó la idea.</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          <span className="eyebrow" style={{color:'var(--ink-300)'}}>Secciones</span>
          {SECCIONES.map(([id,l])=>(<a key={id} href={'#'+id} style={{fontSize:'var(--fs-body-sm)',color:'var(--cream-300)',borderBottom:'none'}}>{l}</a>))}
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          <span className="eyebrow" style={{color:'var(--ink-300)'}}>Escríbenos</span>
          <span style={{fontSize:'var(--fs-body-sm)'}}>hola@comounlulo.co</span>
          <span style={{fontSize:'var(--fs-body-sm)'}}>Bogotá, Colombia</span>
          <span style={{fontSize:'var(--fs-body-sm)'}}>@comounlulo</span>
        </div>
      </div>
      <div style={{maxWidth:'var(--max-content)',margin:'var(--space-12) auto 0',paddingTop:'var(--space-5)',borderTop:'1px solid var(--ink-700)',
        display:'flex',justifyContent:'space-between',gap:'var(--space-6)',fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',color:'var(--ink-300)'}}>
        <span>© 2026 Comounlulo.co</span>
        <span style={{maxWidth:'56ch',textAlign:'right'}}>Contenido informativo sobre hábitos y cultura alimentaria. No diagnostica, trata ni cura ninguna condición, y no reemplaza el criterio de un profesional de la salud.</span>
      </div>
    </footer>
  );
}

Object.assign(window,{Photo,Wordmark,Nav,Footer,SectionHead,SECCIONES});
