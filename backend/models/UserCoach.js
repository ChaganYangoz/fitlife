const mongoose = require("mongoose");

const usercoachSchema= new mongoose.Schema({
    user_id: {type:mongoose.Schema.Types.ObjectId,ref:"Users"},
    coach_id: {type:mongoose.Schema.Types.ObjectId,ref:"Coachs"}
});

const UserCoach = mongoose.model('UserCoach', usercoachSchema);

module.exports = UserCoach;