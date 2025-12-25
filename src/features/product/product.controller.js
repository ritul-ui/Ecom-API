import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.GetAll();
    res.status(200).send(products);
  }
  addProduct(req, res) {
    console.log("this is post requerst");
    const { name, price, sizes } = req.body;
    const newProduct = {
      name,
      price: parseFloat(price),
      sizes: sizes.split(","),
      imageUrl: req.file.filename,
    };
    const createdRecord = ProductModel.add(newProduct);
    res.status(201).send(createdRecord);
  }
  rateProduct(req, res) {}
  getOneProduct(req, res) {
    console.log("params", req.params.id);
    const id = req.params.id;
    const product = ProductModel.get(id);
    if (!product) {
      return res.status(404).send("Product not found");
    } else {
      return res.status(200).send(product);
    }
  }
}
