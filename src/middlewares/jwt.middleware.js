import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  // 1. read the token
  const token = req.headers["authorization"];
  console.log(req.headers);
  // 2. if no token return the error
  if (!token) {
    return res.status(401).send("Unauhorized");
  }

  console.log(token);

  //3. check if token is valid
  try {
    const payload = jwt.verify(token, "JWT_SECRET_KEY");
    console.log("payload", payload);
  } catch (error) {
    //4 .return error
    console.log("error", error);
    return res.status(401).send("Unautorized token");
  }

  // 5. call next middleware
  next();
};

export default jwtAuth;
