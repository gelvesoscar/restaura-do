import React from 'react';

export function Radio({label,description,name,value,checked,disabled=false,onChange,style}){
  return (
    <label style={{display:'flex',gap:'var(--space-3)',alignItems:'flex-start',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.5:1,...style}}>
      <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={onChange}
        style={{position:'absolute',opacity:0,width:0,height:0}} />
      <span style={{width:22,height:22,flex:'none',display:'grid',placeItems:'center',marginTop:1,borderRadius:'var(--radius-pill)',
        background:'var(--surface-card)',border:'1px solid '+(checked?'var(--accent-strong)':'var(--border-default)'),transition:'var(--transition-base)'}}>
        <span style={{width:10,height:10,borderRadius:'var(--radius-pill)',background:checked?'var(--accent-strong)':'transparent',transition:'var(--transition-base)'}} />
      </span>
      <span style={{display:'flex',flexDirection:'column',gap:2}}>
        <span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',color:'var(--text-strong)'}}>{label}</span>
        {description&&<span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',color:'var(--text-muted)'}}>{description}</span>}
      </span>
    </label>
  );
}
