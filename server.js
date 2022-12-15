require('dotenv').config()

const PORT = process.env.PORT || 5020

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const { Schema } = mongoose
const { model } = mongoose


//const mongoose = require('./db/connection')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(error) {
        console.log(error);
        process.exit(1)
    }
}
// const bookRouter= require('./controllers/book')

// app.get('/', (req, res) => res.send('Server is working'))
// app.use('/books', bookRouter)

//app.listen(PORT, () => console.log(`Listening on port ${PORT}`))


const bookSchema = new Schema(
    {
        Title: String,
        Author: String,
        Cover: String,
        Synopsis: String,
        Publisher: String,
        Genre: String,
        Year: Number,
        Review: String,
        Pages: Number

    },
    {timestamps: true}
)
// modules not working on cyclic
const Book = model('Book', bookSchema)


app.get('/', async(req,res) => {
        res.json(await Book.find({}).catch((err) => res.status(400).json(err)))
    })
    
    app.post('/', async(req, res) => {
        try {
            const newBook = await Book.create(req.body)
            res.json(newBook)
        }catch(error){
            res.status(400).json(error)
        }
    })
    
    app.put('/:id', async(req, res) =>{
        try{
            const updatedBook = await Book.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new: true}
            )
            res.json(updatedBook)
        }catch(error){
            res.status(400).json(error)
        }
    })
    
    app.delete('/:id', async(req, res) => {
        try{
            const deletedBook = await Book.findByIdAndRemove(req.params.id)
            res.json(deletedBook)
        }catch(error){
            res.status(400).json(error)
        }
    })





connectDB().then(() => {
    app.listen(PORT, () =>{
        console.log('Listening for Requests')
    })
})