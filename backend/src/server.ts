import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io'
import { connectToMongo } from './DB/DB';
import { router } from './routers/player.routes';
import { setupSockets } from './sockets/socket';
import cors from "cors"
import cookieParser from 'cookie-parser';


dotenv.config();


const app = express();
const server = http.createServer(app);


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true  
}));
 
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cookieParser())
app.use('/api', router);

setupSockets(server)

const startServer = async () => {
    await connectToMongo();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  };

  startServer();