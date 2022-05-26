const express = require("express");

const Middis = require("../models/middis.model");

const router = express.Router();

//---------------route post--------------
router.post("", async (req, res) => {
  try {
    const middis = await Middis.create(req.body);
    return res.status(200).send(middis);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});


//---------------route get--------------

router.get("/", async (req, res) => {
  try {
    const middis = await Middis.find().lean().exec();
    return res.status(200).send(middis);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//--------------- route get data by id--------------

router.get("/:id", async (req, res) => {
  try {
    const middis = await Middis.findById(req.params.id).lean().exec();
    return res.status(200).send(middis);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
