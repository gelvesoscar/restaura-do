import React from 'react';
import {Icon} from '../icon/Icon.jsx';

const BOX={sm:32,md:40,lg:48};

export function IconButton({icon,label,variant='outline',size='md',disabled=false,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const box=BOX[size];
  const skin=variant==='solid'
    ?{background:hover?'var(--brand-strong)':'var(--brand)',color:'var(--text-on-brand)',border:'1px solid transparent'}
    :variant==='ghost'
      ?{background:hover?'var(--cream-200)':'transparent',color:'var(--text-body)',border:'1px solid transparent'}
      :{background:hover?'var(--cream-200)':'var(--surface-card)',color:'var(--text-strong)',border:'1px solid var(--border-hairline)'};
  return (
    <button aria-label={label} title={label} disabled={disabled} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} {...rest}
      style={{width:box,height:box,display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'var(--radius-pill)',
        cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.45:1,transition:'var(--transition-base)',...skin,...style}}>
      <Icon name={icon} size={size==='sm'?'sm':'md'} />
    </button>
  );
}
