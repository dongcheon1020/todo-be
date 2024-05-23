const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const app = express();
app.use(bodyParser.json());
app.use("/api", indexRouter);

const mongoURI = "mongodb://localhost:27017/todo-list";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connected fail", err);
  });

app.listen(5001, () => {
  console.log("server is on 5001");
});
