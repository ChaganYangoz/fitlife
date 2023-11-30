var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require("mongoose");


var indexRouter = require('./routes/index');
const { sign } = require('crypto');

var app = express();

mongoose.set("strictQuery",false);
const key="mongodb+srv://theozkan1905:twofun1905@cluster0.np0ed2c.mongodb.net/yazlab2?retryWrites=true&w=majority";
main().catch((err)=> console.log(err));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


let usersRouter = require("./routes/UsersRouter");
app.use("/users",usersRouter);

let adminRouter = require("./routes/AdminRouter");
app.use("/admin",adminRouter);

let coachRouter = require("./routes/CoachRouter");
app.use("/coach",coachRouter);

let expRouter = require("./routes/ExperienceRouter");
app.use("/experience",expRouter);

let messageRouter = require("./routes/MessageRouter");
app.use("/message",messageRouter);

let trainingProgRouter = require("./routes/TrainingProgramRouter");
app.use("/trainingProg",trainingProgRouter);

let trainingRouter = require("./routes/TrainingRouter");
app.use("/training",trainingRouter);

let nutritionRouter = require("./routes/NutritionRouter");
app.use("/nutrition",nutritionRouter);

let nutritionPlanRouter = require("./routes/NutritionPlanRouter");
app.use("/nutritionPlan",nutritionPlanRouter);

let usercoachRouter = require("./routes/UserCoachRouter");
app.use("/usercoach",usercoachRouter);




app.use(function(req, res, next) {
  next(createError(404, 'Not Found'));
});

// Error handling
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('error');
});


async function main(){
  await mongoose.connect(key);
}

module.exports = app;