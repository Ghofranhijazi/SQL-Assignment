const { Pool } = require("pg");

// PostgreSQL Connection Pool
const ghofran = new Pool({
  user: "postgres", // Change this
  host: "localhost",
  password: "1234", // Change this
  database: "db1", // Change this
  port: 5432, // Default PostgreSQL port
});

ghofran
  .connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ Connection error", err));

module.exports = ghofran; // Export the pool for use in other files