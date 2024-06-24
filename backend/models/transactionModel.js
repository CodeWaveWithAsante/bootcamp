import mongoose, { Schema } from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    description: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    source: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, default: "income", enum: ["income", "expense"] },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
