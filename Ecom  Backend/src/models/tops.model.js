const mongoose = require("mongoose");

//----------create books Schema------------
const topsSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    colour: { type: String, required: true },
    brand: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//-------------create books module------------

module.exports =  mongoose.model('tops', topsSchema);