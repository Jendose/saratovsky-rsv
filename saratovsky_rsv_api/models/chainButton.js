const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chainButtonSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    chain: {
      type: Array,
      required: true,
    },
    registrationStep: {
      type: Number,
      required: true,
    },
    botNotRegisteredMessage: {
      type: String,
      required: true,
    },
    botRegisteredMessage: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const ChainButton = mongoose.model('Chain', chainButtonSchema);
module.exports = ChainButton;
