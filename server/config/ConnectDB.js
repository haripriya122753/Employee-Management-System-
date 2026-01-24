import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected....");
    } catch (error) {
        console.log("MongoDB connection failed:",
        error.message);
        process.exit(1);
    }
}