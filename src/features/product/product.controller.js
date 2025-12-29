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
  rateProduct(req, res) {
    console.log("req query", req.query);
    const userId = req.query.userId;
    const productId = req.query.productId;
    const rating = req.query.rating;
    const error = ProductModel.rateProduct(userId, productId, rating);
    console.log("eroor", error);
    if (error) {
      return res.status(400).send(error);
    } else {
      return res.status(200).send("rating has been updated");
    }
  }
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

  filterProducts(req, res) {
    console.log("req", req.query);
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const category = req.query.category;
    const result = ProductModel.filter(minPrice, maxPrice, category);
    res.send(result);
  }
}
