import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CategoryPage = () => {
  const { name } = useParams<{ name: string }>();
  const filtered = products.filter((p) => p.category === name);

  return (
    <main className="pt-28 md:pt-36 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-primary">Collection</span>
          <h1 className="text-3xl md:text-5xl font-display font-bold mt-2 text-foreground">{name}</h1>
          <div className="w-16 h-px gradient-gold mx-auto mt-4" />
          <p className="text-muted-foreground font-body mt-3">{filtered.length} pieces</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
        {filtered.length === 0 && (
          <p className="text-center py-20 font-display text-xl text-muted-foreground">No products found in this category</p>
        )}
      </div>
    </main>
  );
};

export default CategoryPage;
