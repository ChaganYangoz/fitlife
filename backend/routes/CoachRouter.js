const Coach = require("../models/Coach");
const bcrypt = require("bcryptjs");
var express = require("express");
var router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      surname,
      email,
      password,
      gender,
      proficiency,
      experience,
      phone,
      date,
      photo,
    } = req.body;
    const active = req.body.active ?? true;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newCoach = await Coach.create({
      name,
      surname,
      email,
      password: hashedPassword,
      gender,
      proficiency,
      experience,
      phone,
      active,
      date,
      photo,
    });
    res.status(201).json({ message: "Coach Created!!", coach: newCoach });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const coach = await Coach.findOne({ email });

    if (!coach) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare entered password with hashed password from the database
    bcrypt.compare(password, coach.password, (err, result) => {
      if (result) {
        // Passwords match, login successful
        return res.status(200).json({ message: 'Login successful', user });
      } else {
        // Passwords don't match, login failed
        return res.status(401).json({ message: 'Invalid email or password' });
      }
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post("/update", async (req, res) => {
  try {
    const { _id, updatedData } = req.body;

    const coach = await Coach.findByIdAndUpdate(_id, updatedData, { new: true });

    if (!coach) {
      return res.status(404).json({ message: "Coach not found" });
    }

    res.status(200).json({ message: "Coach updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/showall", async (req, res) => {
  try {
    const allCoaches = await Coach.find({});
    res.status(200).json({ coaches: allCoaches });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
