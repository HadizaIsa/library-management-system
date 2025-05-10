const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        trim: true,
    },
    author: {
        type: String,
        required: [true, "Author's name is required"]
    },
    year: {
        type: Number,
        required: [true, "Publication year is required."]
    },
    genre: {
        type: String,
    },
    available: {
        type: Boolean
    },
    
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Book', BookSchema);

