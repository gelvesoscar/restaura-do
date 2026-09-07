import React from 'react';

const TONES={
  plain:{background:'var(--surface-card)',border:'1px solid var(--border-hairline)',color:'var(--text-body)'},
  tint:{background:'var(--brand-tint)',border:'1px solid var(--brand-soft)',color:'var(--text-body)'},
  pulpa:{background:'var(--accent-tint)',border:'1px solid var(--accent-soft)',color:'var(--text-body)'},
  inverse:{background:'var(--surface-inverse)',border:'1px solid var(--ink-700)',color:'var(--text-on-inverse)'},
};

export function Card({tone='plain',elevation='sm',padding='var(--space-6)',interactive=false,eyebrow,title,children,footer,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const shadow=elevation==='none'?'none':hover&&interactive?'var(--shadow-md)':'var(--shadow-'+elevation+')';
  return (
    <div {...rest} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{borderRadius:'var(--radius-lg)',padding,boxShadow:shadow,transition:'var(--transition-base)',
        transform:hover&&interactive?'translateY(-2px)':'none',cursor:interactive?'pointer':'default',
        display:'flex',flexDirection:'column',gap:'var(--space-3)',...TONES[tone],...style}}>
      {eyebrow&&<span className="eyebrow" style={{color:tone==='inverse'?'var(--cream-300)':'var(--text-muted)'}}>{eyebrow}</span>}
      {title&&<h4 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-subtitle)',lineHeight:'var(--lh-heading)',margin:0,
        color:tone==='inverse'?'var(--cream-50)':'var(--text-strong)'}}>{title}</h4>}
      {children}
      {footer&&<div style={{marginTop:'var(--space-2)',paddingTop:'var(--space-4)',borderTop:'1px solid '+(tone==='inverse'?'var(--ink-700)':'var(--border-hairline)')}}>{footer}</div>}
    </div>
  );
}
