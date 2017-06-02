let env = process.env.NODE_ENV || 'development'

let settings = require('./server/config/settings')[env]

const express = require('express')
let app = express()

require('./server/config/database')(settings)
require('./server/config/express')(app)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(settings.port)
console.log(`Server listen on port ${settings.port}`)
