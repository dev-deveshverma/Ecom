const express = require("express");

const Denim= require("../models/denim.model");

const router = express.Router();

//---------------post route--------------
router.post("", async (req, res) => {
  try {
    const denim = await Denim.create(req.body);
    return res.status(200).send(denim);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//----------get route--------

router.get("/", async (req, res) => {
  try {
    const denim= await Denim.find().lean().exec();
    return res.status(200).send(denim);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//----------route get by id---------
router.get("/:id", async (req, res) => {
  try {
    const denim = await Denim.findById(req.params.id).lean().exec();
    return res.status(200).send(denim);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
