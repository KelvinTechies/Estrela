import mongoose from "mongoose";

const DepositSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  amount: {
    type: Sting,
  },
  username: {
    type: Sting,
    unique: true,
  },
});

const DepositModel = mongoose.model("Deposit", DepositSchema);

export default DepositModel;
