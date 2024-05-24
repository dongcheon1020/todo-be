const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const app = express();
const cors = require("cors");
require("dotenv").config();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", indexRouter);

const mongoURI = MONGODB_URI_PROD;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((e) => {
    console.log("DB connected fail", e);
  });

app.listen(process.env.PORT || 5001, () => {
  console.log("server is on 5001");
});
