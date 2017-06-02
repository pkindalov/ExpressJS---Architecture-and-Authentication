let env = process.env.NODE_ENV || 'development'

let settings = require('./server/config/settings')[env]

const express = require('express')
const handlebars = require('express-handlebars')

require('./server/config/database')(settings)

let app = express()

app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(settings.port)
console.log(`Server listen on port ${settings.port}`)
