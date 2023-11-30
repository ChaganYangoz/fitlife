const mongoose = require("mongoose");

const experienceSchema= new mongoose.Schema({
    experience_name: String
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;