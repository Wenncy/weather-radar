import express from "express";
import fetch from "node-fetch";
import cors from "cors"; // <-- import CORS

const app = express();
const PORT = process.env.PORT || 3001;

// Use CORS middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/test", async (req, res) => {
  res.json({ message: "Radar backend connected ✅" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
