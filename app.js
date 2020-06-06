const express = require('express')

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', require('./router'))

module.exports = app