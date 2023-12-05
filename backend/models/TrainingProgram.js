const mongoose = require("mongoose");

const trainingProgSchema= new mongoose.Schema({
    user_id: Object,
});

const TrainingProg = mongoose.model('TrainingProg', trainingProgSchema);

module.exports = TrainingProg;