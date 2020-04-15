const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatHistory = new Schema({
    id:Number,
    room: String,
    sender:String,
    message:String,
});

const chats = mongoose.model('chats', chatHistory);

module.exports = chats;