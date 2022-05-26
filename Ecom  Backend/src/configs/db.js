const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://webdevesh:devesh@cluster0.wsim0.mongodb.net/ecom?retryWrites=true&w=majority");
};
