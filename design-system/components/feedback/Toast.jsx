import React from 'react';
import {Icon} from '../icon/Icon.jsx';

const TONES={
  good:{icon:'check',accent:'var(--accent-strong)'},
  info:{icon:'info',accent:'var(--signal-info)'},
  warn:{icon:'triangle-alert',accent:'var(--signal-warn)'},
  stop:{icon:'circle-alert',accent:'var(--signal-stop)'},
};

export function Toast({tone='good',title,message,onClose,style}){
  const t=TONES[tone];
  return (
    <div role="status" style={{display:'flex',alignItems:'flex-start',gap:'var(--space-3)',padding:'var(--space-4) var(--space-5)',
      background:'var(--surface-card)',border:'1px solid var(--border-hairline)',borderRadius:'var(--radius-md)',
      boxShadow:'var(--shadow-md)',minWidth:280,maxWidth:420,...style}}>
      <span style={{width:26,height:26,flex:'none',display:'grid',placeItems:'center',borderRadius:'var(--radius-pill)',
        background:'color-mix(in oklab,'+t.accent+' 16%,transparent)'}}>
        <Icon name={t.icon} size={15} color={t.accent} />
      </span>
      <div style={{display:'flex',flexDirection:'column',gap:2,flex:1}}>
        {title&&<span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',fontWeight:'var(--fw-medium)',color:'var(--text-strong)'}}>{title}</span>}
        {message&&<span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',color:'var(--text-muted)',lineHeight:'var(--lh-body)'}}>{message}</span>}
      </div>
      {onClose&&<button onClick={onClose} aria-label="Cerrar" style={{all:'unset',cursor:'pointer',opacity:.5,display:'flex'}}><Icon name="x" size={14} /></button>}
    </div>
  );
}
