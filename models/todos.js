const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      require: true,
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todos", TodoSchema);
