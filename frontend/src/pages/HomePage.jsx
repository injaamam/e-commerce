import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import { PackageIcon, PlusCircleIcon, RefreshCcwIcon } from "lucide-react";

import ProductCard from "../components/ProductCard.jsx";
import AddProductModal from "../components/AddProductModal.jsx";

function HomePage() {
  const { products, fetchProducts, loading, error } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <main className="container mx-auto px-4 py-8 ">
      <div className="flex justify-between mb-6 items-center">
        <button
          className="btn btn-primary"
          onClick={() => {
            document.getElementById("add_product_modal").showModal();
          }}
        >
          <PlusCircleIcon className="size-5 mr-2" />
          Add Product
        </button>
        <button className="btn btn-ghost btn-circle" onClick={fetchProducts}>
          <RefreshCcwIcon className="size-5" />
        </button>
      </div>

      <AddProductModal />

      {error && <div className="alert alert-error mb-4">{error}</div>}

      {products.length === 0 && !loading && (
        <div>
          <div className="flex justify-center items-center h-32">
            <PackageIcon className="size-16" />
          </div>
          <div className="text-center text-3xl font-semibold mb-3">
            No Products Found
          </div>
          <div className="text-center text-gray-500">
            Get started by adding first product to the inventory.
          </div>
        </div>
      )}

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
