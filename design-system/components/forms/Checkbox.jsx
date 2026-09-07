import React from 'react';
import {Icon} from '../icon/Icon.jsx';

export function Checkbox({label,description,checked,defaultChecked=false,disabled=false,onChange,style}){
  const [on,setOn]=React.useState(defaultChecked);
  const isOn=checked!==undefined?checked:on;
  return (
    <label style={{display:'flex',gap:'var(--space-3)',alignItems:'flex-start',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.5:1,...style}}>
      <input type="checkbox" checked={isOn} disabled={disabled}
        onChange={e=>{setOn(e.target.checked);onChange&&onChange(e);}} style={{position:'absolute',opacity:0,width:0,height:0}} />
      <span style={{width:22,height:22,flex:'none',display:'grid',placeItems:'center',marginTop:1,
        borderRadius:'var(--radius-xs)',background:isOn?'var(--accent-strong)':'var(--surface-card)',
        border:'1px solid '+(isOn?'var(--accent-strong)':'var(--border-default)'),transition:'var(--transition-base)'}}>
        {isOn&&<Icon name="check" size={14} color="#fff" />}
      </span>
      <span style={{display:'flex',flexDirection:'column',gap:2}}>
        <span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',color:'var(--text-strong)'}}>{label}</span>
        {description&&<span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',color:'var(--text-muted)'}}>{description}</span>}
      </span>
    </label>
  );
}
