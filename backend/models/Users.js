// User.js dosyası
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    phone: Number,
    active: Boolean,
    role: Number,
    gender: String,
    mark: String,
    date: Date
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;