import express from "express";
import dotenv from "dotenv";
import { connectToMongo } from "./DB/DB";
import { router } from "./routers/main.routes";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import http from "http";

dotenv.config();

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

io.on("connect", (socket) => {
  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message);
  });

  socket.on("joinRoom", (roomName) => {
    socket.join(roomName);
  });

  socket.on("sendMessageToRoom", (roomName, message) => {
    io.to(roomName).emit("receiveMessage", message)
  })

  socket.on("disconnect", () => {
    console.log(`socket disconnect ${socket.id}`);
  });
});

const startServer = async () => {
  await connectToMongo();
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
