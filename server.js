import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(
  cors({
    origin: "https://shaikahmadnawaz.vercel.app/",
  })
);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for the message
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a model based on the schema
const Message = mongoose.model("Message", messageSchema);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API endpoint for receiving the form data
app.post("/api/contact", async (req, res) => {
  try {
    // Extract the form data from the request body
    const { name, email, message } = req.body;

    // Create a new message instance
    const newMessage = new Message({ name, email, message });

    // Save the message to the database
    await newMessage.save();

    // Send a response back to the frontend
    res.json({ success: true });
  } catch (error) {
    console.error("Error storing message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API endpoint for retrieving messages
app.get("/api/messages", async (req, res) => {
  try {
    // Retrieve all messages from the database
    const messages = await Message.find();

    // Send the messages as the response
    res.json({ messages });
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
