import express from "express";
import cors from "cors";
import "dotenv/config";

import contectRoutes from "./routes/contact.routes.js";

const app = express();

app.use(
  express.json({
    limit: "25mb",
  })
);

app.use(
  cors({
    origin: process.env.FRONTEND_HOST,
    credentials: true,
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "25mb",
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio API" });
});

app.use("/api/v1/contact", contectRoutes);

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
