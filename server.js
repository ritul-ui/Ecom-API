import express from "express";
import productrouter from "./src/features/product/product.routes.js";
import bodyParser from "body-parser";
import userRouter from "./src/features/user/user.routes.js";

const server = express();
server.use(bodyParser.json());

server.use("/api/products", productrouter);
server.use("/api/users", userRouter);


server.get("/", (req, res) => {
  res.send("welocome to apis");
});

server.listen(3200);

console.log("server running on port 3200");
