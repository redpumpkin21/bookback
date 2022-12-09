require('dotenv').config()

const PORT = process.env.PORT || 5020

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const mongoose = require('./db/connection')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.get('/', (req, res) => res.send('Server is working'))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))