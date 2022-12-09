const mongoose = require('mongoose')
const { Schema } = mongoose
const { model } = mongoose

const bookSchema = new Schema(
    {
        Title: String,
        Author: String,
        Synopsis: String,
        Publisher: String,
        Year: Integer,
        Review: String,
        Pages: Integer

    },
    {timestamps: true}
)

const Book = model('Book', bookSchema)
module.exports = Book