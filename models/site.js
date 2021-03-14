import mongoose from "mongoose";

const siteSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  rtl: { type: Boolean, required: true },
  theme: { type: String, required: true },
  userId: { type: String, required: true },
});

const Site = mongoose.model("Site", siteSchema);

export default Site;
