const express = require("express");
const db = require("./config/db");
const app = express();
require("dotenv").config();

const allRoutes = require("./routes");

const PORT = process.env.PORT || 3000;

db.then(() => {
  console.log("Database Connected");
}).catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
