import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  services: [String],
  budget: { type: String},
}, { timestamps: true });

export default mongoose.model("Lead", leadSchema);