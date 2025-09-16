import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();  // automatically loads .env from project root

connectDB();
