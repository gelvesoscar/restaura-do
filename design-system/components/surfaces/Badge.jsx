import React from 'react';

const TONES={
  brand:{background:'var(--brand-soft)',color:'var(--orange-700)'},
  pulpa:{background:'var(--accent-soft)',color:'var(--green-700)'},
  neutral:{background:'var(--cream-200)',color:'var(--text-muted)'},
  good:{background:'var(--accent-soft)',color:'var(--green-700)'},
  warn:{background:'#F7EBD2',color:'#8A5D10'},
  stop:{background:'#F6DED8',color:'#8C2F1C'},
  solid:{background:'var(--brand)',color:'var(--text-on-brand)'},
};

export function Badge({tone='brand',children,style,...rest}){
  return (
    <span {...rest} style={{display:'inline-flex',alignItems:'center',gap:'var(--space-1)',padding:'4px 10px',
      borderRadius:'var(--radius-pill)',fontFamily:'var(--font-body)',fontSize:'var(--fs-micro)',fontWeight:'var(--fw-medium)',
      letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',...TONES[tone],...style}}>{children}</span>
  );
}
