const express = require("express");

const Kurti= require("../models/kurtis.model");

const router = express.Router();

//---------------post route--------------
router.post("", async (req, res) => {
  try {
    const kurti = await Kurti.create(req.body);
    return res.status(200).send(kurti);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//----------get route--------

router.get("/", async (req, res) => {
  try {
    const kurti = await Kurti.find().lean().exec();
    return res.status(200).send(kurti);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//----------route get by id---------
router.get("/:id", async (req, res) => {
  try {
    const kurti = await Kurti.findById(req.params.id).lean().exec();
    return res.status(200).send(kurti);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
