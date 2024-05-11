import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import autoRouter from "./routes/autoRouters.js";
import dotenv from "dotenv";
dotenv.config();

const {DB_HOST, PORT} = process.env;

const app = express()

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json())

app.use("/api/auto",autoRouter)

app.use((_, res) => {
    res.status(404).json({ message: "Route not found" });
  });
  
  app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
  });

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server is running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1)
  });








