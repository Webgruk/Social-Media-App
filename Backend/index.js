const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const router = require('./routes/user')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

dotenv.config()

const port = process.env.PORT || 8800
const app = express()

mongoose.connect(process.env.MONGO_URL, () => {
  console.log('connected to database')
})

//middleware
app.use(express.urlencoded({ extended: false }))

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

//routes
app.use('/api/users', router)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)

app.listen(port, () => {
  console.log(`server running at ${port}`)
})
