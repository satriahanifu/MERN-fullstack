const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    users: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todos" }],
    // todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todos" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Categories", CategorySchema);
