import express from "express";
import ProductController from "./product.controller.js";
import { upload } from "../../middlewares/fileupload.middleware.js";

const productrouter = express.Router();

const productController = new ProductController();
productrouter.get("/", productController.getAllProducts);
productrouter.post(
  "/",
  upload.single("imageUrl"),
  productController.addProduct
);
productrouter.get("/:id", productController.getOneProduct);
// router.get("")

export default productrouter;
