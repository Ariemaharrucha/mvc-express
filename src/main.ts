import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userRoutes } from "./routes/user.routes";
import { threadRoutes } from "./routes/thread.routes";
import { repliesRoutes } from "./routes/replies.routes";

const app = express();
dotenv.config();
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

app.use("/user",userRoutes)
app.use("/thread", threadRoutes)
app.use("/replies", repliesRoutes)

app.listen(8000);