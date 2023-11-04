
import { Faqs } from "../FaqData.js";
import Faq from "../models/FaqModel.js";

export const importFaq = async (req, res) => {
   try {
      await Faq.deleteMany({});

      const faqs = await Faq.insertMany(Faqs);
      res.status(201).json(faqs);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

export const getAllFaqs = async (req, res) => {
   try {
      const faqs = await Faq.find({});
      res.status(200).json(faqs);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};
