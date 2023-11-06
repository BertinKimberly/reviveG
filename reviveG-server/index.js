

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { userRouter } from "./routes/userRouter.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import { moviesRoute } from "./routes/movieRouter.js";
import { categoriesRoute } from "./routes/categoryRouter.js";
import UploadRouter from "./controllers/uploadFile.js";
import { faqRoute } from "./routes/faqRouter.js";

dotenv.config();

const app = express();

// CORS middleware
app.use(cors());

app.use(express.json());

// Other routes
app.use("/api/users", userRouter);
app.use("/api/movies", moviesRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/upload", UploadRouter);
app.use("/api/faqs", faqRoute);

const port = process.env.PORT || 5000;

// Error handling middleware
app.use(errorHandler);

// Connect to the database
connectDB();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

