const router = require('express').Router()
const Book = require('../models/Books')

router.get('/', async(req,res) => {
    res.json(await Book.find({}).catch((err) => res.status(400).json(err)))
})

router.post('/', async(req, res) => {
    try {
        const newBook = await Book.create(req.body)
        res.json(newBook)
    }catch(error){
        res.status(400).json(error)
    }
})

module.exports = router