import jwt from "jsonwebtoken";
import userModel from "../models/Users.js";

const authorizeUser = async (req, res, nxt) => {
  let token;
  token = req.cookies.myToken;
  if (token) {
    try {
      const decode = await jwt.verify(token, process.env.MY_JWT_SECRET_KEYSS);
      req.user = await userModel.findById(decode.userId).select("-password");

      nxt();
    } catch (error) {
      res
        .status(401)
        .json("You are not Authorized for this Route, InValid token");
    }
  } else {
    res.status(401);
    console.log("You are not Authorized for this Route, No token Provided");
  }
};

export default authorizeUser;
