// User.js dosyası
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    phone: Number,
    active: Boolean,
    gender: String,
    mark: String,
    begindate: {type: Date, default: Date.now}
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;