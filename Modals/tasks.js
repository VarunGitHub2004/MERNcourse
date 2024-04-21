import mongoose from "mongoose";
import { Schema } from "mongoose";
const taskSchema = new Schema({
  todo: {type:String,required:[true,"Plz insert todo"]},
  completed: {type:Boolean,required:[true,"Plz insert status"]},
  date: {
    type: Date,
    default: Date.now,
  },
});
const Task = mongoose.model("Task", taskSchema);
export default Task;
