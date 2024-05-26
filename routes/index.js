const express = require("express");
const router = express.Router();
const taskApi = require("./task.app");
const userAPi = require("./user.api");

router.use("/tasks", taskApi);
router.use("/user", userAPi);

module.exports = router;
