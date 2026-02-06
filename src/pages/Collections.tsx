import { useState, useMemo } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal, X } from "lucide-react";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating", value: "rating" },
  { label: "Newest", value: "new" },
];

const Collections = () => {
  const [selectedCat, setSelectedCat] = useState<string>("All");
  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCat !== "All") list = list.filter((p) => p.category === selectedCat);
    if (search) list = list.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.subcategory.toLowerCase().includes(search.toLowerCase()));
    switch (sort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      case "new": list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
    }
    return list;
  }, [selectedCat, sort, search]);

  return (
    <main className="pt-28 md:pt-36 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-primary">Explore</span>
          <h1 className="text-3xl md:text-5xl font-display font-bold mt-2 text-foreground">All Collections</h1>
          <div className="w-16 h-px gradient-gold mx-auto mt-4" />
          <p className="text-muted-foreground font-body mt-3">{filtered.length} exquisite pieces</p>
        </div>

        {/* Search & Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search jewelry..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-3 bg-card border border-border font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <div className="flex gap-3">
            <button onClick={() => setShowFilters(!showFilters)} className="md:hidden px-4 py-3 border border-border text-muted-foreground font-sans text-sm flex items-center gap-2 hover:border-primary transition-colors">
              <SlidersHorizontal size={16} /> Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-3 bg-card border border-border font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
            >
              {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
        </div>

        {/* Category filters */}
        <div className={`flex flex-wrap gap-2 mb-8 ${showFilters ? "block" : "hidden md:flex"}`}>
          {["All", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCat(c)}
              className={`px-4 py-2 font-sans text-xs tracking-[0.15em] uppercase border transition-all ${
                selectedCat === c
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
          {selectedCat !== "All" && (
            <button onClick={() => setSelectedCat("All")} className="px-3 py-2 text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
              <X size={12} /> Clear
            </button>
          )}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-xl text-muted-foreground">No products found</p>
            <button onClick={() => { setSelectedCat("All"); setSearch(""); }} className="mt-4 text-primary font-sans text-sm underline">Clear filters</button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Collections;
