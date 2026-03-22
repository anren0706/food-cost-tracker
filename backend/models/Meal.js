const mongoose = require('mongoose');

// Define the schema for storing meal records
const mealSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // User ID
    date: { type: Date, default: Date.now }, // Date of the meal
    mealType: { type: String, enum: ['breakfast', 'lunch', 'dinner'], required: true }, // Type of the meal
    foodName: { type: String, required: true }, // Name of the food
    price: { type: Number, required: true } // Price of the meal
});

// Create the model for the meal
const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;