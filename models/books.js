const mongoose = require('mongoose')
const { Schema } = mongoose
const { model } = mongoose

const bookSchema = new Schema(
    {
        Title: String,
        Author: String,
        Cover: String,
        Synopsis: String,
        Publisher: String,
        Year: Number,
        Review: String,
        Pages: Number

    },
    {timestamps: true}
)

const Books = model('Book', bookSchema)
module.exports = Books