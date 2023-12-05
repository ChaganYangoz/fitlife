const TrainingProg = require("../models/TrainingProgram");
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
    try {
      const {name, user_id, coach_id} = req.body;
      const newTrainingProg = await TrainingProg.create({
        name,
        user_id,
        coach_id
      });
      res.status(201).json({ message: 'TrainingProg Created!!', TrainingProg: newTrainingProg });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/user/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const userTrainingProgs = await TrainingProg.find({ user_id: userId });
      const trainingProgNames = userTrainingProgs.map(prog => prog.name);
  
      res.status(200).json({ trainingPrograms: trainingProgNames });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;