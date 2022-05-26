const express = require("express");

const Jacket= require("../models/jackets.model");

const router = express.Router();

//---------------post route--------------
router.post("", async (req, res) => {
  try {
    const jacket = await Jacket.create(req.body);
    return res.status(200).send(jacket);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//----------get route--------

router.get("/", async (req, res) => {
  try {
    const jacket = await Jacket.find().lean().exec();
    return res.status(200).send(jacket);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//----------route get by id---------
router.get("/:id", async (req, res) => {
  try {
    const jacket = await Jacket.findById(req.params.id).lean().exec();
    return res.status(200).send(jacket);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
