import React from 'react';
import {Icon} from '../icon/Icon.jsx';

export function Tag({children,selected=false,onRemove,icon,style,...rest}){
  const [hover,setHover]=React.useState(false);
  return (
    <span {...rest} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:'inline-flex',alignItems:'center',gap:'var(--space-2)',padding:'7px 14px',borderRadius:'var(--radius-pill)',
        fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',cursor:rest.onClick?'pointer':'default',transition:'var(--transition-base)',
        background:selected?'var(--ink-900)':hover?'var(--cream-200)':'var(--surface-card)',
        color:selected?'var(--cream-100)':'var(--text-body)',
        border:'1px solid '+(selected?'var(--ink-900)':'var(--border-hairline)'),...style}}>
      {icon&&<Icon name={icon} size={14} />}
      {children}
      {onRemove&&<button onClick={e=>{e.stopPropagation();onRemove(e);}} aria-label="Quitar"
        style={{all:'unset',display:'flex',cursor:'pointer',opacity:.6}}><Icon name="x" size={12} /></button>}
    </span>
  );
}
