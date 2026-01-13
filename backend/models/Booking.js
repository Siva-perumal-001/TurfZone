import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        turf:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Turf",
            required : true,
        },
        date:{
            type: String,
            required : true,
        },
        slot:{
            type: String,
            required : true,
        },
        hours: {
            type : Number,
            required : true,
        },
        totalPrice: {
            type: Number,
            required : true,
        }
    },
    {
        timestamps : true,
    }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;