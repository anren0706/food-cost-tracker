'use strict';

const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    creationDate: { type: Date, default: Date.now }
});

// Export the User model
module.exports = mongoose.model('User', userSchema);