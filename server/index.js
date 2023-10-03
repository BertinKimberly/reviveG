import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { userRouter } from "./routes/userRouter.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//other routes
app.use("/api/users", userRouter);

const port = process.env.PORT || 5000;
//error handling
app.use(errorHandler);
//connect db
connectDB();
app.listen(port, () =>
   console.log(`server is running on http://localhost:/${port}`)
);
