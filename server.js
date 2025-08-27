const express = require("express");
const path = require("path");
const app = express();

// Serve everything in current folder (including regulations.html & logo.jpg)
app.use(express.static(path.join(__dirname)));

app.get("/", (_req, res) => {
  // Default to regulations.html; change if you have an index.html
  res.sendFile(path.join(__dirname, "regulations.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Asianloop links hub running on :${PORT}`));
