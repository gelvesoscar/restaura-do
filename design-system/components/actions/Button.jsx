import React from 'react';

const PAD={sm:'8px 14px',md:'12px 22px',lg:'16px 30px'};
const FS={sm:'var(--fs-caption)',md:'var(--fs-body-sm)',lg:'var(--fs-body)'};

const VARIANTS={
  primary:{background:'var(--brand)',color:'var(--text-on-brand)',border:'1px solid var(--brand)',boxShadow:'var(--shadow-brand)'},
  secondary:{background:'var(--surface-accent)',color:'#FFFFFF',border:'1px solid var(--surface-accent)',boxShadow:'var(--shadow-sm)'},
  outline:{background:'transparent',color:'var(--text-strong)',border:'1px solid var(--border-default)',boxShadow:'none'},
  ghost:{background:'transparent',color:'var(--text-link)',border:'1px solid transparent',boxShadow:'none'},
};
const HOVER={
  primary:{background:'var(--brand-strong)',borderColor:'var(--brand-strong)'},
  secondary:{background:'var(--green-700)',borderColor:'var(--green-700)'},
  outline:{background:'var(--cream-200)',borderColor:'var(--border-strong)'},
  ghost:{background:'var(--brand-tint)'},
};

export function Button({variant='primary',size='md',fullWidth=false,disabled=false,as='button',children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const [press,setPress]=React.useState(false);
  const Tag=as;
  return (
    <Tag disabled={Tag==='button'?disabled:undefined} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false);setPress(false);}}
      onMouseDown={()=>setPress(true)} onMouseUp={()=>setPress(false)} {...rest}
      style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'var(--space-2)',
        font:'var(--type-button)',fontSize:FS[size],letterSpacing:'var(--ls-button)',padding:PAD[size],
        borderRadius:'var(--radius-pill)',cursor:disabled?'not-allowed':'pointer',textDecoration:'none',
        width:fullWidth?'100%':'auto',transition:'var(--transition-base)',
        transform:press&&!disabled?'scale(var(--press-scale))':'none',
        opacity:disabled?0.45:1,...VARIANTS[variant],...(hover&&!disabled?HOVER[variant]:null),...style}}>
      {children}
    </Tag>
  );
}
