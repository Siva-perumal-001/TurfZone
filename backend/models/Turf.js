import mongoose from "mongoose";

const TurfSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        location:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },      
    },
    {
        timestamps: true,
    }
);

const Turf = mongoose.model("Turf", TurfSchema);

export default Turf;