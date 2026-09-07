import React from 'react';

const SIZES={sm:16,md:20,lg:24,xl:32};

export function Icon({name,size='md',color='currentColor',strokeWidth=1.75,style,...rest}){
  const px=typeof size==='number'?size:SIZES[size]||SIZES.md;
  const url=`https://unpkg.com/lucide-static@0.436.0/icons/${name}.svg`;
  return (
    <span aria-hidden="true" {...rest} style={{display:'inline-block',flex:'none',width:px,height:px,background:color,
      WebkitMask:`url("${url}") center / contain no-repeat`,mask:`url("${url}") center / contain no-repeat`,
      opacity:strokeWidth<1.75?0.85:1,...style}} />
  );
}
