const User = require('../models/Users');
var express = require('express');
var router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, surname, email, password, phone, gender, mark, date, photo} = req.body;
    const active = req.body.active ?? true;

		// E-posta adresi zaten varsa hata döndür
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: 'Email already exists' });
		}

    // E-posta yoksa, yeni kullanıcı oluştur
    const newUser = await User.create({
      name,
      surname,
      email,
      password,
      phone,
      active,
      gender,
      mark,
      date,
      photo
    });
    res.status(201).json({ message: 'User Created!!', user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email }); // E-postaya göre kullanıcıyı bul

		if (!user || user.password !== password) {
			return res.status(401).json({ message: 'Invalid email or password' });
		}

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;