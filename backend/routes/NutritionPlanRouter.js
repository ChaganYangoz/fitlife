const NutritionPlan = require("../models/NutritionPlan");
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
    try {
      const {nutrition_id, user_id} = req.body;
      const newNutritionPlan = await NutritionPlan.create({
        nutrition_id,
        user_id
      });
      res.status(201).json({ message: 'NutritionPlan Created!!', NutritionPlan: newNutritionPlan });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;