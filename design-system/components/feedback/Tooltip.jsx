import React from 'react';

export function Tooltip({label,placement='top',children,style}){
  const [show,setShow]=React.useState(false);
  const pos=placement==='bottom'
    ?{top:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'}
    :{bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'};
  return (
    <span style={{position:'relative',display:'inline-flex',...style}}
      onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} onFocus={()=>setShow(true)} onBlur={()=>setShow(false)}>
      {children}
      <span role="tooltip" style={{position:'absolute',...pos,pointerEvents:'none',whiteSpace:'nowrap',
        background:'var(--ink-900)',color:'var(--cream-100)',fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',
        padding:'6px 10px',borderRadius:'var(--radius-xs)',boxShadow:'var(--shadow-sm)',
        opacity:show?1:0,transition:'opacity var(--dur) var(--ease-out)',zIndex:20}}>{label}</span>
    </span>
  );
}
