const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    gender: String,
    phone: Number,
    proficiency: Number,
    experience: String,
    active: Boolean,
    date: Date,
    photo: String
});

const Coach = mongoose.model('Coachs', coachSchema);

module.exports = Coach;