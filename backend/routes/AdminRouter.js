const Admin = require('../models/Admin');
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {email, password} = req.body;
    const newAdmin = await Admin.create({
      email,
      password
    });
    res.status(201).json({ message: 'Admin Created!!', Admin: newAdmin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;