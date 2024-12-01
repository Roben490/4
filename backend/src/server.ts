import express from 'express';
import dotenv from 'dotenv';
import { connectToMongo } from './DB/DB';
import { router } from './routers/main.routes';
import cors from "cors"
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true  
}));
 
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cookieParser())
app.use('/api', router);

const startServer = async () => {
    await connectToMongo();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  };

startServer();