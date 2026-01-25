import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { ConnectDB } from './config/ConnectDB.js';
import cookieParser from 'cookie-parser';
import cors from "cors"


dotenv.config();


const app = express();

// Middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.CLIENT_URL,
    Credentials: true,
}));


// ✅ test route (for checking)
app.get("/", (req, res) => {
  res.send("Backend working ✅");
});









app.listen(process.env.PORT, async () => {
    await ConnectDB()
    console.log(`Server running on http:localhost:${process.env.PORT}`);
})