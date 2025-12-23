import express from "express";
import productrouter from "./src/features/product/product.routes.js";

const server = express();

server.use("/api/products", productrouter);

server.get("/", (req, res) => {
  res.send("welocome to apis");
});

server.listen(3200);

console.log("server running on port 3200");
