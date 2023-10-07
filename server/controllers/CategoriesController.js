import Category from "../models/CategoryModel";
import asyncHandler from "express-async-handler";

// **************PUBLIC CONTROLLERS******************

export const getCategories = asyncHandler(async (req, res) => {
   try {
      const categories = await Category.find({});
      res.json(categories);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

// **************ADMIN CONTROLLERS******************

export const createCategory = asyncHandler(async (req, res) => {
   try {
      const { title } = req.body;

      const category = new Category({
         title,
      });
      const createdCategory = await category.save();
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

export const updateCategory = asyncHandler(async (req, res) => {
   try {
      const category = await Category.findById(req.params.id);
      if (category) {
         category.title = req.body.title || category.title;

         const updatedCategory = await category.save();
         res.json(updatedCategory);
      } else {
         res.status(404).json({ message: "Category not found" });
      }
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

export const deleteCategory = asyncHandler(async (req, res) => {
   try {
      const category = await Category.findById(req.params.id);

      if (category) {
         await category.remove();
         res.json({ message: "Category removed" });
      } else {
         res.status(404).json({ message: "Category not found" });
      }
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});
