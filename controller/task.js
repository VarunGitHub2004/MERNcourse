import Task from "../Modals/tasks.js";
export const createTask = async (req, res) => {
  const newTask = new Task(req.body);
  await newTask
    .save()
    .then((result) => {
      console.log("New Task added");
      res.status(201).json(newTask);
    })
    .catch((err) => {
      console.log("Could not create new task");
      res.status(404).json(err);
    });
};
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    console.log("Showing all tasks");
    res.status(200).json(tasks);
  } catch (err) {
    console.log("Could not show all tasks");
    res.status(404).json(err);
  }
};
export const getTaskByTodo = async (req, res) => {
  try {
    const task = await Task.findOne({ todo: req.params.todo });
    console.log("Showing the particular task");
    res.status(200).json(task);
  } catch (err) {
    console.log("Could not get task");
    res.status(404).json(err);
  }
};
export const replaceTaskByTodo = async (req, res) => {
  try {
    const replacedTask = await Task.findOneAndReplace(
      { todo: req.params.todo },
      req.body,
      { new: true }
    );
    console.log("Showing the replaced task");
    res.status(200).json(replacedTask);
  } catch (err) {
    console.log("Could not replace task");
    res.status(404).json(err);
  }
};
export const updateTaskByTodo = async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { todo: req.params.todo },
      req.body,
      {
        new: true,
      }
    );
    console.log("Showing the updated task");
    res.status(200).json(updatedTask);
  } catch (err) {
    console.log("Could not update task");
    res.status(200).json(err);
  }
};
export const deleteTaskByTodo = async (req, res) => {
  try {
    const deletedTask = await Task.findOneAndDelete({ todo: req.params.todo });
    console.log("Showing the deleted task");
    res.status(301).json(deletedTask);
  } catch (err) {
    console.log("Could not delete task");
    res.status(200).json(err);
  }
};
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ id: req.params.id });
    console.log("Showing the particular task");
    res.status(200).json(task);
  } catch (err) {
    console.log("Could not get task");
    res.status(404).json(err);
  }
};
export const replaceTaskById = async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    console.log("Showing the updated task");
    res.status(200).json(updatedTask);
  } catch (err) {
    console.log("Could not update task");
    res.status(200).json(err);
  }
};
export const updateTaskById = async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    console.log("Showing the updated task");
    res.status(200).json(updatedTask);
  } catch (err) {
    console.log("Could not update task");
    res.status(200).json(err);
  }
};

export const deleteTaskById = async (req, res) => {
  try {
    const deletedTask = await Task.findOneAndDelete({ id: req.params.id });
    console.log("Showing the deleted task");
    res.status(301).json(deletedTask);
  } catch (err) {
    console.log("Could not delete task");
    res.status(200).json(err);
  }
};
export const getTaskByObjectId = async (req, res) => {
  try {
    const task = await Task.findById(req.params._id);
    console.log("Showing the particular task");
    res.status(200).json(task);
  } catch (err) {
    console.log("Could not get task");
    res.status(404).json(err);
  }
};
export const updateTaskByObjectId = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    console.log("Showing the updated task");
    res.status(200).json(updatedTask);
  } catch (err) {
    console.log("Could not update task");
    res.status(200).json(err);
  }
};
export const deleteTaskByObjectId = async (req, res) => {
  try {
    const deletedTask = await Task.findOneAndDelete(req.params._id);
    console.log("Showing the deleted task");
    res.status(301).json(deletedTask);
  } catch (err) {
    console.log("Could not delete task");
    res.status(200).json(err);
  }
};
