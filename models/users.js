const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    age: {
        type: Number,
        required: true
    },
});

const User = mongoose.model('user', userSchema);

exports.User = User;