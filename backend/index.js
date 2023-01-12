const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const { connection } = require("./Config/db");

app.get("/", (req, res) => {
  res.send("Welcome to MainRoutes");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database connected Successful");
    console.log(`App listening on ${process.env.PORT}`);
  } catch (err) {
    console.log("Database connected Failed");
    console.log(err);
  }
});
