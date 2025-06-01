import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:3000";

export const useProductStore = create((set, get) => ({
  //products state
  products: [],
  loading: false,
  error: null,

  //form state
  formData: {
    name: "",
    price: "",
    image: "",
  },

  setFormData: (formData) => set({ formData }),
  resetForm: () =>
    set({
      formData: {
        name: "",
        price: "",
        image: "",
      },
    }),

  addProduct: async (x) => {
    x.preventDefault();
    set({ loading: true });
    try {
      const { formData } = get();
      await axios.post(`${BASE_URL}/api/products`, formData);
      await get().fetchProducts();
      get().resetForm();
      toast.success("Product added successfully!");
      //To do: close the modal
    } catch (error) {
      console.error("Failed to add product:", error);
      toast.error("Failed to add product");
    } finally {
      set({ loading: false });
    }
  },

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/products`);
      set({ products: response.data.data, error: null });
      console.log(get().products);
    } catch (error) {
      if (error.status == 429)
        set({
          error: "Rate limit exceeded, try after few seconds",
          products: [],
        });
      else set({ error: "An error occurred", products: [] });
    } finally {
      set({ loading: false });
    }
  },

  deleteProduct: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`);
      set((prev) => ({
        products: prev.products.filter((product) => product.id !== id),
      }));
      toast.success("Product deleted successfuly!");
    } catch (error) {
      console.error("Failed to delete product:", error);
      toast.error("Failed to delete product");
    } finally {
      set({ loading: false });
    }
  },
}));
