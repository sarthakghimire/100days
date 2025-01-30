import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
const connectDB = async () => {
  try {
    const pendingDB = await mongoose.createConnection(
      process.env.PENDING_DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const approvedDB = await mongoose.createConnection(
      process.env.APPROVED_DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("✅ MongoDB connected successfully");

    return { pendingDB, approvedDB };
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit process on failure
  }
};

// Initialize DB connections
const { pendingDB, approvedDB } = await connectDB();

// Define Mongoose Schemas & Models
const voterSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  citizenship: String,
  status: { type: String, default: "Pending" },
});

const pendingVoter = pendingDB.model("PendingVoter", voterSchema);
const approvedVoter = approvedDB.model("ApprovedVoter", voterSchema);

// ✅ Search API - Check Voter Status
app.get("/search", async (req, res) => {
  const { voterId } = req.query;
  if (!voterId) return res.status(400).json({ error: "Voter ID required" });

  try {
    const pendingResult = await pendingVoter.findOne({ citizenship: voterId });
    const approvedResult = await approvedVoter.findOne({
      citizenship: voterId,
    });

    if (approvedResult)
      return res.json({ status: "approved", data: approvedResult });
    if (pendingResult)
      return res.json({ status: "pending", data: pendingResult });

    return res.json({ status: "not found" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Registration API - Register a new Voter
app.post("/register", async (req, res) => {
  const { name, email, age, citizenship } = req.body;
  if (!name || !email || !age || !citizenship) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if already registered in either collection
    const existingPending = await pendingVoter.findOne({ citizenship });
    const existingApproved = await approvedVoter.findOne({ citizenship });

    if (existingPending || existingApproved) {
      return res.status(409).json({ error: "Voter already registered" });
    }

    // Insert new voter into pendingDB
    const newVoter = new pendingVoter({
      name,
      email,
      age,
      citizenship,
      status: "Pending",
    });

    await newVoter.save();

    res.json({
      success: true,
      message: "Registration successful",
      voter: newVoter,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
