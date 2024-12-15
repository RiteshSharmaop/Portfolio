import mongoose, { Schema } from "mongoose";

const complaintSchema = new Schema(
    {
        name: {
            type: String,
            lowercase: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: [true, "Password is required"],
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const Complaint = mongoose.model("Complaint", complaintSchema);
