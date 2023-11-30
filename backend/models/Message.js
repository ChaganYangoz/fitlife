const mongoose = require("mongoose");

const messageSchema= new mongoose.Schema({
    sender_id: Object,
    recipient_id: Object,
    content: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;