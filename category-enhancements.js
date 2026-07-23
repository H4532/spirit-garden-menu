(()=>{
  const VERSION='spiritGardenCategoriesV2';
  if(localStorage.getItem(VERSION)!=='1'){
    localStorage.removeItem('spiritGardenMenuV1');
    localStorage.setItem(VERSION,'1');
  }
  const nav=document.getElementById('sectionChips');
  if(!nav)return;
  const decorate=()=>{
    nav.querySelectorAll('.chip').forEach(button=>{
      const id=button.dataset.id;
      if(!id||id==='all'||button.querySelector('.chip-photo'))return;
      const url=window.SPIRIT_GARDEN_PHOTOS?.[id];
      if(!url)return;
      const img=document.createElement('img');
      img.className='chip-photo';
      img.src=url;
      img.alt='';
      img.loading='lazy';
      img.decoding='async';
      img.onerror=()=>img.remove();
      const icon=button.querySelector('span');
      if(icon)icon.replaceWith(img); else button.prepend(img);
    });
  };
  new MutationObserver(decorate).observe(nav,{childList:true,subtree:true});
  decorate();
})();