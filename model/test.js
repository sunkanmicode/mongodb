const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TestShema = new Schema({
    username = String,
    email = String,
    password = String
});

const test = mongoose.model('test', TestShema);

module.exports = Test;