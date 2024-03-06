import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/config.js";
import userRouters from "./routers/user.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/auth", userRouters);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  try {
    connectDb(process.env.MONGO_URI);
    console.log(`App has started at http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
