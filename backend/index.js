const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Databse Connected");
  });

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello MERN!");
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
