import expres from "express";
import {
  getProducts,
  createProducts,
} from "../controllers/productController.js";

const router = expres.Router();

router.get("/", getProducts);

router.post("/", createProducts);

export default router;
