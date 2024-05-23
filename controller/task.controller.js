const Task = require("../model/Task");
const taskController = {};

taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const newTask = new Task({ task, isComplete });
    await newTask.save();
    console.log("Task created:", newTask); // 로그 추가
    res.status(200).json({ status: "ok", data: newTask });
  } catch (error) {
    console.log("Error creating task:", error); // 로그 추가
    res.status(400).json({ status: "fail", error: error });
  }
};

taskController.getTask = async (req, res) => {
  try {
    const taskList = await Task.find({});
    console.log("Tasks retrieved:", taskList); // 로그 추가
    res.status(200).json({ status: "ok", data: taskList });
  } catch (error) {
    console.log("Error retrieving tasks:", error); // 로그 추가
    res.status(400).json({ status: "fail", error: error });
  }
};

taskController.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      throw new Error("App can not find the task");
    }
    const fields = Object.keys(req.body);
    fields.map((item) => (task[item] = req.body[item]));
    await task.save();
    res.status(200).json({ status: "success", data: task });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

taskController.deleteTask = async (req, res) => {
  try {
    const deleteItem = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", data: deleteItem });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

module.exports = taskController;
