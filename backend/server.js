import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import MongoDBconnect from "./db/MongoDbConnect.js";
import userRoutes from "./routes/user.routes.js";

const app=express();
const PORT=process.env.PORT ||5000;

dotenv.config(); //for getting port from env

app.use(express.json());  //extracting files from req.body in auth.controller
app.use(cookieParser()); //accessing cookies
// app.get("/",(req,res) => {
//     res.send("Hello world");
// });
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users",userRoutes);


app.listen(PORT,() => {
    MongoDBconnect();
    console.log(`server is running on port ${PORT}`)
});