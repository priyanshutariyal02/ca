import mongoose, { Schema, Document, Model } from "mongoose";

interface InsightBlog extends Document {
  title: string;
  image: string;
  content: string;
}

const InsightSchema = new Schema<InsightBlog>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const InsightModel: Model<InsightBlog> =
  mongoose.models.Blog || mongoose.model<InsightBlog>("Blog", InsightSchema);

export default InsightModel;
