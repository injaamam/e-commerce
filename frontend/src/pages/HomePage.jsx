import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import { PlusCircleIcon, RefreshCcwIcon } from "lucide-react";

import ProductCard from "../components/ProductCard.jsx";

function HomePage() {
  const { products, fetchProducts, loading, error } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <main className="container mx-auto px-4 py-8 ">
      <div className="flex justify-between mb-6 items-center">
        <button className="btn btn-primary">
          <PlusCircleIcon className="size-5 mr-2" />
          Add Product
        </button>
        <button className="btn btn-ghost btn-circle" onClick={fetchProducts}>
          <RefreshCcwIcon className="size-5" />
        </button>
      </div>

      {error && <div className="alert alert-error mb-4">{error}</div>}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loading loading-spinner loading-lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}

export default HomePage;
