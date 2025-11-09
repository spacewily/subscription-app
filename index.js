const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.post("/subscribe", (req, res) => {
  const { email } = req.body;
  console.log(`New subscription from: ${email}`);
  res.json({ message: "Subscription received!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
