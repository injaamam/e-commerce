import { EditIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";

import { useProductStore } from "../store/useProductStore";

export default function ProductCard({ product }) {
  const { deleteProduct } = useProductStore();
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* ProdutImage */}
      <figure className="relative pt-[56.25%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      <div className="card-body p-4">
        {/* Product details */}
        <h2 className="card-title text-lg font-semibold">{product.name}</h2>
        <p className="text-2xl font-bold text-primary">{product.price}</p>

        {/* Card actions */}
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/product/${product.id}`}
            className="btn btn-sm btn-outline btn-info"
          >
            <EditIcon className="size-4 mr-2" />
          </Link>
          <button
            className="btn btn-sm btn-outline btn-error"
            onClick={() => deleteProduct(product.id)}
          >
            <Trash2Icon className="size-4 mr-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
