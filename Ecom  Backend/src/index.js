
require("dotenv").config();

const express = require("express");
const cors =require("cors")

const app=express();
app.use( express.json());
app.use(cors())
const connect = require("./configs/db");

 const port = 3002;

const topsController = require("./controllers/tops.controller");
const kurtisController = require("./controllers/kurtis.controller");
const denimController=require("./controllers/denims.controller");
const frockController=require("./controllers/frocks.controller");
const jacketController=require("./controllers/jackets.controller");
const midditController=require("./controllers/middis.controller");

const {register,login}=require("./controllers/authentication.controller")



app.use(express.json());
app.use("/tops", topsController);
app.use("/kurtis", kurtisController);
app.use("/denims",denimController);
app.use("/frocks",frockController);
app.use("/jackets",jacketController)
app.use("/middis",midditController)
app.post("/register",register)
app.post ("/login",login)



app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (err) {
    console.log(err.message);
  }
});
