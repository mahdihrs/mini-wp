require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const mongoose = require('mongoose');
const indexRouter = require('./routes/index')
const axios = require('axios')

mongoose.connect('mongodb://localhost/mini-wp', { useNewUrlParser: true });
// replace mongodb://localhost/mini-wp// mongodb(taro env)://mahdihrs:<PASSWORD>@projects-shard-00-00-a1wq0.gcp.mongodb.net:27017,projects-shard-00-01-a1wq0.gcp.mongodb.net:27017,projects-shard-00-02-a1wq0.gcp.mongodb.net:27017/test?ssl=true&replicaSet=projects-shard-0&authSource=admin&retryWrites=true/<nama database>

app.use(cors())
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.use('/', indexRouter)

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})