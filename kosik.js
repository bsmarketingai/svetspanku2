// Ukázkový obsah košíku pro prototyp. Ceny s DPH.
export const KOSIK = [
  { title: 'Manželská postel SANTE 45 dvoulůžko', variant: '200 × 180 cm · olej Teak · jádrový buk', qty: 1, unit: 39800, price: '39 800 Kč', href: '#produkt', img: '/_blob/6721a0d378d224249b73f0d946656a32', fit: 'cover' },
  { title: 'Matrace Spring Variant 22 cm', variant: '180 × 200 cm · tuhost H3', qty: 1, unit: 7590, price: '7 590 Kč', href: '#produkt', img: '/_blob/66ef2119f31d8262ba38ce4bea618a8e' },
  { title: 'Lamelový rošt Standard', variant: '180 × 200 cm · 28 lamel', qty: 1, unit: 2480, price: '2 480 Kč', href: '#produkt', img: '/_blob/7d9234acbe0f59bf374b86101ea80224' }
];

export const formatKc = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0') + '\u00A0Kč';

if (typeof window !== 'undefined') window.KOSIK = KOSIK;
