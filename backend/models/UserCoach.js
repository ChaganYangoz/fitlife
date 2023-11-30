const mongoose = require("mongoose");

const usercoachSchema= new mongoose.Schema({
    user_id: Object,
    coach_id: Object
});

const UserCoach = mongoose.model('UserCoach', usercoachSchema);

module.exports = UserCoach;