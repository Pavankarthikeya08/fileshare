const { Schema, model } = require("mongoose");
const { type } = require("os");
const MySchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type:String,
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const TaskModel = model("Data", MySchema, "data1");
module.exports = TaskModel;