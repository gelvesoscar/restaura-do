import React from 'react';
import {Icon} from '../icon/Icon.jsx';

export function Select({label,hint,options=[],size='md',disabled=false,id,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const uid=id||React.useMemo(()=>'sel-'+Math.random().toString(36).slice(2,7),[]);
  return (
    <label htmlFor={uid} style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',...style}}>
      {label&&<span style={{font:'var(--type-button)',color:'var(--text-strong)'}}>{label}</span>}
      <span style={{position:'relative',display:'flex',alignItems:'center',background:disabled?'var(--surface-sunken)':'var(--surface-card)',
        border:'1px solid '+(focus?'var(--accent)':'var(--border-default)'),borderRadius:'var(--radius-sm)',
        padding:size==='sm'?'9px 12px':'13px 16px',transition:'var(--transition-base)'}}>
        <select id={uid} disabled={disabled} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} {...rest}
          style={{all:'unset',flex:1,cursor:'pointer',font:'var(--type-body)',fontSize:size==='sm'?'var(--fs-body-sm)':'var(--fs-body)',color:'var(--text-strong)'}}>
          {options.map(o=>{const v=typeof o==='string'?o:o.value,l=typeof o==='string'?o:o.label;return <option key={v} value={v}>{l}</option>;})}
        </select>
        <Icon name="chevron-down" size="sm" color="var(--text-muted)" />
      </span>
      {hint&&<span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',color:'var(--text-muted)'}}>{hint}</span>}
    </label>
  );
}
