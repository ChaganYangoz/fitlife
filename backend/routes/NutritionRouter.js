const Nutrition = require("../models/Nutrition");
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
    try {
      const {content} = req.body;
      const newNutrition = await Nutrition.create({
        content
      });
      res.status(201).json({ message: 'Nutrition Created!!', Nutrition: newNutrition });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;