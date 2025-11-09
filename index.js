const express = require("express");
const path = require("path");
const { addSubscriber } = require("./sheets");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  await addSubscriber(email);
  res.json({ message: "Subscription saved to Google Sheets!" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
