const UserCoach = require("../models/UserCoach");
const User = require("../models/User");
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
    try {
      const {user_id, coach_id} = req.body;
      const newUserCoach = await UserCoach.create({
        user_id,
        coach_id
      });
      res.status(201).json({ message: 'UserCoach Created!!', UserCoach: newUserCoach });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/userData/:coachId', async (req, res) => {
    try {
      const coachId = req.params.coachId;
  
      // Koç ID'sine göre UserCoach modelindeki tüm ilgili kullanıcılar
      const userCoaches = await UserCoach.find({ coach_id: coachId });
  
      if (!userCoaches || userCoaches.length === 0) {
        return res.status(404).json({ message: 'Koça bağlı kullanıcı bulunamadı.' });
      }
  
      const userIds = userCoaches.map(userCoach => userCoach.user_id);
  
      // UserCoach'taki user_id'lerine göre User modelinden ilgili kullanıcıları bulun
      const usersData = await User.find({ _id: { $in: userIds } });
  
      if (!usersData || usersData.length === 0) {
        return res.status(404).json({ message: 'Kullanıcılar bulunamadı.' });
      }
  
      res.status(200).json({ usersData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

  router.post("/add", async (req, res) => {
    try {
      const { user_id, coach_id } = req.body;
      const newUserCoach = await UserCoach.create({
        user_id,
        coach_id,
      });
      res
        .status(201)
        .json({ message: "UserCoach Created!!", UserCoach: newUserCoach });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
