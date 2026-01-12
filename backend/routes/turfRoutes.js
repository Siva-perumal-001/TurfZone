import express from "express";
import Turf from "../models/Turf.js";

const router = express.Router();

router.post("/",async (req,res)=>{
    try{
        const turf = await Turf.create(req.body);
        res.status(201).json(turf);
    } catch (error) {
        res.status(400).json({message : error.message})
    }
});

router.get("/", async (req,res)=>{
    try {
        const turfs = await Turf.find();
        res.json(turfs);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

router.get("/:id", async (req,res)=>{
    try {
        const turf = await Turf.findById(req.params.id);
        if(!turf){
            return res.status(404).json({message : "Turf not found"})
        }

        res.json(turf)
    } catch (error) {
        res.status(400).json({message : "Invalid Turf ID"})
    }
})

router.delete("/:id", async (req,res)=>{
    try {
        const turf = await Turf.findByIdAndDelete(req.params.id);

        if(!turf){
            res.status(404).json({message : "Turf not found"})
        }
        res.json({message : "Turf deleted succesfully"})
    } catch (error) {
        res.status(400).json({message : "Invalid Turf ID"})
    }
})

export default router;