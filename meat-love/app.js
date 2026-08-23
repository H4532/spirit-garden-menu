const menu = [
  {
    id:"hot", en:"Hot Starters", ar:"مقبلات ساخنة", kicker:"ENTRÉE CHAUDE",
    items:[
      {en:"Bourek", ar:"بوراك", price:"250 DA"},
      {en:"Coral Lentil Soup", ar:"شوربة عدس", price:"450 DA"},
      {en:"Mushroom Soup", ar:"شوربة الفطر", price:"700 DA"}
    ]
  },
  {
    id:"cold", en:"Cold Starters", ar:"مقبلات باردة", kicker:"ENTRÉE FROIDE",
    items:[
      {en:"Hmis", ar:"حميص", price:"450 DA"},
      {en:"Mtabal", ar:"متبل", price:"650 DA"},
      {en:"Hummus", ar:"حمص", price:"600 DA"},
      {en:"Fattoush", ar:"فتوش", price:"450 DA"},
      {en:"Coleslaw", ar:"كوسلو", price:"400 DA"},
      {en:"Caesar Salad", ar:"سلطة سيزار", price:"900 DA"}
    ]
  },
  {
    id:"smoked", en:"Smoked Meats", ar:"اللحوم المدخنة", kicker:"MEAT LOVE SIGNATURES",
    note:{
      en:"Every meat meal includes hot and cold sides for free: rice, salad, hummus, mtabal, eggplant, hmis and Meat Love sauces.",
      ar:"كل وجبة لحم تشمل المقبلات الساخنة والباردة مجاناً: أرز، سلطة، حمص، متبل، باذنجان، حميص وكل صوصات ميت لوف."
    },
    items:[
      {en:"Short Ribs", ar:"ضلع العجل", packs:[["Pack 2 persons","7000 DA"],["Pack 3 persons","8000 DA"],["Pack 4 persons","9000 DA"],["Pack 6 persons","12000 DA"]]},
      {en:"Brisket", ar:"بريسكت", packs:[["Pack 2 persons","7000 DA"],["Pack 3 persons","8000 DA"],["Pack 4 persons","9000 DA"],["Pack 6 persons","12000 DA"]]},
      {en:"Lamb Shoulder", ar:"كتف خروف", packs:[["Pack 2 persons","7000 DA"],["Pack 3 persons","8000 DA"],["Pack 4 persons","9000 DA"],["Pack 6 persons","12000 DA"]]},
      {en:"Lamb Shank", ar:"موزات خروف", packs:[["Pack 2 persons","7000 DA"],["Pack 3 persons","8000 DA"],["Pack 4 persons","9000 DA"],["Pack 6 persons","12000 DA"]]},
      {en:"Lamb Neck", ar:"رقبة خروف", packs:[["Pack 2 persons","7000 DA"],["Pack 3 persons","8000 DA"],["Pack 4 persons","9000 DA"],["Pack 6 persons","12000 DA"]]},
      {en:"Bouzellouf", ar:"بوزلوف", price:"4500 DA"}
    ]
  },
  {
    id:"burgers", en:"Burgers", ar:"برغر", kicker:"BURGERS",
    items:[
      {en:"Chicken Burger", ar:"برغر دجاج", price:"750 DA"},
      {en:"Classic Meat Burger", ar:"برغر لحم", price:"950 DA"},
      {en:"Smoked Brisket Burger", ar:"برغر بريسكت مدخن", price:"1350 DA"}
    ]
  },
  {
    id:"chicken", en:"Chicken & Pasta", ar:"الدجاج والباستا", kicker:"GRILL & PASTA",
    items:[
      {en:"Grilled Chicken Plate", ar:"طبق دجاج مشوي", price:"2100 DA", descEn:"Served with salad, potatoes and rice.", descAr:"شامل سلطة وبطاطا وأرز."},
      {en:"Smoked Chicken Plate", ar:"طبق دجاج مدخن", price:"3300 DA", descEn:"Served with salad, potatoes and rice.", descAr:"شامل سلطة وبطاطا وأرز."},
      {en:"Fettuccine Alfredo", ar:"فيتوتشيني ألفريدو", price:"1500 DA"}
    ]
  },
  {
    id:"rice", en:"Rice", ar:"الأرز", kicker:"SIDES",
    items:[
      {en:"White Rice", ar:"أرز أبيض", price:"350 DA"},
      {en:"Yellow Rice", ar:"أرز أصفر", price:"350 DA"}
    ]
  },
  {
    id:"dessert", en:"Desserts", ar:"تحلية", kicker:"DESSERT",
    items:[
      {en:"Crème Brûlée", ar:"كريم بروليه", price:"400 DA"},
      {en:"Tiramisu", ar:"تيراميسو", price:"600 DA"}
    ]
  },
  {
    id:"drinks", en:"Drinks", ar:"مشروبات", kicker:"BOISSON",
    items:[
      {en:"Coca-Cola", ar:"كوكا كولا", price:"150 DA"},
      {en:"Pepsi", ar:"بيبسي", price:"150 DA"},
      {en:"7UP", ar:"سفن أب", price:"150 DA"},
      {en:"Water", ar:"ماء", price:"Free", priceAr:"مجانا"},
      {en:"Coffee", ar:"قهوة", price:"350 DA"}
    ]
  }
];

let lang="en", filter="all", search="";
const root=document.getElementById("menuRoot");
const nav=document.getElementById("categoryNav");
const searchInput=document.getElementById("searchInput");
const empty=document.getElementById("emptyState");

function t(el){ return lang==="ar" ? el.ar : el.en; }
function translateStatic(){
  document.body.classList.toggle("ar",lang==="ar");
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-en]").forEach(el=>el.textContent=el.dataset[lang]);
  document.getElementById("langBtn").textContent=lang==="en"?"العربية":"English";
  searchInput.placeholder=lang==="en"?"Search the menu…":"ابحث في القائمة…";
}
function renderNav(){
  nav.innerHTML="";
  [{id:"all",en:"All",ar:"الكل"},...menu].forEach(c=>{
    const b=document.createElement("button");
    b.className="cat-btn"+(filter===c.id?" active":"");
    b.textContent=lang==="ar"?c.ar:c.en;
    b.onclick=()=>{filter=c.id;render(); if(c.id!=="all") document.getElementById(c.id)?.scrollIntoView({behavior:"smooth",block:"start"});}
    nav.appendChild(b);
  });
}
function matches(item){
  const q=search.trim().toLowerCase();
  if(!q) return true;
  return [item.en,item.ar,item.descEn,item.descAr].filter(Boolean).join(" ").toLowerCase().includes(q);
}
function itemCard(item){
  const card=document.createElement("article"); card.className="item";
  const price=lang==="ar" && item.priceAr ? item.priceAr : item.price;
  card.innerHTML=`<div class="item-top"><div><h3 class="item-name">${lang==="ar"?item.ar:item.en}</h3><span class="item-ar">${lang==="ar"?item.en:item.ar}</span></div>${price?`<div class="price">${price}</div>`:""}</div>`;
  const desc=lang==="ar"?item.descAr:item.descEn;
  if(desc){const p=document.createElement("p");p.className="item-desc";p.textContent=desc;card.appendChild(p)}
  if(item.packs){
    const pack=document.createElement("div");pack.className="pack-list";
    item.packs.forEach(([name,price])=>{let a=document.createElement("span");a.textContent=lang==="ar"?name.replace("Pack","باك").replace("persons","أشخاص"):name;let b=document.createElement("span");b.textContent=price;pack.append(a,b)});
    card.appendChild(pack);
  }
  return card;
}
function render(){
  translateStatic(); renderNav(); root.innerHTML=""; let shown=0;
  menu.forEach(section=>{
    if(filter!=="all" && filter!==section.id) return;
    const items=section.items.filter(matches); if(!items.length) return; shown+=items.length;
    const sec=document.createElement("section");sec.className="section";sec.id=section.id;
    const head=document.createElement("div");head.className="section-head";
    head.innerHTML=`<div><div class="section-kicker">${section.kicker}</div><h2>${t(section)}</h2></div><div class="section-count">${items.length} ${lang==="ar"?"اختيارات":"items"}</div>`;
    sec.appendChild(head);
    if(section.note){const n=document.createElement("div");n.className="note";n.textContent=lang==="ar"?section.note.ar:section.note.en;sec.appendChild(n)}
    const grid=document.createElement("div");grid.className="grid";items.forEach(i=>grid.appendChild(itemCard(i)));sec.appendChild(grid);root.appendChild(sec);
  });
  empty.hidden=shown>0;
}
document.getElementById("langBtn").onclick=()=>{lang=lang==="en"?"ar":"en";render()};
document.getElementById("shareBtn").onclick=async()=>{
  const data={title:"Meat Love Menu",text:"Meat Love digital menu",url:location.href};
  try{if(navigator.share) await navigator.share(data); else {await navigator.clipboard.writeText(location.href); alert(lang==="ar"?"تم نسخ الرابط":"Link copied");}}catch(e){}
};
searchInput.addEventListener("input",e=>{search=e.target.value;render()});
render();
