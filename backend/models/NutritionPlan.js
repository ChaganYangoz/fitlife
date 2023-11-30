const mongoose = require("mongoose");

const nutritionPlanSchema= new mongoose.Schema({
    nutrition_id: Object,
    user_id: Object
});

const NutritionPlan = mongoose.model('NutritionPlan', nutritionPlanSchema);

module.exports = NutritionPlan;