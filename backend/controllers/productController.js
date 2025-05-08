import { sql } from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const products = await sql`SELECT * FROM products`;
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const createProduct = async (req, res) => {};
export const getProduct = async (req, res) => {};
export const updateProduct = async (req, res) => {};
export const deleteProduct = async (req, res) => {};
