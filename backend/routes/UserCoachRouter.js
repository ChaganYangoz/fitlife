const UserCoach = require("../models/UserCoach");
var express = require("express");
var router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { user_id, coach_id } = req.body;
    const newUserCoach = await UserCoach.create({
      user_id,
      coach_id,
    });
    res
      .status(201)
      .json({ message: "UserCoach Created!!", UserCoach: newUserCoach });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
