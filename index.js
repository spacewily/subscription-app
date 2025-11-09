const express = require("express");
const path = require("path");
const { addSubscriber } = require("./sheets"); // Make sure sheets.js exists
const app = express();

app.use(express.static("public")); // Serves HTML/CSS/JS
app.use(express.json()); // Parses JSON body

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  try {
    await addSubscriber(email); // Saves to Google Sheets
    res.json({ message: "Subscription saved to Google Sheets!" });
  } catch (error) {
    console.error("Error saving to Sheets:", error);
    res.status(500).json({ message: "Failed to save subscription." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
