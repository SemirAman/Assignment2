const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create schema

const roomSchema = new Schema({
    name: String,
    status: Boolean
});

const room = mongoose.model('room', roomSchema);

module.exports = room;