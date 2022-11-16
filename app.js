const express = require("express");
const db = require("./config/db");
const app = express();

const allRoutes = require("./routes");

const PORT = 8080;

db.then(() => {
  console.log("Database Connected");
}).catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
