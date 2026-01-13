import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import protect from "../middleware/authMiddleware.js";

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

router.post("/login" ,async(req,res)=>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message : "All fields are required"})
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message : "Invalid email or password"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({message : "Invalid email or password"})
        }

        const token = jwt.sign(
            {id : user._id},
            process.env.JWT_SECRET,
            { expiresIn : "7d" }
        )

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

router.get("/profile",protect, async(req,res)=>{
    try{
        res.json(req.user);
    }catch(error){
        res.ststus(500).json({message : error.message})
    }
})

export default router;