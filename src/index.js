import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

 // ✅ Create Express app


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Server running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed", err);
  });
