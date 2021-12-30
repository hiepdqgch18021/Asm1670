const express = require('express')
const session = require('express-session')
const app = express()
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: '124447yd@@$%%#', cookie: { maxAge: 60000 }, saveUninitialized: false, resave: false }))

const TrainerCtl = require('./controller/Trainer')
app.use('/Trainer', TrainerCtl)

const PORT = process.env.PORT || 5010
app.listen(PORT)
console.log("Server is running! " + PORT)