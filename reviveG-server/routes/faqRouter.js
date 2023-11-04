import express from "express";
import { getAllFaqs, importFaq } from "../controllers/faqController.js";

const router = express.Router();

//import faqs

router.post("/import", importFaq);
router.get("/all",getAllFaqs)
export { router as faqRoute };
