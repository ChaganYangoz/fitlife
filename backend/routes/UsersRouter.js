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

router.post('/update', async (req, res) => {
  try {
    const { email, updatedData } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Güncellenecek verileri al
    const {
      name,
      surname,
      password,
      phone,
      active,
      gender,
      mark,
      date,
      photo
    } = updatedData;

    // Yeni verileri kullanarak kullanıcıyı güncelle
    user.name = name || user.name;
    user.surname = surname || user.surname;
    user.password = password || user.password;
    user.phone = phone || user.phone;
    user.active = active ?? user.active;
    user.gender = gender || user.gender;
    user.mark = mark || user.mark;
    user.date = date || user.date;
    user.photo = photo || user.photo;

    await user.save();
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;