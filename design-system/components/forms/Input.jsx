import React from 'react';

export function Input({label,hint,error,type='text',size='md',prefix,disabled=false,id,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const uid=id||React.useMemo(()=>'in-'+Math.random().toString(36).slice(2,7),[]);
  const pad=size==='sm'?'9px 12px':'13px 16px';
  return (
    <label htmlFor={uid} style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',...style}}>
      {label&&<span style={{font:'var(--type-button)',color:'var(--text-strong)'}}>{label}</span>}
      <span style={{display:'flex',alignItems:'center',gap:'var(--space-2)',background:disabled?'var(--surface-sunken)':'var(--surface-card)',
        border:'1px solid '+(error?'var(--signal-stop)':focus?'var(--accent)':'var(--border-default)'),
        borderRadius:'var(--radius-sm)',padding:pad,transition:'var(--transition-base)',
        boxShadow:focus?'0 0 0 3px color-mix(in oklab,var(--accent) 22%,transparent)':'var(--shadow-inset)'}}>
        {prefix&&<span style={{color:'var(--text-faint)',display:'flex'}}>{prefix}</span>}
        <input id={uid} type={type} disabled={disabled} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} {...rest}
          style={{all:'unset',flex:1,minWidth:0,font:'var(--type-body)',fontSize:size==='sm'?'var(--fs-body-sm)':'var(--fs-body)',color:'var(--text-strong)'}} />
      </span>
      {(error||hint)&&<span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',color:error?'var(--signal-stop)':'var(--text-muted)'}}>{error||hint}</span>}
    </label>
  );
}
