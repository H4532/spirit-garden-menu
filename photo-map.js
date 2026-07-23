(()=>{
  const special={
    "ice-chocolate":"iced chocolate drink in a tall glass with chocolate drizzle",
    "ice-matcha":"iced matcha latte with green matcha over milk and ice cubes",
    "karkadeh":"cold hibiscus karkadeh drink, deep ruby red, mint and lime",
    "berry-mojito":"berry mojito with berries, mint, lime and crushed ice",
    "orange-juice":"fresh orange juice with orange slices and ice",
    "lemon-juice":"fresh lemonade with lemon slices, mint and ice",
    "passion-fruit":"passion fruit cooler with pulp, mint and ice",
    "saudi-coffee":"Saudi Arabic coffee cup with dallah and dates",
    "saudi-dallah":"golden Saudi coffee dallah with cups and dates",
    "turkish-coffee":"traditional Turkish coffee in ornate cup with cezve",
    "tuna-ciabatta":"tuna ciabatta sandwich with lettuce and tomato",
    "halloumi-ciabatta":"grilled halloumi ciabatta sandwich with vegetables",
    "turkey-ciabatta":"turkey ciabatta sandwich with cheese and greens",
    "plain-croissant":"golden butter croissant",
    "cheese-croissant":"cheese filled croissant cut open",
    "cookies":"premium chocolate chip cookies",
    "brownie-cookie":"rich brownie cookie with melted chocolate",
    "french-toast":"French toast with berries syrup and powdered sugar",
    "lotus-cheesecake":"Lotus Biscoff cheesecake slice with biscuit crumbs",
    "blueberry-cheesecake":"blueberry cheesecake slice with fresh blueberries",
    "truffleberry":"berry chocolate trifle dessert in glass",
    "travel-pecan":"pecan dessert tart with caramel",
    "travel-mango":"mango dessert cake with fresh mango",
    "pudding":"creamy pudding dessert in elegant glass",
    "nova-water":"premium chilled bottled water with condensation"
  };
  const humanize=id=>id.replace(/^ice-/,'iced-').replaceAll('-',' ');
  const url=id=>{
    const subject=special[id]||humanize(id);
    const prompt=`commercial cafe product photo of ${subject}, exact product, dark charcoal background, warm studio lighting, realistic, no people, no text, horizontal`;
    const seed=Array.from(id).reduce((a,c)=>a+c.charCodeAt(0),0);
    return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=640&height=420&model=flux&nologo=true&seed=${seed}`;
  };
  window.SPIRIT_GARDEN_PHOTOS=new Proxy({}, {get:(_,id)=>typeof id==='string'?url(id):undefined});
})();