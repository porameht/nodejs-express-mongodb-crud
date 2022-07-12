const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: "Enter book name",
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: [
      {
        type: String,
        enum: ["wait for process", "production", "incomming"],
      },
    ],
    default: ["wait for process"],
  },
});

module.exports = mongoose.model("Products", ProductSchema);
