import express from "express";
import dotenv from "dotenv";

import authroutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connecttoDb from "./db/connecttoDb.js";

import cookieParser from "cookie-parser";

const app = express();
const Port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authroutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

app.listen(Port, () => {
  connecttoDb();
  console.log("Server Running on Port 5000");
});
