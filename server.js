import dontevn from "dotenv";
dontevn.config();
import mongoose from "mongoose";
import express from "express";
import userRouter from "./routes/userRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// DATABASE CONNECT
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);
mongoose.connect(DB, {
      useNewUrlParser: true
}).then(con => {
      console.log("DB connection successfully!");
}).catch((err) => console.log("Error: ", err));

app.use("/api/v1", userRouter);

app.listen(port, () => {
      console.log(`server running port: ${port}`)
});