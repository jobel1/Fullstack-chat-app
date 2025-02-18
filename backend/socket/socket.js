import {Server} from "socket.io";
import http from "http";
import express from "express";

const app=express();
const server=http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
});

export const getReceiverSocketId=(receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap ={};
io.on('connection',(socket)=> {           //socket.on is used to listen to events.used on both client and server side
    console.log("User connected",socket.id);
    const userId=socket.handshake.query.userId;
    if(userId != "undefined") userSocketMap[userId]=socket.id;
    io.emit("getOnlineUsers",Object.keys(userSocketMap)); //used to send events to all connected events,also tells who is online or offline

    socket.on("disconnect",()=> {
        console.log("user disconnected",socket.id)
        delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})

export {app,io,server};