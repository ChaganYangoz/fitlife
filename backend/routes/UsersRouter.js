const User = require('../models/Users');
var express = require('express');
var router = express.Router();

// User Creative
router.post('/', async (req, res) => {
  try {
    const {name, surname, email, password, phone, active, gender, mark, begindate } = req.body;
    const newUser = await User.create({
      name,
      surname,
      email,
      password,
      phone,
      active,
      gender,
      mark,
      begindate,
    });
    res.status(201).json({ message: 'User Created!!', user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;