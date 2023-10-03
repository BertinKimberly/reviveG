import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

//connect db
connectDB();
app.listen(port, () =>
   console.log(`server is running on http://localhost:/${port}`)
);
