const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    proficiency: Number,
    experience: String,
    phone: Number
});

const Coach = mongoose.model('Coachs', coachSchema);

module.exports = Coach;