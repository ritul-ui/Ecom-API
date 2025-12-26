import express from "express";
import ProductController from "./product.controller.js";
import { upload } from "../../middlewares/fileupload.middleware.js";

const productrouter = express.Router();

const productController = new ProductController();

//localhost:3200/api/products/filter?minPrice=10&maxPrice=20&category=Cateogory1
productrouter.get("/filter", productController.filterProducts);

productrouter.get("/", productController.getAllProducts);
productrouter.post(
  "/",
  upload.single("imageUrl"),
  productController.addProduct
);
productrouter.get("/:id", productController.getOneProduct);
// router.get("")

export default productrouter;
