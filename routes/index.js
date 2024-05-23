const express = require("express");
const router = express.Router();
const taskApi = require("./task.app");

router.use("/tasks", taskApi);

module.exports = router;
