const express = require('express');
const router = express.Router();
const User = require('../models/Users');


router.get('/:email', async (req, res) => {
    const email = req.params.email;
  
    try {
      const user = await User.findOne({ email }); // E-posta adresine göre kullanıcıyı bul
      if (!user) {
        return res.status(404).json({ message: 'Kullanici bulunamadi' });
      }
      res.json(user); // Kullanıcıyı JSON formatında gönder
    } catch (error) {
      console.error('Kullanici getirme hatasi:', error);
      res.status(500).json({ error: 'Kullaniciyi getirirken bir hata oluştu' });
    }
  });

module.exports = router;
