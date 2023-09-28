import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        doctor:{
            type: mongoose.Types.objectId,
            ref: "Doctor",
            required: true,
        },
        user: {
            type: mongoose.Types.objectId,
            ref: "User",
            required: true,
        },
        ticketPrice: {
            type: String,
            required: true,
        },
        appointmentDate:{
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "approved", "cancelled"],
            default : "pending",
        },
        isPaid: {
            type: Boolean,
            default: true,
        }, 
    },
    {timestamps: true}
)

export default mongoose.model("Booking", bookingSchema);