const User = require("../models/Users");
const bcrypt = require('bcryptjs');
var express = require("express");
var router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, surname, email, password, phone, gender, mark, date, photo } =
      req.body;
    const active = req.body.active ?? true;

    // E-posta adresi zaten varsa hata döndür
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // E-posta yoksa, yeni kullanıcı oluştur
    const newUser = await User.create({
      name,
      surname,
      email,
      password: hashedPassword,
      phone,
      active,
      gender,
      mark,
      date,
      photo,
    });
    res.status(201).json({ message: "User Created!!", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare entered password with hashed password from the database
    bcrypt.compare(password, user.password, (err, result) => {
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


router.get("/showall", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*
router.post('/update', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updatedData = req.body;
    const {
      name,
      surname,
      password,
      email,
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
    user.email = email || user.email;
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
*/

router.post("/update", async (req, res) => {
  try {
    const { _id, updatedData } = req.body;

    const user = await User.findByIdAndUpdate(_id, updatedData, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
