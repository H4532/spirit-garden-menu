(()=>{
  const p=id=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=720&h=470&fit=crop`;
  const photos={
    "espresso":p(12821515),"macchiato":p(20066340),"caramel-macchiato":p(26951872),"cortado":p(7593823),"flat-white":p(11388725),"cappuccino":p(28762018),"latte":p(28098571),"pistachio-latte":p(13954605),"spanish-latte":p(8983399),"caramel-latte":p(26951872),"vanilla-latte":p(11388725),"white-mocha":p(14127710),"dark-mocha":p(14704654),"americano":p(302899),"hot-chocolate":p(14704654),
    "turkish-coffee":p(11285998),"colombian-v60":p(29261561),"ethiopian-v60":p(29619148),"indonesian-v60":p(30349813),"luxury-crop":p(36893720),"coffee-of-the-day":p(10324698),"red-tea":p(18502900),"green-tea":p(230477),"saudi-coffee":p(30146018),"saudi-dallah":p(34471733),"ginger-and-herbal-tea":p(1638280),"sahab":p(13954605),
    "ice-americano":p(34932738),"ice-latte":p(37033512),"ice-spanish-latte":p(36754724),"ice-white-mocha":p(30822878),"ice-dark-mocha":p(11277040),"ice-caramel-latte":p(36754724),"ice-shikin":p(28883697),"ice-signature-latte":p(30494513),"ice-signature":p(32499820),"ice-chocolate":p(11277040),"ice-matcha":p(32499820),
    "kartikadiah":p(34481086),"orange-juice":p(96974),"lemon-juice":p(32713606),"berry-mojito":p(28883697),"passion-fruit":p(11009207),"codred":p(32713606),"nova-water":p(327090),
    "shabata-tuna":p(30910207),"shabata-haloumi":p(20219988),"shabata-turkey":p(20219988),"white-cheese-croissant-plain":p(4828337),"white-cheese-croissant":p(4109459),"cookies":p(230325),"cookies-brownie":p(2067396),"french-toast":p(33428758),"lotus-cheesecake":p(16496285),"blueberry-cheesecake":p(17671660),"truffleberry":p(17671660),"travel-pecan":p(2067396),"travel-mango":p(32539798),"pudding":p(3026804),
    "signature":p(30494513),"hot-coffee":p(28762018),"drip":p(29261561),"traditional":p(34471733),"iced":p(37033512),"refreshing":p(28883697),"sandwiches":p(20219988),"bakery":p(4828337),"desserts":p(16496285)
  };
  window.SPIRIT_GARDEN_PHOTOS=new Proxy(photos,{get:(target,id)=>target[id]||''});
})();