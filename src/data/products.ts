export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number;
  description: string;
  material: string;
  weight: string;
  purity: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  tags: string[];
}

const IMG = (seed: string) =>
  `https://images.unsplash.com/${seed}?w=600&h=600&fit=crop&auto=format&q=80`;

const images = {
  goldRing: IMG("photo-1605100804763-247f67b3557e"),
  diamondRing: IMG("photo-1603561591411-07134e71a2a9"),
  necklace: IMG("photo-1599643478518-a784e5dc4c8f"),
  pendant: IMG("photo-1611591437281-460bfbe1220a"),
  earring: IMG("photo-1535632066927-ab7c9ab60908"),
  bangle: IMG("photo-1573408301185-9146fe634ad0"),
  bracelet: IMG("photo-1611652022419-a9419f74343d"),
  chain: IMG("photo-1602751584552-8ba73aad10e1"),
  watch: IMG("photo-1524592094714-0f0654e20314"),
  anklet: IMG("photo-1600721391776-b5cd0e0048f1"),
  mangalsutra: IMG("photo-1610694955371-d4a3e0ce4b52"),
  nosering: IMG("photo-1596944924616-7b38e7cfac36"),
  brooch: IMG("photo-1611085583191-a3b181a88401"),
  tiara: IMG("photo-1578632292335-df3abbb0d586"),
  cufflink: IMG("photo-1590548784585-643d2b9f2925"),
  set: IMG("photo-1515562141589-67f0d5e24940"),
};

const cats = [
  { cat: "Rings", sub: "Gold Rings", mat: "22K Gold", pur: "916 Hallmark", img: images.goldRing, base: 25000 },
  { cat: "Rings", sub: "Diamond Rings", mat: "18K Gold + Diamond", pur: "750 Hallmark", img: images.diamondRing, base: 45000 },
  { cat: "Rings", sub: "Platinum Rings", mat: "Platinum 950", pur: "Pt950", img: images.diamondRing, base: 55000 },
  { cat: "Necklaces", sub: "Gold Necklaces", mat: "22K Gold", pur: "916 Hallmark", img: images.necklace, base: 75000 },
  { cat: "Necklaces", sub: "Diamond Necklaces", mat: "18K Gold + Diamond", pur: "750 Hallmark", img: images.necklace, base: 120000 },
  { cat: "Pendants", sub: "Gold Pendants", mat: "22K Gold", pur: "916 Hallmark", img: images.pendant, base: 15000 },
  { cat: "Pendants", sub: "Diamond Pendants", mat: "18K Gold + Diamond", pur: "750 Hallmark", img: images.pendant, base: 35000 },
  { cat: "Earrings", sub: "Studs", mat: "18K Gold + Diamond", pur: "750 Hallmark", img: images.earring, base: 20000 },
  { cat: "Earrings", sub: "Jhumkas", mat: "22K Gold", pur: "916 Hallmark", img: images.earring, base: 30000 },
  { cat: "Earrings", sub: "Chandbali", mat: "22K Gold", pur: "916 Hallmark", img: images.earring, base: 40000 },
  { cat: "Bangles", sub: "Gold Bangles", mat: "22K Gold", pur: "916 Hallmark", img: images.bangle, base: 50000 },
  { cat: "Bangles", sub: "Diamond Bangles", mat: "18K Gold + Diamond", pur: "750 Hallmark", img: images.bangle, base: 90000 },
  { cat: "Bracelets", sub: "Gold Bracelets", mat: "22K Gold", pur: "916 Hallmark", img: images.bracelet, base: 35000 },
  { cat: "Bracelets", sub: "Diamond Bracelets", mat: "18K Gold + Diamond", pur: "750 Hallmark", img: images.bracelet, base: 65000 },
  { cat: "Chains", sub: "Gold Chains", mat: "22K Gold", pur: "916 Hallmark", img: images.chain, base: 30000 },
  { cat: "Watches", sub: "Gold Watches", mat: "18K Gold", pur: "750 Hallmark", img: images.watch, base: 150000 },
  { cat: "Anklets", sub: "Gold Anklets", mat: "22K Gold", pur: "916 Hallmark", img: images.anklet, base: 18000 },
  { cat: "Mangalsutra", sub: "Traditional", mat: "22K Gold", pur: "916 Hallmark", img: images.mangalsutra, base: 45000 },
  { cat: "Mangalsutra", sub: "Modern", mat: "18K Gold + Diamond", pur: "750 Hallmark", img: images.mangalsutra, base: 60000 },
  { cat: "Nose Pins", sub: "Diamond Nose Pins", mat: "18K Gold + Diamond", pur: "750 Hallmark", img: images.nosering, base: 8000 },
  { cat: "Brooches", sub: "Gold Brooches", mat: "22K Gold", pur: "916 Hallmark", img: images.brooch, base: 22000 },
  { cat: "Hair Accessories", sub: "Tiaras", mat: "Silver + Zirconia", pur: "925 Silver", img: images.tiara, base: 12000 },
  { cat: "Cufflinks", sub: "Gold Cufflinks", mat: "18K Gold", pur: "750 Hallmark", img: images.cufflink, base: 28000 },
  { cat: "Sets", sub: "Bridal Sets", mat: "22K Gold + Kundan", pur: "916 Hallmark", img: images.set, base: 250000 },
  { cat: "Sets", sub: "Party Wear Sets", mat: "18K Gold + Diamond", pur: "750 Hallmark", img: images.set, base: 180000 },
];

const adjectives = [
  "Royal", "Empress", "Celestial", "Heritage", "Eternal", "Majestic", "Radiant", "Imperial",
  "Luxe", "Divine", "Opulent", "Regal", "Grand", "Classic", "Timeless", "Exquisite",
  "Vintage", "Modern", "Elegant", "Graceful", "Stunning", "Pristine", "Splendid", "Noble",
];

const names2 = [
  "Bloom", "Cascade", "Aurora", "Eclipse", "Whisper", "Crown", "Halo", "Sparkle",
  "Dream", "Bliss", "Charm", "Grace", "Pearl", "Dawn", "Star", "Luna",
  "Flora", "Aria", "Maya", "Diva", "Aura", "Luxe", "Eden", "Zara",
];

let id = 0;
export const products: Product[] = [];

cats.forEach((c, ci) => {
  const count = ci < 10 ? 8 : ci < 18 ? 6 : 4;
  for (let i = 0; i < count; i++) {
    id++;
    const adj = adjectives[(ci * 7 + i * 3) % adjectives.length];
    const n2 = names2[(ci * 5 + i * 4) % names2.length];
    const priceVar = Math.round(c.base * (0.7 + Math.random() * 0.8));
    const origPrice = Math.round(priceVar * (1.1 + Math.random() * 0.2));
    products.push({
      id,
      name: `${adj} ${n2} ${c.sub.split(" ").pop()}`,
      category: c.cat,
      subcategory: c.sub,
      price: priceVar,
      originalPrice: origPrice,
      description: `Exquisitely crafted ${c.sub.toLowerCase()} from the Anand Jewels collection. Made with ${c.mat}, this piece showcases masterful artistry and timeless elegance perfect for every occasion.`,
      material: c.mat,
      weight: `${(2 + Math.random() * 30).toFixed(1)}g`,
      purity: c.pur,
      image: c.img,
      rating: +(4 + Math.random()).toFixed(1),
      reviews: Math.floor(10 + Math.random() * 200),
      inStock: Math.random() > 0.1,
      isNew: i < 2,
      isBestseller: i === 0,
      tags: [c.cat, c.sub, c.mat.split("+")[0].trim()],
    });
  }
});

export const categories = [...new Set(products.map((p) => p.category))];
export const subcategories = [...new Set(products.map((p) => p.subcategory))];
