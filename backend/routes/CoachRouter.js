const Coach = require("../models/Coach");
var express = require("express");
var router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, surname, email, password, proficiency, experience, phone } =
      req.body;
    const newCoach = await Coach.create({
      name,
      surname,
      email,
      password,
      proficiency,
      experience,
      phone,
    });
    res.status(201).json({ message: "Coach Created!!", coach: newCoach });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
