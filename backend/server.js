import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import turfRoutes from "./routes/turfRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("turfzone backend is running");
})

app.use("/api/turfs", turfRoutes)
app.use("/api/bookings", bookingRoutes)
app.use("/api/auth", authRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("MongoDB Connected"))
        .catch((err)=> console.log(err));

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Sever is running on PORT ${PORT}`);
})
