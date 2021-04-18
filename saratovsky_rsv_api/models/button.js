const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buttonSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Button = mongoose.model('Button', buttonSchema);
module.exports = Button;
