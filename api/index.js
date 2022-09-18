import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routerApi from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Create server
const app = express();

// Get dotenv config
dotenv.config();

// Import middleware for handling erros
import {errorHandler, boomErrorHandler } from './middlewares/error.handler.js'


// Connect to mongo db
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongo db");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongo db disconnected");
})

mongoose.connection.on("connected", ()=>{
    console.log("mongo db connected");
})


// middlewares
//app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(errorHandler);
app.use(boomErrorHandler);

// Routes
routerApi(app);


app.get("/", (req, res)=>{
  res.json("Hello first request")
});

app.listen(8800, () => {
connectToMongoDB();
console.log("Connected to backend.");
});
