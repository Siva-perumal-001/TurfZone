import express from "express";
import Booking from "../models/Booking.js";
import Turf from "../models/Turf.js";

const router = express.Router();

router.post("/", async(req,res)=>{
    try {
        const {turf, date, slot, hours } = req.body;
        const turfData = await Turf.findById(turf);
        if(!turfData){
            return res.status(404).json({message: "Turf not found"})
        }

        const totalPrice = turfData.price * hours;

        const booking = await Booking.create({
            turf,
            date,
            slot,
            hours,
            totalPrice,
        });

        res.status(201).json(booking)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

router.get("/" , async (req,res)=>{
    try {
        const bookings = await Booking.find().populate("turf");
        res.json(bookings)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

router.delete("/:id", async (req,res)=>{
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if(!booking){
            return res.status(404).json({message : "Booking not found"})
        }
        res.json({message : "Booking cancelled succesfully"})
    } catch (error) {
        res.status(400).json({message : "Invalid booking ID"})
    }
}) 

export default router;