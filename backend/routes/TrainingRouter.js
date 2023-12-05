const Training = require("../models/Training");
var express = require("express");
var router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { content } = req.body;
    const newTraining = await Training.create({
      content,
    });
    res
      .status(201)
      .json({ message: "Training Created!!", Training: newTraining });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
