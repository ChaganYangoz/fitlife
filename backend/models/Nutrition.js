const mongoose = require("mongoose");

const nutritionSchema= new mongoose.Schema({
    content: String
});

const Nutrition = mongoose.model('Nutrition', nutritionSchema);

module.exports = Nutrition;