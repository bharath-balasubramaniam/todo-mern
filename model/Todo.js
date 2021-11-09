const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: [true, "Please fill the title"],
    },
    description: {
      type: "String",
      required: [true, "description is required!"],
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
