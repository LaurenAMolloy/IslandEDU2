import mongoose from 'mongoose';

const SchoolSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    location: String,
    educationLevel, enum: ["nursery", "primary", "seconday"],
    curriculum, enum: ["British", "IB", "American", "Waldorf", "Montesorri"]
})

module.exports = mongoose.model('School', SchoolSchema);