import jwt from "jsonwebtoken";

const generateToken = async (res, userId) => {
  const token = jwt.sign({ userId }, process.env.MY_JWT_SECRET_KEYSS, {
    expiresIn: "1d",
  });

  res.cookie("myToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
