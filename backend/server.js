import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import MongoDBconnect from "./db/MongoDBconnect.js";
import userRoutes from "./routes/user.routes.js";
import { app,server } from "./socket/socket.js";


const PORT=process.env.PORT ||5000;
const __dirname = path.resolve();

dotenv.config(); //for getting port from env

app.use(express.json());  //extracting files from req.body in auth.controller
app.use(cookieParser()); //accessing cookies
// app.get("/",(req,res) => {
//     res.send("Hello world");
// });
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*",(req,res) =>
{
    res.sendFile(path.join(__dirname, "frontend","dist","index.html"))

});

server.listen(PORT,() => {
    MongoDBconnect();
    console.log(`server is running on port ${PORT}`)
});
