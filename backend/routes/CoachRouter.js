const Coach = require('../models/Coach');
const bcrypt = require('bcryptjs');
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {name, surname, email, password, gender, proficiency, experience, phone, date, photo} = req.body;
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
      photo
    });
    res.status(201).json({ message: 'Coach Created!!', coach: newCoach });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const allCoaches = await Coach.find({});
    res.status(200).json({ coaches: allCoaches });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;