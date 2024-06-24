import mongoose, { Schema } from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    account_number: { type: String, required: true, unique: true },
    account_name: { type: String, required: true },
    account_balance: { type: String, required: true, default: "0.00" },
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", accountSchema);

export default Account;
