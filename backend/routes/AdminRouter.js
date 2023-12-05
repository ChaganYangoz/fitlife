const Admin = require("../models/Admin");
var express = require("express");
var router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const newAdmin = await Admin.create({
      email,
      password,
    });
    res.status(201).json({ message: "Admin Created!!", Admin: newAdmin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email }); // E-postaya göre kullanıcıyı bul

    if (admin && admin.password === password) {
      res.status(200).json({ message: "Login successful", admin });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
