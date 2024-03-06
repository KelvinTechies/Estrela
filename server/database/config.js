import mongoose from "mongoose";

const connectDb = (uri) => {
  try {
    const connect = mongoose.connect(uri);

    if (connect) {
      console.log("Connected to dataBase Successfully");
    } else {
      console.log("something is Wrong with the  connection");
    }
  } catch (error) {
    // console.log(error);
    console.log("something is Wrong with the  connection");
  }
};

export default connectDb;
