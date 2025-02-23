const express = require("express");
const ghofran = require("./Database/pool"); // Import the database connection

const app = express();
const PORT = 8000;


// Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});