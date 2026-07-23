(()=>{
  const p=id=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=720&h=470&fit=crop`;
  const photos={
    "espresso":p(302899),"macchiato":p(312418),"caramel-macchiato":p(2396220),"cortado":p(851555),"flat-white":p(977876),"cappuccino":p(28762018),"latte":p(893509),"pistachio-latte":p(4927150),"spanish-latte":p(6867),"caramel-latte":p(6207297),"vanilla-latte":p(585750),"white-mocha":p(374885),"dark-mocha":p(302896),"americano":p(312420),"hot-chocolate":p(239581),
    "turkish-coffee":p(11311471),"v60-colombian":p(29261561),"v60-ethiopian":p(29619139),"v60-indonesian":p(29619140),"luxury-crop":p(32391648),"coffee-day":p(302899),"red-tea":p(1417945),"green-tea":p(230477),"saudi-coffee":p(3026809),"saudi-dallah":p(723198),"ginger-herbal":p(1638280),"sahab":p(893509),
    "ice-americano":p(2615323),"ice-latte":p(2615323),"ice-spanish":p(312418),"ice-white-mocha":p(1193335),"ice-dark-mocha":p(1233319),"ice-caramel":p(1036444),"ice-shikin":p(2615323),"ice-signature-latte":p(6207297),
    "ice-chocolate":p(867935),"ice-matcha":p(5946973),"karkadeh":p(616836),"orange-juice":p(96974),"lemon-juice":p(1417945),"berry-mojito":p(544961),"passion-fruit":p(338713),"cored":p(544961),"nova-water":p(327090),
    "tuna-ciabatta":p(8765341),"halloumi-ciabatta":p(31965897),"turkey-ciabatta":p(17582424),"plain-croissant":p(3892469),"cheese-croissant":p(2135),"cookies":p(230325),"brownie-cookie":p(2067396),
    "french-toast":p(4725659),"lotus-cheesecake":p(1126359),"blueberry-cheesecake":p(1126359),"truffleberry":p(1099680),"travel-pecan":p(2067396),"travel-mango":p(1099680),"pudding":p(3026804)
  };
  const fallback={signature:p(893509),"hot-coffee":p(28762018),drip:p(29261561),traditional:p(11311471),iced:p(2615323),refreshing:p(544961),sandwiches:p(20219988),bakery:p(3892469),desserts:p(1126359)};
  window.SPIRIT_GARDEN_PHOTOS=new Proxy(photos,{get:(target,id)=>target[id]||fallback[id]||''});
})();