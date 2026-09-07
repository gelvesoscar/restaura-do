const { Toast } = window.ComounluloDesignSystem_63fbf1;

function App(){
  const [items,setItems]=React.useState([]);
  const [bolsa,setBolsa]=React.useState(false);
  const [toast,setToast]=React.useState(null);
  const [activa,setActiva]=React.useState('inicio');

  React.useEffect(()=>{
    const ids=SECCIONES.map(([id])=>id);
    const onScroll=()=>{
      let cur=ids[0];
      for(const id of ids){const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=140) cur=id;}
      setActiva(cur);
    };
    onScroll();
    window.addEventListener('scroll',onScroll,{passive:true});
    return ()=>window.removeEventListener('scroll',onScroll);
  },[]);

  React.useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(null),4200);return ()=>clearTimeout(t);},[toast]);

  const add=it=>{setItems(p=>[...p,it]);setToast({tone:'good',title:'Agregada a tu bolsa',message:it.nombre+' · '+it.color});};
  const confirmar=()=>{setBolsa(false);setItems([]);setToast({tone:'good',title:'Pedido confirmado',message:'Te escribimos al correo con el seguimiento.'});};

  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',background:'var(--surface-page)',position:'relative'}}>
      <Nav activa={activa} bag={items.reduce((s,i)=>s+i.cant,0)} openBag={()=>setBolsa(true)} />
      <main style={{flex:1}}>
        <Inicio />
        <PorQueLulo />
        <Manifiesto />
        <Tips />
        <Recetas />
        <Tienda add={add} />
      </main>
      <Footer />
      <Bolsa abierta={bolsa} items={items} cerrar={()=>setBolsa(false)} confirmar={confirmar} />
      {toast&&<div style={{position:'fixed',right:24,bottom:24,zIndex:60}}><Toast {...toast} onClose={()=>setToast(null)} /></div>}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
