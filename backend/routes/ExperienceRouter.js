const Experience = require("../models/Experience");
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
    try {
      const {experience_name} = req.body;
      const newExperience = await Experience.create({
        experience_name
      });
      res.status(201).json({ message: 'Experience Created!!', Experience: newExperience });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;