var mongoose = require('mongoose');
var user = new mongoose.Schema({
    name:{type: String},
    phone:{type: String},
    mail:{type: String},
    subject:{type: String},
    msg:{type: String},
    date:{type: String},




});

module.exports = mongoose.model('Customer', user);