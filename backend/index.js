import express from "express";
import fetch from "node-fetch";
import cors from "cors";  // <-- import cors

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors({
  origin: "*" // allow all origins, or replace '*' with your frontend URL in production
}));

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/test", async (req, res) => {
  res.json({ message: "Radar backend connected ✅" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
