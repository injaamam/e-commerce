import {
  DollarSign,
  ImageIcon,
  Package2Icon,
  PlusCircleIcon,
} from "lucide-react";
import React from "react";

import { useProductStore } from "../store/useProductStore";

function AddProductModal() {
  const { addProduct, formData, setFormData, loading } = useProductStore();
  return (
    <dialog id="add_product_modal" className="modal">
      <div className="modal-box">
        {/* close button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        {/* Modal Header */}
        <h3 className="text-xl font-bold mb-8">Add New Product</h3>

        {/* Modal Form */}
        <form onSubmit={addProduct} className="space-y-6">
          <div className="grid gap-6">
            {/* Product Name Input*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Product Name
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Package2Icon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="input input-bordered w-full pl-10 focus:input-primary transition-colors duration-200"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Product Price Input*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Product Price
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <DollarSign className="size-5" />
                </div>
                <input
                  type="number"
                  className="input input-bordered w-full pl-10 focus:input-primary transition-colors duration-200"
                  required
                  value={formData.price}
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Product Image URL Input*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Product Image URL
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <ImageIcon className="size-5" />
                </div>
                <input
                  type="url"
                  placeholder="Enter image URL"
                  className="input input-bordered w-full pl-10 focus:input-primary transition-colors duration-200"
                  required
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          {/* Form actions */}
          <div className="modal-action">
            <div className="flex justify-end gap-3 w-1/3">
              <form method="dialog">
                <button className="btn btn-ghost">Cancel</button>
              </form>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={() =>
                  document.getElementById("add_product_modal").close()
                }
                disabled={
                  !formData.name ||
                  !formData.price ||
                  !formData.image ||
                  loading
                }
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  <>
                    <PlusCircleIcon className="size-5 mr-2" />
                    Add Product
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* BACKDROP */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default AddProductModal;
