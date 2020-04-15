const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventHistory = new Schema({
    id:Number,
    eventType: String,
    message:String,
});

const events = mongoose.model('events', eventHistory);

module.exports = events;