const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/User.route");
const { productsRouter } = require("./Routes/Products.route");
const { cartRouter } = require("./Routes/Cart.route");


app.get("/", (req, res) => {
  res.send("Welcome to MainRoutes");
});

app.use("/", userRouter);
app.use("/", productsRouter);
app.use("/", cartRouter);

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
