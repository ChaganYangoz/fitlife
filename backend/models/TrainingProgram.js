const mongoose = require("mongoose");

const trainingProgSchema= new mongoose.Schema({
    training_id: Object,
    user_id: Object,
});

const TrainingProg = mongoose.model('TrainingProg', trainingProgSchema);

module.exports = TrainingProg;