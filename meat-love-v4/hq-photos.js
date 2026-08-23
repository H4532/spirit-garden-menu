// V4.2 — unique high-resolution web photos. Each lock returns a stable, distinct image.
const HQ_PHOTOS={
  'bourek':'https://loremflickr.com/1200/900/borek,pastry,food?lock=401',
  'lentil-soup':'https://loremflickr.com/1200/900/lentil,soup,food?lock=402',
  'mushroom-soup':'https://loremflickr.com/1200/900/mushroom,soup,food?lock=403',
  'hmis':'https://loremflickr.com/1200/900/pepper,tomato,salad?lock=404',
  'mtabal':'https://loremflickr.com/1200/900/eggplant,dip,food?lock=405',
  'hummus':'https://loremflickr.com/1200/900/hummus,food?lock=406',
  'fattoush':'https://loremflickr.com/1200/900/fattoush,salad?lock=407',
  'coleslaw':'https://loremflickr.com/1200/900/coleslaw,salad?lock=408',
  'caesar-salad':'https://loremflickr.com/1200/900/caesar,salad?lock=409',
  'short-ribs':'https://loremflickr.com/1200/900/beef,short,ribs,bbq?lock=410',
  'brisket':'https://loremflickr.com/1200/900/brisket,smoked,bbq?lock=411',
  'lamb-shoulder':'https://loremflickr.com/1200/900/lamb,shoulder,roast?lock=412',
  'lamb-shank':'https://loremflickr.com/1200/900/lamb,shank,food?lock=413',
  'lamb-neck':'https://loremflickr.com/1200/900/lamb,roast,meat?lock=414',
  'bouzellouf':'https://loremflickr.com/1200/900/roasted,lamb,meat?lock=415',
  'chicken-burger':'https://loremflickr.com/1200/900/chicken,burger?lock=416',
  'classic-burger':'https://loremflickr.com/1200/900/beef,burger?lock=417',
  'brisket-burger':'https://loremflickr.com/1200/900/brisket,burger?lock=418',
  'grilled-chicken':'https://loremflickr.com/1200/900/grilled,chicken,plate?lock=419',
  'smoked-chicken':'https://loremflickr.com/1200/900/roast,chicken,smoked?lock=420',
  'fettuccine':'https://loremflickr.com/1200/900/fettuccine,alfredo,pasta?lock=421',
  'white-rice':'https://loremflickr.com/1200/900/white,rice,bowl?lock=422',
  'yellow-rice':'https://loremflickr.com/1200/900/yellow,rice,food?lock=423',
  'creme-brulee':'https://loremflickr.com/1200/900/creme,brulee,dessert?lock=424',
  'tiramisu':'https://loremflickr.com/1200/900/tiramisu,dessert?lock=425',
  'drinks':'https://loremflickr.com/1200/900/soft,drinks,coffee?lock=426'
};
function applyHQPhotos(){
  for(const [key,url] of Object.entries(HQ_PHOTOS)){
    document.querySelectorAll('.photo-'+key).forEach(el=>{
      el.style.backgroundImage=`url("${url}")`;
      el.style.backgroundSize='cover';
      el.style.backgroundPosition='center';
      el.style.backgroundRepeat='no-repeat';
    });
  }
  const sig=document.querySelector('.signature-photo');
  if(sig){sig.style.backgroundImage=`url("${HQ_PHOTOS.brisket}")`;sig.style.backgroundSize='cover';sig.style.backgroundPosition='center';}
}
const observer=new MutationObserver(()=>requestAnimationFrame(applyHQPhotos));
observer.observe(document.documentElement,{subtree:true,childList:true});
window.addEventListener('load',applyHQPhotos);
setTimeout(applyHQPhotos,100);
