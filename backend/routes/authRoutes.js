import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

router.post("/signup", async(req,res)=>{
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({message : "All fields are required"})
        }
        
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({messge : "User already exists"});
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password : hashPassword,
        });

        res.status(201).json({
            message : "User registered Successfully",
            user: {
                id: user._id,
                name : user.name,
                email : user.email,
            }
        });

    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

export default router;