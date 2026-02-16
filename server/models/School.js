import mongoose from 'mongoose';

const SchoolSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
    price: Number,
    image: String,
    // educationLevel, enum: ["nursery", "primary", "seconday"],
    // curriculum, enum: ["British", "IB", "American", "Waldorf", "Montesorri"]
})

const School = mongoose.model('School', SchoolSchema);
export default School;