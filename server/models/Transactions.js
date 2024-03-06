import mongoose from "mongoose";

const TransactionSchema = mongoose.Schema({
  userId: {
    type: String,
    unique: true,
  },
  transactionId: {
    type: String,
    unique: true,
  },
  transactionStatus: {
    type: String,
    unique: true,
  },
  transactionType: {
    type: String,
    unique: true,
  },
  transactionPoint: {
    type: String,
    unique: true,
  },
});

const TransactionModel = mongoose.model("Transactions", TransactionSchema);

export default TransactionModel;
