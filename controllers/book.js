// const router = require('express').Router()
// const Book = require('../models/Books')

// router.get('/', async(req,res) => {
//     res.json(await Book.find({}).catch((err) => res.status(400).json(err)))
// })

// router.post('/', async(req, res) => {
//     try {
//         const newBook = await Book.create(req.body)
//         res.json(newBook)
//     }catch(error){
//         res.status(400).json(error)
//     }
// })

// router.put('/:id', async(req, res) =>{
//     try{
//         const updatedBook = await Book.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             {new: true}
//         )
//         res.json(updatedBook)
//     }catch(error){
//         res.status(400).json(error)
//     }
// })

// router.delete('/:id', async(req, res) => {
//     try{
//         const deletedBook = await Book.findByIdANDRemove(req.params.id)
//         res.json(deletedBook)
//     }catch(error){
//         res.status(400).json(error)
//     }
// })

// module.exports = router