import express from "express";
import ProductController from "./product.controller.js";

const productrouter = express.Router();

const productController = new ProductController();
productrouter.get("/", productController.getAllProducts);
productrouter.post("/", productController.addProduct);
// router.get("")

export default productrouter;
