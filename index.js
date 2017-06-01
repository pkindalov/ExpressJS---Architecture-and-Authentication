const express = require('express')
const mongoose = require('mongoose')
const port = 1337

mongoose.Promise = global.Promise
let app = express()

app.get('/', (req, res) => {
  mongoose
    .connect('mongodb://localhost:27017/generictemplate')
    .then(() => {
      console.log('MongoDB ready')
      res.send('Hi!')
    })
})

app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})
