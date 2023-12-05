const TrainingProg = require("../models/TrainingProgram");
var express = require("express");
var router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { name, user_id, coach_id } = req.body;
    const newTrainingProg = await TrainingProg.create({
      name,
      user_id,
      coach_id,
    });
    res
      .status(201)
      .json({
        message: "TrainingProg Created!!",
        TrainingProg: newTrainingProg,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
