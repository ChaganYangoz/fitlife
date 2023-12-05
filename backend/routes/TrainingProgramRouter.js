const TrainingProg = require("../models/TrainingProgram");
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
    try {
      const {user_id} = req.body;
      const newTrainingProg = await TrainingProg.create({
        user_id
      });
      res.status(201).json({ message: 'TrainingProg Created!!', TrainingProg: newTrainingProg });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;