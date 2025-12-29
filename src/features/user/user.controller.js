import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export class UserController {
  signUp(req, res) {
    const { name, email, password, type } = req.body;
    const user = UserModel.SignUp(name, email, password, type);
    res.status(201).send(user);
  }
  signIn(req, res) {
    const result = UserModel.SignIn(req.body.email, req.body.password);
    console.log("res", result);
    if (!result) {
      return res.status(400).send("Incorrect crednetials");
    } else {
      //1. create token
      const token = jwt.sign(
        { userId: result.id, email: result.email },
        "JWT_SECRET_KEY",
        { expiresIn: "1h" }
      );
      // send token

      return res.status(200).send(token);
    }
  }
}
