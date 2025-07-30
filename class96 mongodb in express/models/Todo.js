import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
  Title:String,
  desc:String,
  isDone:Boolean,
  days:Number
});

export const Todo = mongoose.model('Todo',TodoSchema);