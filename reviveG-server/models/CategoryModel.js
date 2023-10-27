import mongoose from "mongoose";

const CategoriesSchema = mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

const Category = mongoose.model("Category", CategoriesSchema);

export default Category;
