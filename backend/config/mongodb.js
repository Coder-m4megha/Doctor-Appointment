import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("✅ Database Connected"));
    mongoose.connection.on("error", (err) => console.error("❌ MongoDB connection error:", err));

    await mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
  }
};

export default connectDB;
