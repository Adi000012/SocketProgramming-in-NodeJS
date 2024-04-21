const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const {Server} = require("socket.io");

const http = require("http");
const server = http.createServer(app);

const io = new Server(server);
//Socket Programming

io.on("connection", (socket)=>
{
    socket.on("user-Message", (message)=>
    {
    io.emit('message',message);
    })
}); 

app.set("view engine", "ejs");
app.use(express.static('public')); 
app.use(express.json());

app.get("/", (req,res)=>
{
    res.render("index");
})

server.listen(process.env.PORT,()=>{
    console.log("server Is Started");
})