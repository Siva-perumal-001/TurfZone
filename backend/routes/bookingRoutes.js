import express from "express";
import Booking from "../models/Booking.js";
import Turf from "../models/Turf.js";
import protect from "../middleware/authMiddleware.js"

const router = express.Router();

router.post("/", protect, async(req,res)=>{
    try {
        const {turf, date, slot, hours } = req.body;
        const turfData = await Turf.findById(turf);
        if(!turfData){
            return res.status(404).json({message: "Turf not found"})
        }

        const totalPrice = turfData.price * hours;

        const booking = await Booking.create({
            user: req.user._id,
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

router.get("/", protect, async (req,res)=>{
    try {
        const bookings = await Booking.find({
            user: req.user._id,
        }).populate("turf");
        res.json(bookings)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

router.delete("/:id", protect, async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
  
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      
      if (booking.user.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: "Not authorized" });
      }
  
      await booking.deleteOne();
      res.json({ message: "Booking cancelled successfully" });
    } catch (error) {
      res.status(400).json({ message: "Invalid booking ID" });
    }
  });
  

export default router;