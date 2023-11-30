const mongoose = require("mongoose");

const trainingSchema= new mongoose.Schema({
    content: String
});

const Training = mongoose.model('Training', trainingSchema);

module.exports = Training;