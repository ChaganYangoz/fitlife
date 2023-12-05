const mongoose = require("mongoose");

const trainingProgSchema= new mongoose.Schema({
    name: String,
    user_id: Object,
    coach_id: Object
});

const TrainingProg = mongoose.model('TrainingProg', trainingProgSchema);

module.exports = TrainingProg;