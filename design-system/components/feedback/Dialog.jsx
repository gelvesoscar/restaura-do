import React from 'react';
import {IconButton} from '../actions/IconButton.jsx';

export function Dialog({open=true,title,description,children,footer,onClose,width=480,style}){
  if(!open) return null;
  return (
    <div style={{position:'absolute',inset:0,display:'grid',placeItems:'center',padding:'var(--space-6)',
      background:'rgba(31,43,26,.38)',backdropFilter:'var(--blur-veil)',WebkitBackdropFilter:'var(--blur-veil)',zIndex:50}}>
      <div role="dialog" aria-modal="true" style={{width:'100%',maxWidth:width,background:'var(--surface-card)',
        borderRadius:'var(--radius-xl)',boxShadow:'var(--shadow-lg)',border:'1px solid var(--border-hairline)',
        padding:'var(--space-8)',display:'flex',flexDirection:'column',gap:'var(--space-4)',
        animation:'none',...style}}>
        <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:'var(--space-4)'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
            {title&&<h3 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-title)',margin:0,color:'var(--text-strong)',lineHeight:'var(--lh-heading)'}}>{title}</h3>}
            {description&&<p style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',color:'var(--text-muted)',lineHeight:'var(--lh-body)'}}>{description}</p>}
          </div>
          {onClose&&<IconButton icon="x" label="Cerrar" variant="ghost" size="sm" onClick={onClose} />}
        </div>
        {children}
        {footer&&<div style={{display:'flex',gap:'var(--space-3)',justifyContent:'flex-end',marginTop:'var(--space-2)'}}>{footer}</div>}
      </div>
    </div>
  );
}
