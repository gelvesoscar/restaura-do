import React from 'react';

export function Switch({label,defaultOn=false,on,disabled=false,onChange,style}){
  const [local,setLocal]=React.useState(defaultOn);
  const isOn=on!==undefined?on:local;
  return (
    <label style={{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.5:1,...style}}>
      <button type="button" role="switch" aria-checked={isOn} disabled={disabled}
        onClick={()=>{const n=!isOn;setLocal(n);onChange&&onChange(n);}}
        style={{width:46,height:26,padding:3,borderRadius:'var(--radius-pill)',border:'1px solid '+(isOn?'var(--accent-strong)':'var(--border-default)'),
          background:isOn?'var(--accent-strong)':'var(--cream-300)',display:'flex',justifyContent:isOn?'flex-end':'flex-start',
          cursor:'inherit',transition:'var(--transition-base)'}}>
        <span style={{width:18,height:18,borderRadius:'var(--radius-pill)',background:'#fff',boxShadow:'var(--shadow-xs)',transition:'var(--transition-base)'}} />
      </button>
      {label&&<span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',color:'var(--text-strong)'}}>{label}</span>}
    </label>
  );
}
