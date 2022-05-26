const mongoose = require("mongoose");

//----------create shoes Schema-----------
const denimSchema = new mongoose.Schema(
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

//-------------create shoes module--------

module.exports = mongoose.model("denim",denimSchema);
