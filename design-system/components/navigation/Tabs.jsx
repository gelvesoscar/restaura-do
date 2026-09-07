import React from 'react';

export function Tabs({items=[],value,defaultValue,onChange,variant='underline',style}){
  const [local,setLocal]=React.useState(defaultValue??(items[0]&&(items[0].value||items[0])));
  const active=value!==undefined?value:local;
  const pick=v=>{setLocal(v);onChange&&onChange(v);};
  const norm=items.map(i=>typeof i==='string'?{value:i,label:i}:i);
  const pill=variant==='pill';
  return (
    <div role="tablist" style={{display:'flex',gap:pill?'var(--space-1)':'var(--space-6)',alignItems:'center',
      background:pill?'var(--cream-200)':'transparent',padding:pill?'var(--space-1)':0,borderRadius:pill?'var(--radius-pill)':0,
      borderBottom:pill?'none':'1px solid var(--border-hairline)',...style}}>
      {norm.map(t=>{const on=t.value===active;return (
        <button key={t.value} role="tab" aria-selected={on} onClick={()=>pick(t.value)}
          style={{all:'unset',cursor:'pointer',font:'var(--type-button)',fontSize:'var(--fs-body-sm)',
            padding:pill?'8px 18px':'0 0 12px',borderRadius:pill?'var(--radius-pill)':0,
            color:on?(pill?'var(--ink-900)':'var(--text-strong)'):'var(--text-muted)',
            background:pill&&on?'var(--surface-card)':'transparent',
            boxShadow:pill&&on?'var(--shadow-xs)':'none',
            borderBottom:pill?'none':'2px solid '+(on?'var(--brand)':'transparent'),
            marginBottom:pill?0:-1,transition:'var(--transition-base)'}}>{t.label}</button>);})}
    </div>
  );
}
