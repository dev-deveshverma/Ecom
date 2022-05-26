const express = require("express");

const Top = require("../models/tops.model");

const router = express.Router();

//---------------route post--------------
router.post("", async (req, res) => {
  try {
    const top = await Top.create(req.body);
    return res.status(200).send(top);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});


//---------------route get--------------

router.get("/", async (req, res) => {
  try {
    const top = await Top.find().lean().exec();
    return res.status(200).send(top);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//--------------- route get data by id--------------

router.get("/:id", async (req, res) => {
  try {
    const top = await Top.findById(req.params.id).lean().exec();
    return res.status(200).send(top);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
