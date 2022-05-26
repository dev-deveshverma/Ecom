const express = require("express");

const Frock= require("../models/frocks.model");

const router = express.Router();

//---------------post route--------------
router.post("", async (req, res) => {
  try {
    const frock = await Frock.create(req.body);
    return res.status(200).send(frock);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//----------get route--------

router.get("/", async (req, res) => {
  try {
    const frock= await Frock.find().lean().exec();
    return res.status(200).send(frock);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//----------route get by id---------
router.get("/:id", async (req, res) => {
  try {
    const frock= await Frock.findById(req.params.id).lean().exec();
    return res.status(200).send(frock);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
