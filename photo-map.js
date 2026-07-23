(()=>{
  const p=id=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=720&h=470&fit=crop`;
  const photos={
    "espresso":p(302899),"macchiato":p(685529),"caramel-macchiato":p(685529),"cortado":p(251336),"flat-white":p(15483143),"cappuccino":p(251336),"latte":p(13735969),"pistachio-latte":p(13735969),"spanish-latte":p(8983399),"caramel-latte":p(685529),"vanilla-latte":p(13735969),"white-mocha":p(14127710),"dark-mocha":p(14704654),"americano":p(302899),"hot-chocolate":p(14704654),
    "turkish-coffee":p(11285998),"v60-colombian":p(29261561),"v60-ethiopian":p(29619148),"v60-indonesian":p(30349813),"luxury-crop":p(36893720),"coffee-day":p(10324698),"red-tea":p(18502900),"green-tea":p(230477),"saudi-coffee":p(30146018),"saudi-dallah":p(34471733),"ginger-herbal":p(1638280),"sahab":p(13954605),
    "ice-americano":p(34932738),"ice-latte":p(36754724),"ice-spanish":p(36754724),"ice-white-mocha":p(30822878),"ice-dark-mocha":p(11277040),"ice-caramel":p(36754724),"ice-shikin":p(36754724),"ice-signature-latte":p(36754724),
    "ice-chocolate":p(11277040),"ice-matcha":p(36985977),"karkadeh":p(34481086),"orange-juice":p(96974),"lemon-juice":p(32713606),"berry-mojito":p(11009207),"passion-fruit":p(11009207),"cored":p(32713606),"nova-water":p(327090),
    "tuna-ciabatta":p(30910207),"halloumi-ciabatta":p(20219988),"turkey-ciabatta":p(20219988),"plain-croissant":p(30573107),"cheese-croissant":p(33669421),"cookies":p(230325),"brownie-cookie":p(2067396),
    "french-toast":p(4725659),"lotus-cheesecake":p(16496285),"blueberry-cheesecake":p(17671660),"truffleberry":p(17671660),"travel-pecan":p(2067396),"travel-mango":p(32539798),"pudding":p(3026804)
  };
  const fallback={signature:p(13735969),"hot-coffee":p(251336),drip:p(29261561),traditional:p(34471733),iced:p(34932738),refreshing:p(11009207),sandwiches:p(20219988),bakery:p(30573107),desserts:p(16496285)};
  window.SPIRIT_GARDEN_PHOTOS=new Proxy(photos,{get:(target,id)=>target[id]||fallback[id]||''});
})();