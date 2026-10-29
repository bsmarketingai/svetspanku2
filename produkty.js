// Ukázková data produktů a kategorií pro prototyp. Fotky jsou zástupné z dodaných podkladů.
export const PRODUKTY = [
  { id: 'p1', image: '_blob/66ef2119f31d8262ba38ce4bea618a8e.webp', title: 'Matrace Spring Variant 22 cm', href: 'Detail_Matrace_3.0.dc.html', orderNo: '428170',
    perex: 'Partnerská matrace s tuhostí volitelnou pro každou polovinu samostatně. Už žádná mezera uprostřed.',
    rating: 4.8, ratingCount: 18, price: '7 590 Kč', priceBefore: '9 590 Kč', badge: 'sale', badgeLabel: 'Akce −25 %',
    secondBadge: 'news', secondBadgeLabel: 'Novinka', stock: 'inStock', moreLabel: 'Více rozměrů / stupňů tuhosti',
    mp: { tuhostPct: 70, zatizeniOd: 70, zatizeniDo: 120, nosnostMax: 130, vyska: 28, vyskaJadra: 24, zaruka: 8, spankNaBoku: true },
    tuhost: 4.5, params: [{ icon: 'weight', label: '200 kg' }, { icon: 'arrow-autofit-height', label: '20 cm' }, { icon: 'color-swatch', label: 'Pěnová' }] },
  { id: 'p2', image: '_blob/4d39f39f3e59f9479b2f3fa0c249def9.webp', title: 'Taštičková matrace Leda Duo', href: 'Detail_Matrace_3.0.dc.html', orderNo: '428204',
    perex: 'Sedm zón tuhosti a kokosová deska. Pohyb jednoho spícího druhého neruší.',
    rating: 4.8, ratingCount: 64, price: '9 190 Kč', stock: 'inStock', moreLabel: 'Více rozměrů / stupňů tuhosti',
    mp: { tuhostPct: 40, zatizeniOd: 40, zatizeniDo: 80, nosnostMax: 95, vyska: 18, vyskaJadra: 16, zaruka: 3, spankNaBoku: false },
    tuhost: 3, params: [{ icon: 'weight', label: '130 kg' }, { icon: 'arrow-autofit-height', label: '20 cm' }, { icon: 'color-swatch', label: 'Taštičková' }] },
  { id: 'p3', image: '_blob/c2606f1b288878aa84129b4a0e05ba7e.webp', title: 'Antidekubitní matrace Ultra Fresh', href: 'Detail_Matrace_3.0.dc.html', orderNo: '428311',
    perex: 'Líná pěna s prodyšným potahem pro dlouhé ležení. Vhodná i pro polohovací rošty.',
    rating: 4.3, ratingCount: 21, price: '11 290 Kč', stock: 'lowStock', moreLabel: 'Více rozměrů / stupňů tuhosti',
    mp: { tuhostPct: 70, zatizeniOd: 60, zatizeniDo: 110, nosnostMax: 130, vyska: 26, vyskaJadra: 24, zaruka: 5, spankNaBoku: false },
    tuhost: 3, params: [{ icon: 'weight', label: '120 kg' }, { icon: 'arrow-autofit-height', label: '18 cm' }] },
  { id: 'p4', image: '_blob/6b546453dfb90e0ec7ddb488eed7e6ec.webp', lifestyle: true, title: 'Postel z masivu LEVITA', href: 'Detail_Postel_3.0.dc.html', orderNo: '419820',
    perex: 'Smrkový masiv s úložným prostorem po celé ploše lože a plynovými písty.',
    rating: 4.9, ratingCount: 43, price: '21 390 Kč', badge: 'news', stock: 'inStock', moreLabel: 'Více rozměrů / odstínů',
    params: [{ icon: 'dimensions', label: '180 × 200 cm' }, { icon: 'tree', label: 'Smrk, bílá' }, { icon: 'package', label: 'Úložný prostor' }] },
  { id: 'p5', image: '_blob/7d9234acbe0f59bf374b86101ea80224.webp', title: 'Lamelový rošt Flex 28', href: 'Detail_Postel_3.0.dc.html', orderNo: '431004',
    perex: 'Osmadvacet pružných lamel s pojezdem tuhosti v oblasti beder.',
    rating: 4.4, ratingCount: 37, price: '3 290 Kč', stock: 'inStock', moreLabel: 'Více rozměrů',
    params: [{ icon: 'dimensions', label: '160 × 200 cm' }, { icon: 'lamely', label: '28 lamel' }] },
  { id: 'p6', image: '_blob/bec57053bba98acc27cb6181af2ecaf2.webp', title: 'Komplet postel Nora + rošt + matrace', href: 'Detail_Postel_3.0.dc.html', orderNo: '435110',
    perex: 'Sestava připravená k okamžitému spaní. Rošt i matrace sedí na rozměr postele.',
    rating: 4.7, ratingCount: 18, price: '28 900 Kč', priceBefore: '34 700 Kč', badge: 'sale', badgeLabel: 'Akce −17 %',
    stock: 'onWay', moreLabel: 'Více rozměrů / variant matrace',
    params: [{ icon: 'dimensions', label: '160 × 200 cm' }, { icon: 'coins', label: 'Ušetříte 5 800 Kč' }] },
  { id: 'p7', image: '_blob/70bc87f80d300e8a2f6bda4666194268.webp', title: 'Anatomický polštář Comfort Memory', href: 'Detail_Postel_3.0.dc.html', orderNo: '440021',
    perex: 'Paměťová pěna, která kopíruje krční páteř a nedeformuje se.',
    rating: 4.2, ratingCount: 96, price: '1 290 Kč', stock: 'inStock',
    params: [{ icon: 'dimensions', label: '70 × 50 cm' }, { icon: 'color-swatch', label: 'Paměťová pěna' }] },
  { id: 'p8', image: '_blob/8558634d093ec652305ccdb81196c238.webp', title: 'Noční stolek z masivu Nora', href: 'Detail_Postel_3.0.dc.html', orderNo: '419944',
    perex: 'Dubový masiv se zásuvkou na tichém výsuvu. Ladí s postelí Nora.',
    rating: 4.5, ratingCount: 12, price: '4 690 Kč', stock: 'outOfStock', moreLabel: 'Více odstínů',
    params: [{ icon: 'tree', label: 'Dub' }, { icon: 'dimensions', label: '45 × 40 cm' }] },
  { id: 'p9', image: '_blob/4a0a7adf8f13ddf960536da06df0e197.webp', title: 'Sendvičová matrace Duo Comfort', href: 'Detail_Matrace_3.0.dc.html', orderNo: '428590',
    perex: 'Dvě tuhosti v jedné matraci — stačí ji otočit podle ročního období.',
    rating: 4.1, ratingCount: 54, price: '6 190 Kč', stock: 'inStock', moreLabel: 'Více rozměrů / stupňů tuhosti',
    mp: { tuhostPct: 70, zatizeniOd: 60, zatizeniDo: 110, nosnostMax: 120, vyska: 20, vyskaJadra: 18, zaruka: 5, spankNaBoku: true },
    tuhost: 3.5, params: [{ icon: 'arrows-exchange', label: 'Oboustranná' }, { icon: 'weight', label: '110 kg' }, { icon: 'arrow-autofit-height', label: '18 cm' }] },
  { id: 'p10', image: '_blob/83b97877b4eeaa401d7d46a9fa01dd17.webp', title: 'Postel z masivu Sara s čalouněným čelem', href: 'Detail_Postel_3.0.dc.html', orderNo: '419877',
    perex: 'Masivní rám s čalouněným čelem v pratelném lněném potahu.',
    rating: 4.6, ratingCount: 29, price: '18 490 Kč', stock: 'inStock', moreLabel: 'Více rozměrů / potahů',
    params: [{ icon: 'dimensions', label: '160 × 200 cm' }, { icon: 'palette', label: 'Len šedý' }] }
];

export const KATEGORIE = [
  { label: 'Manželské postele z masivu', href: 'Kategorie_Postele.dc.html#s=1', count: 42, image: '_blob/cead5c69b22e38051d5480ee3e14c348.webp', sub: ['180 × 200', 'S úložným prostorem'] },
  { label: 'Jednolůžka z masivu', href: 'Kategorie_Postele.dc.html#s=10', count: 24, image: '_blob/cbd39695e60222550587109c72c8c52b.webp', sub: ['90 × 200', 'Dětské', 'Buk'] },
  { label: 'Čalouněné postele', href: 'Kategorie_Postele.dc.html#s=2', count: 31, image: '_blob/83b97877b4eeaa401d7d46a9fa01dd17.webp', sub: ['S roštem', 'Boxspring'] },
  { label: 'Matrace', href: 'Kategorie_Matrace.dc.html', count: 112, image: '_blob/c5a374fbd36fa4495aacd11898012a93.webp', zoom: true, sub: ['Taštičkové', 'Pěnové', 'Latexové'] },
  { label: 'Rošty', href: 'Kategorie_Rosty.dc.html', count: 54, image: '_blob/e58c131539e8ad6860c8e14b3cb0959a.webp', zoom: true, sub: ['Lamelové', 'Polohovací'] },
  { label: 'Nábytek z masivu', href: 'Kategorie_Nabytek.dc.html', count: 73, image: '_blob/62799eee782850a7f388b83455378566.webp', sub: ['Noční stolky', 'Komody'] }
];

export const FACETY = [
  { id: 'dostupnost', title: 'Dostupnost', options: [
    { id: 'skladem', label: 'Skladem', count: 128 }, { id: 'na-ceste', label: 'Na cestě k nám', count: 14 },
    { id: 'na-miru', label: 'Výroba na míru', count: 32 } ] },
  { id: 'rozmer', title: 'Rozměr', options: [
    { id: '90x200', label: '90 × 200 cm', count: 41 }, { id: '140x200', label: '140 × 200 cm', count: 38 },
    { id: '160x200', label: '160 × 200 cm', count: 62 }, { id: '180x200', label: '180 × 200 cm', count: 57 },
    { id: '200x200', label: '200 × 200 cm', count: 12 } ] },
  { id: 'tuhost', title: 'Tuhost', options: [
    { id: 'h1', label: 'Měkká H1', count: 14 }, { id: 'h2', label: 'Středně tuhá H2', count: 44 },
    { id: 'h3', label: 'Tuhá H3', count: 39 }, { id: 'h4', label: 'Velmi tuhá H4', count: 15 } ] },
  { id: 'konstrukce', title: 'Konstrukce', options: [
    { id: 'penova', label: 'Pěnová', count: 38 }, { id: 'tastickova', label: 'Taštičková', count: 31 },
    { id: 'latexova', label: 'Latexová', count: 18 }, { id: 'sendvicova', label: 'Sendvičová', count: 15 } ] },
  { id: 'material', title: 'Materiál', options: [
    { id: 'smrk', label: 'Smrk', count: 28 }, { id: 'borovice', label: 'Borovice', count: 16 },
    { id: 'buk', label: 'Buk', count: 14 }, { id: 'dub', label: 'Dub', count: 11 } ] }
];

if (typeof window !== 'undefined') { window.PRODUKTY = PRODUKTY; window.KATEGORIE = KATEGORIE; window.FACETY = FACETY; }
