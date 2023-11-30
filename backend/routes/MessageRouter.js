const Message = require("../models/Message");
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
    try {
      const {sender_id, recipient_id, content} = req.body;
      const newMessage = await Message.create({
        sender_id,
        recipient_id,
        content
      });
      res.status(201).json({ message: 'Message Created!!', Message: newMessage });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;